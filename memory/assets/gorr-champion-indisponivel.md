---
name: gorr-champion-indisponivel
description: GIF champion/Lord animado do Gorr ainda não existe no Fandom; hover usa a arte estática do Lord Icon como fallback
module: assets
metadata:
  type: project
---
**Why:** A página wiki do Gorr lista `File:Champion Icon Gorr The God Butcher Animated.gif`, mas o arquivo é link vermelho (`page_id == -1`, ausente de `allimages` e sem upload no log). Também não existe em rivalskins (só avatar estático), Tenor (clipes não relacionados) nem no site oficial. É herói novo (11/09/2026) — a animação não é pública ainda.
**How to apply:** O hover do Gorr usa a arte **estática** do Lord Icon (`public/heroes/select/gorr_lord.png`, baixada de `Lord Icon Gorr.png` com `?format=original` para vir PNG de verdade) via `selectionHoverUrl`, com `selectionHoverFit` de enquadramento. Não usar GIF de Tenor nem fabricar animação. Quando o Champion animado aparecer, baixar manualmente como `public/heroes/select/gorr_champion.gif` e trocar o campo (o `download_fandom_avatars.py --kind champion --only gorr` falha: prefixo não indexa e o slug sairia `gorr_the_god_butcher_champion`).
