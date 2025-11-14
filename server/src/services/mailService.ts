import nodemailer from 'nodemailer'
import { MAIL_FROM, MAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_DRIVER, NODE_ENV } from '../config/env'

let transporter: any | null = null

function getTransporter() {
  if (transporter) return transporter
  if (MAIL_DRIVER === 'log') {
    return {
      sendMail: async (opts: any) => {
        console.warn('[mailService] MAIL_DRIVER=log; would send:', opts)
        return { messageId: 'dev-' + Math.random().toString(36).slice(2) }
      },
      verify: async () => true,
      __driver: 'log',
    } as any
  }
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // In production, require real SMTP so emails are actually delivered.
    if (MAIL_DRIVER === 'smtp' && NODE_ENV === 'production') {
      throw new Error('SMTP configuration missing: please set SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_FROM/MAIL_TO')
    }
    // Otherwise, degrade to log driver (useful for local/dev testing).
    console.warn('[mailService] Missing SMTP config; using MAIL_DRIVER=log for non-production/dev.')
    return {
      sendMail: async (opts: any) => {
        console.warn('[mailService] (dev-log) would send:', opts)
        return { messageId: 'dev-' + Math.random().toString(36).slice(2) }
      },
      verify: async () => true,
      __driver: 'log',
    } as any
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: {
      // If the server has a self-signed or mismatched cert, allow it for debugging
      rejectUnauthorized: false,
    },
  })
  // annotate for diagnostics
  ;(transporter as any).__driver = 'smtp'
  return transporter
}

// Default recipients if MAIL_TO not provided in environment.
const DEFAULT_RECIPIENTS = ['info@tkhtec.org', 'info@mail.tkhtec.org']

export async function sendContactMail(name: string, email: string, message: string, subjectInput?: string) {
  const mailFrom = MAIL_FROM || SMTP_USER || 'no-reply@example.com'
  // If MAIL_TO is set, use it (can be comma-separated); otherwise fall back to both default recipients.
  const mailTo = MAIL_TO
    ? MAIL_TO.split(/[,;]+/).map(s => s.trim()).filter(Boolean)
    : DEFAULT_RECIPIENTS
  console.info('[mailService] sending to recipients:', mailTo)
  const subject = subjectInput && subjectInput.trim().length > 0
    ? `Contact: ${subjectInput} — from ${name}`
    : `New Contact Inquiry from ${name}`

  const html = `<p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
  const text = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`

  let info
  try {
    const t = getTransporter() as any
    info = await t.sendMail({ from: mailFrom, to: mailTo, replyTo: email, subject, html, text })
    if (t.__driver === 'smtp') {
      console.info('[mailService] sent via smtp:', {
        id: info?.messageId,
        accepted: info?.accepted,
        rejected: info?.rejected,
        response: info?.response,
      })
    } else {
      console.info('[mailService] (log mode) generated id:', info?.messageId)
    }
  } catch (err: any) {
    console.error('[mailService] sendMail error:', {
      message: err?.message,
      code: err?.code,
      command: err?.command,
    })
    throw err
  }
  return { id: info.messageId, name, email, subject: subjectInput || '', message }
}

export async function verifyMailTransport(): Promise<{ ok: boolean; driver: string; message?: string }> {
  try {
    const t = getTransporter()
    const driver = (t as any).__driver === 'log' || MAIL_DRIVER === 'log' ? 'log' : 'smtp'
    if (driver !== 'log' && typeof (t as any).verify === 'function') {
      await (t as any).verify()
    }
    return { ok: true, driver }
  } catch (err: any) {
    return { ok: false, driver: MAIL_DRIVER || 'smtp', message: err?.message || 'Unknown verification error' }
  }
}

export async function initMail() {
  try {
    const result = await verifyMailTransport()
    if (!result.ok) {
      console.error('[mailService] SMTP not ready:', result.message)
    } else {
      console.info('[mailService] transport ready:', result.driver)
    }
  } catch (e: any) {
    console.error('[mailService] init failed:', e?.message)
  }
}
