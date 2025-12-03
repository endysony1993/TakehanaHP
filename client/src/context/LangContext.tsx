import { createContext, useContext, useMemo, useState } from 'react'

type Lang = 'en' | 'ja' | 'zh' | 'vi'

type Ctx = { lang: Lang; setLang: (l: Lang) => void }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')
  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
