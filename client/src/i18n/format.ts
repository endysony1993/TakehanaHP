export function formatNumber(value: number, locale: string, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(locale, options).format(value)
}

export function formatDate(value: Date | number | string, locale: string, options?: Intl.DateTimeFormatOptions) {
  const date = typeof value === 'string' || typeof value === 'number' ? new Date(value) : value
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export function formatCurrency(value: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
}