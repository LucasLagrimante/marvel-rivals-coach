import { useEffect, useState, type MouseEvent } from 'react'
import { cx } from '../../lib/cx'
import { scrollToSection } from '../../lib/scroll'

const guideSections = [
  { id: 'guia-visao-geral', label: 'Visão geral' },
  { id: 'guia-teamup', label: 'Team-Up' },
  { id: 'guia-sistema', label: 'Sistema' },
  { id: 'guia-prioridade', label: 'Prioridade' },
  { id: 'guia-mecanica', label: 'Mecânica' },
  { id: 'guia-ultimate', label: 'Ultimate' },
  { id: 'guia-padroes', label: 'Padrões' },
]

/** Links de seção do guia no topbar, com destaque da seção visível e atalho para as fontes. */
export function GuideSectionNav({
  evidenceOpen,
  onOpenEvidence,
}: {
  evidenceOpen: boolean
  onOpenEvidence: () => void
}) {
  const [activeId, setActiveId] = useState(guideSections[0].id)

  useEffect(() => {
    const targets = guideSections
      .map((section) => document.getElementById(section.id))
      .filter((target): target is HTMLElement => Boolean(target))

    if (targets.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (current) {
          setActiveId(current.target.id)
        }
      },
      { rootMargin: '-42% 0px -50% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setActiveId(id)
    scrollToSection(id)
  }

  return (
    <nav className="guide-section-nav" aria-label="Seções do guia">
      {guideSections.map((section) => (
        <a
          key={section.id}
          className={cx('guide-section-link', section.id === activeId && 'is-active')}
          href={`#${section.id}`}
          aria-current={section.id === activeId ? 'location' : undefined}
          onClick={(event) => handleSectionClick(event, section.id)}
        >
          {section.label}
        </a>
      ))}

      <button
        type="button"
        className={cx('guide-section-link', evidenceOpen && 'is-active')}
        aria-expanded={evidenceOpen}
        onClick={onOpenEvidence}
      >
        Fontes
      </button>
    </nav>
  )
}
