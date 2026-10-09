---
name: config-opencode-dupla-wsl-windows
description: Nesta máquina o opencode roda no WSL e lê só o opencode.jsonc do Linux; a config do Windows é ignorada
module: agentes
metadata:
  type: project
  pin: true
---

**Why:** Existem duas configs globais do opencode e só uma vale: o binário em uso é `/home/lucas/.opencode/bin/opencode` (WSL/Ubuntu), que lê `/home/lucas/.config/opencode/opencode.jsonc`. A config do Windows em `/mnt/c/Users/lucas/.config/opencode/opencode.json` é ignorada — MCP novo colocado lá simplesmente não aparece nas tools. Ela também tem `cloudflare-api` aninhado sob `"mcp": { "mcp": { ... } }`, o que impede a leitura como servidor.

**How to apply:** Ao pedir MCP/hook/plugin novo, sempre editar `/home/lucas/.config/opencode/opencode.jsonc` (formato JSONC: comentários com `//` permitidos) e conferir com `which -a opencode` + `stat` qual config está de fato em uso. Autenticação: `opencode mcp auth <nome>`. O arquivo do Windows guarda segredos em texto puro (CONTEXT7_API_KEY, SUPABASE_ACCESS_TOKEN) — nunca versionar/sincronizar.