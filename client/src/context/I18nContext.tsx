import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLang } from './LangContext'
import { loadMessages, type Messages } from '../i18n'

type Variables = Record<string, string | number>

function interpolate(template: string, vars?: Variables): string {
  if (!vars) return template
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) =>
    vars[key] !== undefined ? String(vars[key]) : `{{${key}}}`
  )
}

function getNested(messages: Messages, key: string): any {
  if (messages[key] !== undefined) return messages[key]
  const parts = key.split('.')
  let cur: any = messages
  for (const p of parts) {
    cur = cur?.[p]
    if (cur === undefined) break
  }
  return cur
}

function pluralForm(base: string, count?: number): string {
  if (count === undefined || count === 1) return `${base}.one`
  return `${base}.other`
}

type I18nCtx = {
  messages: Messages
  t: (key: string, fallback?: string, vars?: Variables) => string
  tp: (baseKey: string, count: number, fallback?: { one?: string; other?: string }, vars?: Variables) => string
  locale: 'en' | 'ja' | 'zh' | 'vi'
  loading: boolean
}

const I18nContext = createContext<I18nCtx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLang()
  const [messages, setMessages] = useState<Messages>({})
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let alive = true
    setLoading(true);
    loadMessages(lang).then((m) => {
      if (alive) setMessages(m)
    }).finally(() => {
      if (alive) setLoading(false)
    })
    return () => { alive = false }
  }, [lang])

  const value = useMemo<I18nCtx>(() => ({
    messages,
    locale: lang,
    loading,
    t: (key: string, fallback?: string, vars?: Variables) => {
      const found = getNested(messages, key)
      if (typeof found === 'string') return interpolate(found, vars)
      return interpolate(fallback ?? key, vars)
    },
    tp: (baseKey: string, count: number, fallback?: { one?: string; other?: string }, vars?: Variables) => {
      const formKey = pluralForm(baseKey, count)
      const fb = count === 1 ? fallback?.one : fallback?.other
      return value.t(formKey, fb ?? baseKey, { ...(vars || {}), count })
    }
  }), [messages, lang, loading])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
