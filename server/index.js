import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import validator from 'validator'
import rateLimit from 'express-rate-limit'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const serverDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(serverDir, '..')
const distDir = path.join(rootDir, 'dist')

// Always load server/.env regardless of which directory the server is started from.
dotenv.config({ path: path.join(serverDir, '.env') })

const app = express()
const PORT = process.env.PORT || 3001

const EMAIL_TO = process.env.EMAIL_TO || 'rozebeen.20@gmail.com'
const GMAIL_USER = process.env.GMAIL_USER || ''
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || ''
const EMAIL_FROM = process.env.EMAIL_FROM || GMAIL_USER

// The exact origin(s) allowed to talk to this API. Never "*".
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']
const frontendUrl = process.env.FRONTEND_URL || process.env.CLIENT_URL
if (frontendUrl) {
  allowedOrigins.push(frontendUrl.trim())
}

app.use(helmet())

app.use(
  cors({
    origin(origin, callback) {
      console.log('incoming origin:', origin);
      console.log('allowed origins:', allowedOrigins);
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }
      return callback(new Error('Not allowed by CORS'))
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use(express.json({ limit: '10kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please try again in 15 minutes.',
  },
})

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Contact server is running' })
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  const errors = {}
  let { name, email, message, website } = req.body || {}

  name = typeof name === 'string' ? name.trim() : ''
  email = typeof email === 'string' ? email.trim() : ''
  message = typeof message === 'string' ? message.trim() : ''
  website = typeof website === 'string' ? website.trim() : ''

  // Honeypot: invisible to humans. If a bot fills it, silently accept
  // without validating or sending anything.
  if (website.length > 0) {
    return res.json({ success: true, message: 'Your message has been sent successfully.' })
  }

  if (validator.isEmpty(name)) {
    errors.name = 'Please provide your name.'
  } else if (!validator.isLength(name, { min: 2, max: 100 })) {
    errors.name = 'Name must be between 2 and 100 characters.'
  }

  if (validator.isEmpty(email)) {
    errors.email = 'Please provide your email address.'
  } else if (!validator.isEmail(email)) {
    errors.email = 'Please provide a valid email address.'
  }

  if (validator.isEmpty(message)) {
    errors.message = 'Please provide a message.'
  } else if (!validator.isLength(message, { min: 10, max: 5000 })) {
    errors.message = 'Message must be between 10 and 5000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors })
  }

  // Strip line breaks before these values are ever placed into email
  // headers (subject / from / replyTo) to block header injection.
  const safeName = validator.escape(name.replace(/[\r\n]+/g, ' '))
  const safeEmail = validator.normalizeEmail(validator.escape(email.replace(/[\r\n]+/g, ''))) ?? email
  const safeMessage = validator.escape(message.replace(/\r\n/g, '\n')).replace(/\n/g, '<br/>')

  const submittedAt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date())
  console.log('GMAIL_USER:', GMAIL_USER);
  console.log('has app password', GMAIL_APP_PASSWORD)
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error(`Missing GMAIL_USER or GMAIL_APP_PASSWORD in ${path.join('server', '.env')}`)
    return res.status(500).json({
      success: false,
      error: 'Server email is not configured. Please contact the site owner directly.',
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
    // Hard timeouts so the SMTP connection can never stall the request forever.
    connectionTimeout: 10 * 1000,
    socketTimeout: 15 * 1000,
    greetingTimeout: 10 * 1000,
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${EMAIL_FROM}>`,
    to: EMAIL_TO,
    replyTo: safeEmail,
    subject: 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="margin-bottom: 4px;">New Contact Form Submission</h2>
        <p style="color: #666; margin-top: 0;">From your portfolio website</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #999; width: 90px;"><strong>Name</strong></td>
            <td style="padding: 8px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999; width: 90px;"><strong>Email</strong></td>
            <td style="padding: 8px 0;">
              <a href="mailto:${safeEmail}" style="color: #147efb;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999; width: 90px; vertical-align: top;"><strong>Message</strong></td>
            <td style="padding: 8px 0;">${safeMessage}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999; width: 90px;"><strong>Submitted</strong></td>
            <td style="padding: 8px 0;">${submittedAt}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <p style="color: #999; font-size: 12px;">Sent via your portfolio contact form.</p>
      </div>
    `,
  }

  // Wrap the send in a hard deadline so the handler always responds to the
  // client even if the SMTP connection stalls.
  const SEND_TIMEOUT_MS = 20 * 1000

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email send timed out')), SEND_TIMEOUT_MS)
      ),
    ])
    return res.json({ success: true, message: 'Your message has been sent successfully.' })
  } catch (error) {
    console.error('Mail send failed:', error.message)
    return res.status(500).json({
      success: false,
      error: 'Your message could not be sent. Please try again later.',
    })
  }
})

// In production, serve the built frontend from dist/ so a single server
// handles both the website and the API (no CORS needed in production).
if (process.env.NODE_ENV === 'production' && fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.use(function errorHandler(err, _req, res, _next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, error: 'Invalid JSON in request body.' })
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ success: false, error: 'Request body too large.' })
  }
  if (err instanceof Error && err.message === 'Not allowed by CORS') {
    return res.status(403).json({ success: false, error: 'Request origin not allowed.' })
  }
  console.error('Server error:', err.message)
  res.status(500).json({ success: false, error: 'Something went wrong on the server.' })
})

app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`)
  console.log(`Contact form submissions will be emailed to: ${EMAIL_TO}`)
})