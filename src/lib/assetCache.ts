/**
 * Cache e pré-carga de imagens.
 *
 * - `registerServiceWorker()` liga o `public/sw.js` (só em produção): imagens e
 *   GIFs ficam em cache-first e o app abre offline.
 * - `preloadImage()` baixa e decodifica uma imagem em memória — chamado em sinal
 *   de intenção (hover, item ativo na busca) para o GIF/banner aparecer sem piscar.
 * - `warmMedia()` pede ao service worker para aquecer uma lista em idle, sem
 *   competir com o que está na tela.
 */

type NetworkInformation = { saveData?: boolean; effectiveType?: string }

function connection(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation }).connection
}

/** Rede lenta ou economia de dados: não pré-carregar nada especulativo. */
export function isConstrainedNetwork() {
  const info = connection()
  return Boolean(info?.saveData) || /(^|-)2g$/.test(info?.effectiveType ?? '')
}

const preloaded = new Map<string, Promise<void>>()

export function preloadImage(url: string | undefined): Promise<void> {
  if (!url) return Promise.resolve()

  const existing = preloaded.get(url)
  if (existing) return existing

  const image = new Image()
  image.decoding = 'async'
  image.src = url
  const promise = image.decode().catch(() => undefined)
  preloaded.set(url, promise)
  return promise
}

function whenIdle(task: () => void) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(task, { timeout: 4000 })
  } else {
    globalThis.setTimeout(task, 1200)
  }
}

/** Aquece o cache do service worker em idle; no-op sem SW ativo ou com rede limitada. */
export function warmMedia(urls: Array<string | undefined>) {
  if (isConstrainedNetwork() || !('serviceWorker' in navigator)) return

  const list = urls.filter((url): url is string => Boolean(url))
  if (!list.length) return

  whenIdle(() => {
    navigator.serviceWorker.ready
      .then((registration) => registration.active?.postMessage({ type: 'warm', urls: list }))
      .catch(() => undefined)
  })
}

export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`, { scope: import.meta.env.BASE_URL })
      .catch((error) => console.warn('[sw] registro falhou', error))
  })
}
