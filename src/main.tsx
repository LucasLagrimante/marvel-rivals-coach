import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth'
import '@fontsource-variable/big-shoulders-display/wght'
import './index.css'
import App from './App.tsx'
import { PlatformProvider } from './context/PlatformContext'
import { registerServiceWorker } from './lib/assetCache'

registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlatformProvider>
      <App />
    </PlatformProvider>
  </StrictMode>,
)
