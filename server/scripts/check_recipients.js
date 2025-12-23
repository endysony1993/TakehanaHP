const fs = require('fs')
const path = require('path')

// Mirror the logic in services/mailService.ts to compute recipients
const DEFAULT_RECIPIENTS = ['info@tkhtec.org', 'info@mail.tkhtec.org']

function getRecipients() {
  const raw = process.env.MAIL_TO
  if (raw && raw.trim().length > 0) {
    return raw.split(/[,;]+/).map(s => s.trim()).filter(Boolean)
  }
  return DEFAULT_RECIPIENTS
}

console.log('Environment MAIL_TO =', process.env.MAIL_TO || '(not set)')
console.log('Computed recipients:')
getRecipients().forEach((r, i) => console.log(`${i + 1}. ${r}`))

// Also show MAIL_FROM and MAIL_DRIVER
console.log('\nMAIL_FROM =', process.env.MAIL_FROM || '(not set)')
console.log('MAIL_DRIVER =', process.env.MAIL_DRIVER || '(not set)')

process.exit(0)
