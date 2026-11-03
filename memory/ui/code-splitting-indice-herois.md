---
name: code-splitting-indice-herois
description: O app nunca importa data/heroes — usa heroIndex (gerado) + heroLoader lazy; importar o array devolve 1,7 MB ao bundle inicial
module: ui
metadata:
  type: project
  pin: true
---
**Why:** Até 03/11/2026 o bundle único tinha 1,78 MB (528 kB gzip) porque home/manuais/ranking importavam os 54 guias completos. O redesign separou em `heroIndex.generated.ts` (gerado por `scripts/build_hero_index.mjs`) + `heroLoader.ts` (`import.meta.glob`, 1 chunk por herói): entrada caiu para ~94 kB gzip.
**How to apply:** Em `src/`, use `heroIndex`/`getHeroSummary` para listagens e `loadHero`/`prefetchHero` para o guia. Herói novo: criar `heroes/<slug>.ts` + entrada em `heroes/index.ts` e commitar o `heroIndex.generated.ts` regenerado (`npm run heroes:index`; `heroes:index:check` dá rc=1 se defasado). Campo novo de busca entra no `summarize()` do gerador.
