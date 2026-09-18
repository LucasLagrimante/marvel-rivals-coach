import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react'
import { heroes } from './data/heroes'
import type { RoleKey } from './types'
import { heroIdFromPath, heroPath, menuPath } from './lib/routes'
import { SelectScreen } from './components/select/SelectScreen'
import { GuideScreen } from './components/guide/GuideScreen'

function App() {
  const heroIds = useMemo(() => heroes.map((hero) => hero.id), [])
  const initialHeroId = heroIdFromPath(heroIds)
  const initialHero = heroes.find((hero) => hero.id === initialHeroId)

  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(initialHeroId)
  const [selectedRole, setSelectedRole] = useState<RoleKey>(initialHero?.roles[0] ?? 'vanguard')
  const [query, setQuery] = useState('')

  const selectedHero = heroes.find((hero) => hero.id === selectedHeroId)
  const guide = selectedHero
    ? selectedHero.roleGuides[selectedRole] ?? selectedHero.roleGuides[selectedHero.roles[0]]
    : undefined

  const syncSelectedHero = useCallback((heroId: string | null, role?: RoleKey) => {
    const hero = heroes.find((entry) => entry.id === heroId)

    setSelectedHeroId(hero?.id ?? null)
    setSelectedRole(role && hero?.roles.includes(role) ? role : (hero?.roles[0] ?? 'vanguard'))
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  const selectHero = useCallback(
    (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => {
      event?.preventDefault()
      syncSelectedHero(heroId, role)

      if (window.location.pathname !== heroPath(heroId)) {
        window.history.pushState({ heroId }, '', heroPath(heroId))
      }
    },
    [syncSelectedHero],
  )

  const openMenu = useCallback(
    (event?: MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault()
      syncSelectedHero(null)

      if (window.location.pathname !== menuPath()) {
        window.history.pushState({ heroId: null }, '', menuPath())
      }
    },
    [syncSelectedHero],
  )

  useEffect(() => {
    const handlePopState = () => syncSelectedHero(heroIdFromPath(heroIds))

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [heroIds, syncSelectedHero])

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')

    if (!selectedHero) {
      document.title = 'Marvel Rivals Coach'
      description?.setAttribute(
        'content',
        'Guias rápidos de coaching para escolher personagens e decidir a próxima luta em Marvel Rivals.',
      )
      return
    }

    document.title = `${selectedHero.name} | Marvel Rivals Coach`
    description?.setAttribute('content', `${selectedHero.name}: ${selectedHero.coreRead[0]}`)
  }, [selectedHero])

  if (!selectedHero || !guide) {
    return <SelectScreen heroes={heroes} query={query} onQueryChange={setQuery} onSelect={selectHero} />
  }

  return (
    <GuideScreen
      hero={selectedHero}
      guide={guide}
      role={selectedRole}
      onRoleChange={setSelectedRole}
      onOpenMenu={openMenu}
    />
  )
}

export default App
