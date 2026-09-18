import { Route } from 'lucide-react'
import type { RoleGuide } from '../../types'
import { Panel } from '../ui/Panel'
import { SectionHead } from '../ui/SectionHead'
import { More } from '../ui/More'
import { RichText } from '../ui/RichText'

function PatternStep({ step, index }: { step: string; index: number }) {
  return (
    <li className="pattern-step">
      <span className="pattern-step-index" aria-hidden="true">
        {index + 1}
      </span>
      <span className="pattern-step-text">
        <RichText text={step} />
      </span>
    </li>
  )
}

/** Roteiros de luta: sequências nomeadas com passos numerados. */
export function PatternsPanel({ guide }: { guide: RoleGuide }) {
  if (guide.patterns.length === 0) return null

  return (
    <Panel id="guia-padroes" full className="patterns-panel">
      <SectionHead kicker="Padrões" title="Roteiros de luta" icon={Route} />

      <div className="pattern-grid">
        {guide.patterns.map((pattern) => {
          const visible = pattern.steps.slice(0, 2)
          const hidden = pattern.steps.slice(2)

          return (
            <article className="pattern-card" key={pattern.title}>
              <h4>
                <RichText text={pattern.title} />
              </h4>

              <ol className="pattern-steps">
                {visible.map((step, index) => (
                  <PatternStep step={step} index={index} key={step} />
                ))}
              </ol>

              {hidden.length > 0 ? (
                <More label="Ver roteiro completo" count={hidden.length} className="pattern-more">
                  <ol className="pattern-steps">
                    {hidden.map((step, index) => (
                      <PatternStep step={step} index={index + visible.length} key={step} />
                    ))}
                  </ol>
                </More>
              ) : null}
            </article>
          )
        })}
      </div>
    </Panel>
  )
}
