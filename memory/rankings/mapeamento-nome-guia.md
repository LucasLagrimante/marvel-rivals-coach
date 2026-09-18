---
name: rankings-mapeamento-nome-guia
description: Correspondência parcial de nome de herói exige o mesmo primeiro token para não casar alias errado
module: rankings
metadata:
  type: feedback
---
**Why:** O matcher do `update_rankings.py` casou "Storm" (nome na fonte) com o alias "Sue Storm" da Mulher Invisível, rotulando o #3 duelista errado. Correspondência por substring aceitava o alias como se fosse o herói certo.
**How to apply:** Em qualquer mapeamento nome-da-fonte → guia do app, exija igualdade exata primeiro; para correspondência parcial, só aceite se o primeiro token normalizado for igual (`gorr` ⊂ `gorr the god butcher` passa; `storm` ⊄ `sue storm` falha). Sempre imprimir a lista `gameName -> guideId` no fim do script para auditar os vínculos.
