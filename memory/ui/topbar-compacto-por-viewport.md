---
name: topbar-compacto-por-viewport
description: Topbar sticky virava 176px (≤900) e 273px no celular com a nav de seções, comendo o topo do documento
module: ui
metadata:
  type: feedback
---
**Why:** O usuário relatou "espaço enorme no início do documento em viewports intermediárias". Medido: `.topbar` ia de 126px (desktop) para 176px em ≤900 e 273px em ≤560, porque o contexto do herói ganhava uma linha própria, o seletor de plataforma e o botão voltar ocupavam largura total, e a nav de seções quebrava em 3 linhas (`.guide-section-nav` com `flex-wrap: wrap` anulava o `overflow-x: auto` do pai).
**How to apply:** Escada de alturas a manter: desktop 126px, ≤900 111px, ≤560 101px. Regras: esconder `.detail-shell .battle-context`/`.topbar-center` em ≤900; botão voltar só ícone (`back-button-label` visualmente oculto) em ≤860; seletor de plataforma só ícones (com `title` e ícones distintos por plataforma) em ≤560; nav `flex-wrap: nowrap; width: max-content`. Sempre medir `document.querySelector('.topbar').getBoundingClientRect().height` após mexer no cabeçalho.
