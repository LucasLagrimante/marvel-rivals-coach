const appBasePath = import.meta.env.BASE_URL

/** Telas do app. */
export type ScreenKey = 'menu' | 'manuais' | 'ranking' | 'rumores' | 'guia'

/** Telas de seção (tudo menos o guia de herói). */
export type SectionKey = Exclude<ScreenKey, 'guia'>

export function baseUrl() {
  return appBasePath.endsWith('/') ? appBasePath : `${appBasePath}/`
}

export function menuPath() {
  return baseUrl()
}

export function manualsPath() {
  return `${baseUrl()}manuais`
}

export function rankingPath() {
  return `${baseUrl()}ranking`
}

export function heroPath(heroId: string) {
  return `${baseUrl()}herois/${encodeURIComponent(heroId)}`
}

export function rumorsPath() {
  return `${baseUrl()}rumores`
}

/** Caminho da seção (menu, manuais, ranking ou rumores). */
export function sectionPath(section: SectionKey) {
  switch (section) {
    case 'manuais':
      return manualsPath()
    case 'ranking':
      return rankingPath()
    case 'rumores':
      return rumorsPath()
    default:
      return menuPath()
  }
}

/** Traduz o pathname atual na tela correspondente. */
export function screenFromPath(pathname = window.location.pathname): ScreenKey {
  const [section] = routePath(pathname).replace(/^\/+|\/+$/g, '').split('/')

  switch (section) {
    case 'manuais':
      return 'manuais'
    case 'ranking':
      return 'ranking'
    case 'rumores':
      return 'rumores'
    case 'herois':
      return 'guia'
    default:
      return 'menu'
  }
}

export function isRumorsPath(pathname = window.location.pathname) {
  return screenFromPath(pathname) === 'rumores'
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

/** Converte o pathname atual no id do herói, ou null quando não estamos num guia. */
export function heroIdFromPath(heroIds: string[], pathname = window.location.pathname) {
  const [section, heroId] = routePath(pathname).replace(/^\/+|\/+$/g, '').split('/')

  if (section !== 'herois' || !heroId) {
    return null
  }

  const decoded = decodeURIComponent(heroId)
  return heroIds.includes(decoded) ? decoded : null
}
