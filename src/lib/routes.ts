const appBasePath = import.meta.env.BASE_URL

export function baseUrl() {
  return appBasePath.endsWith('/') ? appBasePath : `${appBasePath}/`
}

export function menuPath() {
  return baseUrl()
}

export function heroPath(heroId: string) {
  return `${baseUrl()}herois/${encodeURIComponent(heroId)}`
}

export function routePath(pathname = window.location.pathname) {
  const base = baseUrl().replace(/\/$/, '')

  if (base && pathname === base) {
    return '/'
  }

  if (base && pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || '/'
  }

  return pathname || '/'
}

/** Converte o pathname atual no id do herói, ou null quando estamos no menu. */
export function heroIdFromPath(heroIds: string[], pathname = window.location.pathname) {
  const [section, heroId] = routePath(pathname).replace(/^\/+|\/+$/g, '').split('/')

  if (section !== 'herois' || !heroId) {
    return null
  }

  const decoded = decodeURIComponent(heroId)
  return heroIds.includes(decoded) ? decoded : null
}
