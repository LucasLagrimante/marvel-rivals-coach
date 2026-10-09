---
name: vite-watcher-mnt-c
description: O watcher do Vite só falhava porque o projeto vivia em /mnt/c; desde 08/10/2026 o projeto está no ext4 do WSL e o HMR funciona
module: ui
metadata:
  type: project
---
**Why:** Em `/mnt/c` (drvfs), o watcher do Vite não recebia eventos e o dev server continuava servindo módulos antigos (`.fighter-slot` em vez de `.hero-tile`) — HMR e reload não pegavam o código novo. Em 08/10/2026 o projeto foi copiado para `/home/lucas/projects/marvel-rivals-coach` (ext4) e o problema desapareceu: 30 requests de módulo em 133 ms e cliente HMR injetado normalmente.
**How to apply:** Não reiniciar o dev server "por garantia" no caminho novo — HMR funciona. O workaround (`setsid npm run dev -- --host 127.0.0.1 --port <porta> --strictPort </dev/null >log 2>&1 &` e conferir o módulo baixado) só vale se o projeto voltar a rodar de `/mnt/c`. Caminho canônico: `memory/agentes/projeto-migrado-para-wsl.md`.