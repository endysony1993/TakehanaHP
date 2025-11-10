import type { RequestHandler } from 'express'
import { sendContactMail, verifyMailTransport } from '../services/mailService'
import { ok, fail } from '../utils/response'
import { MAIL_TEST_TOKEN } from '../config/env'

export const submitContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message, title, subject } = req.body as {
      name: string
      email: string
      message: string
      title?: string
      subject?: string
    }
    const subjectInput = (title ?? subject)?.toString()
    console.info('[contact] incoming', { name, email, title: subjectInput, length: message?.length, ip: req.ip })
    const result = await sendContactMail(name, email, message, subjectInput)
    res.json(ok(result))
  } catch (err: any) {
    const message = err?.message || 'Failed to send contact email'
    console.error('[contact] error', { message, stack: err?.stack })
    res.status(500).json(fail(message, 500))
  }
}

// Diagnostics endpoint to verify SMTP delivery. Protected by optional MAIL_TEST_TOKEN.
export const testSendContact: RequestHandler = async (req, res) => {
  try {
    if (MAIL_TEST_TOKEN) {
      const token = (req.headers['x-test-token'] || req.query.token) as string | undefined
      if (!token || token !== MAIL_TEST_TOKEN) {
        return res.status(401).json(fail('Unauthorized: invalid or missing test token', 401))
      }
    }
    const name = 'SMTP Test'
    const email = 'no-reply@example.com'
    const message = 'This is a test message sent by /api/contact/test.'
    const subject = 'Contact SMTP Test'
    const result = await sendContactMail(name, email, message, subject)
    res.json(ok({ messageId: result.id }))
  } catch (err: any) {
    res.status(500).json(fail(err?.message || 'SMTP test failed', 500))
  }
}

export const verifyContactMail: RequestHandler = async (req, res) => {
  try {
    if (MAIL_TEST_TOKEN) {
      const token = (req.headers['x-test-token'] || req.query.token) as string | undefined
      if (!token || token !== MAIL_TEST_TOKEN) {
        return res.status(401).json(fail('Unauthorized', 401))
      }
    }
    const result = await verifyMailTransport()
    if (!result.ok) {
      return res.status(503).json(fail(result.message || 'Mail transport not ready', 503))
    }
    return res.json(ok(result))
  } catch (err: any) {
    return res.status(500).json(fail(err?.message || 'Verification failed', 500))
  }
}
