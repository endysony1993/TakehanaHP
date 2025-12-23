# este

A minimal HTML + Tailwind starter. No build tools required.

## Run
- Open `este/index.html` directly in your browser, or
- Serve the folder with any static server.

### Optional: simple dev server
```powershell
# From repo root
powershell -NoProfile -Command "Start-Process http://localhost:8000"; python -m http.server 8000 -d este
```

## Customize
- Edit `este/index.html` and use Tailwind utilities.
- When you need a production build and custom configuration, switch to Tailwind CLI:
  - Initialize a new setup inside `este/` (creates `tailwind.config.js`, `postcss.config.js`):
    ```powershell
    Push-Location este
    npm init -y
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    New-Item -ItemType Directory src | Out-Null
    Set-Content src\input.css "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"
    # Build once
    npx tailwindcss -i ./src/input.css -o ./dist/styles.css --minify
    Pop-Location
    ```
  - Then replace the CDN `<script src="https://cdn.tailwindcss.com"></script>` with a link to `/dist/styles.css`.
