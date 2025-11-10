import nodemailer from 'nodemailer'
import { MAIL_FROM, MAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_DRIVER } from '../config/env'

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter
  if (MAIL_DRIVER === 'log') {
    return {
      sendMail: async (opts: any) => {
        console.warn('[mailService] MAIL_DRIVER=log; would send:', opts)
        return { messageId: 'dev-' + Math.random().toString(36).slice(2) }
      },
      verify: async () => true,
    } as any
  }
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    const msg = '[mailService] SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in environment (or set MAIL_DRIVER=log for dev).'
    throw new Error(msg)
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
  return transporter
}

// Default recipient (central Gmail inbox) if MAIL_TO not provided in environment.
const DEFAULT_RECIPIENTS = ['sonynoit@gmail.com']

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
    info = await getTransporter().sendMail({ from: mailFrom, to: mailTo, replyTo: email, subject, html, text })
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
    if (MAIL_DRIVER === 'log') {
      return { ok: true, driver: 'log', message: 'MAIL_DRIVER=log (no real sending)' }
    }
    if (typeof (t as any).verify === 'function') {
      await (t as any).verify()
    }
    return { ok: true, driver: 'smtp' }
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
