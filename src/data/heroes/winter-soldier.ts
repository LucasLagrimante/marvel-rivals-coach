import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const winterSoldier: HeroGuide = {
  id: 'winter-soldier',
  name: 'Winter Soldier',
  aliases: ['Bucky', 'Bucky Barnes', 'James Buchanan Barnes'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/winter_soldier.png'),
  bannerUrl: publicAsset('heroes/banners/winter_soldier.png'),
  selectionPortraitUrl: publicAsset('heroes/select/winter_soldier.png'),
  selectionHoverUrl: publicAsset('heroes/select/winter_soldier_champion.gif'),
  selectionHoverFit: { scale: 1.14, x: 0, y: 0 },
  theme: {
    primary: '#778aa5',
    primaryRgb: '119, 138, 165',
    secondary: '#d25a51',
    secondaryRgb: '210, 90, 81',
    surface: '#111821',
    surfaceRgb: '17, 24, 33',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-11',
  confidenceSummary:
    'Vida, habilidades, teclas, recargas e valores foram conferidos na tabela oficial do herói em 11/10/2026. O patch de 08/09/2026 elevou para 6 s a recarga por carga de Tainted Voltage, reduziu o Slow para 25% e ajustou a Vida Bônus aprimorada com Elsa para 55; esses números atuais prevalecem sobre a wiki.gg e guias antigos. Os efeitos e parceiros dos Team-Ups foram conferidos no bundle oficial vigente. Reddit foi consultado por snippets; sem leitura integral. O Batru foi consultado ao vivo em 11/10/2026 para comparar as duas duplas; taxas não demonstram causalidade.',
  coreRead: [
    'Se a bala do Roterstern acertar o alvo, o campo de impacto não causa dano extra nele: alinhe o disparo para atingir inimigos diferentes no cone.',
    'Bionic Hook separa um alvo; Trooper’s Fist converte o puxão em lançamento e ainda recarrega a arma.',
    'Kraken Impact marca uma área para execução: mire em alvos já feridos e deixe o time acompanhar antes de buscar o próximo slam.',
  ],
  teamUps: {
    summary:
      'Expert Instinct acelera as recargas após KOs e ganha mais Vida Bônus com Elsa. Timeless Veterans desbloqueia Burst Spike; com The Punisher, o golpe também aplica Grounded e empurra mais longe.',
    recommended: 'Expert Instinct',
    recommendedReason:
      'Como padrão estatístico, Expert Instinct tem 49,49% em 12.414 duplas, contra 42,22% em 18.367 para Timeless Veterans no retrato do Batru em 11/10/2026; uma enquete de comunidade do Team-Up mostra 72 de 83 votos (86,75%) para Expert Instinct. São sinais descritivos, não prova causal. Com Elsa, o bônus atual de Ceaseless Charge é 55; escolha Timeless Veterans quando Grounded e o empurrão forem a necessidade tática.',
    options: [
      {
        name: 'Timeless Veterans',
        partner: 'The Punisher',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Desbloqueia Burst Spike: ao usar o braço biônico, Bucky lança eletricidade à frente, causa dano e empurra inimigos.',
        enhancedEffect:
          'Com The Punisher na equipe, Burst Spike aplica Grounded e empurra os inimigos ainda mais longe.',
        bestFor:
          'Interromper avanço, empurrar adversários para fora da área e manter no chão heróis que dependem de voo.',
        easySetup:
          'The Punisher habilita o aprimoramento, mas Burst Spike já fica disponível no efeito base do Team-Up.',
        iconUrl: publicAsset('teamups/winter-soldier-timeless-veterans-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/winter-soldier-timeless-veterans-partner.png'),
      },
      {
        name: 'Expert Instinct',
        partner: 'Elsa Bloodstone',
        partnerRole: 'Duelista',
        input: 'Passiva',
        baseEffect:
          'Conseguir ou participar de um KO concede uma carga de Culling Instinct. Cada carga reduz a recarga das outras habilidades de Winter Soldier; todas as cargas são perdidas ao ser derrotado.',
        enhancedEffect:
          'Com Elsa Bloodstone na equipe, a Vida Bônus gerada por Ceaseless Charge aumenta; o valor atual é 55.',
        bestFor:
          'Manter a rotação após uma eliminação e aproveitar melhor o bônus de vida concedido pelo braço biônico.',
        easySetup:
          'As cargas de Culling Instinct vêm de KOs e participações; Elsa habilita o aumento de Vida Bônus.',
        iconUrl: publicAsset('teamups/winter-soldier-expert-instinct-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/winter-soldier-expert-instinct-partner.png'),
      },
    ],
    sourceIds: ['official-winter-soldier', 'winter-soldier-balance', 'official-teamups', 'winter-soldier-teamup-meta', 'winter-soldier-teamup-guide'],
  },
  systems: [
    {
      name: 'Culling Instinct',
      input: 'Passiva',
      heading: 'KO reduz recargas; morte apaga as cargas',
      facts: [
        'Conseguir ou participar de um KO concede uma carga. Cada uma reduz em 1,5 s a recarga das outras habilidades; o máximo é duas cargas.',
        'Todas as cargas somem quando Bucky é derrotado. Depois de uma eliminação, converta a janela de recarga em pressão, mas não persiga uma segunda luta sem cobertura.',
        'A passiva não substitui mira: estabilize a luta com disparos de Roterstern e use o reset para encaixar outra habilidade do braço.',
      ],
      meter: [
        { label: 'Sem carga', value: 'Recargas base' },
        { label: '1 carga', value: '−1,5 s nas outras habilidades' },
        { label: '2 cargas', value: '−3 s nas outras habilidades' },
      ],
    },
    {
      name: 'Ceaseless Charge',
      input: 'Passiva',
      heading: 'Habilidade do braço = recarga e Vida Bônus',
      facts: [
        'Usar uma habilidade do braço recarrega Roterstern automaticamente. Com apenas três projéteis no carregador, encaixe a habilidade após esvaziar a arma.',
        'Um alvo atingido pela bala direta não recebe também o dano do campo de impacto. Reserve o campo para os inimigos no cone que não foram perfurados pela bala; não some 80 + 45 no mesmo alvo.',
        'Bionic Hook e Tainted Voltage geram 40 de Vida Bônus; Trooper’s Fist e Kraken Impact geram 50.',
        'Com Expert Instinct aprimorado por Elsa, o valor atual da Vida Bônus é 55. Não confunda esse número com o valor base de outras habilidades.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'O Soldado Invernal',
      health: '275 HP',
      difficulty: 'Média: exige acertar tiros e converter o agarrão em pressão sem perder cobertura',
      job: 'Aplicar dano de média distância, puxar um alvo para o alcance do time e usar as habilidades do braço para recarregar, ganhar Vida Bônus e manter o ritmo.',
      verdict:
        'Escolha Winter Soldier quando sua equipe pode acompanhar um alvo isolado e você consegue lutar em média distância. Ele perde pressão quando gasta o gancho sem follow-up ou fica exposto depois de perder as cargas da passiva.',
      playstyle: [
        'Use Roterstern de cobertura e tente alinhar os disparos com inimigos próximos: o projétil e o campo de impacto causam dano, mas a eficácia cai após 20 m. Intercale uma habilidade do braço depois do terceiro tiro para recarregar automaticamente.',
        'Bionic Hook ([key:RMB]) é a ferramenta de pick: carregue só o necessário para alcançar o alvo e, durante a animação, gire a mira para direcioná-lo à linha de fogo aliada. Em seguida use Trooper’s Fist ([key:Shift]) para lançar quem ficou ao alcance e renovar a munição.',
        'Tainted Voltage ([key:E]) atravessa inimigos, aplica Slow e pode derrubar alvos voadores. Guarde uma carga para impedir a fuga ou confirmar o pick; com duas cargas, não precisa despejar ambas no mesmo alvo.',
      ],
      priorityKicker: 'Decisão',
      priorityTitle: 'Puxe, converta, recarregue',
      priorityDescription:
        'Bucky ganha valor quando cada habilidade do braço cria uma oportunidade de tiro, e cada KO encurta o próximo ciclo.',
      upgradePlan: [
        {
          rank: 1,
          input: 'RMB',
          ability: 'Bionic Hook',
          label: 'Separar o alvo',
          why: 'O gancho pode alcançar 20 m com uma carga de 1 s e aplica 15 de dano; use-o para trazer um alvo para o foco aliado, não para iniciar sozinho contra a equipe inteira.',
          swapWhen: 'Se um inimigo está ameaçando o suporte, use o puxão para interromper a aproximação em vez de perseguir uma eliminação.',
          sourceIds: ['official-winter-soldier', 'guide-winter-soldier'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Trooper’s Fist',
          label: 'Lançar e seguir o pick',
          why: 'A investida alcança até 9 m; agarrar causa 25 e o uppercut, 65. O golpe também recarrega a arma e dá 50 de Vida Bônus.',
          swapWhen: 'Se o alvo já está próximo de cair, use o uppercut para confirmar o KO e ganhar Culling Instinct.',
          sourceIds: ['official-winter-soldier'],
        },
        {
          rank: 3,
          input: 'E',
          ability: 'Tainted Voltage',
          label: 'Desacelerar ou derrubar voo',
          why: 'Causa 55, atravessa inimigos e reduz movimento em 25% por 2 s; também derruba heróis voadores. Cada carga tem recarga de 6 s.',
          swapWhen: 'Guarde uma carga para o alvo que tenta escapar; gaste as duas se a equipe precisa de burst imediato.',
          sourceIds: ['official-winter-soldier', 'winter-soldier-balance'],
        },
        {
          rank: 4,
          input: 'LMB',
          ability: 'Roterstern',
          label: 'Acertar tiros antes de gastar recurso',
          why: 'O carregador tem três tiros. A bala causa 80 e o campo 45, mas um inimigo atingido pela bala não recebe também o dano do campo; faça a habilidade do braço recarregar a arma em vez de usar recarga manual.',
          swapWhen: 'A partir de 20 m começa a queda de dano; aproxime-se por cobertura em vez de trocar tiros longos.',
          sourceIds: ['official-winter-soldier'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Kraken Impact',
          label: 'Marcar a área para execução',
          why: 'O slam causa 70 em raio de 5 m e aplica Culling por 5 s: o alvo morre ao cair abaixo de 20% da vida. Uma eliminação abre até 8 s para reutilizar a ultimate.',
          swapWhen: 'Use em área quando os aliados já podem reduzir os alvos; ativá-la contra um grupo saudável e protegido deixa a janela sem confirmação.',
          sourceIds: ['official-winter-soldier', 'guide-winter-soldier'],
        },
      ],
      adaptations: [
        'Contra heróis voadores, mantenha Tainted Voltage para derrubá-los e use Roterstern quando eles perderem altitude.',
        'Contra uma linha de frente protegida, não force o gancho no escudo: dispare de cobertura e espere um alvo atravessar o ângulo.',
        'Quando a equipe ganha um KO, use as cargas de Culling Instinct para encurtar recargas e manter o foco no próximo alvo, sem atravessar a cobertura aliada.',
      ],
      ultimates: [
        {
          stance: 'Execução encadeada',
          name: 'Kraken Impact',
          bestUse:
            'Iniciar quando inimigos já estão agrupados e feridos, ou converter um alvo que o time consegue levar abaixo do limiar de Culling.',
          execution:
            'Avise a equipe, escolha a área que cobre mais de um inimigo e use [key:Q]. O slam causa 70 e marca por cinco segundos; foque com os aliados em quem está mais perto de 20% de vida para abrir a janela de reutilização.',
          upgradeValue:
            'Se um inimigo marcado for eliminado, Bucky pode reutilizar Kraken Impact por até oito segundos; uma eliminação pode encadear novos slams. O reset depende de confirmar a eliminação antes que a janela expire.',
        },
      ],
      dashGuide: {
        ability: 'Roterstern → Bionic Hook → Trooper’s Fist → Roterstern',
        shortRule:
          'Use o gancho para entregar um alvo ao time; use a investida para converter o puxão e recarregar a arma.',
        mechanics: [
          'Carregue Bionic Hook apenas o suficiente para alcançar o alvo. Um segundo de carga já alcança até 20 m segundo a ficha oficial.',
          'Trooper’s Fist tem 10 s de recarga; a sequência de agarrão e uppercut causa 25 + 65 e dá 50 de Vida Bônus.',
          'Depois do terceiro tiro, uma habilidade do braço recarrega Roterstern. Volte a mirar no alvo recém-lançado em vez de recuar para uma recarga manual.',
        ],
        drills: [
          'No treino, acerte três tiros, use [key:Shift] e confirme a recarga automática antes de retomar Roterstern.',
          'Pratique carregar Bionic Hook por um segundo e puxe um alvo para perto de um aliado, não para o seu próprio lado sem apoio.',
          'Use Tainted Voltage ([key:E]) em um alvo voador e confirme a queda antes de gastar a segunda carga.',
        ],
      },
      patterns: [
        {
          title: 'Pick com cobertura',
          steps: [
            'Fique atrás de uma quina e espere um alvo sair da proteção.',
            'Carregue Bionic Hook ([key:RMB]) até alcançar o alvo e puxe-o para a linha aliada.',
            'Durante a animação do gancho, gire a mira para a direção em que quer deslocar o alvo; use Trooper’s Fist ([key:Shift]) logo em seguida para converter o puxão em lançamento.',
            'Acerte o alvo durante a queda e acompanhe o próximo ângulo sem atravessar o time inimigo.',
          ],
        },
        {
          title: 'Kraken em cadeia',
          steps: [
            'Espere os inimigos agruparem e avise que vai usar a ultimate.',
            'Marque a área com Kraken Impact ([key:Q]).',
            'Concentre o dano em um alvo já ferido até cruzar o limiar de Culling.',
            'Reutilize a ultimate dentro de oito segundos se houver eliminação confirmada.',
          ],
        },
      ],
      mistakes: [
        'Gastar Bionic Hook em alcance máximo sem alinhar o alvo com a equipe.',
        'Deixar o carregador vazio e iniciar uma recarga manual quando uma habilidade do braço já faria isso.',
        'Usar as duas cargas de Tainted Voltage antes de um alvo gastar mobilidade.',
        'Ativar Kraken Impact em uma equipe com vida cheia e esperar que o Culling execute sozinho.',
        'Morrer logo após conseguir cargas de Culling Instinct, que são perdidas na derrota.',
      ],
      evidence: [
        'official-winter-soldier',
        'winter-soldier-balance',
        'wiki-winter-soldier',
        'guide-winter-soldier',
        'forum-winter-soldier',
        'official-teamups',
        'winter-soldier-teamup-meta',
        'winter-soldier-teamup-guide',
      ],
      abilityLoop: [
        { ability: 'Roterstern', input: 'LMB' },
        { ability: 'Bionic Hook', input: 'RMB' },
        { ability: 'Trooper’s Fist', input: 'Shift' },
        { ability: 'Tainted Voltage', input: 'E' },
        'Kraken Impact',
      ],
    },
  },
  sources: [
    {
      id: 'official-winter-soldier',
      kind: 'official',
      title: 'Winter Soldier — ficha e tabela oficial de habilidades',
      url: 'https://www.marvelrivals.com/heroes/index.html?id=7b26015b-e5f2-4d01-983b-885540b6236d',
      published: '2024-11-23 (ficha consultada em 2026-10-11)',
      confidence: 'alta',
      takeaways: [
        'Confirma Duelist, 275 HP, 6 m/s e valores atuais de Roterstern, Kraken Impact, Trooper’s Fist, Tainted Voltage, Bionic Hook e Ceaseless Charge.',
        'Kraken Impact causa 70, marca Culling por 5 s, executa abaixo de 20% e pode ser reutilizado por 8 s; Hook alcança 20 m com 1 s de carga. A ficha também confirma que Roterstern não aplica campo de impacto ao alvo já atingido pela bala direta.',
      ],
    },
    {
      id: 'winter-soldier-balance',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'Tainted Voltage passou de 5 para 6 s por carga e o Slow foi reduzido de 35% para 25%.',
        'Com Elsa Bloodstone, o efeito aprimorado de Ceaseless Charge passou a conceder 55 de Vida Bônus, em vez de 70.',
      ],
    },
    {
      id: 'official-teamups',
      kind: 'official',
      title: 'Team-Up — Marvel Rivals',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10-11 (bundle consultado)',
      confidence: 'alta',
      takeaways: [
        'As opções atuais são Timeless Veterans (The Punisher) e Expert Instinct (Elsa Bloodstone); os textos, parceiros, tecla [key:C], 85 de Burst Spike e redução de recarga por Culling Instinct foram conferidos no bundle oficial.',
      ],
    },
    {
      id: 'winter-soldier-teamup-meta',
      kind: 'database',
      title: 'Winter Soldier Team-Ups — Batru Season 10.5',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/winter-soldier',
      published: '2026-10-11 (dados atualizados)',
      confidence: 'alta',
      takeaways: [
        'No retrato consultado em 11/10/2026, Expert Instinct (Winter Soldier + Elsa Bloodstone) aparece com 49,49% em 12.414 partidas; Timeless Veterans (Winter Soldier + The Punisher), 42,22% em 18.367. A página define os números como agregados da dupla exata nos últimos 30 dias, recalculados diariamente.',
        'A taxa de vitória da dupla não isola o efeito do Team-Up nem controla composição, habilidade ou seleção de heróis; usar como sinal comparativo, não como prova causal.',
      ],
    },
    {
      id: 'winter-soldier-teamup-guide',
      kind: 'guide',
      title: 'Winter Soldier Team-Ups — Rivalsteamups.com',
      url: 'https://rivalsteamups.com/heroes/winter-soldier',
      published: '2026 (Season 10; consultada em 2026-10-11)',
      confidence: 'media',
      takeaways: [
        'A página registra preferência comunitária de 87% por Expert Instinct contra 13% por Timeless Veterans; os detalhamentos totalizam 83 votos (72 contra 11), amostra pequena e autorrelatada, não taxa de vitória.',
        'O texto ressalta que a escolha depende de composição, geometria do mapa e ritmo da luta; Grounded/knockback é a utilidade situacional de Timeless Veterans.',
      ],
    },
    {
      id: 'wiki-winter-soldier',
      kind: 'database',
      title: 'Winter Soldier — The Marvel Rivals Wiki',
      url: 'https://marvelrivals.wiki.gg/wiki/Winter_Soldier',
      published: '2026 (consultada em 2026-10-11)',
      confidence: 'em disputa',
      takeaways: [
        'Usada para conferir nomes e relações entre as mecânicas; valores de hook, cargas e limiar de Culling divergem da ficha oficial atual e não foram usados quando havia conflito.',
      ],
    },
    {
      id: 'guide-winter-soldier',
      kind: 'guide',
      title: 'Winter Soldier Guide: How to Play, Tips and Tricks & Matchups — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/winter-soldier-guide',
      author: 'CanadianAlfredo',
      published: '2025-05-05',
      confidence: 'media',
      takeaways: [
        'Usado para a decisão de puxar alvos para o time, converter Hook em Trooper’s Fist e priorizar inimigos feridos para criar resets do ultimate. Os valores publicados são antigos e foram substituídos pelos oficiais atuais.',
      ],
    },
    {
      id: 'forum-winter-soldier',
      kind: 'forum',
      title: 'Tips for winter soldier? — Reddit r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1huhhog/tips_for_winter_soldier',
      published: '2025 (snippet consultado em 2026-10-11)',
      confidence: 'pendente',
      takeaways: [
        'Snippets comunitários destacam lutar perto de cobertura, acertar headshots e alternar tiros com habilidades para evitar reload manual. A leitura integral do Reddit foi bloqueada; não é fonte de números.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 3, status: 'Ficha atual, balance post e bundle vigente de Team-Up consultados.' },
    { kind: 'database', label: 'Wiki/Database', count: 2, status: 'wiki.gg e Batru Season 10.5 consultados; taxas de dupla são descritivas e não causais.' },
    { kind: 'guide', label: 'Guias', count: 2, status: 'MarvelRivals.gg consultado para decisões de pick/reset; Rivalsteamups registra uma enquete pequena, não uma medição de desempenho.' },
    { kind: 'forum', label: 'Fórum/Comunidade', count: 1, status: 'Reddit consultado por snippets; leitura integral pendente.' },
    { kind: 'video-transcript', label: 'Vídeos', count: 0, status: 'Pendente: nenhuma transcrição auditável usada.' },
  ],
}
