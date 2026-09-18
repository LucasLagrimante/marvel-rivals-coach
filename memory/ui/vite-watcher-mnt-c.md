---
name: vite-watcher-mnt-c
description: Vite em /mnt/c não recebe eventos do watcher para arquivos editados por ferramentas do Windows; reiniciar o dev server após lotes de edição
module: ui
metadata:
  type: project
---
**Why:** Após reescrever `App.tsx`/`index.css`, o dev server continuou servindo os módulos antigos (`.fighter-slot` em vez de `.hero-tile`): o watcher do Vite não vê mudanças feitas no filesystem do Windows montado em `/mnt/c`, então HMR e reload não pegam o código novo.
**How to apply:** Depois de um lote de edições, matar o processo do Vite da sua porta (`ps -eo pid,args | grep vite`) e subir de novo com `setsid npm run dev -- --host 127.0.0.1 --port <porta> --strictPort </dev/null >log 2>&1 &`. Confirmar o conteúdo real baixando o módulo: `curl -s http://127.0.0.1:<porta>/marvel-rivals-coach/src/App.tsx | head -5`. Nunca confiar em HMR aqui.
