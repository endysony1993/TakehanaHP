import { verifyMailTransport } from '../services/mailService'

async function main() {
  const result = await verifyMailTransport()
  if (result.ok) {
    console.log('[verifyMail] OK driver=', result.driver)
    process.exit(0)
  } else {
    console.error('[verifyMail] FAIL driver=', result.driver, 'message=', result.message)
    process.exit(1)
  }
}

main().catch((e) => {
  console.error('[verifyMail] Exception:', e?.message || e)
  process.exit(1)
})
