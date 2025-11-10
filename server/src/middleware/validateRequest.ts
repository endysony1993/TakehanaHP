import type { RequestHandler } from 'express'

export function validateBody(required: string[]): RequestHandler {
  return (req, res, next) => {
    for (const key of required) {
      if (req.body?.[key] == null) {
        return res.status(400).json({ success: false, error: { message: `Missing field: ${key}`, code: 400 } })
      }
    }
    next()
  }
}
