---
name: container-nao-estiliza-o-proprio-container
description: Container query não aplica estilo no próprio elemento container — layout do banner mobile só funcionou via media query
module: ui
metadata:
  type: feedback
---
**Why:** O empilhamento do banner no mobile estava dentro de `@container (max-width: 520px) { .hero-banner { grid-template-columns: 1fr; height: auto } }`. Container queries só alcançam descendentes do container — `.hero-banner` é o próprio container, então a regra era ignorada e o banner continuava em 2 colunas no celular.
**How to apply:** Container queries servem para os filhos (tipografia `cqi`, colunas internas, grids). Mudanças estruturais no próprio elemento container (ex.: empilhar o banner) usam `@media` de viewport. Referência: `src/styles/guide.css` (bloco `@media (max-width: 660px)`).
