# Marvel Rivals Coach

## Branch de trabalho

Todo trabalho deve ser feito diretamente na branch `main`. Antes de iniciar qualquer tarefa, verificar com `git branch --show-current` que a branch ativa é `main`. Se não for, mudar com `git checkout main` antes de prosseguir. Nunca criar branches de feature nem fazer commits em outras branches sem instrução explícita do usuário.

## Idioma

Todo conteúdo produzido — textos de guia, labels, descrições, mensagens de fontes, notas de evidência, comentários no código e respostas do agente — deve ser escrito em **português brasileiro**, seguindo as normas ortográficas vigentes do Acordo Ortográfico de 1990. Usar sempre acentuação correta: não, você, também, então, ângulo, saída, munição, execução, decisão, duração, etc. Nunca escrever palavras sem acento obrigatório nem usar formas espanholadas como "rápidamente" (correto: "rapidamente"). Nomes próprios de personagens, habilidades e termos de jogo em inglês são mantidos como estão (ex.: "Web-Swing", "Dagger Storm", "pick", "dive").

## Premissa do projeto

Este app é uma base viva de coaching para Marvel Rivals, mas a tela do personagem deve priorizar o "V principal": a decisão curta que muda a próxima luta. Ele não deve ser uma ficha genérica nem um relatório enciclopédico. Cada herói precisa começar pela dica que altera a jogabilidade, depois mostrar só o necessário para executar: quando escolher a role, qual habilidade ou recurso priorizar, como usar ultimate, qual é o ponto-chave mecânico e quais adaptações fazer contra composições reais.

Detalhe, metadata, cobertura de fonte e evidências continuam obrigatórios na estrutura, mas não devem disputar espaço com o coaching. Na interface, essas informações devem ficar recolhidas, secundárias ou em ação de apoio, como botão flutuante, painel expansível ou seção compacta. Se um texto não ajuda o jogador a decidir a próxima fight, ele deve ser resumido, movido para evidências ou removido da primeira leitura.

## Padrão de pesquisa

Ao adicionar ou atualizar um personagem, pesquisar e registrar evidências de fontes diferentes:

- Fonte oficial: site de Marvel Rivals, patch notes, página de habilidades e anúncios.
- Wiki/public database: Marvel Rivals Wiki, wiki.gg, Liquipedia ou equivalente para valores e imagens públicas.
- Guias escritos: sites especializados, desde que a recomendação seja específica do herói.
- Fórum/comunidade: Reddit, Discord exportado, comentários de mains, discussões de meta recente.
- Vídeos/transcrições: guias no YouTube, VODs, coach review e transcrições com timestamps quando possível.

Não inventar dado de vídeo sem transcrição ou anotação auditável. Se vídeo ainda não foi processado, deixar fonte como pendente.

## Enriquecimento de dados

Cada personagem deve guardar dados em estrutura tipada, hoje em `src/data/heroes.ts`, com:

- `portraitUrl` e `bannerUrl`: foto do personagem. Prioridade: asset oficial. Fallback: Wiki/public asset. Sempre preferir links públicos estáveis.
- `sources`: lista de fontes com tipo, URL, confiança e takeaways.
- `sourceCoverage`: contagem por categoria para mostrar o quanto a análise está enriquecida.
- `systems`: sistemas globais do personagem.
- `roleGuides`: guia por role, com plano de upgrade, adaptações, ultimates, dash/mecânica-chave, padrões de luta, erros comuns e evidências.

## Assets de personagens

Para a tela de seleção, baixar assets apenas dos heróis cadastrados no app, não o roster inteiro. O script local é `scripts/download_fandom_avatars.py`; usar `--only` com os slugs presentes em `src/data/heroes.ts`.

Exemplo para PNG padrão de seleção e GIF animado do modo dinâmico:

```bash
python scripts/download_fandom_avatars.py --kind table --only deadpool black_cat magneto
python scripts/download_fandom_avatars.py --kind champion --only deadpool black_cat magneto
```

No Fandom, o PNG padrão de seleção vem de `<Hero>_DEFAULT_Table_Icon.png` e deve ser salvo como `public/heroes/select/<slug>.png`. Os GIFs dinâmicos vêm do padrão `Champion_Icon_*_Animated.gif` e são salvos como `public/heroes/select/<slug>_champion.gif`. Não baixar nem manter PNG lord estático para a seleção quando já houver GIF dinâmico. Não rodar o script sem `--only` salvo se a intenção explícita for baixar todos os personagens.

## Assets de banner/capa

A imagem grande da tela de seleção (`portraitUrl`) e a foto principal do guia devem usar a mesma arte local, baixada para `public/heroes/banners/<slug>.png`. O `bannerUrl` também deve apontar para esse mesmo arquivo quando a intenção for manter seleção e guia visualmente consistentes.

A fonte padronizada é o Fandom, o mesmo site usado nos ícones de seleção:

1. Prioridade: `Hero Card <Hero>.png`, porque é a arte de card/capa mais rica e proporcional para o preview grande e para o guia.
2. Fallback visual: `<Hero> Hero Portrait.png`, quando o `Hero Card` ainda não existe para aquele herói no Fandom.
3. Fallback final: `<Hero> Full Default Costume.png` ou `<Hero> Default Costume LoC Icon.png`, apenas se não houver `Hero Card` nem `Hero Portrait`.

Baixar sempre apenas os heróis cadastrados no app:

```bash
python scripts/download_fandom_avatars.py --kind banner --only deadpool black_cat magneto
```

Ao adicionar ou atualizar `portraitUrl` e `bannerUrl` em `src/data/heroes.ts`, usar sempre `publicAsset()`:

```ts
portraitUrl: publicAsset('heroes/banners/magik.png'),
bannerUrl: publicAsset('heroes/banners/magik.png'),
```

Não usar links crus de CDN para capa/preview quando já houver asset local padronizado. Links oficiais ou de wiki podem continuar como evidência em `sources`, mas a interface deve preferir o arquivo local baixado pelo script.

## Qualidade da análise

Toda recomendação deve responder:

- O que fazer primeiro.
- Por que isso ganha a próxima luta.
- Quando trocar a ordem.
- Qual habilidade e ponto-chave do personagem.
- Que erro comum faz o personagem parecer ruim.
- Quais fontes sustentam a recomendação.

Evitar frases como "jogue agressivo", "use suas habilidades" ou "mantenha posicionamento" sem contexto específico. Transformar toda dica em instrução aplicável.

## Exemplo de novo prompt

Se o usuário disser "procure para a Luna Snow", seguir este fluxo:

1. Confirmar o nome correto se houver erro de transcrição evidente, mas seguir com a melhor inferência quando for seguro.
2. Buscar fonte oficial, wiki/public asset, guias, fórum e vídeos/transcrições.
3. Popular a estrutura do personagem com foto, fontes e análise específica.
4. Explicar no app quais fontes ainda estão pendentes.
5. Rodar build/lint antes de encerrar quando houver alteração de código.

## Assets de seleção — regras obrigatórias

Ao adicionar `selectionPortraitUrl` e `selectionHoverUrl` em `src/data/heroes.ts`, **sempre** usar a função `publicAsset()`, nunca um path cru:

```ts
// CORRETO
selectionPortraitUrl: publicAsset('heroes/select/magik.png'),
selectionHoverUrl: publicAsset('heroes/select/magik_champion.gif'),

// ERRADO — quebra em produção/subpath (falta o base path /marvel-rivals-coach/)
selectionPortraitUrl: '/heroes/select/magik.png',
selectionHoverUrl: '/heroes/select/magik_champion.gif',
```

`publicAsset()` adiciona automaticamente o base path do Vite (`/marvel-rivals-coach/`). Sem ela, o browser busca o arquivo na raiz `/` e retorna 404.

O slug do herói no Fandom pode diferir do `id` em `heroes.ts`. Sempre confirmar o nome exato antes de rodar o script. Exemplo: o herói com `id: 'magik'` tem nome "Magia" no app mas o slug do Fandom é `Magik` (com k). Rodar o script com `--only magik` (slug do Fandom, minúsculo).

## Controles por plataforma

O app tem um seletor de plataforma (PC / PS5 / Xbox) persistido em `localStorage`. Todo guia deve usar os controles corretos da plataforma ativa — nunca escrever teclas hardcoded como `"E"`, `"RMB"` ou `"Q"` diretamente no JSX.

### Auditoria obrigatória antes de finalizar qualquer herói

Antes de encerrar o trabalho em qualquer componente de guia, verificar **cada ocorrência** de input de controle no JSX do herói:

1. **`usePlatform` chamado?** — `const { platform } = usePlatform()` deve estar no topo da função do componente. Sem isso, nenhum `resolveInput` funciona.
2. **Nenhum `step.input` / `step!.input` exposto cru?** — Todo acesso a campo de input deve passar por `resolveInput(step.input ?? '', platform)`.
3. **Nenhuma tecla hardcoded no JSX?** — Strings como `'LMB'`, `'RMB'`, `'E'`, `'Q'`, `'Shift'` dentro de texto corrido ou arrays de dados visuais devem ser resolvidas via `resolveInput` antes de renderizar.
4. **Todo input renderizado com `.control-badge`?** — Nenhuma string de controle deve aparecer sem a classe keycap.

Se qualquer um desses pontos falhar, o herói **não está pronto**. Corrigir antes de rodar o build.

### Como usar em um novo guia

1. Chamar o hook no topo do componente:
   ```tsx
   const { platform } = usePlatform()
   ```

2. Resolver o input de cada ability com a função correta:
   - Para `UpgradeStep` com campo `input` (Black Cat, Magneto, Spider-Man e futuros heróis):
     ```tsx
     resolveInput(step.input ?? '', platform)
     ```
   - Para `UpgradeStep` com `spellNumber` (Deadpool):
     ```tsx
     getSpellControl(step.spellNumber, platform)
     ```
   - Para `AbilityFact.input` (sistemas/passivas):
     ```tsx
     resolveInput(system.input, platform)
     ```

3. Renderizar sempre com a classe `.control-badge`:
   ```tsx
   <span className="control-badge">{resolveInput(step.input ?? '', platform)}</span>
   ```
   O badge tem estilo keycap 3D (gradiente, border-bottom espessa, glow) e adapta a cor ao tema do herói via `--theme-secondary-rgb`.

### Chaves canônicas para o campo `input`

Usar sempre estas strings no campo `input` de `UpgradeStep` e `AbilityFact` — nunca escrever variantes como `"Left Click"`, `"right click"` ou `"shift"`:

| Valor no dado | PC | PS5 | Xbox |
|---|---|---|---|
| `LMB` | Clique Esq. | R2 | RT |
| `RMB` | Clique Dir. | L2 | LT |
| `Shift` | Shift | R1 | RB |
| `E` | E | L1 | LB |
| `Q` | Q | Triângulo | Y |
| `F` | F | Círculo | B |
| `C` | C | ↑ D-pad | ↑ D-pad |
| `Melee` | V | R3 | RS |
| `Passiva` | Passiva | Passiva | Passiva |
| `Recurso` | Recurso | Recurso | Recurso |

Compostos são suportados separando com `/` (sem espaço) ou ` / ` (com espaço): `RMB/E`, `E / F`. Sufixos descritivos separados por ` - ` também funcionam: `C - Team-Up` → resolve `C` e mantém o sufixo.

### Onde colocar o badge no layout

- **Card de prioridade / chain / loop** (elemento standalone antes do nome da ability): usar `<small className="control-badge">` ou `<span className="control-badge">` como primeiro filho do card, antes do nome da habilidade.
- **Lista de prioridade inline** (como no PriorityPlan do Deadpool): encapsular dentro de `<small>` do `<h4>`, envolvendo o badge em `<span className="control-badge">`.
- **Regra geral**: toda referência visual a uma tecla ou botão de controle deve usar `.control-badge`. Nunca exibir a string de input crua sem o badge.

### Teclas em texto corrido

Qualquer campo de texto (facts, mechanics, drills, shortRule, execution, bestUse, upgradeValue, why, swapWhen, steps, adaptations, mistakes…) que precise citar uma tecla pelo seu token canônico **deve usar a sintaxe `[key:TOKEN]`** — nunca o token cru como string plana.

```
// ERRADO — imprime "LMB" sem adaptar para o console do usuário
'Ao sair do portal, LMB executa Eldritch Whirl'

// CORRETO — renderiza badge dinâmico (Clique Esq. / R2 / RT conforme plataforma)
'Ao sair do portal, [key:LMB] executa Eldritch Whirl'
```

Tokens disponíveis: `LMB`, `RMB`, `Shift`, `E`, `Q`, `F`, `C`, `Melee` — mesma tabela da seção "Chaves canônicas" acima.

Para renderizar, usar a função `renderInlineKeys(text, platform)` definida em `App.tsx` no lugar do `{text}` cru:

```tsx
// ERRADO
<li>{fact}</li>

// CORRETO
<li>{renderInlineKeys(fact, platform)}</li>
```

A função é no-op quando não há tokens: strings sem `[key:…]` são retornadas intactas e não têm custo de runtime. Aplicar `renderInlineKeys` em todos os campos de texto corrido dos guias, mesmo que ainda não tenham tokens — garante que futuras adições de teclas funcionem automaticamente.

### Especificidade CSS

Se o layout do novo herói tiver seletores de elemento que possam sobrescrever `.control-badge` (ex.: `.meu-card small`), usar `:not(.control-badge)` no seletor original para não perder o estilo do badge:
```css
.meu-card small:not(.control-badge) { ... }
```

### Número de ordem nos cards de chain/loop — PROIBIDO

Nos blocos de chain/loop (primeiro fieldset de cada herói — ex.: `.heist-loop`, `.duality-rhythm`, `.web-chain`, `.limbo-chain`, `.daredevil-combo-loop`, `.magneto-loop`) **nunca renderizar número de ordem** (`index + 1`) dentro do card. O badge de controle já comunica a sequência visualmente. Remover qualquer `<span>{index + 1}</span>` nesses componentes e apagar o CSS correspondente (`.meu-step span { ... }`).

**ERRADO:**
```tsx
{flow.map((step, index) => (
  <article className="heist-step">
    <span>{index + 1}</span>                        {/* ← REMOVER */}
    <small className="control-badge">...</small>
    <strong>{step.ability}</strong>
  </article>
))}
```

**CORRETO:**
```tsx
{flow.map((step) => (
  <article className="heist-step">
    <small className="control-badge">...</small>
    <strong>{step.ability}</strong>
  </article>
))}
```

### Número nos cards de decision-grid — marca d'água, não elemento visível

Nos grids de prioridade (`.tool-card-head`) o número de rank deve ser marca d'água via CSS absoluto, nunca um elemento empilhado visivelmente acima do badge. O card deve ter `position: relative`. O `<small>` do rank herda o estilo de `.tool-card-head small` que já define `position: absolute; top: 10px; right: 13px; color: rgba(255,255,255,0.13); font-size: 22px`.

## Componentes reutilizáveis — AbilityLoop e PriorityGrid

Todos os heróis compartilham dois padrões visuais idênticos com classes CSS duplicadas por herói. Ao adicionar um novo herói, **não criar novas classes CSS** para esses padrões. Usar os componentes genéricos:

### `AbilityLoop` — bloco de chain/loop

Substitui: `.heist-loop/.heist-step`, `.duality-rhythm/.duality-step`, `.web-chain/.web-chain-step`, `.limbo-chain/.limbo-chain-step`, `.daredevil-combo-loop/.combo-step`, `.magneto-loop/.magneto-loop-card`.

```tsx
// Estrutura de uso
<div className="ability-loop">
  {steps.map((step) => (
    <article className="ability-loop-step" key={step.ability}>
      <small className="control-badge">{resolveInput(step.input ?? '', platform)}</small>
      <strong>{step.ability}</strong>
      <p>{step.label}</p>
    </article>
  ))}
</div>
```

As cores do card vêm das variáveis CSS de tema do herói (`--theme-primary-rgb`, `--theme-secondary-rgb`) que já são setadas no container pai. Não adicionar `background` ou `border` inline com cores hardcoded.

### `PriorityGrid` — grid de cards de prioridade/decisão

Substitui: `.magneto-decision-grid/.magneto-decision-card`, `.spider-decision-grid/.spider-decision-card`, `.magik-decision-grid/.magik-decision-card`, `.duality-decision-grid/.duality-decision-card`, `.daredevil-decision-grid/.daredevil-decision-card`, `.black-cat-tool-grid/.black-cat-tool-card`.

```tsx
// Estrutura de uso
<div className="priority-grid">
  {guide.upgradePlan.map((step) => (
    <article className="priority-card" key={step.rank}>
      <div className="tool-card-head">
        <span className="control-badge">{resolveInput(step.input ?? '', platform)}</span>
        <small>{String(step.rank).padStart(2, '0')}</small>
      </div>
      <h4>{step.ability}</h4>
      <p className="tool-label">{step.label}</p>
      <p>{step.why}</p>
      {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
    </article>
  ))}
</div>
```

O `.priority-card` deve ter `position: relative` (já garantido pelo CSS genérico). O `<small>` do rank herda `.tool-card-head small` como marca d'água absoluta.

### Regra de migração

Os heróis existentes ainda usam as classes antigas. Ao **editar** um herói existente, migrar os dois blocos para `.ability-loop` e `.priority-grid` na mesma sessão. Ao **adicionar** um herói novo, usar apenas as classes genéricas — nunca criar `.meu-heroi-loop` ou `.meu-heroi-decision-grid`.

## Princípio de interface

A tela inicial deve parecer uma seleção de personagens do jogo: visual forte, busca rápida por nome/apelido, cards com foto, roles visíveis e acesso imediato ao guia. A leitura precisa ser fluida: o usuário deve achar rápido "o que muda minha jogabilidade agora" e só depois aprofundar em mecânica, ultimate, erros e evidências.

## Layout por personagem

O layout do guia deve servir à mecânica central do personagem, não o contrário. Não reaproveitar cegamente a estrutura de outro herói.

- Se o personagem tem sistema de upgrades, livro, talentos ou escolhas numeradas, como o Deadpool, faz sentido ter bloco de ordem de upgrade, número da magia e prioridades por role.
- Se o personagem gira em torno de recurso, loja, relíquias, forma, combo, postura ou rotação, criar uma experiência própria para isso. A Gata Negra, por exemplo, deve mostrar Fortuna, Gilded Deal, relíquias, plano de roubo, execução, saída e Calling Card, sem citar Deadpool nem fingir que ela tem livrinho.
- A estrutura de dados pode continuar compartilhada quando ajudar, mas a renderização pode ser específica por personagem quando isso melhora clareza e leitura.
- O tema visual também deve acompanhar o personagem selecionado, usando uma paleta derivada da arte/capa quando possível.
- Antes de finalizar um novo herói, perguntar: "Qual é a coisa que esse personagem precisa dominar para ficar bom?" O layout deve responder essa pergunta na primeira leitura, com pouco ruído e sem espaços vazios artificiais entre fieldsets.
- Cards que fazem parte da mesma etapa do plano precisam estar visualmente conectados por uma faixa, coluna ou grupo comum. Evitar pares de fieldsets soltos que deixam o fundo aparecer como buraco entre conteúdos relacionados; se dois blocos se explicam juntos, eles devem parecer uma unidade.
- Revisar o layout também em viewport maior. Um card curto em meia coluna não pode deixar metade da tela vazia; nesses casos, transformar em faixa full-width, grupo conectado ou coluna independente.