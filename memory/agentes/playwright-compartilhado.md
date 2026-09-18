---
name: playwright-browser-compartilhado
description: Sessões opencode simultâneas compartilham o mesmo browser do Playwright MCP (abas e viewport)
module: agentes
metadata:
  type: feedback
---
**Why:** Ao verificar o ranking, `browser_evaluate` retornou uma página de `localhost:5173` que não era a minha — as duas sessões opencode usam a mesma instância do Playwright MCP: as abas ficam lado a lado e resize/navegação afetam o outro agente.
**How to apply:** Antes de qualquer ação no browser, rode `browser_tabs` (list) e selecione a sua aba. Nunca assuma que a aba atual é sua; evite resize/navegação às cegas e não feche abas que não abriu. **Isolamento total:** para auditorias em lote, use `browser_run_code_unsafe` criando um contexto próprio (`page.context().browser().newContext(...)`) — o outro agente não move nem interfere nessa página; salve screenshots com caminho relativo ao workspace (`audit/...`) e feche o contexto no fim.
