import { useI18n } from '../context/I18nContext'

export function useT() {
  const { t, locale } = useI18n()
  return { t, locale }
}
