import { Suspense, lazy, useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react'
import { heroIds, getHeroSummary } from './data/heroIndex'
import type { RoleKey } from './types'
import {
  heroIdFromPath,
  heroPath,
  screenFromPath,
  sectionPath,
  type ScreenKey,
  type SectionKey,
} from './lib/routes'
import { pushRecentHero } from './lib/search'
import { SearchContext } from './context/searchState'
import { useSearchHotkeys } from './hooks/useSearchHotkeys'
import { HubScreen } from './components/hub/HubScreen'
import { CommandPalette } from './components/search/CommandPalette'
import { Topbar } from './components/shell/Topbar'
import { SectionNav } from './components/shell/SectionNav'

// Telas fora da home viram chunks próprios; o guia de cada herói é outro chunk (heroLoader).
const loadSelect = () => import('./components/select/SelectScreen')
const loadRanking = () => import('./components/rankings/RankingScreen')
const loadRumors = () => import('./components/rumors/RumorsScreen')
const loadGuide = () => import('./components/guide/GuideRoute')

const SelectScreen = lazy(() => loadSelect().then((mod) => ({ default: mod.SelectScreen })))
const RankingScreen = lazy(() => loadRanking().then((mod) => ({ default: mod.RankingScreen })))
const RumorsScreen = lazy(() => loadRumors().then((mod) => ({ default: mod.RumorsScreen })))
const GuideRoute = lazy(() => loadGuide().then((mod) => ({ default: mod.GuideRoute })))

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

/** Casca enquanto o chunk da tela chega: topbar real + fio de progresso, nunca página vazia. */
function ScreenFallback({ screen, onNavigate }: { screen: ScreenKey; onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <main className="app-shell" aria-busy="true">
      <Topbar sections={screen === 'guia' ? undefined : <SectionNav active={screen} onNavigate={onNavigate} />} />
      <div className="screen-loading" role="progressbar" aria-label="Carregando" />
    </main>
  )
}

function App() {
  const initialHeroId = heroIdFromPath(heroIds)
  const initialHero = getHeroSummary(initialHeroId)

  const [screen, setScreen] = useState<ScreenKey>(() => (initialHeroId ? 'guia' : screenFromPath()))
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(initialHeroId)
  const [selectedRole, setSelectedRole] = useState<RoleKey>(initialHero?.roles[0] ?? 'vanguard')
  const [search, setSearch] = useState<{ open: boolean; seed: string; session: number }>({
    open: false,
    seed: '',
    session: 0,
  })

  const selectedHero = getHeroSummary(selectedHeroId)

  const pushPath = useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }
  }, [])

  const syncSelectedHero = useCallback((heroId: string | null, role?: RoleKey) => {
    const hero = getHeroSummary(heroId)

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
      // Ctrl/⌘/clique do meio: deixa o navegador abrir em nova aba.
      if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1)) return
      event?.preventDefault()
      pushRecentHero(heroId)
      syncSelectedHero(heroId, role)
      setScreen('guia')
      pushPath(heroPath(heroId))
    },
    [pushPath, syncSelectedHero],
  )

  const openSearch = useCallback((seed = '') => {
    setSearch((current) => (current.open ? current : { open: true, seed, session: current.session + 1 }))
  }, [])

  const toggleSearch = useCallback(() => {
    setSearch((current) => ({ open: !current.open, seed: '', session: current.session + (current.open ? 0 : 1) }))
  }, [])

  const closeSearch = useCallback(() => setSearch((current) => ({ ...current, open: false })), [])

  useSearchHotkeys({ open: search.open, onOpen: openSearch, onToggle: toggleSearch, typeToSearch: true })

  const searchContext = useMemo(() => ({ openSearch }), [openSearch])

  useEffect(() => {
    const handlePopState = () => {
      const heroId = heroIdFromPath(heroIds)

      syncSelectedHero(heroId)
      setScreen(heroId ? 'guia' : screenFromPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [syncSelectedHero])

  // Depois do primeiro paint, baixa as outras telas em idle: navegação vira instantânea.
  useEffect(() => {
    const warm = () => {
      void loadSelect()
      void loadGuide()
      void loadRanking()
      void loadRumors()
    }
    const idle = 'requestIdleCallback' in window
    const handle = idle ? window.requestIdleCallback(warm, { timeout: 3000 }) : window.setTimeout(warm, 1500)
    return () => (idle ? window.cancelIdleCallback(handle) : window.clearTimeout(handle))
  }, [])

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')

    if (screen === 'guia' && selectedHero) {
      document.title = `${selectedHero.name} | Marvel Rivals Coach`
      description?.setAttribute('content', `${selectedHero.name}: ${selectedHero.hook}`)
      return
    }

    const meta = screenMeta[(screen === 'guia' ? 'menu' : screen) as SectionKey]
    document.title = meta.title
    description?.setAttribute('content', meta.description)
  }, [screen, selectedHero])

  let content
  if (screen === 'guia' && selectedHero) {
    content = (
      <GuideRoute
        key={selectedHero.id}
        summary={selectedHero}
        role={selectedRole}
        onRoleChange={setSelectedRole}
        onOpenMenu={(event) => openSection('menu', event)}
        onNavigate={openSection}
      />
    )
  } else if (screen === 'rumores') {
    content = <RumorsScreen onNavigate={openSection} />
  } else if (screen === 'ranking') {
    content = <RankingScreen onNavigate={openSection} onSelectHero={selectHero} />
  } else if (screen === 'manuais') {
    content = <SelectScreen onSelect={selectHero} onNavigate={openSection} />
  } else {
    content = <HubScreen onNavigate={openSection} onSelectHero={selectHero} />
  }

  return (
    <SearchContext.Provider value={searchContext}>
      <Suspense fallback={<ScreenFallback screen={screen} onNavigate={openSection} />}>{content}</Suspense>
      {search.open ? (
        <CommandPalette
          key={search.session}
          initialQuery={search.seed}
          onClose={closeSearch}
          onSelectHero={(heroId, role) => selectHero(heroId, undefined, role)}
          onNavigate={(section) => openSection(section)}
        />
      ) : null}
    </SearchContext.Provider>
  )
}

export default App
