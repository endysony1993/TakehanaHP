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
const corsOptions: cors.CorsOptions = {
	origin: (origin, callback) => {
		if (!origin) return callback(null, true)
		if (origins === '*' || origins.split(',').map(o => o.trim()).includes(origin)) return callback(null, true)
		callback(new Error('Not allowed by CORS'))
	},
}
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (_req, res) => res.json(ok({ status: 'ok' })))

app.use('/api/contact', contactRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/projects', projectsRoutes)

app.use(errorHandler)

export default app
