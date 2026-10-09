---
name: git-cwd-apagado-leitura-falsa
description: Comando git com cwd em pasta apagada falha com 'failed to stat' e parece que o config global sumiu
module: agentes
metadata:
  type: project
---

**Why:** Depois de o usuário apagar `/mnt/c/Users/lucas/Projects/marvel-rivals-coach`, a sessão de shell persistente ficou com esse diretório como cwd. Todo `git config --get user.name` retornou vazio e o `[include]` do `~/.gitconfig` pareceu quebrado — mas o erro real era `fatal: failed to stat '<cwd>': No such file or directory`. Quase concluí que o include estava falhando por causa do path com "Lucas" maiúsculo.

**How to apply:** Antes de concluir que config global/include quebrou, rodar `pwd` e `cd` para um diretório existente. `git config --show-origin --get <chave>` sempre mostra a origem — se a origem não aparecer, o problema é de contexto (cwd), não de config. Evitar `cd` para pastas voláteis na sessão persistente; usar `git -C <dir>` nos repositórios.