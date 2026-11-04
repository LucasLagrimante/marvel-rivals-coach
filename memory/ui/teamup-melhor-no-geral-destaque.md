---
name: teamup-melhor-no-geral-destaque
description: Team-Up "melhor no geral" aparece no chip do banner (ícone + nome + retrato do parceiro) e sempre primeiro/à esquerda no painel #guia-teamup
module: ui
metadata:
  type: feedback
---
**Why:** A dupla de combate é a primeira coisa que o usuário procura num personagem; ficava escondida no painel e, em 16 dos 54 heróis, o recomendado vinha à direita por ordem do arquivo de dados.
**How to apply:** Banner (`HeroBanner`, `.hero-teamup` na `.hero-kicker-row`) mostra só `options.find(name === recommended)` e rola para `#guia-teamup` via `lib/scroll.ts`. O `TeamUpPanel` ordena por `name === recommended` antes do map — não depender da ordem em `data/heroes/*.ts`. Toggle com/sem parceiro e "Em uso/Usar este" continuam no painel. Chip compacto (~36px) para não estourar a altura fixa do banner (ver [[banner-nao-cortar-conteudo]]).
