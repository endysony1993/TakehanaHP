import request from 'supertest'
import { app } from '../src/app'

async function main() {
  const res = await (request(app) as any).get('/api/health')
  if (res.status !== 200 || res.body?.data?.status !== 'ok') {
    console.error('Health endpoint failed', res.status, res.body)
    process.exit(1)
  }
  console.log('Health test passed')
}

main()
