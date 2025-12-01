/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const repoRoot = __dirname
const src = path.join(repoRoot, '..', 'client', 'dist')
const dest = path.join(repoRoot, '..', 'docs')
const cname = 'tkhtec.org'

function copyDir(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true })
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name)
    const dstPath = path.join(to, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, dstPath)
    } else {
      fs.copyFileSync(srcPath, dstPath)
    }
  }
}

if (!fs.existsSync(src)) {
  console.error('✖ Build output not found: ' + src)
  process.exit(1)
}
// Clean existing docs to avoid stale files
if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true })
}
copyDir(src, dest)

const indexHtml = path.join(dest, 'index.html')
const notFound = path.join(dest, '404.html')
if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, notFound)
} else {
  console.error('✖ docs/index.html not found after copy.')
  process.exit(1)
}

// Ensure custom domain is configured
fs.writeFileSync(path.join(dest, 'CNAME'), cname)

console.log('✅ Copied client/dist → docs and created docs/404.html')
console.log('Next: git add docs && git commit -m "Deploy to Pages" && git push')
