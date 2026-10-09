---
name: gitconfig-wsl-autocrlf-lf
description: O .gitconfig do WSL é um arquivo próprio (não symlink) que inclui o do Windows e força core.autocrlf=input
module: agentes
metadata:
  type: project
  pin: true
---

**Why:** Em 08/10/2026 o `/home/lucas/.gitconfig` era symlink para `/mnt/c/Users/Lucas/.gitconfig` e nenhum lado tinha `core.autocrlf` nem `.gitattributes`. Resultado: o VS Code no Windows gravava CRLF, o git não normalizava e 17 arquivos do marvel-rivals-coach apareciam como `M` com diff de arquivo inteiro (`552 552`, `756 756`) sem nenhuma edição real — phantom diff que ocupa o `git status`.

**How to apply:** O `/home/lucas/.gitconfig` agora é arquivo real com `[include] path = /mnt/c/Users/Lucas/.gitconfig` + `[core] autocrlf = input` (o do Windows fica intacto, sem autocrlf). `input` = grava LF no índice, não converte no checkout. Confirme com `git config --show-origin --get core.autocrlf`. Não religue o symlink. Para tornar a regra durável por repo, ainda falta `.gitattributes` com `* text=auto eol=lf` + `git add --renormalize .` — não feito, exige commit em cada repo.