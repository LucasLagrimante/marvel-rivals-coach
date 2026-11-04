---
name: upgrade-book-so-deadpool
description: Card "Primeira decisão" saiu do banner; ordem de compra do livro só aparece em herói com upgradeBook (Deadpool), em destaque no topo do primer
module: ui
metadata:
  type: feedback
---
O stat "Primeira decisão" (upgradePlan[0]) era resquício do Deadpool e não fazia sentido nos heróis de kit fixo; o usuário pediu para remover e dar visibilidade à árvore de compra do Deadpool.
**Why:** Só o Deadpool compra upgrades no livro durante a partida; nos outros, "primeira decisão" não existe e o card confundia.
**How to apply:** `HeroGuide.upgradeBook: true` liga a faixa `.build-block` (FlowChain do upgradePlan por `rank`) no topo do `PrimerSection` e o stat "1º upgrade" no `HeroBanner`. `spellNumber` = slot do livro (tecla numérica de compra no PC); `BuySlotBadge` mostra "Comprar N" na faixa e nos cards de prioridade — confirmado com o livro in-game (Duelista) e Destructoid (Vanguard/Strategist). Não reintroduzir "Primeira decisão" genérico; herói novo com loja/livro de compra deve usar o mesmo campo.
