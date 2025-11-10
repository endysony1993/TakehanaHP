export type Messages = Record<string, string>

export async function loadMessages(locale: 'en' | 'ja' | 'zh'): Promise<Messages> {
  switch (locale) {
    case 'ja':
      return (await import('./locales/ja/translation.json')).default
    case 'zh':
      return (await import('./locales/zh/translation.json')).default
    default:
      return (await import('./locales/en/translation.json')).default
  }
}
