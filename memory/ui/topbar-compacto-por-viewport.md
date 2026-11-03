---
name: topbar-compacto-por-viewport
description: Escada de alturas do topbar sticky (pós-redesign 03/11/2026) e as regras que evitam ele virar parede no tablet/celular
module: ui
metadata:
  type: feedback
---
**Why:** Antes, o `.topbar` ia de 126px para 176px (≤900) e 273px (≤560) porque o contexto do herói ganhava linha própria e a nav quebrava em 3 linhas. No redesign "Tinta & Sinal" (03/11/2026) o contexto do guia ainda abria uma 3ª linha em 1024px (129px) até subir o corte para ≤1080.
**How to apply:** Alturas a manter: guia 108px (desktop/tablet) e 102px (≤560); telas de seção 65px desktop, 102px ≤1080 (seções descem para 2ª linha rolável). Esconder `.detail-shell .topbar-center` em ≤1080; nav com `flex-wrap: nowrap; width: max-content`; plataforma só ícones em ≤560. Medir `document.querySelector('.topbar').getBoundingClientRect().height` após mexer no cabeçalho.
