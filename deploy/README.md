Deployment Helper Files
=======================

This folder contains ready-to-copy deployment artifacts for hosting the API on Sakura (or any Linux VM).

Files added
- `nginx/api.tkhtec.org.conf` — nginx site config to reverse-proxy `/api/*` to `localhost:4000` and terminate TLS (certbot paths included).
- `systemd/takehana-backend.service` — systemd unit to run the built Node backend from `/var/www/takehana/server`.
- `env/.env.production.example` — example environment variables (do NOT commit secrets).

Quick copy & enable steps (on your Sakura VM)

1) Place site files and app code

Assume you will use `/var/www/takehana` as the deployment root. Clone or copy repository there so the server is at `/var/www/takehana/server` and the built client is in `/var/www/takehana/client/dist` if you choose to serve static files there.

2) Nginx

Copy the nginx config and enable it:

```bash
sudo cp deploy/nginx/api.tkhtec.org.conf /etc/nginx/sites-available/api.tkhtec.org
sudo ln -s /etc/nginx/sites-available/api.tkhtec.org /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

3) Obtain TLS certs with certbot

```bash
sudo certbot --nginx -d api.tkhtec.org --non-interactive --agree-tos -m your-email@example.com
```

4) Place your `.env`

Create `/var/www/takehana/server/.env` using `deploy/env/.env.production.example` as template and set `SMTP_USER` and `SMTP_PASS` securely.

5) Install Node dependencies and build

```bash
cd /var/www/takehana/server
npm ci
npm run build
```

6) Install & enable systemd unit

```bash
sudo cp deploy/systemd/takehana-backend.service /etc/systemd/system/takehana-backend.service
sudo systemctl daemon-reload
sudo systemctl enable --now takehana-backend
sudo journalctl -u takehana-backend -f
```

7) Verify

```bash
# DNS should point api.tkhtec.org -> your VM IP
curl -i https://api.tkhtec.org/api/health
curl -i -X OPTIONS https://api.tkhtec.org/api/contact -H "Origin: https://tkhtec.org" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type"
```

8) Update frontend to use API domain

Set `client/.env.production` to:

```
VITE_API_BASE_URL=https://api.tkhtec.org
```

Then rebuild the client and deploy (Pages) or host the static output on Sakura.

Notes & troubleshooting
- If you want to serve the static site from the same VM under `tkhtec.org`, adjust DNS and Nginx accordingly (see README notes in root or ask me to prepare that extra config).
- Make sure `CORS_ORIGIN` on the server includes the frontend origin(s).
- Use a secrets store or the host environment to set SMTP credentials (do not commit them).
