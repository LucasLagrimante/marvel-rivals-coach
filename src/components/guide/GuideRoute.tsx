import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react'
import { ArrowLeft, RotateCw } from 'lucide-react'
import type { HeroGuide, HeroSummary, RoleKey } from '../../types'
import { getLoadedHero, loadHero } from '../../data/heroLoader'
import { menuPath, type SectionKey } from '../../lib/routes'
import { roleLabel } from '../../lib/roles'
import { heroThemeStyle } from '../../lib/theme'
import { firstSentence } from '../../lib/text'
import { Topbar } from '../shell/Topbar'
import { RichText } from '../ui/RichText'
import { GuideScreen } from './GuideScreen'

/**
 * Rota do guia: carrega o chunk do herói sob demanda. Enquanto carrega, mostra
 * o banner já com nome, arte e gancho do índice — a página nunca abre vazia.
 */
export function GuideRoute({
  summary,
  role,
  onRoleChange,
  onOpenMenu,
  onNavigate,
}: {
  summary: HeroSummary
  role: RoleKey
  onRoleChange: (role: RoleKey) => void
  onOpenMenu: (event?: MouseEvent<HTMLAnchorElement>) => void
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  const [hero, setHero] = useState<HeroGuide | undefined>(() => getLoadedHero(summary.id))
  const [error, setError] = useState<Error | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (hero) return
    let alive = true

    loadHero(summary.id).then(
      (loaded) => alive && setHero(loaded),
      (reason: unknown) => alive && setError(reason instanceof Error ? reason : new Error(String(reason))),
    )

    return () => {
      alive = false
    }
  }, [summary.id, hero, attempt])

  const guide = hero ? (hero.roleGuides[role] ?? hero.roleGuides[hero.roles[0]]) : undefined

  if (hero && guide) {
    return (
      <GuideScreen
        hero={hero}
        guide={guide}
        role={role}
        onRoleChange={onRoleChange}
        onOpenMenu={onOpenMenu}
        onNavigate={onNavigate}
      />
    )
  }

  return (
    <main className="app-shell detail-shell" style={heroThemeStyle(summary)} aria-busy={!error}>
      <Topbar
        onOpenMenu={onOpenMenu}
        actions={
          <a className="back-button" href={menuPath()} onClick={onOpenMenu}>
            <ArrowLeft size={17} aria-hidden="true" />
            <span className="back-button-label">Voltar ao início</span>
          </a>
        }
      />
      <div className="detail-page">
        <section className="hero-stage">
          <div className="hero-banner is-pending" style={{ '--hero-image': `url(${summary.bannerUrl})` } as CSSProperties}>
            <div className="hero-copy">
              <h1 data-multiword={/[\s-]/.test(summary.name) || undefined}>{summary.name}</h1>
              <p className="hero-hook">
                <RichText text={firstSentence(summary.hook, 128)} />
              </p>
              <p className="guide-pending-note" role="status">
                {error ? (
                  <>
                    Não foi possível carregar o manual ({error.message}).{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setError(null)
                        setAttempt((value) => value + 1)
                      }}
                    >
                      <RotateCw size={14} aria-hidden="true" /> Tentar de novo
                    </button>
                  </>
                ) : (
                  <>Abrindo o manual de {roleLabel[role]}…</>
                )}
              </p>
            </div>
            <div className="hero-portrait" aria-hidden="true">
              <img src={summary.portraitUrl} alt="" fetchPriority="high" />
            </div>
          </div>
          {!error ? (
            <div className="guide-skeleton" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          ) : null}
        </section>
      </div>
    </main>
  )
}
