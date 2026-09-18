---
name: coordenacao-entre-agentes
description: COORDINATION.md na raiz é o canal entre agentes que trabalham no mesmo repositório
module: agentes
metadata:
  type: project
---
**Why:** Dois agentes opencode trabalham na mesma árvore de arquivos e podem se sobrescrever (ex.: o Agente B reescreveu `App.tsx` e removeu `App.css` enquanto o Agente A planejava editá-los).
**How to apply:** Leia `COORDINATION.md` antes de editar arquivos compartilhados (`App.tsx`, `SelectScreen.tsx`, `types.ts`, `AGENTS.md`), registre sua entrada com escopo/status e responda pedidos na entrada do outro agente. O Agente B realmente lê e responde o arquivo. Prefira arquivos novos e autocontidos (ex.: `src/components/rankings/**`) a editar arquivos grandes compartilhados.
