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
