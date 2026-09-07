# STUDIO. — Creative Portfolio

Frontend: React + Vite + Tailwind. Backend: Express API (Node.js) in `server/` that validates the contact form and emails submissions to a fixed Gmail inbox via Nodemailer.

## Contact form backend

The contact form on the website posts `{ name, email, message }` to `POST /api/contact` on the Express server. The server validates and sanitizes the data, then sends an email notification to the configured inbox (default `rozebeen.20@gmail.com`).

Nothing here runs in the browser — all SMTP credentials stay server-side.

### 1. Required environment variables

Copy the template first:

```bash
cp server/.env.example server/.env
```

Then fill in:

| Variable                | Required | Description                                                                 |
| ----------------------- | -------- | --------------------------------------------------------------------------- |
| `GMAIL_USER`            | Yes      | The Gmail address that sends the email.                                     |
| `GMAIL_APP_PASSWORD`    | Yes      | 16-character Gmail App Password for the account above (see below).          |
| `EMAIL_TO`              | No       | Fixed recipient inbox. Defaults to `rozebeen.20@gmail.com`.                 |
| `EMAIL_FROM`            | No       | Optional "From" address. Defaults to `GMAIL_USER`.                          |
| `FRONTEND_URL`          | No       | Deployed site origin for CORS (only needed if API hosted separately).       |
| `PORT`                  | No       | Backend port. Defaults to `3001`.                                           |

Never commit `server/.env`. It is already in `.gitignore`.

### 2. Getting the Gmail App Password

Gmail no longer accepts normal passwords for SMTP. You need an App Password:

1. On the Gmail account you will send from, enable **2-Step Verification**:
   https://myaccount.google.com/security
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Select **Mail** → **Other**, create it, and copy the 16-character code.
4. Put it in `GMAIL_APP_PASSWORD` and the account address in `GMAIL_USER` in `server/.env`.

No domain or sender verification is required when sending from/within your own Gmail account.

### 3. Run the backend locally

```bash
npm run dev:server      # from the project root (uses --watch, reloads on changes)
```

Or:

```bash
npm --prefix server install
npm --prefix server start
```

The API runs at `http://localhost:3001`. Check it with:

```bash
curl http://localhost:3001/api/health
```

### 4. Run the frontend locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. In dev, Vite proxies `/api` to the server on port `3001` (`vite.config.js`), so relative `fetch('/api/contact')` just works.

To run both at once:

```bash
npm run dev:all
```

### 5. Test the contact form

- Open `http://localhost:5173`, scroll to the contact section, fill the form, and click **Send Message**.
- Successful sends show "Message sent" and reset the form.
- Failed submissions (rate limit, server error) show a friendly error and keep your input.

Direct API checks (PowerShell):

```powershell
# Valid payload (returns success once GMAIL_USER/APP_PASSWORD are set)
Invoke-RestMethod -Method Post -Uri http://localhost:3001/api/contact `
  -ContentType "application/json" `
  -Body '{"name":"Test","email":"test@example.com","message":"Hello, this is a test message."}'

# Missing/invalid fields -> 400 with per-field errors
Invoke-RestMethod -Method Post -Uri http://localhost:3001/api/contact `
  -ContentType "application/json" `
  -Body '{"name":"","email":"nope","message":"hi"}'
```

Rate limiting allows 5 submissions per 15 minutes per IP (`429` after that).

### 6. Deploy

**Option A — single server serves site + API (recommended, no CORS needed):**

1. Build the frontend: `npm run build` (outputs to `dist/`).
2. Deploy the repo to a Node host (Render, Railway, Fly.io, a VPS, etc.).
3. Set `NODE_ENV=production` and the env vars from section 1 on the host.
4. The Express server serves `dist/` and the `/api` routes from one origin.

**Option B — separate hosting (e.g., frontend on Vercel/Netlify, API elsewhere):**

1. Deploy the API (`server/`) to a Node host; note its public URL.
2. Deploy the frontend and set `FRONTEND_URL=https://your-frontend-domain.com` on the API host so CORS allows it.
3. Point the frontend's contact request at the API URL in production.

### 7. Email provider notes

- **Gmail (current):** sending to your own Gmail via its SMTP needs an App Password (section 2). Gmail may block sign-in when 2-Step Verification is off — enable it first.
- **Swapping providers (e.g. Resend/SendGrid):** only `server/index.js` needs changes. Replace the Nodemailer transport with the provider SDK, keep the validation/handler shape, and move the new key into env vars. The endpoint contract (`POST /api/contact`, response shape) and frontend do not change.

## Scripts

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Vite dev server (frontend, port 5173)         |
| `npm run build`       | Production build to `dist/`                   |
| `npm run preview`     | Preview the production build                  |
| `npm run server`      | Run the Express API                           |
| `npm run dev:server`  | Run the API with auto-reload                  |
| `npm run dev:all`     | Run frontend and API together                 |
| `npm run install:all` | Install root and `server/` dependencies       |