# My React + TS + Vite + Tailwind + Express Monorepo

This repo contains:
- client: Vite + React + TypeScript + TailwindCSS (v4)
- server: Node.js + Express + TypeScript

## Prerequisites
- Node.js 18+
- Windows PowerShell (these commands work there)

## Quick Start

1. Install deps at root (also installs workspaces):

```powershell
npm install
```

2. Dev mode (runs both client and server concurrently):

```powershell
npm run dev
```

- Client: http://localhost:5173
- API:    http://localhost:4000
- Health: http://localhost:4000/api/health

3. Build both:

```powershell
npm run build
```

4. (Optional) Run production preview for client only:

```powershell
npm --prefix client run preview
```

## Deployment

You can deploy the frontend (static) and backend (API) separately, or serve the built frontend through a CDN and host the API on a server platform.

### 1. Environment Variables

Copy the provided examples and adjust:

```powershell
copy client/.env.example client/.env
copy server/.env.example server/.env
```

Edit `client/.env`:
- `VITE_API_BASE_URL=https://api.yourdomain.com`
- (If hosting under a subpath) `VITE_BASE_PATH=/TakehanaHP/`

Edit `server/.env`:
- `PORT=4000`
- `CORS_ORIGIN=https://yourdomain.com` (comma-separated if multiple)
- Mail settings (see below)

### 2. Build Artifacts

```powershell
npm install
npm --prefix client run build   # outputs client/dist
npm --prefix server run build   # outputs server/dist
```

Upload `client/dist` to your static host (S3+CloudFront, Netlify, Vercel static, Azure Static Web Apps, etc.).

Run the server (Node 18+):

```powershell
node server/dist/index.js
```

### 3. Single Host (Optional Express Static)

If you prefer to serve the built frontend from the same Express server, add something like:

```ts
import path from 'path'
import express from 'express'
// after other middleware/routes
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
})
```

Only do this after you copy / build the frontend into a location accessible to the server (e.g., copy at deploy time).

### 4. Mail Configuration

Production (.env):

```
MAIL_DRIVER=smtp
MAIL_FROM="Takehana Homepage" <no-reply@yourdomain.com>
MAIL_TO=sonynoit@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_smtp_user
SMTP_PASS=your_app_password
```

Local development:

```
MAIL_DRIVER=log
```

### 5. Docker (Optional)

Add a `Dockerfile` at repo root for server + prebuilt client (example below). Then build and run.

### 6. GitHub Pages (Static Only)

If you deploy the frontend to GitHub Pages under `/<repo>/`:
1. Set base path before build: `$env:VITE_BASE_PATH='/TakehanaHP/'; npm --prefix client run build`
2. Publish `client/dist` contents to the `gh-pages` branch (e.g., via `peaceiris/actions-gh-pages`).
3. API must be hosted elsewhere (set `VITE_API_BASE_URL`).

## Docker Example

`Dockerfile` (multi-stage):

```Dockerfile
FROM node:20-alpine AS build-client
WORKDIR /app
COPY package.json package-lock.json ./
COPY client/package.json client/
COPY server/package.json server/
RUN npm install
COPY client client
RUN npm --prefix client run build

FROM node:20-alpine AS build-server
WORKDIR /app
COPY package.json package-lock.json ./
COPY server/package.json server/
RUN npm install --workspace=server
COPY server server
RUN npm --prefix server run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build-server /app/server/dist server/dist
COPY --from=build-server /app/server/package.json server/package.json
COPY --from=build-client /app/client/dist client/dist
RUN npm install --omit=dev --workspace=server
EXPOSE 4000
CMD ["node", "server/dist/index.js"]
```

Build & run:

```powershell
docker build -t takehanahp .
docker run -p 4000:4000 --env-file server/.env takehanahp
```

If serving static via Express, integrate the static middleware as described earlier.

## Verification Checklist

1. Health endpoint: `curl https://api.yourdomain.com/api/health`
2. Contact verify: `curl https://api.yourdomain.com/api/contact/verify`
3. Frontend loads assets (open DevTools -> Network: no 404 on JS/CSS)
4. Contact form submission returns `{ success: true }`
5. Mail log or SMTP acceptance confirms delivery.

## Common Deployment Issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| 404 on assets under subpath | base not set at build | Set VITE_BASE_PATH and rebuild |
| CORS error calling API | Missing domain in CORS_ORIGIN | Add domain(s) to server .env |
| Contact form 500 | MAIL_DRIVER=smtp but SMTP_* missing | Use MAIL_DRIVER=log locally or fill SMTP_* |
| Emails not received | Spam or MAIL_FROM invalid | Use proper MAIL_FROM "Name <address>" |
| GitHub Pages blank page | Missing base path | Set VITE_BASE_PATH before build |

---
Deployment instructions added. Adjust domains, ports, and secrets per environment.

## Client (Frontend)
- Tailwind v4 setup uses PostCSS plugin `@tailwindcss/postcss` and `@import "tailwindcss";` in `src/index.css`.
- Routing is defined in `src/router/AppRouter.tsx` with nested routes for Services, Achievements, Company, News, and Contact.
- Context providers: `ThemeProvider`, `LangProvider` in `src/main.tsx`.

Useful scripts:
```powershell
npm --prefix client run dev
npm --prefix client run build
```

## Server (Backend)
- Express entry: `server/src/index.ts`
- Routes: `/api/health`, `/api/contact`, `/api/news`, `/api/projects`
- Env: `server/.env` (PORT defaults to 4000)

Useful scripts:
```powershell
npm --prefix server run dev
npm --prefix server run build
npm --prefix server start
```

## Troubleshooting
- If Tailwind or CSS fails to load, ensure `client/postcss.config.js` contains:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

- If API health check fails but server says "listening":
  - Confirm port 4000 is not blocked by firewall or already in use.
  - Try hitting in browser: http://localhost:4000/api/health
  - Restart dev: `Ctrl+C` then `npm run dev`

## Structure
See `client/src` and `server/src` for full folders matching the requested layout.
