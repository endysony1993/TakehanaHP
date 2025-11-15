import { config } from 'dotenv'
config()

export const PORT = parseInt(process.env.PORT || '4000', 10)
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

export const NODE_ENV = process.env.NODE_ENV || 'development'

function toBool(v: string | undefined, defaultVal = false) {
	if (v == null) return defaultVal
	return v === '1' || v.toLowerCase() === 'true'
}

export const SMTP_HOST = process.env.SMTP_HOST
export const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10)
export const SMTP_SECURE = toBool(process.env.SMTP_SECURE, SMTP_PORT === 465)
export const SMTP_USER = process.env.SMTP_USER
export const SMTP_PASS = process.env.SMTP_PASS
export const MAIL_FROM = process.env.MAIL_FROM
export const MAIL_TO = process.env.MAIL_TO

// MAIL_DRIVER resolution:
// - Respect explicit env if provided ('smtp' | 'log')
// - Default to 'log' in non-production to avoid 500s during local dev without SMTP
// - Default to 'smtp' in production
const MAIL_DRIVER_RAW = (process.env.MAIL_DRIVER || '').toLowerCase()
export const MAIL_DRIVER: 'smtp' | 'log' = MAIL_DRIVER_RAW === 'smtp' || MAIL_DRIVER_RAW === 'log'
	? (MAIL_DRIVER_RAW as 'smtp' | 'log')
	: (NODE_ENV === 'production' ? 'smtp' : 'log')

export const MAIL_TEST_TOKEN = process.env.MAIL_TEST_TOKEN // optional token to allow /api/contact/test
export const MAIL_DEBUG = toBool(process.env.MAIL_DEBUG, false)
export const MAIL_SEND_TIMEOUT_MS = parseInt(process.env.MAIL_SEND_TIMEOUT_MS || '15000', 10)
