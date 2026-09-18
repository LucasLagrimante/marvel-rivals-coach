# Marvel Rivals Coach

Base de coaching de Marvel Rivals focada na decisão que muda a próxima luta. Cada herói tem um guia
enriquecido com truques e macetes, prioridade de habilidades, ultimate, adaptações de composição e
fontes rastreáveis — com a leitura principal curta e o detalhe atrás de disclosure.

## Stack

React 19 + TypeScript + Vite. Sem backend: os dados dos guias são arquivos TypeScript e o app é
publicado como SPA estática (com fallback gerado por `scripts/create_spa_fallback.mjs`).

## Scripts

```bash
npm run dev       # servidor de desenvolvimento (base /marvel-rivals-coach/)
npm run build     # tsc -b + vite build + fallback de SPA
npm run lint      # eslint .
npm run preview   # pré-visualização do build
```

## Estrutura

```
src/
├── App.tsx                  # roteamento + estado (sem JSX de tela)
├── components/
│   ├── ui/                  # primitivos (Panel, RichText, ListBlock, More, Meter…)
│   ├── shell/               # Topbar, Brand, PlatformSelector
│   ├── select/              # SelectScreen, HeroTile (menu)
│   └── guide/               # HeroGuideLayout, GuideScreen e seções do guia
├── lib/                     # helpers puros (text, routes, theme, roles, sources, cx)
├── styles/                  # tokens.css, shell.css, components.css, select.css, guide.css
├── data/
│   ├── heroes.ts            # re-export do índice
│   ├── heroes/<slug>.ts     # UM arquivo por herói (dados do guia)
│   └── platformControls.ts  # mapa de controles PC / PS5 / Xbox
└── types.ts                 # contratos de dados (HeroGuide, RoleGuide…)
```

## Como adicionar um herói

1. Criar `src/data/heroes/<slug>.ts` exportando um `HeroGuide` (mesmo `id` do slug).
2. Importar e incluir no array em `src/data/heroes/index.ts`.
3. Baixar os assets locais com `scripts/download_fandom_avatars.py --kind banner|table|champion --only <slug>`.
4. Preencher fontes reais (`sources`, `sourceCoverage`) — nunca escrever manual sem pesquisa.
5. Rodar `npx tsc -b`, `npx eslint src` e conferir o layout de 1600 a 390 px.

Nenhum JSX novo é escrito: o `HeroGuideLayout` renderiza todos os heróis a partir dos dados.
As regras completas (pesquisa obrigatória, concisão, keycaps, layout à prova de viewport e design
system) estão em [`AGENTS.md`](./AGENTS.md).
