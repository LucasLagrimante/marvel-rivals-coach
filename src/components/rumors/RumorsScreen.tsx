import type { MouseEvent } from 'react'
import { AlertTriangle } from 'lucide-react'
import { rumors, rumorConfidenceLabel, rumorStatusLabel, type RumorStatus } from '../../data/rumors'
import type { SectionKey } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'

const statusOrder: RumorStatus[] = ['aguardando-definicao', 'validado', 'descartado']

export function RumorsScreen({
  onNavigate,
}: {
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <main className="app-shell rumors-shell">
      <Topbar sections={<SectionNav active="rumores" onNavigate={onNavigate} />} />
      <section className="page screen rumors-screen" aria-labelledby="rumors-title">
        <header className="screen-heading rumors-heading">
          <h1 id="rumors-title">Rumores</h1>
          <span className="speculation-seal"><AlertTriangle size={15} aria-hidden="true" /> Área de especulação — conteúdo separado dos manuais</span>
          <p>Informações em investigação, sem misturar especulação com a contagem ou os dados dos heróis.</p>
        </header>
        <div className="rumors-grid">
          {statusOrder.map((status) => {
            const entries = rumors.filter((rumor) => rumor.status === status)
            return (
              <section className={`rumor-column rumor-column-${status}`} key={status} aria-labelledby={`rumor-status-${status}`}>
                <div className="rumor-column-heading">
                  <h2 id={`rumor-status-${status}`}>{rumorStatusLabel[status]}</h2>
                  <span>{entries.length}</span>
                </div>
                {entries.length === 0 ? <p className="rumor-empty">Nenhum rumor nesta categoria.</p> : entries.map((rumor) => (
                  <article className="rumor-card" key={rumor.id}>
                    <span className="speculation-badge" data-status={rumor.status}>{rumorStatusLabel[rumor.status]}</span>
                    <h3>{rumor.title}</h3>
                    <p>{rumor.summary}</p>
                    <p className="rumor-note">{rumor.speculation}</p>
                    {rumor.links.length > 0 && (
                      <ul className="rumor-links">
                        {rumor.links.map((link) => (
                          <li key={link.url}>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                    <footer>
                      <span>{rumorConfidenceLabel[rumor.confidence]}</span>
                      <span>{rumor.source}</span>
                    </footer>
                  </article>
                ))}
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}
