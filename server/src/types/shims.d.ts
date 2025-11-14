declare module 'express' {
	export const Router: any
	export type RequestHandler = any
	export type ErrorRequestHandler = any
	const express: any
	export default express
}

declare module 'cors' {
	const cors: any
	export default cors
	export namespace cors {
		export type CorsOptions = any
	}
}

declare module 'morgan' {
	const morgan: any
	export default morgan
}

declare module 'nodemailer' {
	const nodemailer: any
	export default nodemailer
	export namespace nodemailer {
		export type Transporter = any
	}
}

// Allow using `process` without Node types
declare const process: any
