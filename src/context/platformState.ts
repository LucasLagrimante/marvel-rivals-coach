import { createContext, useContext } from 'react'
import type { Platform } from '../data/platformControls'

interface PlatformContextValue {
  platform: Platform
  setPlatform: (platform: Platform) => void
}

export const PlatformContext = createContext<PlatformContextValue>({
  platform: 'pc',
  setPlatform: () => {},
})

export function usePlatform() {
  return useContext(PlatformContext)
}
