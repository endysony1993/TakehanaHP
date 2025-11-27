import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { CORS_ORIGIN } from './config/env'
import { errorHandler } from './middleware/errorHandler'
import contactRoutes from './routes/contact'
import newsRoutes from './routes/news'
import projectsRoutes from './routes/projects'
import { ok } from './utils/response'

export const app = express()

// Allow string or comma-separated origins from env for flexibility
const origins = (CORS_ORIGIN || '*')
const corsOptions: any = {
	origin: (origin, callback) => {
		// allow non-browser requests (e.g., server-to-server, curl)
		if (!origin) {
			console.info('[cors] no origin (server-to-server) – allow')
			return callback(null, true)
		}
		try {
			const list = origins.split(',').map(o => o.trim()).filter(Boolean)
			// Normalize helper to compare hostnames ignoring optional www.
			const normalize = (u: string) => u.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/:\d+$/, '')
			if (origins === '*' || list.some(o => normalize(o) === normalize(origin))) {
				console.info('[cors] allow origin', origin)
				return callback(null, true)
			}
			// also allow simple domain matches: if configured `tkhtec.org` allow `www.tkhtec.org` and vice versa
			if (list.some(o => normalize(o).endsWith(normalize(origin)) || normalize(origin).endsWith(normalize(o)))) {
				console.info('[cors] allow (suffix match) origin', origin)
				return callback(null, true)
			}
			console.warn('[cors] reject origin', origin)
			return callback(new Error('Not allowed by CORS'))
		} catch (e: any) {
			console.error('[cors] error while checking origin', e?.message)
			return callback(null, false)
		}
	},
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'X-Test-Token'],
	optionsSuccessStatus: 204,
}
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

// Ensure the server sends a JSON 504 before sockets get forcibly closed by proxies
app.use((req, res, next) => {
	// 30s response timeout; if exceeded, return a JSON 504 and log
	res.setTimeout(30 * 1000, () => {
		try {
			console.error('[timeout] response timeout for', req.method, req.originalUrl)
			if (!res.headersSent) {
				res.status(504).json({ success: false, error: { message: 'Server timeout, please try again later', code: 504 } })
			}
		} catch (e) {
			// ignore
		}
	})
	next()
})
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (_req, res) => res.json(ok({ status: 'ok' })))

app.use('/api/contact', contactRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/projects', projectsRoutes)

app.use(errorHandler)

export default app
