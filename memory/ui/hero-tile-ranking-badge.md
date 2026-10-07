---
name: hero-tile-ranking-badge
description: Integração do módulo de meta com manuais e guias (posição por role, Tier, win rate e links de ranking)
module: ui
metadata:
  type: feedback
---
**Why:** O usuário determinou que o módulo de meta deve ser integrado com manuais e guias: exibindo posição da role com hashtag (#) e Tier nos cards, resumo de meta no painel lateral de seleção e dados da temporada (Tier, Win Rate, Rating e link de ranking) no guia.
**How to apply:** Usar `getHeroRankingEntry(hero.id, role)` em `src/lib/rankings.ts`. Renderizar `.hero-tile-rank` com `.hero-tile-rank-tier` no `HeroTile`, o chip de meta e stats no `SelectScreen`, e no `HeroBanner` o badge clicável da temporada com link para `/ranking` e métricas no `StatGrid`.
