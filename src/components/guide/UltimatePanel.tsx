import { Crown } from 'lucide-react'
import type { RoleGuide } from '../../types'
import { SectionHead } from '../ui/SectionHead'
import { Chip } from '../ui/Chip'
import { Callout } from '../ui/Callout'
import { FactLine } from '../ui/FactLine'
import { RichParagraph } from '../ui/RichParagraph'

/** Ultimate do herói: quando usar, como executar e o valor real — com stance quando existe mais de uma. */
export function UltimatePanel({ guide }: { guide: RoleGuide }) {
  const hasMultiple = guide.ultimates.length > 1

  return (
    <>
      <SectionHead kicker="Ultimate" title={guide.ultimates[0]?.name ?? 'Ultimate'} icon={Crown} />

      <div className="ultimate-stack">
        {guide.ultimates.map((ultimate, index) => (
          <article className="ultimate-block" key={`${ultimate.name}-${ultimate.stance}-${index}`}>
            {hasMultiple ? <Chip tone="soft">{ultimate.stance}</Chip> : null}

            <Callout tone="rule" title="Quando usar">
              <RichParagraph text={ultimate.bestUse} clamp={3} />
            </Callout>

            <div className="ultimate-facts">
              <FactLine label="Execução" text={ultimate.execution} tone="neutral" clamp={4} />
              <FactLine label="Valor" text={ultimate.upgradeValue} tone="upgrade" clamp={4} />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
