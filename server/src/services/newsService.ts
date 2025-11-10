type NewsItem = {
  id: string
  title: string
  slug: string
  body: string
  category: 'ai' | 'iot' | 'smart-manufacturing' | 'others'
  createdAt: string
}

const sample: NewsItem[] = [
  { id: '1', title: 'AI Breakthrough', slug: 'ai-breakthrough', body: 'Details...', category: 'ai', createdAt: new Date().toISOString() },
]

export function listNews() {
  return sample
}
