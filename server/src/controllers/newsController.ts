import type { RequestHandler } from 'express'
import { ok, fail } from '../utils/response'

const sample = [
  { id: '1', title: 'AI Breakthrough', slug: 'ai-breakthrough', body: 'Details...', category: 'ai', createdAt: new Date().toISOString() },
]

export const listNews: RequestHandler = (_req, res) => {
  res.json(ok(sample))
}

export const getNews: RequestHandler = (req, res) => {
  const item = sample.find((n) => n.slug === req.params.slug)
  if (!item) return res.status(404).json(fail('Not Found', 404))
  res.json(ok(item))
}
