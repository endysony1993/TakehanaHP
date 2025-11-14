import { PORT } from './config/env.js'
import { logger } from './utils/logger.js'
import { app } from './app.js'
import { initMail } from './services/mailService.js'

function start(port: number, attempt = 0) {
  const MAX_ATTEMPTS = 3
  const server = app.listen(port, () => {
    logger.info(`Server listening on http://localhost:${port}`)
    void initMail()
  })
  server.on('error', (err: any) => {
    if (err?.code === 'EADDRINUSE' && attempt < MAX_ATTEMPTS) {
      const nextPort = port + 1
      logger.warn(
        `Port ${port} in use, retrying on ${nextPort} (attempt ${
          attempt + 1
        }/${MAX_ATTEMPTS})`
      )
      start(nextPort, attempt + 1)
    } else {
      logger.error(`Failed to start server: ${err?.message}`)
      process.exit(1)
    }
  })
}

start(PORT)
