# Marvel Rivals Coach — instruções (Claude Code)

> **Fonte única de verdade:** [`AGENTS.md`](./AGENTS.md) na raiz do repositório. Leia-o integralmente
> antes de qualquer tarefa — ele contém o protocolo de memória, o padrão de pesquisa, a estrutura de
> dados por herói, o design system de UI e a verificação obrigatória. Este arquivo é apenas um
> resumo de entrada para não duplicar (e defasar) as regras.

## Resumo operacional

- Trabalhe sempre na branch `main`; nunca crie branch de feature sem instrução explícita.
- Todo conteúdo em **português brasileiro** com acentuação correta (nomes de habilidades em inglês ficam).
- Nunca commitar sem pedido explícito do usuário.
- Guia = **briefing de partida, não wiki**: truques e macetes vêm antes de qualquer descrição de kit.
- Nunca escrever manual de herói sem pesquisa real na sessão (wiki.gg, site oficial, guias, fórum).
- Toda tecla/controle passa por `[key:TOKEN]` + `RichText`/`ControlBadge`; nunca hardcode no texto.
- Um herói = um arquivo `src/data/heroes/<slug>.ts`; **zero JSX por herói**.
- UI: componentes reutilizáveis em `src/components/**`, tokens em `src/styles/tokens.css`.
- Conteúdo denso vai para disclosure (`More`, `ListBlock`, `RichParagraph`); primeira leitura é curta.
- Antes de finalizar: `npx tsc -b`, `npx eslint src` e verificação em 1600→390 px sem overflow
  horizontal (`document.documentElement.scrollWidth <= window.innerWidth + 1`).
- Se o dev server estiver em `/mnt/c`, reinicie o Vite após lotes de edição (watcher não vê o Windows).
