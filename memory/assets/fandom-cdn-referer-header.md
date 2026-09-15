---
name: fandom-cdn-referer-header
description: CDN de imagens nocookie.net do Fandom exige cabeçalho Referer e User-Agent de browser
module: assets
metadata:
  type: project
---
**Why:** A CDN de imagens `static.wikia.nocookie.net` do Fandom retorna `HTTP 403 Forbidden` caso a requisição não envie o cabeçalho `Referer: https://marvelrivals.fandom.com/` e um User-Agent de navegador válido.
**How to apply:** Em scripts de download como `download_fandom_avatars.py`, sempre incluir `HEADERS = {"User-Agent": "Mozilla/...", "Referer": "https://marvelrivals.fandom.com/"}` em todas as chamadas de `urllib.request.Request`.
