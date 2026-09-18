---
name: banner-nao-cortar-conteudo
description: Banner do herói cortava texto por flex-shrink e por conteúdo maior que a altura fixa; correção com safe center + flex none + stats compactos
module: ui
metadata:
  type: feedback
---
**Why:** No banner (`.hero-banner`, altura fixa) o hook clampado em 2 linhas era comprimido pelo flex (`flex-shrink: 1`), cortando a segunda linha ao meio; heróis com apelido longo (Gorr, Deadpool) estouravam a altura e cortavam os stats no rodapé do banner.
**How to apply:** Em `.hero-copy`: `justify-content: safe center` (cai para `start` quando transborda) e `.hero-copy > * { flex: none }`. Manter `.hero-stats` com `minmax(min(100%, 8.5rem), 1fr)` para caber 3 stats em 1 linha de 660–1920px. Nunca mudar o banner para `min-height`. Validar com `scrollHeight - clientHeight <= 2` em `.hero-copy` de 1920 a 320px.
