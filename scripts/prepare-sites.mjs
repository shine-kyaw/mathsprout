import { copyFile, cp, mkdir, readdir, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
await mkdir('dist/.openai', { recursive: true })
await mkdir('dist/client', { recursive: true })
await copyFile('.openai/hosting.json', 'dist/.openai/hosting.json')

const rootEntries = await readdir('dist', { withFileTypes: true })
for (const entry of rootEntries) {
  if (['server', 'client', '.openai'].includes(entry.name)) continue
  await cp(`dist/${entry.name}`, `dist/client/${entry.name}`, { recursive: true })
}

const worker = `const INDEX_PATH = '/index.html'

export default {
  async fetch(request, env) {
    if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') {
      return new Response('MathSprout asset binding unavailable.', { status: 503 })
    }

    const url = new URL(request.url)
    const leaf = url.pathname.split('/').pop() || ''
    const isApplicationRoute = !leaf.includes('.')
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404 && !(isApplicationRoute && response.status >= 300 && response.status < 400)) return response

    url.pathname = INDEX_PATH
    return env.ASSETS.fetch(new Request(url, request))
  },
}
`

await writeFile('dist/server/index.js', worker)
