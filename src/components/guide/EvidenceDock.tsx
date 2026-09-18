import { Database, X } from 'lucide-react'
import type { HeroGuide, Source } from '../../types'
import { displayConfidence, sourceIcon, sourceLabel } from '../../lib/sources'
import { More } from '../ui/More'
import { RichText } from '../ui/RichText'
import { RichParagraph } from '../ui/RichParagraph'

function SourceCard({ source }: { source: Source }) {
  const Icon = sourceIcon[source.kind]
  const [firstTakeaway, ...rest] = source.takeaways

  return (
    <article className="source-card">
      <div className="source-card-head">
        <span className="source-kind">
          <Icon size={14} aria-hidden="true" />
          {sourceLabel(source.kind)}
        </span>
        <span className="source-confidence">confiança {displayConfidence(source.confidence)}</span>
      </div>

      <h4>
        <RichText text={source.title} />
      </h4>

      {firstTakeaway ? (
        <p className="source-takeaway">
          <RichText text={firstTakeaway} />
        </p>
      ) : null}

      {rest.length > 0 ? (
        <More label="Outros aprendizados" count={rest.length}>
          <ul className="bullet-list is-plain">
            {rest.map((takeaway) => (
              <li key={takeaway}>
                <RichText text={takeaway} />
              </li>
            ))}
          </ul>
        </More>
      ) : null}

      <a href={source.url} target="_blank" rel="noreferrer">
        Abrir fonte
      </a>
    </article>
  )
}

/** Dock flutuante com fontes, cobertura e metadata do guia. */
export function EvidenceDock({
  hero,
  sources,
  open,
  onOpenChange,
}: {
  hero: HeroGuide
  sources: Source[]
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <div className="evidence-dock">
      {open ? (
        <div className="evidence-panel" role="dialog" aria-label="Fontes e metadata">
          <header className="evidence-head">
            <div className="section-head-copy">
              <p className="kicker">Rastreabilidade</p>
              <h3>Fontes e metadata</h3>
              <p className="section-head-desc">Última verificação em {hero.lastVerified}.</p>
              <RichParagraph
                className="evidence-summary"
                text={hero.confidenceSummary}
                clamp={2}
                threshold={200}
                moreLabel="Ler metodologia"
              />
            </div>
            <button type="button" className="evidence-close" onClick={() => onOpenChange(false)} aria-label="Fechar fontes">
              <X size={18} />
            </button>
          </header>

          <div className="coverage-grid">
            {hero.sourceCoverage.map((coverage) => {
              const Icon = sourceIcon[coverage.kind]

              return (
                <article className="coverage-card" key={coverage.kind}>
                  <div>
                    <strong>
                      <Icon size={14} aria-hidden="true" />
                      {coverage.label}
                    </strong>
                    <p>
                      <RichText text={coverage.status} />
                    </p>
                  </div>
                  <span className="coverage-count">{coverage.count}</span>
                </article>
              )
            })}
          </div>

          <div className="source-grid">
            {sources.map((source) => (
              <SourceCard source={source} key={source.id} />
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className="evidence-toggle"
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
      >
        <Database size={16} aria-hidden="true" />
        <span>Fontes e metadata</span>
        <strong>{hero.sources.length}</strong>
      </button>
    </div>
  )
}
