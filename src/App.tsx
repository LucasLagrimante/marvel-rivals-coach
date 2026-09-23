import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react'
import { heroes } from './data/heroes'
import type { RoleKey } from './types'
import {
  heroIdFromPath,
  heroPath,
  screenFromPath,
  sectionPath,
  type ScreenKey,
  type SectionKey,
} from './lib/routes'
import { HubScreen } from './components/hub/HubScreen'
import { SelectScreen } from './components/select/SelectScreen'
import { RankingScreen } from './components/rankings/RankingScreen'
import { GuideScreen } from './components/guide/GuideScreen'
import { RumorsScreen } from './components/rumors/RumorsScreen'

const screenMeta: Record<SectionKey, { title: string; description: string }> = {
  menu: {
    title: 'Marvel Rivals Coach',
    description:
      'Guias rápidos de coaching para escolher personagens e decidir a próxima luta em Marvel Rivals.',
  },
  manuais: {
    title: 'Manuais | Marvel Rivals Coach',
    description: 'Manuais de herói com truques, team-ups, ultimates e fontes rastreáveis.',
  },
  ranking: {
    title: 'Ranking | Marvel Rivals Coach',
    description: 'Ranking de personagens por rating, taxa de vitória e pick rate, com dados do Counterwatch.',
  },
  rumores: {
    title: 'Rumores | Marvel Rivals Coach',
    description: 'Candidatos em investigação sobre próximos heróis, sempre separados dos dados dos manuais.',
  },
}

function App() {
  const heroIds = useMemo(() => heroes.map((hero) => hero.id), [])
  const initialHeroId = heroIdFromPath(heroIds)
  const initialHero = heroes.find((hero) => hero.id === initialHeroId)

  const [screen, setScreen] = useState<ScreenKey>(() => (initialHeroId ? 'guia' : screenFromPath()))
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(initialHeroId)
  const [selectedRole, setSelectedRole] = useState<RoleKey>(initialHero?.roles[0] ?? 'vanguard')
  const [query, setQuery] = useState('')

  const selectedHero = heroes.find((hero) => hero.id === selectedHeroId)
  const guide = selectedHero
    ? selectedHero.roleGuides[selectedRole] ?? selectedHero.roleGuides[selectedHero.roles[0]]
    : undefined

  const pushPath = useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }
  }, [])

  const syncSelectedHero = useCallback((heroId: string | null, role?: RoleKey) => {
    const hero = heroes.find((entry) => entry.id === heroId)

    setSelectedHeroId(hero?.id ?? null)
    setSelectedRole(role && hero?.roles.includes(role) ? role : (hero?.roles[0] ?? 'vanguard'))
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  const openSection = useCallback(
    (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault()
      syncSelectedHero(null)
      setScreen(target)
      pushPath(sectionPath(target))
    },
    [pushPath, syncSelectedHero],
  )

  const selectHero = useCallback(
    (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => {
      event?.preventDefault()
      syncSelectedHero(heroId, role)
      setScreen('guia')
      pushPath(heroPath(heroId))
    },
    [pushPath, syncSelectedHero],
  )

  useEffect(() => {
    const handlePopState = () => {
      const heroId = heroIdFromPath(heroIds)

      syncSelectedHero(heroId)
      setScreen(heroId ? 'guia' : screenFromPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [heroIds, syncSelectedHero])

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')

    if (screen === 'guia' && selectedHero) {
      document.title = `${selectedHero.name} | Marvel Rivals Coach`
      description?.setAttribute('content', `${selectedHero.name}: ${selectedHero.coreRead[0]}`)
      return
    }

    const meta = screenMeta[(screen === 'guia' ? 'menu' : screen) as SectionKey]
    document.title = meta.title
    description?.setAttribute('content', meta.description)
  }, [screen, selectedHero])

  if (screen === 'guia' && selectedHero && guide) {
    return (
      <GuideScreen
        hero={selectedHero}
        guide={guide}
        role={selectedRole}
        onRoleChange={setSelectedRole}
        onOpenMenu={(event) => openSection('menu', event)}
      />
    )
  }

  if (screen === 'rumores') {
    return <RumorsScreen onNavigate={openSection} />
  }

  if (screen === 'ranking') {
    return <RankingScreen onNavigate={openSection} onSelectHero={selectHero} />
  }

  if (screen === 'manuais') {
    return (
      <SelectScreen
        heroes={heroes}
        query={query}
        onQueryChange={setQuery}
        onSelect={selectHero}
        onNavigate={openSection}
      />
    )
  }

  return <HubScreen onNavigate={openSection} onSelectHero={selectHero} />
}

export default App
