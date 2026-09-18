---
name: nav-secoes-topbar
description: Links de seção do guia no topbar usam ids guia-* e scroll com offset do topbar sticky; a logo volta ao menu via SPA
module: ui
metadata:
  type: project
---
**Why:** O topbar do guia é sticky e sua altura varia (linha 1 + nav em 1–2 linhas), então `scrollIntoView`/`scroll-margin-top` fixo esconde o título da seção atrás dele; além disso, a logo `<a href={baseUrl()}>` causava reload completo em vez da navegação SPA do botão "Voltar ao menu".
**How to apply:** `GuideSectionNav.tsx` lista `{ id, label }` das seções (`guia-visao-geral`, `guia-sistema`, `guia-prioridade`, `guia-mecanica`, `guia-ultimate`, `guia-padroes`) — ao criar/renomear seção, atualizar o id no componente da seção e nesta lista. O clique rola via `window.scrollTo({ top: rect.top + scrollY - altura do .detail-shell .topbar - 10 })`; evitar trocar por âncora crua. O botão "Fontes" abre o `EvidenceDock` controlado pelo `GuideScreen`. `Brand`/`Topbar` recebem `onOpenMenu` para `preventDefault` + `pushState`.
