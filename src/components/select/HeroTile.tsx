import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent, PointerEvent as ReactPointerEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import type { HeroGuide, RoleKey } from '../../types'
import { heroPath } from '../../lib/routes'
import { roleLabel } from '../../lib/roles'
import { getHeroMedal, getHeroRankingEntry } from '../../lib/rankings'

/** Tempo que a animação continua depois que o mouse sai (permite animar vários ao passar rápido). */
const HOVER_LINGER_MS = 900

/**
 * Slot de personagem no grid de seleção.
 *
 * Web (mouse): o hover já ativa o GIF de Lord individualmente, com um debounce
 *   que mantém a animação por um tempo após a saída do mouse (varrer vários
 *   tiles anima vários ao mesmo tempo).
 * Mobile (toque): o GIF NÃO anima sozinho. O primeiro toque "arma" o tile
 *   (mostra a animação e o botão "Próximo"); o segundo toque abre o manual.
 *
 * A detecção do modo NÃO usa `matchMedia('(hover: hover)')`: em vários setups
 * (navegador desktop com touchscreen, zoom, emulação) ela devolve `false` e o
 * mouse ficava exigindo clique. Aqui o modo vem do próprio evento: `pointerenter`
 * com `pointerType === 'mouse'` liga o hover; `pointerdown` de toque/pen arma o
 * tile. Assim o comportamento segue o dispositivo que o usuário realmente usa.
 */
export function HeroTile({
  hero,
  role,
  focused,
  armed,
  onSelect,
  onFocus,
  onArm,
}: {
  hero: HeroGuide
  role: RoleKey
  focused: boolean
  armed: boolean
  onSelect: (heroId: string, event: MouseEvent<HTMLAnchorElement>, role: RoleKey) => void
  onFocus: (heroId: string) => void
  onArm: (heroId: string) => void
}) {
  const defaultArt = hero.selectionPortraitUrl ?? hero.portraitUrl
  const animationArt = hero.selectionHoverUrl
  const entry = getHeroRankingEntry(hero.id, role)
  const rank = entry?.rank
  const medal = getHeroMedal(rank)

  // null = ainda não decidido (o primeiro evento decide); true = mouse; false = toque.
  const [isMouseMode, setIsMouseMode] = useState<boolean | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const lastInputWasTouch = useRef(false)
  const lingerRef = useRef<number | null>(null)

  const clearLinger = useCallback(() => {
    if (lingerRef.current !== null) {
      window.clearTimeout(lingerRef.current)
      lingerRef.current = null
    }
  }, [])

  useEffect(() => clearLinger, [clearLinger])

  const startHover = useCallback(() => {
    clearLinger()
    setIsMouseMode(true)
    setIsHovering(true)
    onFocus(hero.id)
  }, [clearLinger, onFocus, hero.id])

  const endHover = useCallback(() => {
    clearLinger()
    lingerRef.current = window.setTimeout(() => {
      setIsHovering(false)
      lingerRef.current = null
    }, HOVER_LINGER_MS)
  }, [clearLinger])

  const handlePointerEnter = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const isTouch = event.pointerType === 'touch' || event.pointerType === 'pen'

    lastInputWasTouch.current = isTouch

    if (isTouch) {
      // Toque não liga hover; o modo fica em toque até o mouse reaparecer.
      setIsMouseMode(false)
      return
    }

    startHover()
  }

  const handlePointerLeave = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') return
    endHover()
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      lastInputWasTouch.current = true
      setIsMouseMode(false)
    }
  }

  // Teclado (Tab) também deve animar; só o foco vindo de toque é ignorado.
  const handleFocus = () => {
    if (lastInputWasTouch.current) return
    startHover()
  }

  // O GIF só é montado quando precisa: hover (mouse) ou tile armado (toque).
  const showAnimation = Boolean(animationArt) && (isMouseMode === false ? armed : isHovering)
  const isArmed = isMouseMode === false && armed

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isMouseMode === false && !armed) {
      // 1º toque no mobile: arma o tile (mostra a animação) em vez de navegar.
      event.preventDefault()
      clearLinger()
      onArm(hero.id)
      onFocus(hero.id)
      return
    }

    onSelect(hero.id, event, role)
  }

  return (
    <a
      aria-label={`Abrir guia de ${hero.name} como ${roleLabel[role]}`}
      className={`hero-tile ${focused ? 'is-focused' : ''} ${showAnimation ? 'is-hovering' : ''} ${
        isArmed ? 'is-armed' : ''
      }`}
      href={heroPath(hero.id)}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onFocus={handleFocus}
      onBlur={endHover}
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
      {showAnimation ? (
        <span className="hero-tile-art is-hover">
          <img src={animationArt} alt="" />
        </span>
      ) : null}
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
      {isArmed ? (
        <span className="hero-tile-cta">
          Próximo
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      ) : null}
    </a>
  )
}
