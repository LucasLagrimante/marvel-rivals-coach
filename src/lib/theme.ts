import type { CSSProperties } from 'react'
import type { HeroGuide } from '../types'

/** Converte o tema do herói em variáveis CSS consumidas por todo o layout. */
export function heroThemeStyle(hero: HeroGuide): CSSProperties {
  return {
    '--theme-primary': hero.theme.primary,
    '--theme-primary-rgb': hero.theme.primaryRgb,
    '--theme-secondary': hero.theme.secondary,
    '--theme-secondary-rgb': hero.theme.secondaryRgb,
    '--theme-surface': hero.theme.surface,
    '--theme-surface-rgb': hero.theme.surfaceRgb,
  } as CSSProperties
}
