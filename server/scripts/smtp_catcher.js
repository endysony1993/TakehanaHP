// Simple SMTP catcher using smtp-server and mailparser
const { SMTPServer } = require('smtp-server')
const { simpleParser } = require('mailparser')

const server = new SMTPServer({
  authOptional: true,
  onData(stream, session, callback) {
    simpleParser(stream)
      .then(parsed => {
        console.log('[smtp_catcher] Received email')
        console.log('From:', parsed.from && parsed.from.text)
        console.log('To:', parsed.to && parsed.to.text)
        console.log('Subject:', parsed.subject)
        console.log('Text:', parsed.text)
        console.log('HTML (truncated):', (parsed.html || '').slice(0, 200))
        callback()
      })
      .catch(err => {
        console.error('[smtp_catcher] parse error', err)
        callback(err)
      })
  },
})

server.listen(1025, '127.0.0.1', () => {
  console.log('[smtp_catcher] listening on 127.0.0.1:1025')
})
