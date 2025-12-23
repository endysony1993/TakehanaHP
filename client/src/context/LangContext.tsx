import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'en' | 'ja' | 'zh' | 'vi'

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('vi')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as Lang | null
    if (urlLang && ['en', 'ja', 'vi', 'zh'].includes(urlLang)) {
      localStorage.setItem('lang', urlLang)
      setLang(urlLang)
      return
    }
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) {
      setLang(saved)
      return
    }
    const navigatorLang = (navigator.language || 'en').slice(0, 2)
    if (['en', 'ja', 'vi', 'zh'].includes(navigatorLang)) {
      setLang(navigatorLang as Lang)
    }
  }, [])
  const value = useMemo(() => ({ lang, setLang: (l: Lang) => { localStorage.setItem('lang', l); setLang(l) } }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
