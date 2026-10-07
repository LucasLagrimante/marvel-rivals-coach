import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import type { HeroGuide, RoleKey } from '../../types'
import { heroPath } from '../../lib/routes'
import { roleLabel } from '../../lib/roles'
import { getHeroMedal, getHeroRankingEntry } from '../../lib/rankings'

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
  const entry = getHeroRankingEntry(hero.id, role)
  const rank = entry?.rank
  const medal = getHeroMedal(rank)

  const tileRef = useRef<HTMLAnchorElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [toggleState, setToggleState] = useState(0)

  // IntersectionObserver: detecta quando o tile está visível na viewport
  useEffect(() => {
    const el = tileRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // No mobile (sem hover): alterna automaticamente entre retrato e GIF
  useEffect(() => {
    if (!isVisible) return

    // Verifica se o dispositivo tem hover (web) ou não (mobile)
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (hasHover) return // No web, o hover controla

    // No mobile: alterna a cada 3s (3s retrato → 3s GIF)
    const interval = setInterval(() => {
      setToggleState(prev => (prev + 1) % 2)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  // Deriva se o GIF deve ser mostrado: visível + sem hover + toggle ativo
  const hasHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches
  const showGif = !hasHover && isVisible && toggleState === 1

  return (
    <a
      ref={tileRef}
      aria-label={`Abrir guia de ${hero.name} como ${roleLabel[role]}`}
      className={`hero-tile ${focused ? 'is-focused' : ''} ${showGif ? 'is-animating' : ''}`}
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
      {entry ? (
        <span
          className="hero-tile-rank"
          data-medal={medal}
          title={`#${entry.rank} (${roleLabel[role]}) · Tier ${entry.tier} no meta`}
        >
          <span className="hero-tile-rank-hash">#</span>
          <span className="hero-tile-rank-number">{entry.rank}</span>
          <span className="hero-tile-rank-tier" data-tier={entry.tier}>
            {entry.tier}
          </span>
        </span>
      ) : null}
      <span className="hero-tile-info">
        <strong>{hero.name}</strong>
        <span>{roleLabel[role]}</span>
      </span>
    </a>
  )
}
