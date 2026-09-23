import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href)

const template = await readFile('dist/index.html', 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) throw new Error(`prerender: ${placeholder} not found in dist/index.html`)

await writeFile('dist/index.html', template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm('dist-ssr', { recursive: true })
console.log('prerendered dist/index.html')
