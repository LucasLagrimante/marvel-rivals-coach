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

### Team-Up — pesquisa obrigatória em todo guia (Season 10+)

Desde a reformulação da Temporada 9, todo herói tem exatamente dois Team-Ups selecionáveis. O efeito **base** funciona sem o parceiro; o **aprimorado** acende automaticamente quando o parceiro nomeado está no time. Só um fica equipado por partida, e a troca é livre na sala de spawn. A Temporada 10 é a referência atual.

**Fontes obrigatórias antes de escrever `teamUps` (todas registradas em `sources[]` e linkadas em `teamUps.sourceIds`):**

1. **Página oficial de Team-Up** (`https://www.marvelrivals.com/heroes/teamup.html`) — fonte canônica dos nomes, parceiros, teclas e textos de efeito base/aprimorado. O conteúdo é um bundle JS; o script `scripts/download_teamup_assets.py` baixa os ícones e o retrato do parceiro e também serve para conferir os nomes oficiais (ele avisa se o nome mudou).
2. **Guia com recomendação por herói** — ex.: Gamelevate "Best Team-Ups for Every Hero"; registrar qual opção o guia recomenda e por quê.
3. **Base com win rate de dupla** — ex.: Batru (`https://batru.gg/marvel-rivals/meta/synergy/<slug>`) ou Counterwatch; registrar os dois números e a ressalva de que a dupla medida mistura a força individual dos heróis no meta.
4. **Balance post da temporada atual** — conferir se algum dos Team-Ups do herói foi buffado/nerfado (ex.: nerfs de Metallic Chaos, Void Pentagram e Frozen Haven na Temporada 10) e registrar em fonte própria.

**O que cada opção precisa ter:** `name` (nome oficial), `partner`, `partnerRole`, `input` (token canônico da tabela de controles), `baseEffect` e `enhancedEffect` (tradução fiel do texto oficial, sem inventar números), `bestFor` (quando escolher), `easySetup` (formação mais fácil para ativar o aprimorado, ou que o base já vale sozinho), `iconUrl` e `partnerPortraitUrl` (assets locais). No nível do herói: `summary` (regra de decisão curta), `recommended` (nome da melhor opção no geral) e `recommendedReason` (por quê, citando patch/medição).

**Nunca** declarar "melhor escolha" sem confrontar recomendação de guia x win rate medido. Quando as fontes divergirem, o painel deve dizer para que caso cada opção serve — não esconder a divergência.

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
- `teamUps`: as duas opções de Team-Up da temporada atual, com `summary`, `recommended`, `recommendedReason`, textos oficiais de base/aprimorado, `bestFor`/`easySetup` por opção, assets locais e `sourceIds`. Renderizado pelo `TeamUpPanel` logo abaixo do primer.

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
2. Buscar fonte oficial, wiki/public asset, guias, fórum e vídeos/transcrições, mais as fontes obrigatórias de Team-Up (página oficial de Team-Up, recomendação de guia, win rate de dupla e balance post da temporada).
3. Baixar os assets com `python scripts/download_teamup_assets.py --only <slug>` e popular a estrutura do personagem com foto, fontes, `teamUps` e análise específica.
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

## Assets de Team-Up

Os ícones de habilidade e retratos de parceiro vêm da página oficial de Team-Up e são baixados para `public/teamups/<hero-slug>-<opcao>-icon.png` e `public/teamups/<hero-slug>-<opcao>-partner.png`:

```bash
python scripts/download_teamup_assets.py --only deadpool magneto   # só heróis cadastrados
python scripts/download_teamup_assets.py --force                   # rebaixa tudo
```

O script baixa o HTML da página, localiza o bundle `teamup_<hash>.js` (que muda a cada publicação), extrai os dados oficiais dos 53+ heróis e resolve as imagens. Ele valida se o nome oficial da habilidade mudou e avisa no console — se avisar, atualizar o `.ts` do herói. O manifesto `HEROES` no topo do script mapeia `slug do app → nome oficial → slugs das opções`; ao adicionar um herói novo, incluir a entrada lá e rodar com `--only`.

Como os assets são oficiais, os campos `iconUrl` e `partnerPortraitUrl` do `teamUps` devem usar `publicAsset('teamups/<arquivo>.png')` (nunca link cru de CDN). Antes de finalizar, conferir no browser que os ícones carregaram (`naturalWidth > 0`).

## Controles por plataforma

O app tem um seletor de plataforma (PC / PS5 / Xbox) persistido em `localStorage`. Todo guia deve usar os controles corretos da plataforma ativa — nunca escrever teclas hardcoded como `"E"`, `"RMB"` ou `"Q"` diretamente no JSX.

### Regra absoluta de exibição de controles

Nenhuma tecla, botão ou input de controle pode aparecer na interface como texto comum. Isso vale para título principal, subtítulos, cards, listas, tooltips, evidências, fontes, erros comuns, padrões de luta, descrições de habilidade e qualquer outro texto renderizado no app. Toda referência visual a controle deve ser exibida pelo componente/badge especial (`.control-badge`) e precisa respeitar a plataforma ativa.

Em dados de herói, texto corrido deve usar `[key:TOKEN]` para qualquer controle curto (`[key:E]`, `[key:F]`, `[key:Q]`, `[key:C]`, `[key:LMB]`, `[key:RMB]`, `[key:Shift]`, `[key:Melee]`). Não usar `E`, `F`, `Q`, `LMB`, `RMB`, `Shift` ou equivalentes soltos em frases como `Frenzied Feast (F)` ou `usar Shift`; escrever `Frenzied Feast ([key:F])` e `usar [key:Shift]`. Todo campo de texto deve ser renderizado pelo componente `RichText` (ou por primitivos que já o usam: `ListBlock`, `RichParagraph`, `FactLine`, `SectionHead`).

Se uma tela nova não consegue transformar o token em `.control-badge`, ela está incompleta. Corrigir o componente global ou a renderização da seção antes de considerar o herói pronto.

### Auditoria obrigatória antes de finalizar qualquer herói

Antes de encerrar o trabalho em qualquer componente de guia, verificar **cada ocorrência** de input de controle no JSX do herói:

1. **Nenhum campo de texto cru?** — Nenhum `{step.input}`, `{system.name}`, `{fact}`, `{step.label}` renderizado direto: sempre via `RichText` / `ControlBadge` / primitivos.
2. **`ControlBadge` para keycap standalone?** — Cards de prioridade, loop e sistemas usam `<ControlBadge token={...} spellNumber={...} />` (nunca montar o `<kbd>` na mão).
3. **Nenhuma tecla hardcoded no JSX?** — Strings como `'LMB'`, `'RMB'`, `'E'`, `'Q'`, `'Shift'` dentro de texto corrido ou arrays de dados visuais não podem aparecer soltas.
4. **Todo input renderizado com `.control-badge`?** — Nenhuma string de controle deve aparecer sem a classe keycap.

Se qualquer um desses pontos falhar, o herói **não está pronto**. Corrigir antes de rodar o build.

### Como usar em um novo guia

1. Para keycap standalone (card de prioridade, loop, sistema), usar o primitivo:
   ```tsx
   <ControlBadge token={step.input} spellNumber={step.spellNumber} />
   ```

2. Para texto corrido, usar `RichText` ou um primitivo que já o aplica:
   ```tsx
   <RichText text={fact} />                    // parágrafo/linha
   <ListBlock items={facts} limit={2} tone="info" />   // lista com disclosure
   <FactLine label="Execução" text={ultimate.execution} tone="neutral" />
   ```

3. O badge tem estilo keycap 3D (gradiente, border-bottom espessa) e adapta a cor ao tema do herói via `--theme-secondary-rgb`. Ele usa `em`, então escala junto com o texto do componente onde foi inserido.

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

Para renderizar, usar o componente `RichText` (ou primitivos que já o aplicam) no lugar do `{text}` cru:

```tsx
// ERRADO
<li>{fact}</li>

// CORRETO
<li><RichText text={fact} /></li>
```

`RichText` é no-op quando não há tokens: strings sem `[key:…]` são retornadas intactas e não têm custo de runtime. Usar em todos os campos de texto corrido dos guias, mesmo que ainda não tenham tokens — garante que futuras adições de teclas funcionem automaticamente.

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

## Arquitetura de UI — design system

**Não existe componente JSX por herói.** Todo guia é montado por componentes reutilizáveis que leem os dados de `src/data/heroes/<slug>.ts`. Adicionar um herói = criar o arquivo de dados; nenhum JSX novo é escrito.

### Estrutura de arquivos

```
src/
├── App.tsx                  ← só roteamento + estado (fino, sem JSX de tela)
├── components/
│   ├── ui/                  ← primitivos reutilizáveis (Panel, RichText, ListBlock…)
│   ├── shell/               ← Topbar, Brand, PlatformSelector
│   ├── select/              ← SelectScreen, HeroTile (menu)
│   └── guide/               ← seções do guia + HeroGuideLayout + GuideScreen
├── lib/                     ← helpers puros: text, routes, theme, roles, sources, cx
└── styles/
    ├── tokens.css           ← design tokens (fonte única de verdade)
    ├── shell.css
    ├── components.css
    ├── select.css
    └── guide.css
```

### Primitivos — usar sempre, nunca recriar

| Componente | Uso |
|---|---|
| `Panel` | superfície de seção (`tone="base" \| "system" \| "quiet"`) |
| `SectionHead` | cabeçalho (kicker + título + descrição + ícone); strings passam por `RichText` |
| `RichText` | **obrigatório** em todo texto de dado — converte `[key:TOKEN]` em keycap |
| `RichParagraph` | parágrafo com clamp e "Ver mais" automático acima do threshold |
| `FactLine` | linha rótulo + texto (Uso, Execução, Valor, Base, Com upgrade, Em luta) |
| `ListBlock` | lista com marcador semântico (`info/warn/danger/check/plain`) e disclosure |
| `More` | disclosure progressivo (`collapsed` = preview, `children` = conteúdo completo) |
| `Callout` | destaque (`info/rule/warn/danger`) |
| `Chip` | pílula de metadado |
| `StatGrid` | grade de stats (`tile` ou `inline`) |
| `Meter` | pips de estado (anéis, cargas, stances) |
| `FlowChain` | corrente visual de habilidades com setas e keycaps |
| `ControlBadge` | keycap de controle — única forma de exibir tecla |

### Seções do guia (ordem fixa, aplicada a todos os heróis)

```
HeroGuideLayout
├── 1. HeroBanner        — nome + gancho curto + 3 stats (role, foco, 1ª decisão)
├── 2. PrimerSection     — V principal: função, veredito, pilares do kit, loop de habilidades
├── 3. TeamUpPanel       — Team-Up ativo: melhor escolha, as 2 opções, base x aprimorado, formação
├── 4. SystemPanel       — systems[0] com meter opcional
├── 5. PriorityGrid      — upgradePlan em cards de decisão
├── 6. ConnectedPanel A  — MechanicPanel (esq) + SecondarySystemPanel systems[1] (dir)
├── 7. ConnectedPanel B  — UltimatePanel (esq) + ReadPanel adaptações/erros/plano (dir)
├── 8. PatternsPanel     — roteiros de luta
└── 9. EvidenceDock      — fontes e metadata (dock flutuante recolhível)
```

### Navegação de seções (topbar)

`GuideSectionNav` (em `src/components/guide/GuideSectionNav.tsx`) renderiza âncoras no topbar com
scroll-spy e atalho para o dock de fontes. Cada seção precisa do `id` correspondente no painel —
mapa canônico: `guia-visao-geral`, `guia-teamup`, `guia-sistema`, `guia-prioridade`, `guia-mecanica`,
`guia-ultimate`, `guia-padroes`. Ao criar uma seção nova: adicionar o `id` (prop do `Panel`),
registrar no mapa da nav e conferir o `scroll-margin-top` no `guide.css` (compensa o topbar sticky).
No mobile a nav rola horizontalmente (`flex-wrap: nowrap` + `overflow-x: auto`) — **nunca** deixar as
pílulas quebrarem linha, ou o topbar vira uma parede de 270px no celular.

### Campos de dados obrigatórios para novos heróis

Além dos campos padrão do `HeroGuide`, preencher:

- **`systems[0]`** — sistema principal exibido em `SystemPanel`. Deve ser o recurso/mecânica mais importante. Campos relevantes:
  - `heading?: string` — título coaching em `<h3>` acima dos facts (ex.: `'Bolha vira pressão'`)
  - `meter?: Array<{ label: string; value: string }>` — visualizador de estado em pips (ex.: anéis do Magneto, stance do Cloak/Dagger)
- **`systems[1]`** — sistema secundário exibido à direita do ConnectedPanel A.
- **`teamUps`** — obrigatório em todo herói novo. As duas opções da temporada atual com `summary`, `recommended`, `recommendedReason`, `options[]` (name/partner/partnerRole/input/baseEffect/enhancedEffect/bestFor/easySetup/iconUrl/partnerPortraitUrl) e `sourceIds` apontando para as fontes registradas em `sources`. Os assets vêm do script de Team-Up; o painel fica no topo, logo depois do primer.
- **`roleGuides.<role>.abilityLoop?: Array<string | { ability: string; input?: string }>`** — lista de habilidades para o primer loop. Se omitido, usa os 5 primeiros nomes do `upgradePlan`. Prefira nomes que existam em `upgradePlan` (o layout casa por nome exato e por prefixo; ultimate sem passo vira keycap `Q`). Se a habilidade não existir no `upgradePlan`, usar a forma objeto com token canônico — `{ ability: 'Iron Bulwark', input: 'F' }` — senão o card sai sem keycap silenciosamente.

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
| `.panel` / `.panel-full` | superfície de seção (`.panel-system` para o sistema principal) |
| `.primer-section` | modificador do primer |
| `.teamup-panel` / `.teamup-best` / `.teamup-grid` / `.teamup-card` | Team-Up ativo: recomendação, cards das opções, estados base/aprimorado |
| `.system-panel` / `.system-meter` / `.system-pip` | sistema principal e pips de estado |
| `.ability-loop` / `.ability-loop-step` | corrente visual do loop de habilidades |
| `.priority-grid` / `.priority-card` / `.tool-card-head` | cards de decisão de habilidade |
| `.connected-panel.full` / `.connected-card` | container side-by-side (A e B) |
| `.mini-grid` / `.mini-col` | colunas internas de um card conectado |
| `.pillar-grid` / `.pillar-card` | pilares do kit no primer |
| `.pattern-grid` / `.pattern-card` / `.pattern-step` | roteiros de luta |
| `.callout.is-info\|rule\|warn\|danger` | destaques |
| `.chip`, `.stat-grid`, `.fact-line`, `.bullet-list`, `.more` | primitivos visuais |

As cores de bordas e backgrounds vêm de `--theme-primary-rgb` / `--theme-secondary-rgb` do container pai — nunca hardcodar cores.

### Regras de layout à prova de viewport

1. **Nunca** usar `white-space: nowrap` em texto que pode ser longo.
2. Todo filho de grid/flex precisa de `min-width: 0`.
3. Grids de cards: `repeat(auto-fit, minmax(min(100%, <X>rem), 1fr))` — nunca `repeat(3, 1fr)` fixo.
4. Texto de card escala pelo próprio card: `container-type: inline-size` no card + `font-size: clamp(..., <N>cqi + <N>px, ...)`. Não usar px fixo de fonte.
5. Divisão em colunas internas usa `@container (min-width: ...)`, nunca media query de viewport.
6. O container não estiliza a si mesmo: mudanças estruturais do próprio elemento (ex.: empilhar o banner) usam `@media`.
7. O banner usa altura fixa (`height: clamp(...)`) e `overflow: hidden`; o gancho é curto de propósito para nunca cortar kicker/título/stats.
8. Topbar: o contexto do herói some em ≤900px e o seletor de plataforma/botão voltar compactam em ≤560px — o cabeçalho não pode passar de 2 linhas fora do celular (referência: 126px em desktop, 101px no mobile). Medir `document.querySelector('.topbar').getBoundingClientRect().height` ao mudar o topbar.

### Regra absoluta

**Nunca criar um componente JSX por herói** (ex.: `BlackCatGuide`, `MagnetoGuide`). O `HeroGuideLayout` é a única fonte de estrutura. Se um herói precisar de variação visual, isso deve ser feito via dados (campos em `HeroGuide`/`RoleGuide`) e CSS de tema — não via JSX duplicado.

### Estilos globais obrigatórios

**Não criar estilos individuais por herói** para seções, cards, loops, grids, painéis, padrões de luta, fontes ou estados responsivos. Toda melhoria visual deve ser implementada:
1. nos tokens de `src/styles/tokens.css` (cores, `--fs-*`, `--sp-*`, `--r-*`);
2. nas classes globais de `src/styles/components.css` / `guide.css`.

Classes com nome de herói (`.black-cat-*`, `.magneto-*`, `.spider-*`, `.limbo-*`, etc.) são proibidas. Antes de criar uma classe nova, preferir:

1. adicionar um campo tipado em `HeroGuide`/`RoleGuide`;
2. adaptar o `HeroGuideLayout`/componente global para todos os heróis;
3. criar uma classe global reutilizável com nome sem referência ao herói;
4. usar variáveis de tema (`--theme-primary-rgb`, `--theme-secondary-rgb`) para diferenças visuais.

### Conteúdo: concisão obrigatória (anti-wiki)

O guia deve parecer um briefing de partida, não uma wiki. Regras de densidade:

- **Banner**: gancho derivado da 1ª frase do `coreRead[0]` (o layout corta em ~150 caracteres). Nunca um parágrafo inteiro.
- **Listas visíveis**: 1–2 itens + "Ver mais" (disclosure progressivo). O conteúdo completo continua acessível, mas nunca na primeira leitura.
- **Card de prioridade**: `label` curto + `why` clampado em 4 linhas. Campos técnicos (`baseEffect`, `upgradeEffect`, `fightNote`) ficam em "Detalhes técnicos".
- **Nunca repetir o mesmo texto em duas seções**: o `coreRead` aparece só no primer/banner; o `SystemPanel` mostra apenas o sistema.
- `playstyle` (Plano de jogo), `confidenceSummary` (metodologia) e takeaways extras de fonte vivem atrás de disclosure.
- `difficulty` deve ser `"<rótulo curto>: <explicação>"` — o rótulo vira chip e a explicação vira nota de execução.
- `coreRead[i]` ideal: `"<Pilar curto>: <explicação acionável>"` — o prefixo vira título do card de pilar automaticamente.

### Verificação obrigatória antes de finalizar qualquer herói ou mudança de layout

1. `npx tsc -b` e `npx eslint src` sem erros.
2. Screenshot/inspeção em **1600, 1440, 1366, 1280, 1180, 1024, 900, 768, 560 e 390** de largura.
3. Em cada largura: `document.documentElement.scrollWidth <= window.innerWidth + 1` (zero overflow horizontal) e `scrollHeight - clientHeight <= 2` no `.hero-copy` (banner não corta).
4. Verificar o menu (home), o guia do herói novo e um herói com 3 roles (Deadpool).
5. Se o dev server estiver em `/mnt/c`, reiniciar o Vite após lotes de edição — o watcher não recebe eventos do filesystem do Windows.

## Restrições do banner de herói (hero-banner)

O banner (`.hero-banner`) tem altura fixa via `height: clamp(280px, 23vw, 380px)` com `overflow: hidden`. O conteúdo textual (`.hero-copy`) usa `justify-content: center` e é dimensionado para caber: kicker, h1, gancho de 2 linhas e 3 stat-tiles. O gancho é a 1ª frase do `coreRead[0]` cortada em ~150 caracteres pelo componente `HeroBanner` — **nunca** passar o parágrafo completo.

### Tamanho do h1 por tipo de nome

O `HeroBanner` detecta se o nome do herói contém espaço ou hífen e adiciona `data-multiword="true"` no `<h1>`. O CSS aplica os tokens automáticos:

- **Nome simples** (Ciclope, Magneto, Deadpool): `--fs-hero` — `clamp(38px, 2.2rem + 4.1vw, 80px)`
- **Nome composto com espaço ou hífen** (Homem-Aranha, Manto e Adaga, Elsa Bloodstone): `--fs-hero-compact` — automático via atributo

**Nunca hardcodar `font-size` por herói.** A detecção é automática; novos heróis com nomes compostos já são tratados sem intervenção.

### Tamanho do coreRead[0]

O guia nunca depende do `coreRead[0]` inteiro no banner — o componente deriva a primeira frase. Ainda assim, mantenha `coreRead[0]` abaixo de ~250 caracteres para o gancho ficar bom e para o card de pilar não estourar.

### Retratos e imagem de fundo

A imagem `.hero-portrait img` usa `height: clamp(600px, 46vw, 840px)` — propositalmente maior que o banner para criar efeito de crop. **Nunca mudar `.hero-banner` de `height` para `min-height`**: isso remove a restrição, a imagem de retrato expande e o banner fica enorme. No mobile (≤660px) o banner empilha via `@media` e o retrato ganha altura própria com `overflow: hidden`.

## Layout por personagem

O layout do guia deve servir à mecânica central do personagem por meio dos dados, não por componentes ou estilos individuais. Não recriar uma estrutura específica para cada herói; ajustar o `HeroGuideLayout` global quando a leitura precisar melhorar para todos.

- Se o personagem tem sistema de upgrades, livro, talentos ou escolhas numeradas, como o Deadpool, o `PriorityGrid` já suporta `spellNumber`, `baseEffect`, `upgradeEffect` e `fightNote` (recolhidos em "Detalhes técnicos").
- Se o personagem gira em torno de recurso, loja, relíquias, forma, combo, postura ou rotação, a estrutura de dados deve carregar isso (`systems[0].meter`, `dashGuide`, `patterns`) — a renderização continua global.
- O tema visual acompanha o personagem selecionado via `heroThemeStyle()` → `--theme-*-rgb`; nunca criar CSS por herói.
- Antes de finalizar um novo herói, perguntar: "Qual é a coisa que esse personagem precisa dominar para ficar bom?" O layout deve responder essa pergunta na primeira leitura, com pouco ruído e sem espaços vazios artificiais entre seções.
- Cards que fazem parte da mesma etapa do plano precisam estar visualmente conectados (`connected-panel` com faixa/coluna comum). Evitar pares de fieldsets soltos que deixam o fundo aparecer como buraco entre conteúdos relacionados.
- Revisar o layout também em viewport maior. Um card curto em meia coluna não pode deixar metade da tela vazia; nesses casos, transformar em faixa full-width, grupo conectado ou coluna independente.
