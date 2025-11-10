import { PORT } from './config/env'
import { logger } from './utils/logger'
import { app } from './app'
import { initMail } from './services/mailService'

app.listen(PORT, () => {
  logger.info(`Server listening on http://localhost:${PORT}`)
  void initMail()
})
