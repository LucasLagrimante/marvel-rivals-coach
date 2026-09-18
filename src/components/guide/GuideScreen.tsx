import { useState, type MouseEvent } from 'react'
import { ArrowLeft } from 'lucide-react'
import type { HeroGuide, RoleGuide, RoleKey } from '../../types'
import { menuPath } from '../../lib/routes'
import { roleLabel } from '../../lib/roles'
import { heroThemeStyle } from '../../lib/theme'
import { Topbar } from '../shell/Topbar'
import { HeroBanner } from './HeroBanner'
import { RoleTabs } from './RoleTabs'
import { HeroGuideLayout } from './HeroGuideLayout'
import { GuideSectionNav } from './GuideSectionNav'

function BattleContext({ hero, guide, role }: { hero: HeroGuide; guide: RoleGuide; role: RoleKey }) {
  return (
    <div className="battle-context" aria-label="Contexto do guia atual">
      <span className="battle-context-label">Guia ativo</span>
      <strong>{hero.name}</strong>
      <span>
        {roleLabel[role]} · {guide.nickname}
      </span>
    </div>
  )
}

/** Tela do guia: banner, abas de role e as 7 seções do HeroGuideLayout. */
export function GuideScreen({
  hero,
  guide,
  role,
  onRoleChange,
  onOpenMenu,
}: {
  hero: HeroGuide
  guide: RoleGuide
  role: RoleKey
  onRoleChange: (role: RoleKey) => void
  onOpenMenu: (event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  const [evidenceOpen, setEvidenceOpen] = useState(false)

  return (
    <main className="app-shell detail-shell" style={heroThemeStyle(hero)}>
      <Topbar
        center={<BattleContext hero={hero} guide={guide} role={role} />}
        onOpenMenu={onOpenMenu}
        nav={<GuideSectionNav evidenceOpen={evidenceOpen} onOpenEvidence={() => setEvidenceOpen(true)} />}
        actions={
          <a className="back-button" href={menuPath()} onClick={onOpenMenu}>
            <ArrowLeft size={17} aria-hidden="true" />
            <span className="back-button-label">Voltar ao menu</span>
          </a>
        }
      />

      <div className="detail-page">
        <section className="hero-stage">
          <HeroBanner hero={hero} guide={guide} roleName={roleLabel[role]} />
          <RoleTabs roles={hero.roles} active={role} onChange={onRoleChange} />
          <HeroGuideLayout
            guide={guide}
            hero={hero}
            evidenceOpen={evidenceOpen}
            onEvidenceOpenChange={setEvidenceOpen}
          />
        </section>
      </div>
    </main>
  )
}
