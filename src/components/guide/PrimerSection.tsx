import { Crown, Gauge, Heart, MapPin, Repeat2, Sparkles, Target } from 'lucide-react'
import type { HeroGuide, RoleGuide } from '../../types'
import { leadTitle, shortLabel } from '../../lib/text'
import { Panel } from '../ui/Panel'
import { SectionHead } from '../ui/SectionHead'
import { Chip } from '../ui/Chip'
import { Callout } from '../ui/Callout'
import { RichParagraph } from '../ui/RichParagraph'
import { More } from '../ui/More'
import { RichText } from '../ui/RichText'
import { FlowChain, type FlowStep } from '../ui/FlowChain'

const pillarIcons = [MapPin, Repeat2, Crown]

/** Monta o loop de habilidades combinando abilityLoop com os passos do plano. */
function buildLoop(guide: RoleGuide): FlowStep[] {
  const entries = guide.abilityLoop ?? guide.upgradePlan.slice(0, 5).map((step) => step.ability)
  const byAbility = new Map(guide.upgradePlan.map((step) => [step.ability, step]))

  return entries.map((slot) => {
    const name = typeof slot === 'string' ? slot : slot.ability
    const input = typeof slot === 'string' ? undefined : slot.input
    const step = byAbility.get(name) ?? guide.upgradePlan.find((entry) => entry.ability.startsWith(name))
    const ultimate = guide.ultimates.find((entry) => entry.name.startsWith(name))

    if (!step) {
      return { title: name, token: input ?? (ultimate ? 'Q' : undefined) }
    }

    return {
      token: input ?? step.input,
      spellNumber: step.spellNumber,
      title: name,
      note: step.label,
    }
  })
}

/**
 * Primer — o "V principal" do herói em uma tela:
 * quem é, quando escolher, os pilares do kit e o loop de habilidades.
 */
export function PrimerSection({ guide, hero }: { guide: RoleGuide; hero: HeroGuide }) {
  const difficulty = leadTitle(guide.difficulty)

  return (
    <Panel id="guia-visao-geral" full className="primer-section">
      <SectionHead
        kicker={guide.nickname}
        title={guide.label}
        description={guide.job}
        icon={Target}
      />

      <div className="primer-meta">
        <Chip icon={Heart} tone="accent">
          {guide.health}
        </Chip>
        {difficulty.title ? (
          <Chip icon={Gauge} tone="soft">
            {difficulty.title}
          </Chip>
        ) : null}
        <Chip icon={Sparkles}>{guide.upgradePlan.length} decisões mapeadas</Chip>
      </div>

      {difficulty.body ? (
        <RichParagraph className="primer-note" text={difficulty.body} clamp={2} threshold={150} moreLabel="Como executar" />
      ) : null}

      <Callout tone="rule" title="Escolha assim" className="primer-verdict">
        <RichParagraph text={guide.verdict} clamp={3} />
      </Callout>

      {hero.coreRead.length > 0 ? (
        <div className="pillar-block">
          <p className="kicker">Pilares do kit</p>
          <div className="pillar-grid">
            {hero.coreRead.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length]
              const { title, body } = leadTitle(pillar)

              return (
                <article className="pillar-card" key={pillar}>
                  <div className="pillar-card-head">
                    <Icon size={16} aria-hidden="true" />
                    <strong>
                      <RichText text={title ?? shortLabel(pillar)} />
                    </strong>
                  </div>
                  <RichParagraph text={body} clamp={4} threshold={360} moreLabel="Ler completo" />
                </article>
              )
            })}
          </div>
        </div>
      ) : null}

      <div className="loop-block">
        <p className="kicker">Loop de habilidades</p>
        <FlowChain steps={buildLoop(guide)} />
      </div>

      <More label="Ver plano de jogo completo" className="primer-more">
        <ul className="bullet-list is-plain">
          {guide.playstyle.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      </More>
    </Panel>
  )
}
