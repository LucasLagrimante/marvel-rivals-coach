import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html não foi encontrado. Execute o build do Vite antes de gerar o fallback.')
}

copyFileSync(indexPath, fallbackPath)
console.log('Fallback SPA gerado em dist/404.html.')
