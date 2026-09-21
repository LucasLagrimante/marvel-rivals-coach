import { AlertTriangle } from 'lucide-react'
import { rumors, rumorConfidenceLabel, rumorStatusLabel, type RumorStatus } from '../../data/rumors'
import { baseUrl } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'

const statusOrder: RumorStatus[] = ['aguardando-definicao', 'validado', 'descartado']

export function RumorsScreen({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <main className="app-shell rumors-shell">
      <Topbar
        onOpenMenu={onOpenMenu}
        actions={<a className="meta-pill rumors-menu-link" href={baseUrl()} onClick={(event) => { event.preventDefault(); onOpenMenu() }}>Guias de heróis</a>}
      />
      <section className="rumors-screen" aria-labelledby="rumors-title">
        <header className="rumors-heading">
          <span className="speculation-seal"><AlertTriangle size={15} aria-hidden="true" /> Área de especulação</span>
          <p className="kicker">Conteúdo separado dos guias</p>
          <h1 id="rumors-title">Rumores</h1>
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
                    <span className="speculation-badge">Especulação</span>
                    <h3>{rumor.title}</h3>
                    <p>{rumor.summary}</p>
                    <p className="rumor-note">{rumor.speculation}</p>
                    <p className="rumor-confidence">{rumorConfidenceLabel[rumor.confidence]}</p>
                    {rumor.links.length > 0 && (
                      <ul className="rumor-links">
                        {rumor.links.map((link) => (
                          <li key={link.url}>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                    <footer><span>{rumor.source}</span><time>{rumor.updatedAt}</time></footer>
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
