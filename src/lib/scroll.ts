/**
 * Rola até uma seção do guia descontando a topbar quando ela é sticky
 * e respeitando `prefers-reduced-motion`.
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id)

  if (!target) {
    return
  }

  const topbar = document.querySelector<HTMLElement>('.detail-shell .topbar')
  const sticky = topbar ? getComputedStyle(topbar).position === 'sticky' : false
  const offset = sticky && topbar ? topbar.getBoundingClientRect().height + 10 : 0
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - offset,
    behavior: reducedMotion ? 'auto' : 'smooth',
  })
}
