import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import { I18nProvider } from './context/I18nContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
