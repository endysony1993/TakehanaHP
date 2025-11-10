import { useEffect, useState } from 'react'

export function useLocale(defaultLocale: 'en' | 'ja' | 'zh' = 'en') {
  const [locale, setLocale] = useState(defaultLocale)
  useEffect(() => {
    const stored = localStorage.getItem('locale') as 'en' | 'ja' | 'zh' | null
    if (stored) setLocale(stored)
  }, [])
  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])
  return { locale, setLocale }
}
