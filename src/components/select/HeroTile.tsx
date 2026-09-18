import type { CSSProperties, MouseEvent } from 'react'
import type { HeroGuide, RoleKey } from '../../types'
import { heroPath } from '../../lib/routes'
import { roleLabel } from '../../lib/roles'

/** Slot de personagem no grid de seleção, com arte animada no hover/focus. */
export function HeroTile({
  hero,
  role,
  focused,
  onSelect,
  onFocus,
}: {
  hero: HeroGuide
  role: RoleKey
  focused: boolean
  onSelect: (heroId: string, event: MouseEvent<HTMLAnchorElement>, role: RoleKey) => void
  onFocus: (heroId: string) => void
}) {
  const defaultArt = hero.selectionPortraitUrl ?? hero.portraitUrl
  const hoverArt = hero.selectionHoverUrl ?? defaultArt

  return (
    <a
      aria-label={`Abrir guia de ${hero.name} como ${roleLabel[role]}`}
      className={`hero-tile ${focused ? 'is-focused' : ''}`}
      href={heroPath(hero.id)}
      onClick={(event) => onSelect(hero.id, event, role)}
      onFocus={() => onFocus(hero.id)}
      onMouseEnter={() => onFocus(hero.id)}
      style={
        {
          '--slot-primary': hero.theme.primary,
          '--slot-secondary': hero.theme.secondary,
          '--slot-primary-rgb': hero.theme.primaryRgb,
          '--slot-secondary-rgb': hero.theme.secondaryRgb,
          '--hover-art-scale': hero.selectionHoverFit?.scale,
          '--hover-art-x':
            hero.selectionHoverFit?.x !== undefined ? `${hero.selectionHoverFit.x}%` : undefined,
          '--hover-art-y':
            hero.selectionHoverFit?.y !== undefined ? `${hero.selectionHoverFit.y}%` : undefined,
        } as CSSProperties
      }
    >
      <span className="hero-tile-art">
        <img src={defaultArt} alt="" loading="lazy" />
      </span>
      <span className="hero-tile-art is-hover">
        <img src={hoverArt} alt="" loading="lazy" />
      </span>
      <span className="hero-tile-shade" aria-hidden="true" />
      <span className="hero-tile-info">
        <strong>{hero.name}</strong>
        <span>{roleLabel[role]}</span>
      </span>
    </a>
  )
}
