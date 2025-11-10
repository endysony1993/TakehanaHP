export function formatDate(input: string | number | Date, locale = 'ja-JP') {
  try {
    return new Date(input).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return ''
  }
}
