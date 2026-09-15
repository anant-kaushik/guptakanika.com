import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/* Runs after `vite build`. Renders the app to HTML and injects it into the
   built index.html, so the deployed page carries real content for crawlers
   instead of an empty #root. */

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(root, 'dist/index.html')

const { render } = await import(resolve(root, 'dist/server/entry-server.js'))

const { html, structuredData } = render('/')

const template = readFileSync(templatePath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find the #root mount point in dist/index.html')
}

const output = template
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${structuredData}</script>\n  </head>`)

writeFileSync(templatePath, output)

console.log(`prerender: injected ${html.length} bytes of HTML into dist/index.html`)
