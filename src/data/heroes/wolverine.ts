import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const wolverine: HeroGuide = {
  id: 'wolverine',
  name: 'Wolverine',
  aliases: ['Logan', 'James Howlett'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/wolverine.png'),
  bannerUrl: publicAsset('heroes/banners/wolverine.png'),
  selectionPortraitUrl: publicAsset('heroes/select/wolverine.png'),
  selectionHoverUrl: publicAsset('heroes/select/wolverine_champion.gif'),
  selectionHoverFit: { scale: 1.55, x: 0, y: -16 },
  theme: {
    primary: '#b63b42',
    primaryRgb: '182, 59, 66',
    secondary: '#e0bb55',
    secondaryRgb: '224, 187, 85',
    surface: '#1b1014',
    surfaceRgb: '27, 16, 20',
  },
  roles: ['duelist'],
  lastVerified: '2026-10-11',
  confidenceSummary:
    'Role, vida, habilidades, teclas e números foram conferidos na tabela oficial do herói em 11/10/2026. Os ajustes de Savage Claw e de Regenerative Healing Factor vêm do balance post de 08/09/2026; a regra atual de ganho/perda de Rage foi cruzada com o patch de 04/08/2026. A wiki.gg e guias de 2025 ainda exibem valores anteriores, então foram usados apenas para mecânicas e decisões táticas, não para números conflitantes. Nomes, teclas e efeitos dos dois Team-Ups foram extraídos do bundle oficial atual; O Batru foi consultado ao vivo em 11/10/2026 para comparar as duplas, e o Reddit foi consultado somente por snippets. As taxas de win rate não demonstram causalidade.',
  coreRead: [
    'Escolha alvos com muita vida: Savage Claw converte a vida máxima inimiga em dano e fica mais forte conforme Rage sobe.',
    'Feral Leap abre cinco segundos de Berserk Claw Strike; cada inimigo derrubado pelo knockback de Last Stand também gera 25 Rage, preparando a próxima janela de claws.',
    'Undying Animal compra cinco segundos para concluir a troca; não transforme redução de dano em licença para entrar sozinho.',
  ],
  teamUps: {
    summary:
      'Pair of Threes dá mobilidade e, com Gambit, cura contínua durante a habilidade. Blast Slash amplia o alcance e ativa Kinetic Claws; com Cyclops, fica permanentemente ativo. Escolha pelo parceiro e pela situação da luta.',
    recommended: 'Pair of Threes',
    recommendedReason:
      'Como padrão, Pair of Threes tem o melhor resultado agregado disponível: 51,66% em 19.207 duplas contra 44,54% em 5.765 para Blast Slash, no retrato do Batru em 11/10/2026. A diferença é descritiva, não prova causalidade, e as amostras diferem. O guia de Blast Slash favorece essa opção em brigas corpo a corpo com vários inimigos; use essa condição, não a taxa agregada, para escolher no draft.',
    options: [
      {
        name: 'Blast Slash',
        partner: 'Cyclops',
        partnerRole: 'Duelista',
        input: 'C',
        baseEffect:
          'Ao ativar, aumenta o alcance de Savage Claw e Berserk Claw Strike. Vicious Rampage é substituído por Kinetic Claws, uma breve investida para a frente que desfere vários golpes ao redor.',
        enhancedEffect: 'Com Cyclops na equipe, Blast Slash fica permanentemente ativo.',
        bestFor:
          'Manter pressão corpo a corpo com alcance maior e ter Kinetic Claws disponível sem precisar ativar o Team-Up a cada luta.',
        easySetup:
          'Cyclops precisa estar na equipe para o aprimoramento permanente. Sem ele, ative Blast Slash antes do commit e use Kinetic Claws para acertar alvos próximos.',
        iconUrl: publicAsset('teamups/wolverine-blast-slash-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/wolverine-blast-slash-partner.png'),
      },
      {
        name: 'Pair of Threes',
        partner: 'Gambit',
        partnerRole: 'Estrategista',
        input: 'C',
        baseEffect:
          'Ao ativar, Wolverine recebe Kinetic Enhancement: ganha velocidade de movimento e um salto mais alto. Ataques aplicam Kinetic Particles que detonam após um breve atraso e causam dano adicional; o efeito dura cinco segundos.',
        enhancedEffect:
          'Com Gambit na equipe, Wolverine recebe cura contínua durante todo o efeito.',
        bestFor:
          'Fechar distância, atravessar terreno e sustentar o commit enquanto os ataques acionam partículas adicionais.',
        easySetup:
          'Gambit habilita a cura contínua. Sem ele, use o aumento de mobilidade para chegar ao alvo ou escapar após a janela de dano.',
        iconUrl: publicAsset('teamups/wolverine-pair-of-threes-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/wolverine-pair-of-threes-partner.png'),
      },
    ],
    sourceIds: ['official-teamups', 'teamup-bundle', 'wolverine-balance-sep', 'wolverine-teamup-meta', 'wolverine-teamup-guide'],
  },
  systems: [
    {
      name: 'Berserker Rage',
      input: 'Passiva',
      heading: 'Acumule Rage antes do agarrão',
      facts: [
        'Rage vai até 100 e aumenta o dano de Savage Claw; cada ponto também aumenta em 0,062% o componente percentual do ataque, além dos 1,5% da vida máxima do alvo.',
        'Savage Claw gera 10 de Rage por acerto; sofrer dano gera 8 por golpe recebido. O patch oficial de agosto alongou a espera antes do decaimento para 5 s e reduziu a perda no máximo para 10 por segundo.',
        'Feral Leap gera 10 Rage ao agarrar; Last Stand gera 25 por inimigo atingido pelo knockback. Acertar mais de um alvo prepara a Rage para a próxima janela de claws.',
      ],
      meter: [
        { label: 'Baixa', value: '0–39 Rage · pressione com cautela' },
        { label: 'Média', value: '40–79 Rage · prepare o commit' },
        { label: 'Máxima', value: '80–100 Rage · maior dano percentual' },
      ],
    },
    {
      name: 'Regenerative Healing Factor',
      input: 'Passiva',
      heading: 'Sobrevida com custo de Rage',
      facts: [
        'Quando a vida chega a zero, Wolverine recebe 300 de Vida Bônus por três segundos; o que restar vira cura e Rage é zerada.',
        'A recarga é de 90 s e reduz 10 s por KO em que Wolverine participa. Não conte com a passiva para justificar uma entrada sem saída.',
        'Undying Animal reduz o dano recebido em 40% por cinco segundos. Ative perto do foco, não enquanto ainda atravessa um corredor sem inimigos.',
      ],
    },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist',
      label: 'Duelista',
      nickname: 'O melhor no que faz',
      health: '350 HP',
      difficulty: 'Média: exige leitura de entrada e disciplina para guardar a redução de dano',
      job: 'Desgastar Vanguards, agarrar um alvo no momento em que a equipe pode acompanhá-lo e converter Rage em dano percentual.',
      verdict:
        'Escolha Wolverine quando o time consegue acompanhar uma entrada curta e há alvos de vida alta para pressionar. Ele sofre contra equipes que o mantêm à distância ou concentram fogo antes que o agarrão conecte.',
      playstyle: [
        'Aproxime-se por cobertura e use Savage Claw para acumular Rage sem gastar Feral Leap. A vida máxima do alvo torna Vanguards especialmente bons alvos; isso não significa que você deva perseguir um tanque protegido por cinco inimigos.',
        'Antes do commit, identifique a rota de saída e espere o alvo gastar mobilidade ou defesa. Ative Undying Animal ([key:E]) ao entrar na troca, agarre com Feral Leap ([key:Shift]) e mantenha Savage Claw no alvo durante a janela de cinco segundos.',
        'Vicious Rampage ([key:RMB]) é um avanço curto e frequente, não um substituto para o agarrão. Guarde Last Stand ([key:Q]) para um agrupamento ou um alvo cuja vida já permita o follow-up do time.',
      ],
      priorityKicker: 'Decisão',
      priorityTitle: 'Sobreviva, agarre, converta',
      priorityDescription:
        'A sequência prioriza a janela em que Wolverine consegue manter contato sem trocar sua vida por um engage sem acompanhamento.',
      upgradePlan: [
        {
          rank: 1,
          input: 'E',
          ability: 'Undying Animal',
          label: 'Reduzir o dano da entrada',
          why: '40% de redução por cinco segundos dá tempo para o time responder e para você terminar a janela de ataques. Usar cedo demais gasta a proteção antes do contato.',
          swapWhen: 'Se o alvo ainda está com mobilidade e o time não tem ângulo, espere em cobertura em vez de ativar a habilidade no vazio.',
          sourceIds: ['official-wolverine', 'wolverine-balance-aug'],
        },
        {
          rank: 2,
          input: 'Shift',
          ability: 'Feral Leap',
          label: 'Agarrar depois da fuga',
          why: 'O agarrão causa 35 de dano e o impacto mais 35; também habilita Berserk Claw Strike por cinco segundos. A confirmação vale mais do que saltar primeiro para dentro da equipe inteira.',
          swapWhen: 'Se você precisa sair, não tente usar o agarrão como fuga: preserve distância e volte por cobertura.',
          sourceIds: ['official-wolverine'],
        },
        {
          rank: 3,
          input: 'LMB',
          ability: 'Savage Claw',
          label: 'Converter Rage em dano',
          why: 'O ataque base atual causa 18 por golpe e adiciona 1,5% da vida máxima do alvo, mais 0,062% por ponto de Rage. Foque o mesmo alvo para transformar a barra acumulada em pressão real.',
          swapWhen: 'Se o adversário usa controle para interromper o corpo a corpo, recue e reabra o ângulo antes de insistir.',
          sourceIds: ['official-wolverine', 'wolverine-balance-sep'],
        },
        {
          rank: 4,
          input: 'RMB',
          ability: 'Vicious Rampage',
          label: 'Reposicionar em curta distância',
          why: 'O avanço percorre até 7,5 m e recarrega em 3 s; use para acompanhar o alvo ou quebrar o ritmo entre ataques, não para iniciar sem proteção.',
          swapWhen: 'Se o alvo ainda está fora de alcance, mantenha a cobertura e espere a equipe em vez de gastar o dash no campo aberto.',
          sourceIds: ['official-wolverine', 'guide-wolverine'],
        },
        {
          rank: 5,
          input: 'Q',
          ability: 'Last Stand',
          label: 'Punir agrupamento e preparar follow-up',
          why: 'O impacto causa 50 de dano base mais 10% da vida máxima do alvo e 0,3% por ponto de Rage. O lançamento inicial e a queda podem abrir uma janela para o time finalizar.',
          swapWhen: 'Não gaste a ultimate em um alvo isolado com vida cheia se os aliados não conseguem acompanhar a queda.',
          sourceIds: ['official-wolverine'],
        },
      ],
      adaptations: [
        'Contra Vanguards, troque golpes curtos para subir Rage e só então procure o agarrão; o dano percentual rende mais em alvos de vida máxima alta.',
        'Contra atiradores que mantêm distância, use cobertura e espere que eles gastem deslocamento antes de saltar. Uma rota lateral é melhor que correr pelo corredor aberto.',
        'Se sua equipe não tem follow-up, jogue como pressão de frontline: mantenha Rage e force recursos, mas não abandone a linha para buscar uma eliminação improvável.',
      ],
      ultimates: [
        {
          stance: 'Dano em área',
          name: 'Last Stand',
          bestUse:
            'Atingir um grupo já comprometido ou interromper uma luta em que os aliados conseguem acompanhar o knock-up e a queda.',
          execution:
            'Aproxime-se pelo lado, use [key:Q] quando ao menos dois inimigos estiverem próximos e direcione a área de impacto para a rota de fuga. Avise o time para guardar o dano de follow-up para a aterrissagem.',
          upgradeValue:
            'Cada alvo atingido recebe 50 de dano inicial e o impacto escala com vida máxima e Rage. O recorte exato importa: uma ultimate sem alvo ou sem follow-up não compra a próxima luta.',
        },
      ],
      dashGuide: {
        ability: 'Vicious Rampage → Undying Animal → Feral Leap → Savage Claw',
        shortRule:
          'Chegue por cobertura; ative a redução de dano no contato e agarre só depois que o alvo gastar a fuga.',
        mechanics: [
          'Feral Leap causa 35 no agarrão e 35 no impacto, além de habilitar Berserk Claw Strike por cinco segundos.',
          'Undying Animal dura cinco segundos; ativar antes de atravessar o mapa desperdiça a maior parte da proteção.',
          'Mantenha Savage Claw no alvo de vida alta. Se o agarrão falhar, recue em vez de gastar também a redução de dano e a ultimate para forçar a entrada.',
        ],
        drills: [
          'No treino, pratique entrar com [key:E], agarrar o alvo com [key:Shift] e manter quatro golpes de Savage Claw antes de recuar.',
          'Treine o avanço de [key:RMB] em uma cobertura lateral e volte para a mesma proteção após o contato.',
          'Use Last Stand ([key:Q]) em alvos agrupados e observe se seus aliados conseguem acertar a área de aterrissagem.',
        ],
      },
      patterns: [
        {
          title: 'Punir a linha de frente',
          steps: [
            'Acumule Rage com golpes seguros e escolha um Vanguard sem defesa pronta.',
            'Espere a mobilidade ser usada e aproxime-se pela lateral.',
            'Ative Undying Animal ([key:E]) no contato e agarre com Feral Leap ([key:Shift]).',
            'Mantenha Savage Claw ([key:LMB]) durante Berserk Claw Strike e saia se o time inimigo virar em você.',
          ],
        },
        {
          title: 'Cancelar o intervalo do quarto golpe',
          steps: [
            'Complete os três primeiros golpes de Savage Claw no mesmo alvo.',
            'Durante o intervalo maior após o terceiro golpe, use Vicious Rampage ([key:RMB]) para cancelar a pausa.',
            'Retome Savage Claw imediatamente e continue a sequência se o alvo ainda estiver ao alcance.',
            'Não persiga se o avanço terminar fora da cobertura: interrompa a sequência e preserve a rota de saída.',
          ],
        },
        {
          title: 'Forçar uma abertura coletiva',
          steps: [
            'Chame Last Stand quando dois ou mais inimigos estiverem no raio.',
            'Entre pela lateral em vez de saltar na proteção frontal.',
            'Use [key:Q] e direcione a queda para fora da cobertura do suporte.',
            'Sinalize o follow-up e recue se o grupo não convergir.',
          ],
        },
      ],
      mistakes: [
        'Gastar Feral Leap para iniciar quando o alvo ainda tem uma fuga pronta.',
        'Ativar Undying Animal longe do contato e chegar sem redução de dano.',
        'Perseguir alvos frágeis pelo campo aberto e ignorar a vantagem do dano percentual contra Vanguards.',
        'Entrar sem avisar os aliados e cair antes que o time chegue ao alcance.',
        'Tratar Regenerative Healing Factor como uma segunda vida garantida: a passiva tem 90 s de recarga e zerar Rage custa dano.',
      ],
      evidence: [
        'official-wolverine',
        'wolverine-balance-aug',
        'wolverine-balance-sep',
        'wiki-wolverine',
        'guide-wolverine',
        'forum-wolverine',
        'official-teamups',
        'teamup-bundle',
        'wolverine-teamup-meta',
        'wolverine-teamup-guide',
      ],
      abilityLoop: [
        { ability: 'Undying Animal', input: 'E' },
        { ability: 'Feral Leap', input: 'Shift' },
        { ability: 'Savage Claw', input: 'LMB' },
        { ability: 'Vicious Rampage', input: 'RMB' },
        'Last Stand',
      ],
    },
  },
  sources: [
    {
      id: 'official-wolverine',
      kind: 'official',
      title: 'Wolverine — ficha e tabela oficial de habilidades',
      url: 'https://www.marvelrivals.com/heroes/index.html?id=a9b308ab-f0d8-412a-9362-e60091e57ded',
      published: '2024-12-04 (ficha consultada em 2026-10-11)',
      confidence: 'alta',
      takeaways: [
        'Confirma Duelist, 350 HP, 7 m/s e a tabela atual de danos, recargas, Rage, ultimate e Team-Ups.',
        'Savage Claw foi atualizado para 18 de dano base e 0,062% adicional por Rage; Regenerative Healing Factor concede 300 de Vida Bônus por 3 s e zera Rage.',
        'Last Stand gera 25 Rage por inimigo atingido pelo knockback, conforme a tabela oficial da habilidade.',
      ],
    },
    {
      id: 'wolverine-balance-aug',
      kind: 'official',
      title: 'Marvel Rivals Version 20260807 Balance Post',
      url: 'https://www.marvelrivals.com/20260804/41525_1309952.html',
      published: '2026-08-04',
      confidence: 'alta',
      takeaways: [
        'Rage recebida por golpe foi aumentada de 5 para 8; o decaimento começa depois de 5 s sem ganhar Rage e, no máximo, cai 10 por segundo.',
      ],
    },
    {
      id: 'wolverine-balance-sep',
      kind: 'official',
      title: 'Marvel Rivals Version 20260911 Balance Post',
      url: 'https://www.marvelrivals.com/20260908/41525_1313334.html',
      published: '2026-09-08',
      confidence: 'alta',
      takeaways: [
        'Savage Claw passou de 15 para 18 de dano base; o escalamento por Rage mudou de 0,057% para 0,062%. A Vida Bônus de Regenerative Healing Factor deixou de depender da Rage e ficou fixa em 300.',
        'No Team-Up com Cyclops, o coeficiente de dano por Rage de Kinetic Claws subiu de 0,01% para 0,012%.',
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
        'As opções oficiais são Blast Slash (Cyclops) e Pair of Threes (Gambit), ambas no [key:C]; os efeitos base/aprimorado foram conferidos no bundle vigente.',
      ],
    },
    {
      id: 'teamup-bundle',
      kind: 'official',
      title: 'Wolverine — dados do bundle oficial de Team-Up',
      url: 'https://www.marvelrivals.com/heroes/teamup.html',
      published: '2026-10-11 (bundle consultado)',
      confidence: 'alta',
      takeaways: [
        'Pair of Threes concede 35% de velocidade, salto adicional e aplica partículas que causam 15% de dano bônus; com Gambit, Wolverine recebe 25 de cura por segundo durante o efeito.',
        'Blast Slash amplia em 1 m o alcance dos ataques; com Cyclops, fica permanentemente ativo.',
      ],
    },
    {
      id: 'wolverine-teamup-meta',
      kind: 'database',
      title: 'Wolverine Team-Ups & Best Duos — Batru Season 10.5',
      url: 'https://batru.gg/marvel-rivals/meta/synergy/wolverine',
      published: '2026-10-11 (dados atualizados)',
      confidence: 'alta',
      takeaways: [
        'No retrato consultado em 11/10/2026, Pair of Threes (Wolverine + Gambit) aparece com 51,66% em 19.207 partidas; Blast Slash (Wolverine + Cyclops), 44,54% em 5.765. A página define os números como agregados da dupla exata nos últimos 30 dias, recalculados diariamente.',
        'A associação observacional não isola o efeito do Team-Up nem controla composição, habilidade ou seleção de heróis; usar como sinal comparativo, não como prova causal.',
      ],
    },
    {
      id: 'wolverine-teamup-guide',
      kind: 'guide',
      title: 'Blast Slash — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/blast-slash',
      author: 'Madian',
      published: '2026-06-09',
      confidence: 'media',
      takeaways: [
        'O guia recomenda Blast Slash em briga corpo a corpo contra vários inimigos, ativando antes do engage e usando Kinetic Claws imediatamente; é uma recomendação situacional publicada antes da Season 10.5, não uma comparação de win rate atual.',
      ],
    },
    {
      id: 'wiki-wolverine',
      kind: 'database',
      title: 'Wolverine — The Marvel Rivals Wiki',
      url: 'https://marvelrivals.wiki.gg/wiki/Wolverine',
      published: '2026 (consultada em 2026-10-11)',
      confidence: 'em disputa',
      takeaways: [
        'Usada para conferir nomes e descrição de mecânicas; ainda mostra valores antigos de Rage e dano, então números divergentes foram substituídos pela tabela oficial e pelos balance posts.',
      ],
    },
    {
      id: 'guide-wolverine',
      kind: 'guide',
      title: 'Wolverine Guide: How to Play, Combos, & Counters — MarvelRivals.gg',
      url: 'https://marvelrivals.gg/wolverine-guide/',
      author: 'Theo',
      published: '2025 (consultada em 2026-10-11)',
      confidence: 'media',
      takeaways: [
        'Usado para decisões de posicionamento: caçar Vanguards, entrar por cobertura, esperar o alvo gastar habilidades e guardar uma rota de saída. Os números do guia são antigos e não foram usados quando divergem da fonte oficial.',
      ],
    },
    {
      id: 'forum-wolverine',
      kind: 'forum',
      title: 'Wolverine tips? — Reddit r/marvelrivals',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1hipa1v/wolverine_tips',
      published: '2025 (snippet consultado em 2026-10-11)',
      confidence: 'pendente',
      takeaways: [
        'Snippets de jogadores destacam a utilidade do deslocamento de Vanguards e do combo de giro do agarrão; o Reddit bloqueou a leitura integral, então o fórum não é usado como evidência numérica.',
      ],
    },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 5, status: 'Ficha atual, dois balance posts e dois registros do bundle atual de Team-Up consultados.' },
    { kind: 'database', label: 'Wiki/Database', count: 2, status: 'wiki.gg e Batru Season 10.5 consultados; taxas de dupla são descritivas e não causais.' },
    { kind: 'guide', label: 'Guias', count: 2, status: 'MarvelRivals.gg consultado para posicionamento e uso situacional do Blast Slash; números antigos não foram reutilizados.' },
    { kind: 'forum', label: 'Fórum/Comunidade', count: 1, status: 'Reddit consultado por snippets; leitura integral pendente.' },
    { kind: 'video-transcript', label: 'Vídeos', count: 0, status: 'Pendente: nenhuma transcrição auditável usada.' },
  ],
}
