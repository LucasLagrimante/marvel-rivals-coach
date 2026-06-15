# Marvel Rivals Coach

## Protocolo de resolução de erros e memória

Todo erro que o usuário solicitar que seja corrigido deve seguir este fluxo obrigatório:

1. **Corrigir o problema** conforme solicitado.
2. **Verificar se foi resolvido** — usar as ferramentas disponíveis (preview, TypeScript, console, snapshot de acessibilidade, `img.naturalWidth`, etc.) para confirmar que o erro não existe mais.
3. **Se a verificação for possível e o erro foi resolvido:** salvar imediatamente na memória (`C:\Users\lucas\.claude\projects\C--Users-lucas-Projects-marvel-rivals-coach\memory\`) um arquivo do tipo `feedback` com:
   - O que era o erro
   - Como foi resolvido
   - Como evitar na próxima vez
   - Atualizar `MEMORY.md` com a entrada correspondente
4. **Se não for possível verificar automaticamente** (ex.: comportamento visual subjetivo, feature que depende de interação do usuário, problema em ambiente que o agente não consegue acessar): perguntar ao usuário explicitamente — _"Consegue confirmar se está funcionando como esperado? Preciso da sua resposta para registrar na memória."_ — e aguardar a confirmação antes de salvar.
5. **Nunca marcar um erro como resolvido sem verificação** — nem por suposição ("deve ter funcionado"), nem por ausência de erro em compilação quando o problema é visual/comportamental.

Este protocolo vale para qualquer tipo de erro: bugs de layout, dados incorretos em guia, problema de asset, erro de TypeScript, comportamento inesperado de componente, ou qualquer outro problema apontado pelo usuário.

## Branch de trabalho

Todo trabalho deve ser feito diretamente na branch `main`. Antes de iniciar qualquer tarefa, verificar com `git branch --show-current` que a branch ativa é `main`. Se não for, mudar com `git checkout main` antes de prosseguir. Nunca criar branches de feature nem fazer commits em outras branches sem instrução explícita do usuário.

## Idioma

Todo conteúdo produzido — textos de guia, labels, descrições, mensagens de fontes, notas de evidência, comentários no código e respostas do agente — deve ser escrito em **português brasileiro**, seguindo as normas ortográficas vigentes do Acordo Ortográfico de 1990. Usar sempre acentuação correta: não, você, também, então, ângulo, saída, munição, execução, decisão, duração, etc. Nunca escrever palavras sem acento obrigatório nem usar formas espanholadas como "rápidamente" (correto: "rapidamente"). Nomes próprios de personagens, habilidades e termos de jogo em inglês são mantidos como estão (ex.: "Web-Swing", "Dagger Storm", "pick", "dive").

## Premissa do projeto

Este app é uma base viva de coaching para Marvel Rivals, mas a tela do personagem deve priorizar o "V principal": a decisão curta que muda a próxima luta. Ele não deve ser uma ficha genérica nem um relatório enciclopédico. Cada herói precisa começar pela dica que altera a jogabilidade, depois mostrar só o necessário para executar: quando escolher a role, qual habilidade ou recurso priorizar, como usar ultimate, qual é o ponto-chave mecânico e quais adaptações fazer contra composições reais.

Detalhe, metadata, cobertura de fonte e evidências continuam obrigatórios na estrutura, mas não devem disputar espaço com o coaching. Na interface, essas informações devem ficar recolhidas, secundárias ou em ação de apoio, como botão flutuante, painel expansível ou seção compacta. Se um texto não ajuda o jogador a decidir a próxima fight, ele deve ser resumido, movido para evidências ou removido da primeira leitura.

## Objetivo principal dos guias: truques e macetes

**O coração de cada guia são truques e macetes que a maioria dos jogadores desconhece.** Não se trata de listar habilidades ou repetir o que já está na wiki — cada guia deve revelar caminhos e mecânicas especiais que melhoram muito a jogabilidade quando seguidos.

Exemplos do tipo de conteúdo que pertence ao guia:
- Cancelamentos de animação que dobram DPS
- Comportamentos de habilidade que mudam com certos estados (ex.: Get Over Here com Spider-Tracer ativo puxa o jogador até o inimigo, não o contrário)
- Janelas de invulnerabilidade e como explorá-las
- Combos que não estão documentados no jogo mas emergem da interação entre habilidades
- Timings de ultimate que transformam counter-ult em jogada ofensiva
- Uso não-óbvio de recursos (ex.: bolha do Magneto carrega Iron Ring antes de explodir)
- Posicionamento em mapas específicos que muda o resultado de uma luta

**Regra prática:** se o conteúdo pode ser lido na tela de habilidades do jogo sem nenhuma análise adicional, ele não tem lugar no coreRead. O coreRead deve conter o que o jogo não te ensina.

**O guia de referência para qualidade de truques e macetes é o da Elsa Bloodstone** (`src/data/heroes/elsa-bloodstone.ts`), que foi o único construído com pesquisa ativa na internet. Antes de finalizar qualquer guia, comparar a densidade de macetes concretos com o padrão da Elsa.

## Padrão de pesquisa

### Execução obrigatória de buscas antes de escrever qualquer guia

**Nunca escrever ou finalizar um manual de herói sem executar buscas reais na internet.** O conhecimento de treinamento do agente pode estar desatualizado, conter nomes de habilidades errados, valores incorretos ou mecânicas de patches anteriores. Todo guia deve ser baseado em fontes verificadas na sessão atual.

**Protocolo obrigatório — executar nesta ordem antes de escrever o arquivo `.ts`:**

1. **Busca na wiki oficial** — pesquisar `<Nome do Herói> Marvel Rivals wiki.gg` e acessar a página do personagem. Extrair: nomes exatos das habilidades, valores de dano, cooldowns, HP, mecânica de recurso/passiva e team-ups.

2. **Busca no site oficial** — acessar `https://www.marvelrivals.com/heroes/` e localizar a página do herói. Confirmar role, HP e lista de habilidades como publicadas pela Netease.

3. **Busca por guias escritos** — pesquisar `<Nome do Herói> Marvel Rivals guide 2026` ou `<Nome do Herói> Marvel Rivals tips reddit`. Coletar pelo menos uma fonte de coaching com recomendações específicas de jogabilidade.

4. **Busca em fórum/comunidade** — pesquisar `<Nome do Herói> Marvel Rivals reddit mains` ou equivalente. Registrar o consenso da comunidade sobre erros comuns, prioridade de habilidades e adaptações de meta.

5. **Registrar cada fonte encontrada** — adicionar no campo `sources[]` do herói com `url`, `confidence`, `published` e `takeaways` reais extraídos das páginas visitadas.

**Dados que NUNCA devem vir apenas do conhecimento de treinamento:**
- Nomes das habilidades (podem diferir entre patches)
- Valores numéricos: dano, cooldown, HP, alcance, duração
- Mecânica de recurso/passiva (pode ter sido reformulada)
- Team-ups disponíveis e seus efeitos

**Se uma fonte não for encontrada:** marcar o campo correspondente em `sourceCoverage` como pendente e deixar os valores com nota `[verificar na wiki]` nos takeaways — nunca inventar.

### Fontes por categoria

- **Fonte oficial:** site de Marvel Rivals, patch notes, página de habilidades e anúncios.
- **Wiki/public database:** Marvel Rivals Wiki (wiki.gg), Liquipedia ou equivalente para valores e imagens públicas.
- **Guias escritos:** sites especializados (Mobafire, Dot Esports, Game8), desde que a recomendação seja específica do herói e do patch atual.
- **Fórum/comunidade:** Reddit (r/marvelrivals), Discord exportado, comentários de mains, discussões de meta recente.
- **Vídeos/transcrições:** guias no YouTube, VODs, coach review e transcrições com timestamps quando possível.

Não inventar dado de vídeo sem transcrição ou anotação auditável. Se vídeo ainda não foi processado, deixar fonte como pendente.

## Estrutura de dados por herói

Cada herói tem seu próprio arquivo TypeScript em `src/data/heroes/<slug>.ts`. O arquivo `src/data/heroes.ts` é apenas um re-export e **não deve ser editado diretamente**.

```
src/data/
├── heroes.ts              ← apenas: export { heroes } from './heroes/index'
└── heroes/
    ├── index.ts           ← importa e monta o array heroes[]
    ├── deadpool.ts
    ├── black-cat.ts
    ├── magneto.ts
    ├── spider-man.ts
    ├── cloak-dagger.ts
    ├── magik.ts
    └── daredevil.ts       ← cada arquivo ~250–820 linhas
```

### Ao adicionar um novo herói

1. Criar `src/data/heroes/<slug>.ts` com o seguinte cabeçalho obrigatório:
   ```ts
   import type { HeroGuide } from '../../types'

   const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

   export const nomeEmCamelCase: HeroGuide = {
     // dados do herói
   }
   ```
2. Adicionar o import e o nome no array em `src/data/heroes/index.ts`.
3. **Nunca** colocar dados de herói diretamente em `heroes.ts`.

O slug do arquivo deve ser o mesmo valor do campo `id` do herói (ex.: `id: 'luna-snow'` → arquivo `luna-snow.ts`, export `lunaSnow`).

## Enriquecimento de dados

Cada personagem deve guardar dados em estrutura tipada em seu próprio arquivo `src/data/heroes/<slug>.ts`, com:

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

No Fandom, o PNG padrão de seleção vem de `<Hero>_DEFAULT_Table_Icon.png` e deve ser salvo como `public/heroes/select/<slug>.png`. Os GIFs dinâmicos vêm do padrão `Champion Icon <Hero> Animated.gif` e são salvos como `public/heroes/select/<slug>_champion.gif`. Não baixar nem manter PNG lord estático para a seleção quando já houver GIF dinâmico. Não rodar o script sem `--only` salvo se a intenção explícita for baixar todos os personagens.

### Protocolo de descoberta do GIF champion (obrigatório para heróis novos)

O script `--kind champion` usa `aiprefix=Champion_Icon_` na API do Fandom, que pode não encontrar o GIF se o índice ainda não foi atualizado (herói recém-lançado, arquivo recém-enviado). **Quando o script retornar 0 resultados**, executar o protocolo alternativo antes de concluir que o GIF não existe:

**Passo 1 — verificar arquivos linkados na página do personagem:**
```python
import json, urllib.parse, urllib.request
def api_get(params):
    url = f"https://marvelrivals.fandom.com/api.php?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"User-Agent": "MarvelRivalsCoach/1.0"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.loads(r.read())

page_data = api_get({'action':'query','titles':'<NomeHerói>','prop':'images','imlimit':'50','format':'json'})
pages = page_data.get('query',{}).get('pages',{})
for page in pages.values():
    for img in page.get('images', []):
        print(img['title'])
```
Isso retorna todos os arquivos linkados da página wiki — mesmo que o índice `allimages` ainda não os inclua.

**Passo 2 — confirmar se o arquivo existe de fato (`page_id != -1`):**
```python
info = api_get({'action':'query','titles':'File:Champion Icon <Hero> Animated.gif','prop':'imageinfo','iiprop':'url|size|mime','format':'json'})
for pid, p in info.get('query',{}).get('pages',{}).items():
    if pid == '-1':
        print('ARQUIVO NÃO EXISTE (link quebrado na wiki)')
    else:
        print('URL:', p.get('imageinfo',[{}])[0].get('url'))
```
`page_id == -1` significa que a wiki tem um placeholder/link vermelho mas o arquivo não foi enviado. Nesse caso, o GIF ainda não existe e `selectionHoverUrl` deve ser **omitido** do `.ts` do herói. Não criar campo com caminho para arquivo inexistente.

**Passo 3 — testar nomes alternativos** se não encontrar com o nome padrão:
- `Champion Icon <Hero> Animated.gif`
- `Champion Icon <Apelido> Animated.gif` (ex.: "Darkchild" para Magik)
- `<Hero> Champion Icon Animated.gif`

**Nunca** referenciar `selectionHoverUrl` com path de GIF que não foi baixado com sucesso. Verificar que `public/heroes/select/<slug>_champion.gif` existe no disco antes de adicionar o campo.

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

### Regra absoluta de exibição de controles

Nenhuma tecla, botão ou input de controle pode aparecer na interface como texto comum. Isso vale para título principal, subtítulos, cards, listas, tooltips, evidências, fontes, erros comuns, padrões de luta, descrições de habilidade e qualquer outro texto renderizado no app. Toda referência visual a controle deve ser exibida pelo componente/badge especial (`.control-badge`) e precisa respeitar a plataforma ativa.

Em dados de herói, texto corrido deve usar `[key:TOKEN]` para qualquer controle curto (`[key:E]`, `[key:F]`, `[key:Q]`, `[key:C]`, `[key:LMB]`, `[key:RMB]`, `[key:Shift]`, `[key:Melee]`). Não usar `E`, `F`, `Q`, `LMB`, `RMB`, `Shift` ou equivalentes soltos em frases como `Frenzied Feast (F)` ou `usar Shift`; escrever `Frenzied Feast ([key:F])` e `usar [key:Shift]`. O layout deve passar esses campos por `renderInlineKeys(text, platform)` antes de renderizar.

Se uma tela nova não consegue transformar o token em `.control-badge`, ela está incompleta. Corrigir o componente global ou a renderização da seção antes de considerar o herói pronto.

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

## Layout universal de guia — `HeroGuideLayout`

**Não existe mais componente por herói.** Todo herói é renderizado pelo componente `HeroGuideLayout` em `src/App.tsx`, que lê os dados do herói e monta o layout automaticamente. Ao adicionar um novo herói, basta criar o arquivo `.ts` de dados — nenhum JSX novo precisa ser escrito.

### Estrutura das 7 seções

```
HeroGuideLayout
├── 1. PrimerSection      — título, verdict, ability-loop (primer de loop de habilidades)
├── 2. SystemPanel        — sistema principal (systems[0]), full-width com meter opcional
├── 3. PriorityGrid       — todos os upgradePlan items em grid
├── 4. ConnectedPanel A   — MechanicContent (esq) + SecondarySystemContent systems[1] (dir)
├── 5. ConnectedPanel B   — UltimateContent (esq) + ReadContent adaptações/erros (dir)
├── 6. PatternsSection    — patterns[] em pattern-grid
└── 7. EvidenceDock       — fontes e metadata (recolhível)
```

### Campos de dados obrigatórios para novos heróis

Além dos campos padrão do `HeroGuide`, preencher:

- **`systems[0]`** — sistema principal exibido em `SystemPanel`. Deve ser o recurso/mecânica mais importante. Campos relevantes:
  - `heading?: string` — título coaching em `<h3>` acima dos facts (ex.: `'Bolha vira pressão'`)
  - `meter?: Array<{ label: string; value: string }>` — visualizador de estado em pips (ex.: anéis do Magneto, stance do Cloak/Dagger)
- **`systems[1]`** — sistema secundário exibido à direita do ConnectedPanel A.
- **`roleGuides.<role>.abilityLoop?: string[]`** — lista de nomes de habilidades para o primer loop. Se omitido, usa os 5 primeiros nomes do `upgradePlan`. Deve conter nomes que existam em `upgradePlan`.

Exemplo de sistemas com heading e meter:

```ts
systems: [
  {
    name: 'Iron Ring',
    input: 'Recurso',
    heading: 'Bolha vira pressão',
    facts: ['...', '...', '...'],
    meter: [
      { label: '1 anel', value: '40 de dano' },
      { label: '2 anéis', value: '65 de dano' },
      { label: '3 anéis', value: '90 + knockback' },
    ],
  },
  {
    name: 'Metallic Curtain',
    input: 'Shift',
    facts: ['...'],
  },
],
```

### Classes CSS do layout universal

Usar apenas estas classes — nunca criar classes por herói:

| Classe | Uso |
|---|---|
| `.primer-section` | Modificador de `.panel` para a seção de primer |
| `.system-panel` | Modificador de `.panel.full` para o SystemPanel (background com gradiente de tema) |
| `.system-meter` | Grid de pips do visualizador de estado |
| `.system-pip` | Pip individual (label + valor) |
| `.ability-loop` | Grid do loop de habilidades no primer |
| `.ability-loop-step` | Card individual do loop |
| `.priority-grid` | Grid de cards de prioridade/decisão |
| `.priority-card` | Card individual de prioridade |
| `.connected-panel.full` | Container side-by-side (ConnectedPanel A e B) |
| `.connected-card` | Lado esquerdo ou direito do connected panel |
| `.pattern-grid` | Grid de padrões de luta |
| `.pattern-card` | Card de padrão individual |

As cores de bordas e backgrounds vêm de `--theme-primary-rgb` e `--theme-secondary-rgb` do container pai — nunca hardcodar cores.

### Regra absoluta

**Nunca criar um componente JSX por herói** (ex.: `BlackCatGuide`, `MagnetoGuide`). O `HeroGuideLayout` é a única fonte de estrutura. Se um herói precisar de variação visual, isso deve ser feito via dados (campos em `HeroGuide`/`RoleGuide`) e CSS de tema — não via JSX duplicado.

### Estilos globais obrigatórios

O guia atual está bonito, legível e funcionando bem com o layout universal. Portanto, **não criar estilos individuais por herói** para seções de guia, cards, loops, grids, painéis, padrões de luta, fontes ou estados responsivos. Toda melhoria visual deve ser implementada nas classes globais do `HeroGuideLayout`, como `.ability-loop`, `.priority-grid`, `.system-panel`, `.connected-panel`, `.pattern-grid`, `.pattern-card`, `.system-meter` e equivalentes.

Classes com nome de herói ou mecânica exclusiva (`.black-cat-*`, `.magneto-*`, `.spider-*`, `.limbo-*`, `.duality-*`, `.daredevil-*`, etc.) só são aceitáveis se houver uma necessidade estritamente inevitável que não possa ser resolvida por dados, variáveis de tema, campos tipados ou uma classe global reutilizável. Antes de criar uma exceção, preferir:

1. adicionar um campo tipado em `HeroGuide`/`RoleGuide`;
2. adaptar o `HeroGuideLayout` para todos os heróis;
3. criar uma classe global reutilizável com nome sem referência ao herói;
4. usar variáveis de tema (`--theme-primary-rgb`, `--theme-secondary-rgb`) para diferenças visuais.

Se uma exceção for realmente necessária, ela deve ser pequena, documentada no próprio CSS e revisada depois para virar padrão global. Por padrão, ao adicionar ou atualizar um herói, editar apenas o arquivo de dados em `src/data/heroes/<slug>.ts` e reutilizar o layout global existente.

## Princípio de interface

A tela inicial deve parecer uma seleção de personagens do jogo: visual forte, busca rápida por nome/apelido, cards com foto, roles visíveis e acesso imediato ao guia. A leitura precisa ser fluida: o usuário deve achar rápido "o que muda minha jogabilidade agora" e só depois aprofundar em mecânica, ultimate, erros e evidências.

## Layout por personagem

O layout do guia deve servir à mecânica central do personagem por meio dos dados, não por componentes ou estilos individuais. Não recriar uma estrutura específica para cada herói; ajustar o `HeroGuideLayout` global quando a leitura precisar melhorar para todos.

- Se o personagem tem sistema de upgrades, livro, talentos ou escolhas numeradas, como o Deadpool, faz sentido ter bloco de ordem de upgrade, número da magia e prioridades por role.
- Se o personagem gira em torno de recurso, loja, relíquias, forma, combo, postura ou rotação, criar uma experiência própria para isso. A Gata Negra, por exemplo, deve mostrar Fortuna, Gilded Deal, relíquias, plano de roubo, execução, saída e Calling Card, sem citar Deadpool nem fingir que ela tem livrinho.
- A estrutura de dados deve carregar as diferenças de mecânica. A renderização deve continuar global; quando um novo padrão visual for útil, ele deve virar uma capacidade geral do `HeroGuideLayout`.
- O tema visual também deve acompanhar o personagem selecionado, usando uma paleta derivada da arte/capa quando possível.
- Antes de finalizar um novo herói, perguntar: "Qual é a coisa que esse personagem precisa dominar para ficar bom?" O layout deve responder essa pergunta na primeira leitura, com pouco ruído e sem espaços vazios artificiais entre fieldsets.
- Cards que fazem parte da mesma etapa do plano precisam estar visualmente conectados por uma faixa, coluna ou grupo comum. Evitar pares de fieldsets soltos que deixam o fundo aparecer como buraco entre conteúdos relacionados; se dois blocos se explicam juntos, eles devem parecer uma unidade.
- Revisar o layout também em viewport maior. Um card curto em meia coluna não pode deixar metade da tela vazia; nesses casos, transformar em faixa full-width, grupo conectado ou coluna independente.
