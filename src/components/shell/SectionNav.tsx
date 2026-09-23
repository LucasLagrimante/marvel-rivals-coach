import type { MouseEvent } from 'react'
import { BookOpen, Compass, Eye, Trophy, type LucideIcon } from 'lucide-react'
import { cx } from '../../lib/cx'
import { manualsPath, menuPath, rankingPath, rumorsPath, type SectionKey } from '../../lib/routes'
import './SectionNav.css'

const sections: Array<{ key: SectionKey; label: string; href: string; icon: LucideIcon }> = [
  { key: 'menu', label: 'Menu', href: menuPath(), icon: Compass },
  { key: 'manuais', label: 'Manuais', href: manualsPath(), icon: BookOpen },
  { key: 'ranking', label: 'Ranking', href: rankingPath(), icon: Trophy },
  { key: 'rumores', label: 'Rumores', href: rumorsPath(), icon: Eye },
]

/** Navegação entre as seções do site (menu, manuais, ranking, rumores). */
export function SectionNav({
  active,
  onNavigate,
}: {
  active: SectionKey
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <nav className="section-nav" aria-label="Seções do site">
      {sections.map(({ key, label, href, icon: Icon }) => {
        const current = key === active

        return (
          <a
            key={key}
            className={cx('section-link', current && 'is-active')}
            href={href}
            aria-current={current ? 'page' : undefined}
            onClick={(event) => onNavigate(key, event)}
          >
            <Icon size={15} strokeWidth={2.4} aria-hidden="true" />
            <span>{label}</span>
          </a>
        )
      })}
    </nav>
  )
}
