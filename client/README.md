# Client App

This is the frontend (React + TypeScript + Vite).

## API Base URL

- Development: configured via `.env.development`
  - `VITE_API_BASE_URL=http://127.0.0.1:4002`
- Production build: configured via `.env.production`
  - `VITE_API_BASE_URL=https://your-sakura-host.example` (replace with your Sakura server URL)

The contact form posts to `${VITE_API_BASE_URL}/api/contact` on your Sakura-hosted backend.

## Local Development

1. Start the backend on your machine (listening on 4002)
2. In `client/` run:
   ```bash
   npm install
   npm run dev
   ```

  ### Internationalization (i18n)

  The app includes a lightweight i18n framework:
  - Nested keys and graceful fallbacks via `t(key, fallback)`
  - Interpolation with `{{var}}`
  - Pluralization via `tp('items', count)` resolving `.one`/`.other`
  - Locale-aware number/date/currency formatters in `src/i18n/format.ts`
  - Language persistence in `localStorage('lang')` and browser default detection

  Usage in components:
  - `import { useT } from './hooks/useT'`
  - `const { t, tp, locale } = useT()`
  - Interpolate: `t('cta.contact', 'Contact', { name: 'John' })`
  - Pluralize: `tp('items', 3)` → uses `items.one/items.other`
  - Format: `formatNumber(1234.5, locale)`; `formatDate(new Date(), locale)`

  Add messages:
  - Edit locale files under `src/i18n/locales/{en,ja,vi,zh}/translation.json`
  - Prefer namespacing like `pages.productShelf.title`

  Switch language:
  - Use the Language Switcher in the UI. Selection is saved.

## Build

```bash
npm run build
```

---
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
