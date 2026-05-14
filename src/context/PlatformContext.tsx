import { useState, type ReactNode } from 'react'
import type { Platform } from '../data/platformControls'
import { PlatformContext } from './platformState'

const STORAGE_KEY = 'marvel-rivals-coach:platform'

function getInitialPlatform(): Platform {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'pc' || stored === 'playstation' || stored === 'xbox') return stored
  } catch {
    // localStorage indisponível
  }
  return 'pc'
}

export function PlatformProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatformState] = useState<Platform>(getInitialPlatform)

  function setPlatform(next: Platform) {
    setPlatformState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage indisponível
    }
  }

  return <PlatformContext.Provider value={{ platform, setPlatform }}>{children}</PlatformContext.Provider>
}
