import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'en' | 'ja' | 'zh' | 'vi'

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Prefer localStorage if available
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored && ['en', 'ja', 'vi', 'zh'].includes(stored)) return stored
    return 'ja'
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as Lang | null
    if (urlLang && ['en', 'ja', 'vi', 'zh'].includes(urlLang)) {
      localStorage.setItem('lang', urlLang)
      setLang(urlLang)
      return
    }
    // If not in URL, keep localStorage value (already set in initial state)
  }, [])
  const value = useMemo(() => ({ lang, setLang: (l: Lang) => { localStorage.setItem('lang', l); setLang(l) } }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
