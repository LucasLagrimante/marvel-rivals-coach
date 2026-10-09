---
name: ler-schema-depois-de-adivinhador
description: nunca inferir nome de campo de API por analogia — ler o schema antes e reler depois de escrever
module: infra
metadata:
  type: feedback
  pin: true
---
**Why:** Criei projetos no Cloudflare Pages com `build_config.output_dir` (nome inventado por analogia com `wrangler.jsonc` e GitHub Pages). A API respondeu **200 OK** e **descartou o campo em silêncio**: builds presos em `queued` com apenas `Starting build...`, sem erro em lugar nenhum. O nome certo é `destination_dir`. Erro em duas etapas no mesmo dia — primeiro a analogia do nome, depois o diagnóstico errado: culpei a GitHub App por dedução, mas ela estava instalada e funcionando; a causa era o campo. O sintoma ("build não sai da fila") tem várias causas plausíveis (app, config, tamanho de assets, quota) e não aponta para nenhuma delas.

**How to apply:** Antes de enviar campo novo por API, ler o `requestBody` real com `cloudflare-api_search` no path. Depois de qualquer escrita, reler com `GET` e comparar o valor salvo — **status 200 não confirma persistência** quando o payload tem campo não reconhecido. Na dúvida, olhar o dashboard: `Settings → Build → Build output` mostra o campo real em segundos. Quando um sintoma tem causas concorrentes, eliminar por evidência observável (valor do campo, status do deploy, status do domínio) em vez de escolher a primeira hipótese que faz sentido narrativo, e corrigir o diagnóstico errado publicamente.