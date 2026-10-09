---
name: memoria-global-por-projeto
description: lições de infra (Cloudflare, deploy, DNS) são cross-cutting; duplicar em vários repos gera colisão de slug e conflito de merge
module: infra
metadata:
  type: project
---
**Why:** As lições desta sessão (Cloudflare Pages `destination_dir`, redirects por Worker, DNS de subdomínio) valem para *qualquer* projeto do usuário, mas `memory/` é versionado por repositório. Copiá-las para todos os projetos que tocam a mesma infra gera N arquivos idênticos com o mesmo `name` — colisão de slug e conflito de merge. O usuário pediu explicitamente para lembrar "para a gente não errar mais em nenhum projeto", o que aponta para conhecimento **cross-cutting**, não para N cópias.

**How to apply:** Conhecimento de infra compartilhada (Cloudflare, DNS, deploy, contas) fica em um único lugar de escopo pessoal, não em `memory/` de cada repo. `memory/` do projeto guarda só o que é específico dele — por exemplo, o `optimize_images.mjs` do coach e os alvos por família. Ao escrever memória, perguntar antes: "isso é deste repo ou de toda a minha infra?" Se for da infra, não criar no `memory/` do projeto.