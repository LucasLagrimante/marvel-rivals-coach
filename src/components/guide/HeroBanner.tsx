import type { CSSProperties, MouseEvent } from 'react'
import { Trophy } from 'lucide-react'
import type { HeroGuide, RoleGuide, RoleKey } from '../../types'
import { firstSentence } from '../../lib/text'
import { rankingPath, type SectionKey } from '../../lib/routes'
import { getHeroRankingEntry, rankings } from '../../lib/rankings'
import { RichText } from '../ui/RichText'
import { StatGrid } from '../ui/StatGrid'

/**
 * Banner do guia: nome, gancho curto, dados integrados do meta da temporada
 * e decisões rápidas.
 */
export function HeroBanner({
  hero,
  guide,
  role,
  roleName,
  onNavigate,
}: {
  hero: HeroGuide
  guide: RoleGuide
  role: RoleKey
  roleName: string
  onNavigate?: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  const hook = firstSentence(hero.coreRead[0] ?? hero.confidenceSummary, 150)
  const firstDecision = guide.upgradePlan[0]?.ability ?? guide.dashGuide.ability
  const meta = getHeroRankingEntry(hero.id, role)

  return (
    <div
      className="hero-banner"
      style={{ '--hero-image': `url(${hero.bannerUrl})` } as CSSProperties}
    >
      <div className="hero-copy">
        <div className="hero-kicker-row">
          <p className="kicker">Guia enriquecido</p>
          {meta ? (
            <a
              className="hero-meta-badge"
              href={rankingPath()}
              onClick={(event) => onNavigate?.('ranking', event)}
              title={`Ver ${hero.name} no ranking ranqueado · ${rankings.season}`}
            >
              <Trophy size={13} aria-hidden="true" />
              <span className="hero-meta-season">{rankings.season}</span>
              <span className="hero-meta-rank">#{meta.rank} em {roleName}</span>
              <span className="hero-meta-tier" data-tier={meta.tier}>
                Tier {meta.tier}
              </span>
            </a>
          ) : null}
        </div>
        <h1 data-multiword={/[\s-]/.test(hero.name) || undefined}>{hero.name}</h1>
        <p className="hero-hook">
          <RichText text={hook} />
        </p>
        <StatGrid
          className="hero-stats"
          items={[
            { label: 'Role', value: roleName },
            {
              label: 'Meta',
              value: meta ? `#${meta.rank} (${meta.tier})` : '—',
            },
            {
              label: 'Vitórias',
              value: meta
                ? `${meta.winRate.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
                : '—',
            },
            { label: 'Foco', value: <RichText text={guide.nickname} /> },
            { label: 'Primeira decisão', value: <RichText text={firstDecision} /> },
          ]}
        />
      </div>
      <div className="hero-portrait" aria-hidden="true">
        <img src={hero.portraitUrl} alt="" />
      </div>
    </div>
  )
}
