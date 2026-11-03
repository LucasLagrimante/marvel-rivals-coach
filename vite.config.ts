import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { buildHeroIndex } from './scripts/build_hero_index.mjs'

/**
 * Mantém `src/data/heroIndex.generated.ts` em sincronia com `src/data/heroes/*.ts`:
 * regenera no início do build/dev e a cada edição de guia no dev server.
 */
function heroIndexPlugin(): Plugin {
  let running: Promise<unknown> = Promise.resolve()
  const regenerate = () => {
    running = running.then(() => buildHeroIndex({ quiet: true })).catch((error) => console.error(error))
    return running
  }

  return {
    name: 'hero-index',
    async buildStart() {
      await regenerate()
    },
    configureServer(server) {
      server.watcher.on('change', (file) => {
        if (/src[\\/]data[\\/]heroes[\\/][^\\/]+\.ts$/.test(file)) void regenerate()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [heroIndexPlugin(), react()],
  base: process.env.PUBLIC_BASE ?? '/',
  build: {
    // Guias de herói são chunks próprios (~30 kB cada); o aviso padrão de 500 kB
    // só serve para pegar regressão no chunk de entrada.
    chunkSizeWarningLimit: 300,
  },
})
