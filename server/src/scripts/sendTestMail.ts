import { sendContactMail } from '../services/mailService'

async function main() {
  const name = process.env.TEST_NAME || 'テスト'
  const email = process.env.TEST_EMAIL || 'test@example.com'
  const subject = process.env.TEST_SUBJECT || '問い合わせテスト(スクリプト)'
  const message = process.env.TEST_MESSAGE || '送信テストです。'
  console.log('[sendTestMail] Sending test mail to configured MAIL_TO ...')
  const res = await sendContactMail(name, email, message, subject)
  console.log('[sendTestMail] OK id=', res.id)
}

main().catch((e) => {
  console.error('[sendTestMail] FAIL:', e?.response || e?.message || e)
  process.exit(1)
})
