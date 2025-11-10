import { Router } from 'express'
import { submitContact, testSendContact, verifyContactMail } from '../controllers/contactController'
import { validateBody } from '../middleware/validateRequest'

const router = Router()

// Simple rate limit (in-memory) to mitigate spam bursts (basic, non-distributed)
const hits: Record<string, { count: number; ts: number }> = {}
router.use((req, res, next) => {
  const ip = req.ip || 'unknown'
  const now = Date.now()
  const entry = hits[ip] || { count: 0, ts: now }
  // reset window every 5 minutes
  if (now - entry.ts > 5 * 60 * 1000) {
    entry.count = 0
    entry.ts = now
  }
  entry.count++
  hits[ip] = entry
  if (entry.count > 20) {
    return res.status(429).json({ success: false, error: { message: 'Too many requests, please try later', code: 429 } })
  }
  next()
})

router.post('/', validateBody(['name', 'email', 'title', 'message']), submitContact)
router.post('/test', testSendContact)
router.get('/verify', verifyContactMail)

export default router
