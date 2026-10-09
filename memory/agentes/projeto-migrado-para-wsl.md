---
name: projeto-migrado-para-wsl
description: marvel-rivals-coach foi copiado para /home/lucas/projects/marvel-rivals-coach (ext4 do WSL); a cópia em /mnt/c continua existindo
module: agentes
metadata:
  type: project
  pin: true
---

**Why:** Em 08/10/2026 o projeto foi copiado de `/mnt/c/Users/lucas/Projects/marvel-rivals-coach` para `/home/lucas/projects/marvel-rivals-coach` (ext4 do WSL) para ganhar velocidade de I/O, HMR confiável e binários Linux. As duas cópias coexistem — trabalho novo deve ser feito na cópia do WSL, que é a canônica.

**How to apply:** Path Linux `/home/lucas/projects/marvel-rivals-coach`; pelo Windows `\\wsl.localhost\Ubuntu\home\lucas\projects\marvel-rivals-coach` (o dir é minúsculo — `/home/lucas/Projects` com P maiúsculo é outra pasta e foi esvaziada). Depois de qualquer cópia vinda do `/mnt/c`: `rm -rf node_modules && npm ci`, senão quebra em binário nativo (`lightningcss-win32-x64-msvc` → precisa de `lightningcss-linux-x64-gnu`). Consequência: `vite build` usa Rolldown e o chunk JS passa de 500 kB (aviso, não erro). Verificar com `npm run build` antes de dar trabalho por concluído.