import type { CSSProperties } from 'react'
import type { HeroGuide, RoleGuide } from '../../types'
import { firstSentence } from '../../lib/text'
import { RichText } from '../ui/RichText'
import { StatGrid } from '../ui/StatGrid'

/**
 * Banner do guia: nome, gancho curto (primeira frase da leitura principal)
 * e as três decisões rápidas. Nunca mostra o texto completo — o detalhe
 * fica no primer, logo abaixo.
 */
export function HeroBanner({
  hero,
  guide,
  roleName,
}: {
  hero: HeroGuide
  guide: RoleGuide
  roleName: string
}) {
  const hook = firstSentence(hero.coreRead[0] ?? hero.confidenceSummary, 150)
  const firstDecision = guide.upgradePlan[0]?.ability ?? guide.dashGuide.ability

  return (
    <div
      className="hero-banner"
      style={{ '--hero-image': `url(${hero.bannerUrl})` } as CSSProperties}
    >
      <div className="hero-copy">
        <p className="kicker">Guia enriquecido</p>
        <h1 data-multiword={/[\s-]/.test(hero.name) || undefined}>{hero.name}</h1>
        <p className="hero-hook">
          <RichText text={hook} />
        </p>
        <StatGrid
          className="hero-stats"
          items={[
            { label: 'Role', value: roleName },
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
