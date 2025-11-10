import { config } from 'dotenv'
config()

export const PORT = parseInt(process.env.PORT || '4000', 10)
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

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
export const MAIL_DRIVER = (process.env.MAIL_DRIVER || 'smtp').toLowerCase() // 'smtp' | 'log'
export const MAIL_TEST_TOKEN = process.env.MAIL_TEST_TOKEN // optional token to allow /api/contact/test
export const MAIL_DEBUG = toBool(process.env.MAIL_DEBUG, false)
