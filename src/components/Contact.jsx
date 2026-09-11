import { useState } from 'react'
import { AlertCircle, Check, Loader2, Mail } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 20000)

    try {
      const res = await fetch('https://my-website-portfolio-w8eu.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      const data = await res.json().catch(() => null)

      if (res.ok && data.success) {
        setName('')
        setEmail('')
        setMessage('')
        setStatus('success')
      } else {
        if (data && data.errors) {
          const msgs = Object.values(data.errors)
          setErrorMsg(msgs[0] || 'Please check your details and try again.')
        } else {
          setErrorMsg(data && data.error ? data.error : 'Something went wrong. Please try again.')
        }
        setStatus('error')
      }
    } catch (err) {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please try again.')
      } else {
        setErrorMsg('Network error. Please try again.')
      }
      setStatus('error')
    }

    setTimeout(() => {
      setStatus('idle')
      setErrorMsg('')
    }, 5000)
  }

  const isSending = status === 'loading'
  const isSubmitted = status === 'success'

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
          Get in Touch
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white text-balance">
          Let's build something
          <br />
          <span className="text-gradient italic">worth showing off.</span>
        </h2>
        <p className="mt-6 text-lg text-ink-400 leading-relaxed max-w-2xl mx-auto">
          Whether you need a high-converting funnel, a conversion-focused website, performance
          creative, or a complete digital system — I'm ready to help. Tell me about your project.
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl bg-ink-900/60 border border-white/10 text-white placeholder-ink-400 focus:border-accent-400/40 focus:outline-none focus:ring-1 focus:ring-accent-400/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl bg-ink-900/60 border border-white/10 text-white placeholder-ink-400 focus:border-accent-400/40 focus:outline-none focus:ring-1 focus:ring-accent-400/20 transition-all"
              />
            </div>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl bg-ink-900/60 border border-white/10 text-white placeholder-ink-400 focus:border-accent-400/40 focus:outline-none focus:ring-1 focus:ring-accent-400/20 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full flex items-center justify-center gap-2 text-base font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSubmitted ? (
                <Check className="w-5 h-5" />
              ) : (
                <Mail className="w-5 h-5" />
              )}
              {isSending
                ? 'Sending...'
                : isSubmitted
                  ? "Message sent - I'll be in touch soon"
                  : 'Send Message'}
            </button>
          </form>

          {status === 'error' && errorMsg ? (
            <div className="mt-4 flex items-start justify-center gap-2 text-sm text-red-400">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-left">{errorMsg}</span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
