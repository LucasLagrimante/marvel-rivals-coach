---
name: pages-usa-destination-dir
description: build_config do Cloudflare Pages usa destination_dir (não output_dir) — nome errado é aceito com 200 e ignorado em silêncio
module: infra
metadata:
  type: project
  pin: true
---
**Why:** `PATCH /accounts/{id}/pages/projects/{projeto}` com `build_config.output_dir` responde **200 OK** mas **descarta o campo**: o build fica em `queued` para sempre com apenas `Starting build...`, sem erro visível. O nome correto no schema OpenAPI é **`destination_dir`**. Confundi por analogia com `wrangler.jsonc`, que usa `pages_build_output_dir`, e com a nomenclatura de GitHub Pages. O sintoma (fila infinita, sem log) não aponta para o campo — só o dashboard mostra `Build output` vazio. Não era GitHub App faltando: o repo já estava conectado e os deployments eram criados a cada push.

**How to apply:** Sempre ler o schema com `cloudflare-api_search` antes de enviar campo novo, em vez de adivinhar pelo nome. Depois de qualquer `PATCH` em `build_config`, **reler com `GET` e conferir `destination_dir` no retorno** — resposta 200 não confirma persistência. Confirmar no dashboard (`Settings → Build → Build output`). Sintoma de campo errado = build `queued` eterno com `Starting build...`; campo correto = build passa em segundos.