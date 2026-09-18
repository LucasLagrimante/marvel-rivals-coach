---
name: rankings-fonte-counterwatch
description: Ranking de personagens é fixado em src/data/rankings.ts e atualizado por scripts/update_rankings.py a partir do Counterwatch
module: rankings
metadata:
  type: project
---
**Why:** O app roda no GitHub Pages (estático), então o ranking não é buscado em runtime. Os dados são um snapshot fixado e versionado, igual aos guias de herói.
**How to apply:** Rode `python3 scripts/update_rankings.py` (ou `python` no Windows) para regerar. O script baixa `https://www.counterwatch.gg/stats/marvel-rivals/tier-list`, extrai o payload RSC (`self.__next_f.push`), ordena por `shrunkWinRate` e calcula `rating = 50 + (winRateAjustada − 50) × 4`. Retratos remotos vão para `public/rankings/<slug>.webp`; heróis com guia usam `public/heroes/select/`. Use `--html <arquivo>` para regerar offline a partir de um HTML salvo.
