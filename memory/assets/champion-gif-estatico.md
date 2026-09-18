---
name: champion-gif-estatico
description: champion.gif pode estar estático (WebP pequeno) e não animar no hover — validar com `file` antes de concluir
module: assets
metadata:
  type: project
---
**Why:** O `devil_dinosaur_champion.gif` estava com 55 KB / WebP **estático** 343x343 no disco (revisão antiga), então o hover do menu não animava. Os champion GIFs bons têm 1,5–5 MB e o `file` reporta "animated" (WebP animado) ou GIF89a.
**How to apply:** Depois de cada download, rodar `file public/heroes/select/<slug>_champion.gif` e exigir "animated" + tamanho na casa dos MB. Se vier estático, rebaixar pelo `url` original do `imageinfo` (com headers `Referer`/`User-Agent`) para o mesmo `<slug>_champion.gif` e validar de novo. `selectionHoverUrl` só entra no `.ts` depois dessa checagem.
