---
name: fontsource-import-sem-extensao
description: Pacotes @fontsource-variable exportam './*' → './*.css'; importar 'wght.css' falha no Vite e o TS pede declaração de módulo
module: ui
metadata:
  type: feedback
---
**Why:** Em 03/11/2026 `import '@fontsource-variable/big-shoulders-display/wght.css'` quebrou o dev server ("Failed to resolve import") porque o `exports` do pacote já acrescenta `.css`; sem extensão o Vite resolve, mas o `tsc -b` dá TS2882 (side-effect import sem tipos).
**How to apply:** Importar como `'@fontsource-variable/<fonte>/wght'` (ou `/wdth`) no `main.tsx` e manter `src/fonts.d.ts` com `declare module '@fontsource-variable/*'`.
