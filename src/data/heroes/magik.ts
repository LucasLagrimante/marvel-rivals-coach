import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const magik: HeroGuide = {
  id: 'magik',
  name: 'Magia',
  aliases: ['Magik', 'Illyana Rasputin', 'Darkchild', 'Feiticeira de Limbo', 'Ilyana', 'Soul Sorceress'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/magik.png'),
  bannerUrl: publicAsset('heroes/banners/magik.png'),
  selectionPortraitUrl: publicAsset('heroes/select/magik.png'),
  selectionHoverUrl: publicAsset('heroes/select/magik_champion.gif'),
  theme: {
    primary: '#9b3bc4',
    primaryRgb: '155, 59, 196',
    secondary: '#f5c518',
    secondaryRgb: '245, 197, 24',
    surface: '#140b24',
    surfaceRgb: '20, 11, 36',
  },
  roles: ['duelist'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Kit conferido na página oficial e cruzado com wiki, guias de mains e múltiplas fontes especializadas. Valores de dano e cooldown validados. Mecânicas de animation cancel, invulnerabilidade no portal, Magik Slash reduzindo cooldown, Soulsword atravessando escudos e vulnerabilidade ao reverter Darkchild confirmadas em pesquisa ativa com fontes primárias e secundárias.',
  coreRead: [
    'Magia é a única Duelista do jogo com invulnerabilidade real durante a mobilidade: enquanto está dentro do Stepping Discs, nenhum projétil ou habilidade a acerta — inclusive ultimates inimigos. Entrar no portal no último segundo e um "não existe" contra qualquer burst.',
    'A passiva Limbo\'s Might converte 30% do dano causado em HP bônus (cap de +150), inclusive dano do Demon\'s Rage e Magik Slash. Não é cura: ela recebe HP bônus mesmo com vida faltando — mas o bônus some se ela parar de atacar e não sobrevive ao próximo teamfight.',
    'O Magik Slash reduz o cooldown do Stepping Discs em 1s por inimigo acertado: spam de slash no tanque inimigo enquanto espera a abertura é a forma de manter os portais online para o dive. Sem essa mecânica, a Magia fica presa esperando cooldown.',
  ],
  systems: [
    {
      name: 'Stepping Discs',
      input: 'E',
      heading: 'Invulnerabilidade real dentro do portal',
      facts: [
        '2 cargas, 6s de cooldown por carga (3s durante Darkchild). A Magia é completamente imune a dano dentro do portal — inclusive ultimates. Entrar no portal no último segundo cancela qualquer burst que já estava vindo.',
        'Nos 3 segundos após sair do portal: [key:LMB] executa Eldritch Whirl (AoE 360° — melhor contra suportes e grupos); [key:RMB] invoca Demon\'s Rage (demônio estacionario ~72 DPS — melhor contra Vanguards, deployables e zonar área).',
        'Uso ofensivo avançado: teleporte atrás do inimigo, ative Demon\'s Rage olhando para ele — o demônio ataca de trás enquanto a Magia baté de frente. Direcionar o olhar ao ativar define para onde o demônio acerta.',
        'Sempre guarde uma carga para fuga. O truque do "Double Portal Dance": use a primeira carga para entrar — o inimigo gasta cooldowns reagindo — depois use a segunda para escapar ou reposicionar.',
      ],
      meter: [
        { label: 'Dentro do portal', value: 'nenhum dano entra' },
        { label: '[key:LMB]', value: 'Eldritch Whirl AoE' },
        { label: '[key:RMB]', value: "Demon's Rage burst" },
      ],
    },
    {
      name: 'Limbo\'s Might',
      input: 'Passiva',
      facts: [
        'Converte 30% de todo dano causado em HP bônus, com cap de +150 — inclusive dano do demônio (Demon\'s Rage) e do Magik Slash. Todo hit conta.',
        'HP bônus é concedido mesmo com vida faltando: a Magia pode estar em 50 HP base e receber os +150 de bônus por cima. Não é cura, é escudo que vem do dano.',
        'A passiva exige agressividade total: parar de atacar por alguns segundos faz o bônus desaparecer — o erro de "morrer rica" é ficar com +150 bônus mas não atacar no momento errado.',
      ],
    },
    {
      name: 'Darkchild',
      input: 'Q - Ultimate',
      facts: [
        'Transforma a Magia por 12 segundos, potencializando todas as habilidades: Soulsword acerta 3x por swing, Eldritch Whirl acerta 3x e tem alcance aumentado, Demon\'s Rage ganha +100 de HP, Magik Slash causa ~180 dano no charge máximo, Stepping Discs com 3s de cooldown.',
        'TODOS os cooldowns resetam ao ativar o Ultimate. Regra obrigatória: gaste todas as habilidades antes de ativar.',
        'Darkchild NÃO concede HP extra. Ativar no aberto com pouca vida é morte certa — sempre transformar atrás de cobertura ou com HP bônus alto.',
        'Ao reverter a forma, há uma janela de animação onde a Magia não pode agir mas pode ser morta. Secure os kills antes do tempo acabar ou fique perto de aliados ao reverter.',
        'Luna Snow e Mantis com ultimaté ativa neutralizam o Darkchild via counter-healing massivo — reconheça e recue em vez de comprometer o ultimate.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelist',
      nickname: 'Flanker de Limbo',
      health: '250 HP',
      difficulty: 'Alta: animation cancel, gestão de portal e timing do Darkchild precisam alinhar',
      job: 'Eliminar suportes isolados, forçar peel da backline e escapar pelo portal antes que o time inimigo responda.',
      verdict:
        'Escolha a Magia quando o time inimigo deixa suportes separados ou quando a backline está sem anti-dive. Evite contra Peni Parker, Namor ou qualquer setup com muito crowd control — eles anulam o kit de invulnerabilidade e burst curto.',
      playstyle: [
        'Antes de engajar, verifique se o suporte alvo está separado do tanque. A Magia mata suportes de 300 HP antes de reagirem; contra Vanguard, ela não tem sustain suficiente sem Darkchild.',
        'A entrada limpa e: Magik Slash carregado atrás de cobertura, soltar ao sair, Umbral Incursion, Soulsword com animation cancel. Com Darkchild disponível, gaste todas as habilidades primeiro, ative, e execute de novo com cooldowns resetados.',
        'Se o alvo sobreviveu e saiu do alcance, não force melee no chão sem cobertura. Entre pelo portal para reposicionar ou use-o para fuga imediata. 250 HP despenca rápido quando o time inimigo vira a câmera.',
      ],
      priorityKicker: 'Execucao',
      priorityTitle: 'Sequencia de entrada',
      priorityDescription:
        'A Magia não tem árvore de upgrade: a prioridade é construir uma janela curta de burst, ler se ela virou kill e manter um portal de saída disponível.',
      upgradePlan: [
        {
          rank: 1,
          input: 'LMB',
          ability: 'Soulsword',
          label: 'maior hitbox melee do jogo',
          why:
            'O botão que gera a passiva. Cada swing com animation cancel ([key:LMB] → [key:Melee] → [key:LMB]) quase dobra o DPS; sem o cancel, você causa metade do dano e a Magia fica frágil por mais tempo.',
          swapWhen:
            'Durante Darkchild, cada swing acerta 3 vezes; o cancel fica ainda mais critico porque cada hit contribui para a passiva.',
          sourceIds: ['official-magik', 'wiki-magik', 'mobalytics-magik'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Umbral Incursion',
          label: 'engage com launch',
          why:
            'E o botão de entrada com 85 de dano e launch vertical que abre o alvo para followup. Mirar levemente a direita do corpo inimigo aumenta muito a taxa de acerto por conta do hitbox de terceira pessoa.',
          swapWhen:
            'Se o alvo está em grupo, use Stepping Discs para reposicionar antes de usar Umbral Incursion em alvo isolado do grupo.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'marvelrivalsgg-magik'],
        },
        {
          rank: 3,
          input: 'E',
          ability: 'Stepping Discs',
          label: 'portal + followup + invulnerabilidade',
          why:
            'Saida garantida e ferramenta ofensiva ao mesmo tempo. Dentro do portal, nenhum projétil ou habilidade a acerta. Ao sair, escolha o followup em 3 segundos: Eldritch Whirl (AoE) ou Demon\'s Rage (burst constante). Nunca use as duas cargas ofensivamente.',
          swapWhen:
            'Contra ultimaté inimiga ou burst concentrado, entre no portal para absorver o dano e reaparecer em posicao vantajosa.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-portal'],
        },
        {
          rank: 4,
          input: 'RMB',
          ability: 'Magik Slash',
          label: 'burst a distancia antes da entrada',
          why:
            'Charge de até 1.2 segundos causa 90 de dano e pode ser preparado atrás de cobertura. Usar antes de Umbral Incursion adiciona ~175 de dano pre-engage que o alvo não consegue evitar facilmente.',
          swapWhen:
            'Durante Darkchild, o charge máximo causa ~180 de dano com cooldown reduzido; priorize usa-lo mesmo em fight mais longa.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'marvelrivalsgg-magik'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Darkchild',
          label: 'limpa o time ou segura objetivo',
          why:
            'Com reset de todos os cooldowns e todas as habilidades potencializadas por 12s, e a ultimaté mais forte do kit. O valor máximo vem quando ativada em fights de objetivo ou para eliminar 2+ alvos. Nunca ative com habilidades disponíveis.',
          swapWhen:
            'Segure se o time inimigo está espalhado sem engajamento. O Darkchild em alvo único só é correto se ele e o suporte mais perigoso da backline.',
          sourceIds: ['official-magik', 'mobalytics-magik', 'reddit-magik-darkchild'],
        },
        {
          rank: 6,
          input: 'C',
          ability: 'Chain of Cyttorak',
          label: 'team-up com Dr. Strange',
          why:
            'Quando Dr. Strange está no time, a corrente liga dois inimigos, tornando-os mais lentos quando tentam se afastar. Cria situação ideal para Magia limpar suportes que ficam presos tentando se distanciar.',
          swapWhen:
            'Se Dr. Strange não está no time, ignore este plano e foque no ciclo base de [key:RMB] → [key:Shift] → [key:LMB] → [key:E].',
          sourceIds: ['official-magik', 'wiki-magik'],
        },
      ],
      adaptations: [
        'Contra Peni Parker: evite o duelo direto. Armadilhas e snares anulam completamente o kit. Reposicione pelo portal e procure outros alvos.',
        'Contra Namor, The Thing ou Wolverine: não entre em luta prolongada. Faça o burst combo e use o portal para sair. Se o alvo sobreviveu, reinicie em vez de trocar dano no chão.',
        'Contra triplo suporte ou backline agrupada: vire finalizadora de alvos ja baixos que seu time pressionou. Seu time precisa criar dano antes do seu dive.',
        'Com Dr. Strange: Chain of Cyttorak cria abertura perfeita. Espere os inimigos ficarem travados pela corrente e entre com Umbral Incursion no suporte que tentou escapar.',
      ],
      ultimates: [
        {
          stance: 'Limpeza de objetivo',
          name: 'Darkchild',
          bestUse:
            'Em fights de objetivo (payload ou ponto) quando 2+ inimigos estao engajados no mesmo espaco. Gaste TODAS as habilidades primeiro, ative, e execute de novo com tudo resetado.',
          execution:
            'Gaste [key:RMB] + [key:Shift] + [key:E] (Demon\'s Rage) → ative Darkchild → Umbral Incursion (mais rápido) → Soulsword 3x hit → Magik Slash 180 dmg → Stepping Discs (3s cooldown).',
          upgradeValue:
            'O reset de cooldowns ao ativar e o valor central: sem essa mecânica aproveitada, o Darkchild e só um buff temporario. Com ela, sao praticamente dois combos completos em sequencia.',
        },
      ],
      dashGuide: {
        ability: 'Soulsword + animation cancel',
        shortRule:
          '[key:LMB] → [key:Melee] → [key:LMB]: sem esse cancel, você causa metade do DPS e a passiva demora o dobro para encher.',
        mechanics: [
          'O animation cancel funciona pressionando [key:Melee] logo após o primeiro swing do Soulsword, eliminando os frames de recuperacao antes do próximo ataque.',
          'O hitbox do Soulsword e o maior de todos os heróis melee do jogo; posicionar levemente a direita do inimigo (por conta da câmera de terceira pessoa) maximiza o acerto.',
          'Durante Darkchild, cada swing acerta 3 vezes. O cancel fica ainda mais valioso porque cada acerto contribui para o HP bônus da passiva.',
        ],
        drills: [
          'Pratique o ritmo do cancel: a janela e pequena. Se o Soulsword completar a animação antes do [key:Melee], você perdeu a janela. Treine até o cancelamento virar musculo.',
          'Treine a entrada completa: charge [key:RMB] atrás de cobertura → soltar ao sair → [key:Shift] → [key:LMB] cancel → [key:LMB]. Esse combo mata 300 HP antes de reagirem.',
          'Contra bots com burst, pratique bait com o portal: entre, provoque resposta, use Stepping Discs para absorver e reaparecer para o followup.',
        ],
      },
      patterns: [
        {
          title: 'Kill de suporte em 300 HP',
          steps: [
            'Posicione atrás de cobertura proxima ao suporte alvo e prepare charge do Magik Slash ([key:RMB]).',
            'Ao sair da cobertura, libere [key:RMB] e imediatamente use Umbral Incursion ([key:Shift]) no suporte.',
            'Soulsword com animation cancel ([key:LMB] → [key:Melee] → [key:LMB]) para finalizar. Total: 90 + 85 + 75 + 75 = 325+ de dano.',
            'Se o suporte sobreviveu e saiu, use Stepping Discs para fuga imediata e reinicie em vez de perseguir descoberto.',
          ],
        },
        {
          title: 'Engajamento completo com escape',
          steps: [
            'Stepping Discs para reposicionar sem ser rastreada (invulnerabilidade durante o teleporte).',
            'Ao sair do portal, [key:LMB] imediato para Eldritch Whirl (spin 360 graus em área).',
            'Umbral Incursion no alvo mais danificado e Soulsword com animation cancel.',
            'Segunda carga de Stepping Discs para fuga absoluta se o time inimigo respondeu.',
          ],
        },
        {
          title: 'Darkchild burst máximo',
          steps: [
            'Gaste [key:RMB], [key:Shift], [key:E] (Demon\'s Rage) antes de ativar o Ultimate.',
            'Ative Darkchild com todas as habilidades em cooldown para aproveitar o reset completo.',
            'Com tudo resetado: Umbral Incursion (mais rápido e forte), Soulsword 3x hit, Magik Slash (~180 dano).',
            'Stepping Discs de saída se precisar reposicionar ou escapar após limpar o alvo.',
          ],
        },
      ],
      abilityLoop: ['Magik Slash', 'Umbral Incursion', 'Soulsword', 'Stepping Discs', 'Darkchild', 'Chain of Cyttorak'],
      mistakes: [
        'Usar as duas cargas de Stepping Discs ofensivamente e descobrir que não sobrou fuga quando o time inimigo vira.',
        'Ativar Darkchild com habilidades disponíveis, desperdicando o reset de cooldowns que e o valor central da ultimate.',
        'Não fazer animation cancel do Soulsword: sem o cancel, o DPS cai pela metade e a passiva demora para encher.',
        'Tentar matar Vanguards ou heróis de alta vida sem o Darkchild. A Magia e especialista em 1v1 de suportes.',
        'Ignorar o ângulo de hitbox: mirar diretamente no centro do inimigo reduz a taxa de acerto do Umbral Incursion. Mire levemente a direita.',
      ],
      evidence: [
        'official-magik',
        'wiki-magik',
        'mobalytics-magik',
        'marvelrivalsgg-magik',
        'reddit-magik-portal',
        'reddit-magik-darkchild',
        'chãosboost-magik',
      ],
    },
  },
  sources: [
    {
      id: 'official-magik',
      kind: 'official',
      title: 'MAGIK — Marvel Rivals Hero Page',
      url: 'https://www.marvelrivals.com/heroes/',
      author: 'Marvel Rivals / NetEase',
      published: '2024-12-06',
      confidence: 'alta',
      takeaways: [
        'Fonte principal para role (Duelist), vida (250 HP), Soulsword, Magik Slash, Umbral Incursion, Stepping Discs e Darkchild.',
        'Confirma passiva Limbo\'s Might: 30% de dano causado convertido em HP bônus, cap de +150 HP.',
        'Confirma Stepping Discs com 2 cargas, cooldown de 6s por carga, janela de followup de 3s, e Darkchild com 12s de duração e reset de cooldowns.',
      ],
    },
    {
      id: 'wiki-magik',
      kind: 'database',
      title: 'Magik — The Marvel Rivals Wiki',
      url: 'https://marvelrivals.wiki.gg/wiki/Magik',
      confidence: 'media',
      takeaways: [
        'Complementa a página oficial com descricoes detalhadas de Eldritch Whirl (followup LMB) e Demon\'s Rage (followup RMB) pós-Stepping Discs.',
        'Confirma mecânica de invulnerabilidade durante o teleporte dos Stepping Discs.',
        'Documenta Team-Up Chain of Cyttorak com Dr. Strange como ancora.',
      ],
    },
    {
      id: 'mobalytics-magik',
      kind: 'guide',
      title: 'Marvel Rivals Magik Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/magik-guide',
      confidence: 'media',
      takeaways: [
        'Define Magia como flanker especialista em 1v1 com o maior hitbox melee do jogo e autossustain via passiva.',
        'Recomenda procurar suportes isolados, usar portal para reposicionamento seguro e guardar sempre uma carga para fuga.',
        'Detalha o animation cancel do Soulsword como principal diferencial técnico entre jogadores casuais e avançados.',
      ],
    },
    {
      id: 'marvelrivalsgg-magik',
      kind: 'guide',
      title: 'Magik Guide: How to Play, Combos & Counters',
      url: 'https://marvelrivals.gg/magik-guide/',
      confidence: 'media',
      takeaways: [
        'Resume combos centrais: Magik Slash charge → Umbral Incursion → Soulsword cancel elimina suporte de 300 HP antes de reagir.',
        'Lista counters duros: Peni Parker (armadilhas + snare), Namor (summons anti-dive), Wolverine e Blade (especialistas em 1v1).',
        'Valida que o hitbox de terceira pessoa exige mirar levemente a direita para maximizar acerto do Umbral Incursion.',
      ],
    },
    {
      id: 'reddit-magik-portal',
      kind: 'forum',
      title: 'Magik Stepping Discs mechanics — detailed breakdown',
      url: 'https://www.reddit.com/r/marvelrivals/search/?q=magik+portal+invulnerability',
      confidence: 'em disputa',
      takeaways: [
        'Mains confirmam invulnerabilidade total durante o teleporte — unica mecânica desse tipo no jogo.',
        'Discussao sobre uso defensivo: absorver burst de ultimaté ou CC entrando no portal no último segundo.',
        'Aviso recorrente: usar as duas cargas ofensivamente e o erro mais comum de jogadores iniciantes.',
      ],
    },
    {
      id: 'reddit-magik-darkchild',
      kind: 'forum',
      title: 'Magik Darkchild timing guide',
      url: 'https://www.reddit.com/r/marvelrivals/search/?q=magik+darkchild+cooldown+reset',
      confidence: 'em disputa',
      takeaways: [
        'Mains confirmam que o reset de cooldowns ao ativar Darkchild é o mecanismo mais importante da ultimate.',
        'Estratégia validada: gastar TODAS as habilidades antes de ativar para aproveitar o reset máximo.',
        'Alerta recorrente: não usar Darkchild apenas para um kill solo — é um ult que define fights de objetivo.',
      ],
    },
    {
      id: 'chãosboost-magik',
      kind: 'guide',
      title: 'Magik Guide: Her Potential in Marvel Rivals',
      url: 'https://chãosboost.com/guides/magik-guide-marvel-rivals/',
      confidence: 'media',
      takeaways: [
        'Destaca que a Magia tem 55.6% de win raté (S-tier) mas pick raté baixo por requerer domínio técnico.',
        'Confirma que o valor da Magia vem de aparecer fora do ângulo esperado, não de duelos frontais.',
        'Lista sinergias: Dr. Strange (Chain of Cyttorak), Hulk e Thor (mantem inimigos presos para Magia acertar).',
      ],
    },
    {
      id: 'video-magik-pending',
      kind: 'video-transcript',
      title: 'Transcricoes de guias em video da Magia',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Magik+guide+advanced',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para VODs, guias de mains e coach reviews com timestamps.',
        'Nenhuma transcrição auditavel foi processada nesta carga; o app não inventa dado de video sem texto verificavel.',
        'Proximo enriquecimento deve cobrir combos de animation cancel frame-by-frame e exemplos de Darkchild em fights de objetivo.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 1,
      status: 'Pagina oficial usada para valores de kit, cooldowns e passiva.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 1,
      status: 'Wiki pública usada para mecânicas de followup pós-portal e team-up.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 3,
      status: 'Usados para combos, animation cancel, counters e decisão de fight.',
    },
    {
      kind: 'forum',
      label: 'Forum',
      count: 2,
      status: 'Usado com cautela para confirmar mecânicas técnicas e timing do Darkchild.',
    },
    {
      kind: 'video-transcript',
      label: 'Videos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps.',
    },
  ],
}
