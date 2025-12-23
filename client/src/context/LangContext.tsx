import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'en' | 'ja' | 'zh' | 'vi'

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as Lang | null
    if (urlLang && ['en', 'ja', 'vi', 'zh'].includes(urlLang)) {
      localStorage.setItem('lang', urlLang)
      setLang(urlLang)
      return
    }
    // Always default to Japanese if not set in URL
    setLang('ja');
    localStorage.setItem('lang', 'ja');
  }, [])
  const value = useMemo(() => ({ lang, setLang: (l: Lang) => { localStorage.setItem('lang', l); setLang(l) } }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
