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

// Accept either `title` or `subject` to match various client payloads
router.post(
  '/',
  // Ensure the request doesn't hang forever; Express will fire 'timeout' if exceeded
  (req, res, next) => {
    // 20s server-side timeout safeguard; client will receive 504 if SMTP is unresponsive
    res.setTimeout(20000)
    next()
  },
  (req, res, next) => {
    const { name, email, message } = req.body || {}
    if (!name) return res.status(400).json({ success: false, error: { message: 'Missing field: name', code: 400 } })
    if (!email) return res.status(400).json({ success: false, error: { message: 'Missing field: email', code: 400 } })
    if (!message) return res.status(400).json({ success: false, error: { message: 'Missing field: message', code: 400 } })
    next()
  },
  submitContact,
)
router.post('/test', testSendContact)
router.get('/verify', verifyContactMail)

export default router
