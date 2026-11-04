import type { CSSProperties, MouseEvent } from 'react'
import { Trophy } from 'lucide-react'
import type { HeroGuide, RoleGuide, RoleKey } from '../../types'
import { firstSentence } from '../../lib/text'
import { rankingPath, type SectionKey } from '../../lib/routes'
import { getHeroRankingEntry, rankings } from '../../lib/rankings'
import { scrollToSection } from '../../lib/scroll'
import { RichText } from '../ui/RichText'
import { StatGrid } from '../ui/StatGrid'

/**
 * Banner do guia: nome, gancho curto, dados integrados do meta da temporada
 * e, em herói com livro de upgrades, o primeiro upgrade da ordem de compra.
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
  const hook = firstSentence(hero.coreRead[0] ?? hero.confidenceSummary, 128)
  // "1º upgrade" só faz sentido em herói com livro de compra (Deadpool); nos demais o kit é fixo.
  const firstUpgrade = hero.upgradeBook
    ? [...guide.upgradePlan].sort((a, b) => a.rank - b.rank)[0]?.ability
    : undefined
  const meta = getHeroRankingEntry(hero.id, role)
  // Só o "melhor no geral" sobe para o banner; a comparação completa fica no painel de Team-Up.
  const bestTeamUp = hero.teamUps?.options.find((option) => option.name === hero.teamUps?.recommended)

  return (
    <div
      className="hero-banner"
      style={{ '--hero-image': `url(${hero.bannerUrl})` } as CSSProperties}
    >
      <div className="hero-copy">
        <div className="hero-kicker-row">
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
          {bestTeamUp ? (
            <a
              className="hero-teamup"
              href="#guia-teamup"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('guia-teamup')
              }}
              title={`Melhor Team-Up: ${bestTeamUp.name} com ${bestTeamUp.partner} · ver detalhes`}
            >
              <span className="hero-teamup-icon">
                <img src={bestTeamUp.iconUrl} alt="" width={26} height={26} decoding="async" />
              </span>
              <span className="hero-teamup-text">
                <span className="hero-teamup-label">Dupla de combate</span>
                <span className="hero-teamup-name">
                  <RichText text={bestTeamUp.name} />
                </span>
              </span>
              <span className="hero-teamup-partner">
                <img src={bestTeamUp.partnerPortraitUrl} alt="" width={30} height={30} decoding="async" />
                <span>{bestTeamUp.partner}</span>
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
            ...(firstUpgrade ? [{ label: '1º upgrade', value: <RichText text={firstUpgrade} /> }] : []),
          ]}
        />
      </div>
      <div className="hero-portrait" aria-hidden="true">
        <img src={hero.portraitUrl} alt="" fetchPriority="high" decoding="async" />
      </div>
    </div>
  )
}
