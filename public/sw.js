/* Service worker do Rivals Coach — cache de assets para navegação instantânea.
 *
 * Estratégias:
 * - Imagens/GIFs (heroes/, teamups/, rankings/, wordmarks): cache-first. São
 *   estáveis entre deploys; uma revalidação em segundo plano roda no máximo 1x
 *   por dia por arquivo, então um asset trocado aparece no acesso seguinte.
 * - JS/CSS/fontes com hash (assets/): cache-first, imutáveis.
 * - Navegação (HTML): network-first com fallback para o último index em cache,
 *   para o app abrir offline e não servir HTML antigo quando há rede.
 *
 * Trocar VERSION invalida todos os caches na próxima ativação.
 */
const VERSION = 'v1'
const MEDIA_CACHE = `rc-media-${VERSION}`
const STATIC_CACHE = `rc-static-${VERSION}`
const PAGE_CACHE = `rc-pages-${VERSION}`
const KEEP = new Set([MEDIA_CACHE, STATIC_CACHE, PAGE_CACHE])
const MEDIA_LIMIT = 400
const REVALIDATE_MS = 24 * 60 * 60 * 1000

const scope = new URL(self.registration.scope)
const base = scope.pathname

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(names.filter((name) => name.startsWith('rc-') && !KEEP.has(name)).map((name) => caches.delete(name)))
      await self.clients.claim()
    })(),
  )
})

function isMedia(path) {
  return /^(heroes|teamups|rankings)\//.test(path) || /^marvel-wordmark|^favicon/.test(path)
}

async function trim(cache) {
  const keys = await cache.keys()
  for (let index = 0; index < keys.length - MEDIA_LIMIT; index += 1) await cache.delete(keys[index])
}

async function stamp(response) {
  // Guarda quando o arquivo entrou no cache, para a revalidação diária.
  const headers = new Headers(response.headers)
  headers.set('x-rc-cached-at', String(Date.now()))
  const body = await response.blob()
  return new Response(body, { status: response.status, statusText: response.statusText, headers })
}

async function mediaFirst(request, event) {
  const cache = await caches.open(MEDIA_CACHE)
  const cached = await cache.match(request)

  const refresh = async () => {
    const response = await fetch(request)
    if (response.ok && response.type === 'basic') {
      await cache.put(request, await stamp(response.clone()))
      await trim(cache)
    }
    return response
  }

  if (cached) {
    const cachedAt = Number(cached.headers.get('x-rc-cached-at') || 0)
    if (Date.now() - cachedAt > REVALIDATE_MS) event.waitUntil(refresh().catch(() => undefined))
    return cached
  }

  return refresh()
}

async function staticFirst(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cached = await cache.match(request)
  if (cached) return cached

  const response = await fetch(request)
  if (response.ok && response.type === 'basic') await cache.put(request, response.clone())
  return response
}

async function pageNetworkFirst(request) {
  const cache = await caches.open(PAGE_CACHE)

  try {
    const response = await fetch(request)
    if (response.ok) await cache.put(base, response.clone())
    return response
  } catch (error) {
    const cached = await cache.match(base)
    if (cached) return cached
    throw error
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== scope.origin || !url.pathname.startsWith(base)) return

  const path = url.pathname.slice(base.length)

  if (request.mode === 'navigate') {
    event.respondWith(pageNetworkFirst(request))
    return
  }

  if (path.startsWith('assets/')) {
    event.respondWith(staticFirst(request))
    return
  }

  if (isMedia(path)) {
    event.respondWith(mediaFirst(request, event))
  }
})

/* A página pode pedir para aquecer o cache (ex.: retratos da seleção em idle). */
self.addEventListener('message', (event) => {
  const data = event.data
  if (!data || data.type !== 'warm' || !Array.isArray(data.urls)) return

  event.waitUntil(
    (async () => {
      const cache = await caches.open(MEDIA_CACHE)
      for (const href of data.urls) {
        const url = new URL(href, scope)
        if (url.origin !== scope.origin) continue
        if (await cache.match(url.href)) continue
        try {
          const response = await fetch(url.href)
          if (response.ok) await cache.put(url.href, await stamp(response))
        } catch {
          /* rede instável: o próximo acesso tenta de novo */
        }
      }
      await trim(cache)
    })(),
  )
})
