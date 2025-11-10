export type NewsCategory = 'ai' | 'iot' | 'smart-manufacturing' | 'others'
export interface NewsItem {
  id: string
  title: string
  slug: string
  body: string
  category: NewsCategory
  createdAt: string
}
