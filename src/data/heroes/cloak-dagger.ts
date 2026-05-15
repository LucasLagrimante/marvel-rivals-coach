import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const cloakDagger: HeroGuide = {
  id: 'cloak-dagger',
  name: 'Manto e Adaga',
  aliases: ['Cloak & Dagger', 'Cloak and Dagger', 'Ty Johnson', 'Tandy Bowen', 'C&D', 'CnD'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/cloak_and_dagger.png'),
  bannerUrl: publicAsset('heroes/banners/cloak_and_dagger.png'),
  selectionPortraitUrl: publicAsset('heroes/select/cloak_and_dagger.png'),
  selectionHoverUrl: publicAsset('heroes/select/cloak_and_dagger_champion.gif'),
  theme: {
    primary: '#5b4a88',
    primaryRgb: '91, 74, 136',
    secondary: '#e8ecff',
    secondaryRgb: '232, 236, 255',
    surface: '#14141d',
    surfaceRgb: '20, 20, 29',
  },
  roles: ['strategist'],
  lastVerified: '2026-05-15',
  confidenceSummary:
    'Valores atuais conferidos na página oficial, wiki.gg e balance posts; pesquisa ativa em maio/2026 revisou guias especializados e discussões de mains. Mecânicas não óbvias priorizadas: ricochete com homing de Lightforce Dagger, recarga automática por troca de forma, janela curta de Dark Teleportation, cancelamento acidental de Terror Cape, uso aéreo de Eternal Bond e risco de fase em overtime. Team-up atualizado para Sword of Duality com Hawkeye e Psylocke conforme bases públicas atuais.',
  coreRead: [
    'A troca de forma recarrega Lightforce Dagger. Esvazie as 12 facas enquanto cura, use [key:Shift] para entrar em Cloak, solte Terror Cape no alvo já focado e volte: você ganha debuff, evita a animação de reload e retoma cura com munição cheia.',
    'Lightforce Dagger ainda procura alvo depois do ricochete. Mire em chão, teto ou parede perto do aliado fora de linha de visão; o impacto cria cura em área de 8m e permite salvar flanker ou high ground sem se expor no choke.',
    'Dark Teleportation não é botão de fuga tardio. Aliados precisam estar no raio antes da fase de 2s, a sombra circular continua denunciando o deslocamento e a intangibilidade pode tirar contestação em overtime; use para negar burst/ultimate, não para atravessar ponto no último segundo.',
    'Terror Cape só vale se a animação conectar. Trocar de volta para Dagger cedo demais cancela a janela de blind + 28% de vulnerabilidade; espere o hit, dê 1-2s de Darkforce Cloak se o alvo está isolado e só então volte a curar.',
    'Eternal Bond é território, não perseguição. Dispare do ar ou em diagonal para desenhar quatro trilhas abertas de 11s; trilhas repetidas no mesmo caminho desperdiçam cobertura, e o quarto dash precisa terminar fora do cluster inimigo.',
  ],
  systems: [
    {
      name: 'Shared rhythm',
      input: 'Shift',
      heading: 'Curar como Dagger, ganhar a janela como Cloak',
      facts: [
        'Trocar de forma com [key:Shift] é instantâneo e recarrega a primária ao voltar. No PC, muitos mains vinculam a troca ao scroll do mouse para reduzir atraso de mão; no guia, trate isso como ajuste opcional de conforto, não como requisito.',
        'Veil of Lightforce e Terror Cape compartilham 2 cargas com 10s de recarga e 2s de trava curta entre usos. O HUD exibe cooldowns da forma inativa; você pode monitorar quando Terror Cape estará pronto enquanto ainda joga como Dagger.',
        'A pergunta da fight é: meu time ainda precisa de cura direta agora ou já posso usar Cloak para negar a resposta inimiga? Dagger é a forma padrão; Cloak entra para oportunidade concreta de pick, blind, fase ou counter-ult.',
      ],
      meter: [
        { label: 'Dagger', value: 'vida e setup' },
        { label: 'Cloak', value: 'blind, vulnerabilidade e fase' },
        { label: 'Volta', value: 'recarga grátis e cura retomada' },
      ],
    },
    {
      name: 'Dagger uptime',
      input: 'LMB',
      facts: [
        'Lightforce Dagger tem 12 munições, 18 de dano, 16 de cura por acerto e cura em área de 8m no impacto. Os projéteis ricocheteiam em paredes e chão e ainda mantêm homing: use isso para curar aliados fora de linha de visão ou atrás de cobertura.',
        'Dagger Storm cria campo de cura por 6s, com cura inicial de 60 ao criar o campo e 45/s dentro da área. Posicione no chão do brawl ANTES de trocar para Cloak: cura passiva rodando enquanto você aplica debuffs.',
        'Veil of Lightforce cura 45 e aplica 15% de healing boost por 4s; empilha com outras fontes de cura (Jeff, Mantis). Use antes de uma janela em que você vai sair de Dagger, não depois.',
      ],
    },
    {
      name: 'Cloak window',
      input: 'RMB/E',
      facts: [
        'Darkforce Cloak causa 80/s em até 20m com alvo próximo da mira e não exige munição. Lembre-se: o dano é baixo — Cloak pune e debuffa, não elimina sozinho.',
        'Terror Cape causa 55, cega por 1,5s e aplica 28% de vulnerabilidade por 3s. A animação completa precisa ser executada para o efeito funcionar — trocar de volta para Dagger imediatamente após lançar cancela o debuff. Aguarde o hit antes de sair.',
        'Dark Teleportation deixa aliados em 10m invisíveis e untargetable por 2s, com boost de movimento. A sombra circular no chão continua visível para inimigos — após usar, mova para cobertura ou eles seguem o rastro. Guarde para burst, dive ou ultimate inimiga.',
      ],
    },
    {
      name: 'Eternal Bond',
      input: 'Q',
      facts: [
        'A ultimate executa quatro dashes e deixa trilhas que curam aliados por 250/s e causam 30/s a inimigos. As trilhas não empilham efeito no mesmo local — cobertura ampla vale mais que concentrar os dashes no mesmo ponto.',
        'A duração atual foi reduzida para 11s no balance post de 2026-04-17. Se disparar do ar, as trilhas caem no chão — use isso para cobrir o ponto de baixo enquanto você fica em altitude fora do alcance de projéteis.',
        'A ultimate funciona como cleanse suave: você pode escapar de raízes (Groot, Squirrel Girl) ativando-a durante o CC. Termine sempre o quarto dash em cobertura ou perto do time — durante os dashes você não é invulnerável.',
      ],
    },
  ],
  roleGuides: {
    strategist: {
      key: 'strategist',
      label: 'Strategist',
      nickname: 'Ritmo luz/sombra',
      health: '275 HP',
      difficulty: 'Alta: duas barras de cooldown, uma só decisão errada',
      job: 'Manter o time vivo tempo suficiente para Cloak aplicar vulnerabilidade, fase ou limpeza de alvo.',
      verdict:
        'Escolha Manto e Adaga quando seu time briga agrupado, precisa de sustain constante e ainda quer um suporte que puna dive. Evite jogar como healbot fixo ou como Duelist escondido: o valor está na troca certa.',
      playstyle: [
        'Comece quase toda luta como Dagger. Use Lightforce Dagger para estabilizar barras, jogue Dagger Storm onde o brawl vai acontecer e alinhe Veil of Lightforce quando aliados estiverem entrando ou tomando poke.',
        'Troque para Cloak quando a barra do time permite: Terror Cape no alvo que seu Vanguard/Duelist já está batendo, Darkforce Cloak para completar dano e Dark Teleportation guardado para cancelar burst, dive ou ultimate.',
        'Depois da janela de Cloak, volte para Dagger antes da cura atrasar. A volta recarrega a primária e impede que você fique olhando kill enquanto seu time perde vida.',
      ],
      priorityKicker: 'Ritmo',
      priorityTitle: 'Ordem da jogada',
      priorityDescription:
        'Manto e Adaga não tem árvore de upgrade. A prioridade é uma cadência: preparar cura, criar vulnerabilidade, proteger a resposta e voltar para cura antes que a troca vire contra você.',
      upgradePlan: [
        {
          rank: 1,
          input: 'LMB',
          ability: 'Lightforce Dagger',
          label: 'barra estável primeiro',
          why:
            'É seu baseline de tempo. O homing e a cura em área mantêm flanker e frontline vivos sem exigir mira perfeita; se essa base falha, Cloak entra tarde demais e vira desespero.',
          swapWhen:
            'Se todos estão cheios e seu time está pressionando, esvazie parte da munição e troque para Cloak para usar o reload grátis na volta.',
          sourceIds: ['official-cloak-dagger', 'wiki-cloak-dagger', 'mobalytics-cloak-dagger'],
        },
        {
          rank: 2,
          input: 'RMB',
          ability: 'Dagger Storm',
          label: 'campo onde a luta vai ficar',
          why:
            'A cura inicial de 60 mais 45/s por 6s compra a janela em que você pode olhar para outra coisa. Jogue no chão do brawl, na chegada do dive ou onde você vai pousar depois de fase.',
          swapWhen:
            'Se o time inimigo tem dive guardado, não gaste Storm só para completar barra cheia; ela pode ser sua cura de emergência depois do Dark Teleportation.',
          sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s6', 'reddit-cloak-solo'],
        },
        {
          rank: 3,
          input: 'E',
          ability: 'Veil of Lightforce',
          label: 'buff antes da troca',
          why:
            'O healing boost de 15% por 4s aumenta todas as curas recebidas. Use quando aliados estão cruzando choke, entrando no ponto ou quando outro Strategist vai despejar cura.',
          swapWhen:
            'Se você precisa punir um alvo imediatamente, use Terror Cape primeiro; Veil e Terror compartilham carga, então a ordem decide a fight.',
          sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s6', 'mobalytics-cloak-dagger'],
        },
        {
          rank: 4,
          input: 'E',
          ability: 'Terror Cape',
          label: 'blind + 28% vulnerabilidade',
          why:
            'É o V principal ofensivo: acerte no alvo que já está sob foco e a próxima janela de dano vale mais. Usar em tanque cheio sem follow-up só gasta a carga que poderia virar pick.',
          swapWhen:
            'Antecipe se o diver entrou na sua backline; cegar e vulnerabilizar o alvo que pulou em você pode ganhar o duelo sem abandonar seu time por muito tempo.',
          sourceIds: ['official-cloak-dagger', 'mobalytics-cloak-dagger', 'reddit-cloak-intermediate'],
        },
        {
          rank: 5,
          input: 'RMB',
          ability: 'Dark Teleportation',
          label: 'fase para negar burst',
          why:
            'Dois segundos untargetable em 10m vencem mais fights que dano extra. Use contra ultimates, foco coordenado, dive na backline ou para ganhar high ground e pousar com Dagger Storm.',
          swapWhen:
            'Se é overtime e seu time precisa tocar ponto/carga, cuidado: comunidade relata que a fase pode atrapalhar contestação enquanto aliados estão untargetable.',
          sourceIds: ['official-cloak-dagger', 'reddit-cloak-solo', 'reddit-cloak-intermediate'],
        },
        {
          rank: 6,
          input: 'Q',
          ability: 'Eternal Bond',
          label: 'trilha de cura, não chase',
          why:
            'Com 250/s de cura e 30/s de dano, o valor é sustentar área e contestar, não perseguir kill. Espalhe as trilhas e termine em lugar seguro.',
          swapWhen:
            'Se Hawkeye, Magneto ou outro burst grande ainda está livre, espere cobertura ou use Dark Teleportation antes/depois; a ultimate ainda pode morrer para dano instantâneo.',
          sourceIds: ['official-cloak-dagger', 'official-cloak-dagger-s75', 'mobalytics-cloak-dagger'],
        },
      ],
      adaptations: [
        'Contra dive de Spider-Man, Black Panther, Magik ou Iron Fist: segure Storm e Dark Teleportation para você; sobreviver ao primeiro salto vale mais que buffar o poke.',
        'Contra brawl agrupado: Storm + Veil antes da colisão, [key:Shift], Terror Cape no alvo do Vanguard e volta para Dagger assim que barras caem.',
        'Contra burst/ultimate de Iron Man, Jeff, Thor, Magneto ou Punisher: pense em Dark Teleportation como counter-ult de 2s, não como mobilidade qualquer.',
        'Com Hawkeye ou Psylocke no time: Sword of Duality dá valor grátis, mas você continua sendo âncora de cura. Hawkeye recebe onda em Crescent Slash; Psylocke recebe Light Boomerang Dart/Dark Darts. Não force composição ruim só pelo bônus.',
      ],
      ultimates: [
        {
          stance: 'Controle de ponto',
          name: 'Eternal Bond',
          bestUse:
            'Quando a luta vai acontecer em área definida: ponto, payload, choke ou peel da backline. Use para atravessar a zona que seu time precisa ocupar.',
          execution:
            'Dash 1 cobre entrada, dash 2 corta o centro da fight, dash 3 fecha rota de recuo ou peel, dash 4 termina em cobertura ou junto do seu time. Evite empilhar todas as trilhas no mesmo caminho.',
          upgradeValue:
            'Patch 2026-04-17 reduziu a duração de 13s para 11s; por isso a ultimate precisa ser usada no timing da colisão, não cedo demais.',
        },
      ],
      dashGuide: {
        ability: 'Troca de forma + Dark Teleportation',
        shortRule:
          'Troca boa dura uma janela. Troca ruim vira ausência de cura enquanto a fight desaba.',
        mechanics: [
          '[key:Shift] não tem custo de execução relevante, mas muda quais cooldowns estão disponíveis; preveja se o próximo botão precisa ser cura, vulnerabilidade ou fase.',
          'Dark Teleportation dura 2s e cobre aliados em 10m. Use com câmera já apontada para cobertura, high ground ou rota de pouso com Dagger Storm.',
          'Voltar para Dagger recarrega a primária, então uma microjanela de Cloak também resolve reload sem perder pressão.',
        ],
        drills: [
          'Ciclo curto com reload: Dagger Storm no chão, [key:Shift] para Cloak, Terror Cape (aguarde o hit antes de sair), Darkforce Cloak por 1–2s, [key:Shift] de volta — observe a primária recarregada ao retornar.',
          'Anti-dive com câmera: ao ser pulado, Dagger Storm nos pés, Dark Teleportation (mira câmera para alto/cobertura antes de pressionar), mova ao pousar para sair da sombra visível, Terror Cape no perseguidor.',
          'Treine posição de câmera para Dark Teleportation: aliados à direita da câmera são cobertos pelo efeito mais rápido — pratique chegar em situações de pânico já com câmera alinhada ao time.',
          'Treine ultimate aérea: pule antes de ativar Eternal Bond, cruze o objetivo em diagonal com os quatro dashes em direções diferentes e verifique se o quarto dash termina fora do cluster inimigo.',
        ],
      },
      patterns: [
        {
          title: 'Brawl agrupado no objetivo',
          steps: [
            'Dagger Storm no chão do brawl antes de entrar no Cloak — a cura passiva roda enquanto você debuffa.',
            'Veil of Lightforce atravessando dois ou mais aliados enquanto ainda é Dagger.',
            '[key:Shift] para Cloak, aguarde Terror Cape conectar no alvo focado (não troque de volta antes do hit ou o debuff some) e depois volte.',
            'Volte para Dagger quando duas barras aliadas caírem ou quando Terror Cape não gerou pick em 3s.',
          ],
        },
        {
          title: 'Dive na sua backline',
          steps: [
            'Não panique usando tudo para frente; priorize sobreviver: Dagger Storm no seu próprio pé primeiro.',
            'Dark Teleportation para sair da linha e ganhar altura ou cobertura — mova imediatamente após usar pois a sombra circular fica visível no chão.',
            'Pouso com Dagger Storm já ativo; troque para Cloak se o diver continuar.',
            'Terror Cape no perseguidor para cegar e vulnerabilizar; se ele recuar, volte a curar o time sem dar chase.',
          ],
        },
        {
          title: 'Eternal Bond sem desperdício',
          steps: [
            'Espere a luta encostar no ponto ou no choke; ative do ar se quiser cobertura elevada com trilhas caindo no chão.',
            'Dash 1 cobre entrada, dash 2 corta o centro, dash 3 fecha rota de recuo, dash 4 termina FORA do grupo inimigo — você não tem invulnerabilidade durante os dashes.',
            'Não passe pelo mesmo caminho duas vezes; trilhas não empilham no mesmo local.',
            'Se estiver com raiz de Groot ou Squirrel Girl, ativar a ultimate funciona como cleanse suave e continua os dashes normalmente.',
          ],
        },
      ],
      abilityLoop: ['Lightforce Dagger', 'Dagger Storm', 'Veil of Lightforce', 'Terror Cape', 'Dark Teleportation', 'Eternal Bond'],
      mistakes: [
        'Ficar em Cloak só porque está causando dano, enquanto a cura de Dagger deixou de existir. Regra prática: Dagger é a forma padrão; Cloak precisa entrar com objetivo claro e saída planejada.',
        'Usar Terror Cape e trocar de forma imediatamente antes do hit conectar — a animação precisa completar para o debuff de 28% de vulnerabilidade ser aplicado.',
        'Gastar Dark Teleportation para mobilidade de rotação e não ter resposta para dive ou ultimate. A sombra circular no chão continua visível — sempre mova para cobertura após usar.',
        'Ultar para perseguir kill ou quando o time está espalhado. Eternal Bond exige encontro agrupado; usada em fight dispersa entrega trilhas onde não tem ninguém.',
        'Empilhar todos os dashes da ultimate na mesma trilha; as trilhas não empilham efeito, então quatro passes no mesmo ponto valem o mesmo que um.',
        'Usar Dagger Storm como buff de rotina de barra cheia, desperdiçando o cooldown de emergência que poderia salvar o time após Dark Teleportation.',
      ],
      evidence: [
        'official-cloak-dagger',
        'official-cloak-dagger-s75',
        'official-cloak-dagger-s6',
        'official-cloak-dagger-s2',
        'wiki-cloak-dagger',
        'fandom-sword-duality',
        'mobalytics-cloak-dagger',
        'marvelrivalsgg-cloak-dagger',
        'gamesgg-cloak-dagger',
        'beebom-cloak-dagger',
        'chaosboost-cloak-dagger',
        'boostingground-cloak-dagger',
        'immortalboost-cloak-dagger',
        'dexerto-cloak-dagger',
        'reddit-cloak-solo',
        'reddit-cloak-intermediate',
      ],
    },
  },
  sources: [
    {
      id: 'official-cloak-dagger',
      kind: 'official',
      title: 'CLOAK&DAGGER - Marvel Rivals Hero Page',
      url: 'https://www.marvelrivals.com/20241204/41360_1198095.html',
      author: 'Marvel Rivals / NetEase',
      published: '2024-12-04',
      confidence: 'alta',
      takeaways: [
        'Fonte principal para vida 275, Darkforce Cloak 80/s, Lightforce Dagger 18 de dano e 16/16 de cura.',
        'Confirma Terror Cape com 55 de dano, 1.5s de blind, 28% de vulnerabilidade por 3s e Veil com 45 de cura + 15% healing boost.',
        'Confirma Eternal Bond como quatro dashes com trilhas de 250/s de cura, 30/s de dano, raio de 4m, 15m de comprimento e custo 4500.',
      ],
    },
    {
      id: 'official-cloak-dagger-s75',
      kind: 'official',
      title: 'Marvel Rivals Version 20260417 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20260414/41667_1295988.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-04-14',
      confidence: 'alta',
      takeaways: [
        'Balance post atual reduziu Eternal Bond de 13s para 11s.',
        'Usado para corrigir guias que ainda tratam a ultimate como janela longa demais.',
        'Reforça que a ultimate precisa ser usada no timing da fight, não como preparo distante.',
      ],
    },
    {
      id: 'official-cloak-dagger-s6',
      kind: 'official',
      title: 'Marvel Rivals Version 20260116 Balance Post',
      url: 'https://www.marvelrivals.com/20260115/41525_1281488.html',
      author: 'Marvel Rivals / NetEase',
      published: '2026-01-13',
      confidence: 'alta',
      takeaways: [
        'Dagger Storm caiu de 55/s para 45/s, mas ganhou cura inicial de 60 ao criar o campo.',
        'Veil of Lightforce e Terror Cape passaram a compartilhar 2 cargas, 10s de recarga e 2s de cooldown entre usos.',
        'Esse patch torna a ordem Veil versus Terror Cape uma decisão real, não dois botões independentes para gastar sem pensar.',
      ],
    },
    {
      id: 'official-cloak-dagger-s2',
      kind: 'official',
      title: 'Marvel Rivals Version 20250430 Balance Post',
      url: 'https://www.marvelrivals.com/balancepost/20250428/41667_1231266.html',
      author: 'Marvel Rivals / NetEase',
      published: '2025-04-30',
      confidence: 'alta',
      takeaways: [
        'Aumentou Darkforce Cloak de 75/s para 80/s.',
        'Aumentou o dano de Lightforce Dagger de 15 para 18.',
        'Usado para reconciliar guias antigos com a página oficial atualizada.',
      ],
    },
    {
      id: 'wiki-cloak-dagger',
      kind: 'database',
      title: 'Cloak & Dagger - The Marvel Rivals Wiki (wiki.gg)',
      url: 'https://marvelrivals.wiki.gg/wiki/Cloak_%26_Dagger',
      published: '2026-05',
      confidence: 'media',
      takeaways: [
        'Busca em wiki.gg confirmou role Strategist, 275 HP e kit dividido entre Dagger, Cloak e Eternal Bond.',
        'Confere Lightforce Dagger com 12 munições, ricochete, homing, cura por impacto e Dagger Storm com 6s de duração.',
        'O acesso direto à página oscilou; valores finais foram reconciliados com a página oficial e balance posts.',
      ],
    },
    {
      id: 'fandom-sword-duality',
      kind: 'database',
      title: 'Cloak & Dagger / Sword of Duality - Marvel Rivals Wiki (Fandom)',
      url: 'https://marvelrivals.fandom.com/wiki/Cloak_%26_Dagger',
      published: '2026-05',
      confidence: 'media',
      takeaways: [
        'Confirma Sword of Duality como team-up atual com Manto e Adaga como Anchor Heroes para Hawkeye e Psylocke.',
        'Hawkeye recebe onda em Crescent Slash que cura aliados, aumenta cura recebida e aplica dano/vulnerabilidade em inimigos.',
        'Psylocke recebe Light Boomerang Dart e Dark Darts, com cura/slow/fase conforme a escolha; usado apenas para team-up, não para valores centrais do kit.',
      ],
    },
    {
      id: 'marvelrivalsgg-cloak-dagger',
      kind: 'guide',
      title: 'Cloak & Dagger Guide: How to Play, Tips and Tricks & Matchups',
      url: 'https://marvelrivals.gg/cloak-dagger-guide/',
      author: 'CanadianAlfredo',
      published: '2025-04-18',
      confidence: 'media',
      takeaways: [
        'Explica que a troca de forma recarrega Dagger automaticamente, um dos principais macetes de uptime.',
        'Reforça o uso de ricochete para curar aliados fora de linha de visão e o uso defensivo da bolha contra dive.',
        'Valores antigos, como duração/empilhamento da ultimate, foram filtrados por conflito com fonte oficial e relatos mais recentes.',
      ],
    },
    {
      id: 'mobalytics-cloak-dagger',
      kind: 'guide',
      title: 'Marvel Rivals Cloak and Dagger Character Guide',
      url: 'https://mobalytics.gg/marvel-rivals/cloak-and-dagger-guide',
      confidence: 'media',
      takeaways: [
        'Recomenda usar a ultimate principalmente para cura, não para dano.',
        'Enfatiza que ficar tempo demais em uma forma causa tunnel vision; o valor vem de alternar cura, dano e utilidade.',
        'Alguns números da página estão defasados, então a fonte foi usada para fundamentos e dicas de uso, não para valores atuais.',
      ],
    },
    {
      id: 'gamesgg-cloak-dagger',
      kind: 'guide',
      title: 'Cloak & Dagger Marvel Rivals Guide: Abilities, Stats & Best Team Comps',
      url: 'https://games.gg/marvel-rivals/guides/cloak-dagger-marvel-rivals-guide/',
      author: 'Mostafa Salem',
      published: '2026-03-25',
      confidence: 'media',
      takeaways: [
        'Resume o personagem como suporte flexível que pune jogadores que tratam o kit como point-and-heal simples.',
        'Destaca Dagger como sustain e Cloak como pressão/debuff, com comps agrupadas e segundo Strategist de burst como bons pares.',
        'Usado para macro de composição, skill-expression gap e ideia de ritmo entre formas.',
      ],
    },
    {
      id: 'beebom-cloak-dagger',
      kind: 'guide',
      title: 'Marvel Rivals Cloak and Dagger Guide: Abilities, Tips, Tricks, and More',
      url: 'https://beebom.com/marvel-rivals-cloak-dagger-guide/',
      author: 'Ishan Adhikary',
      published: '2025-05-28',
      confidence: 'media',
      takeaways: [
        'Reforça o truque de troca para recarregar a primária e manter uptime.',
        'Recomenda combinar cura e pressão em sequência, aproveitando cooldowns separados por forma.',
        'Valores numéricos antigos foram filtrados quando conflitam com fonte oficial atual.',
      ],
    },
    {
      id: 'reddit-cloak-solo',
      kind: 'forum',
      title: 'Cloak and Dagger Solo Queue Guide (Thread)',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1hvhvqr/cloak_and_dagger_solo_queue_guide_thread/',
      confidence: 'em disputa',
      takeaways: [
        'Relato comunitário prioriza Dagger como baseline e Cloak quando barras estão cheias, Terror Cape está pronto ou Dark Teleportation precisa negar ultimates.',
        'Sugere usar a troca para recarregar Dagger e escolher se continua dano ou volta a curar pela leitura de vida do time.',
        'Lista Dark Teleportation como resposta a muitas ultimates; foi usado como experiência de main, não prova absoluta de todas as interações.',
      ],
    },
    {
      id: 'reddit-cloak-intermediate',
      kind: 'forum',
      title: 'Intermediate Cloak & Dagger guide',
      url: 'https://www.reddit.com/r/marvelrivals/comments/1hfdh0m/intermediate_cloak_dagger_guide/',
      confidence: 'em disputa',
      takeaways: [
        'Comunidade reforça que a prioridade ainda é cura, mas Cloak pode finalizar alvo sem proteção ou expulsar diver.',
        'Comentários de mains descrevem rota anti-dive: fase para altura/cobertura, Storm no pouso, Terror Cape se o perseguidor continuar.',
        'Inclui alerta situacional sobre fase em overtime e contestação de objetivo; tratado como observação comunitária a validar em jogo.',
      ],
    },
    {
      id: 'chaosboost-cloak-dagger',
      kind: 'guide',
      title: 'Cloak and Dagger Best Tactics Guide - Marvel Rivals',
      url: 'https://www.chaosboost.com/guides/marvel-rivals-cloak-and-dagger-guide',
      confidence: 'media',
      takeaways: [
        'Confirma que Dagger Storm deve ser posicionado ANTES de trocar para Cloak para manter cura passiva rodando.',
        'Destaca posicionamento elevado para Terror Cape após Dark Teleportation para high ground.',
        'Discute uso ofensivo de Dark Teleportation para posições de emboscada, mas prioridade é defensiva.',
      ],
    },
    {
      id: 'boostingground-cloak-dagger',
      kind: 'guide',
      title: 'Marvel Rivals: Cloak & Dagger Guide - Dual Power',
      url: 'https://boosting-ground.com/marvel-rivals/guides/hero-guides/cloak-and-dagger-guide',
      author: 'Boosting Ground',
      published: '2025-01-01',
      confidence: 'media',
      takeaways: [
        'Confirma que o HUD exibe cooldowns da forma inativa, permitindo planejar troca com precisão.',
        'Detalha delay de ativação do Dark Teleportation: aliados à direita da câmera são cobertos mais rápido.',
        'Confirma que trilhas de Eternal Bond não empilham no mesmo local — cobertura ampla é superior.',
        'Sinergias antigas foram revisadas contra fontes atuais; Thor permanece como referência de brawl, mas Moon Knight foi removido do guia por divergência com Sword of Duality atual.',
      ],
    },
    {
      id: 'immortalboost-cloak-dagger',
      kind: 'guide',
      title: 'Ultimate Cloak and Dagger Guide For Marvel Rivals',
      url: 'https://immortalboost.com/blog/marvel-rivals/clock-and-dagger-guide/',
      confidence: 'media',
      takeaways: [
        'Menciona técnica de Eternal Bond aérea: disparar do ar deixa trilhas caindo no chão, ficando fora de alcance de ataques terrestres.',
        'Confirma que a ultimate funciona como cleanse suave de CC (raízes de Groot, Squirrel Girl).',
        'Alerta para Terror Cape em cooldown máximo como ritmo preferido contra heróis que dependem de mira (Hawkeye, Hela).',
      ],
    },
    {
      id: 'dexerto-cloak-dagger',
      kind: 'guide',
      title: 'Marvel Rivals Cloak & Dagger guide: Abilities, ultimate, tips, more',
      url: 'https://www.dexerto.com/gaming/marvel-rivals-cloak-dagger-guide-abilities-ultimate-tips-more-3001857/',
      confidence: 'media',
      takeaways: [
        'Confirma que a animação de Terror Cape precisa completar antes de trocar de forma — trocar antes cancela o debuff.',
        'Destaca que Dark Teleportation deixa sombra circular visível no chão, revelando posição mesmo durante a fase.',
        'Reforça que mover para cobertura após Dark Teleportation é obrigatório, não opcional.',
      ],
    },
    {
      id: 'video-cloak-dagger-pending',
      kind: 'video-transcript',
      title: 'Transcrições de guias e VODs de Manto e Adaga',
      url: 'https://www.youtube.com/results?search_query=Marvel+Rivals+Cloak+and+Dagger+guide+Season+7',
      confidence: 'pendente',
      takeaways: [
        'Slot reservado para guias em vídeo, VODs de high rank e coach reviews com timestamps.',
        'Nenhuma transcrição auditável foi processada nesta carga; o app não inventa dado de vídeo sem texto verificável.',
        'Próximo enriquecimento deve separar rotas de Eternal Bond por mapa e exemplos de timing de Dark Teleportation contra ultimates específicas.',
      ],
    },
  ],
  sourceCoverage: [
    {
      kind: 'official',
      label: 'Oficial',
      count: 4,
      status: 'Página oficial e três balance posts usados para valores atuais, carga compartilhada e duração da ultimate.',
    },
    {
      kind: 'database',
      label: 'Database',
      count: 2,
      status: 'wiki.gg usado para conferência secundária de role/kit e Fandom usado para team-up atual Sword of Duality.',
    },
    {
      kind: 'guide',
      label: 'Guias',
      count: 8,
      status: 'Guias usados para ritmo, composição, uptime, reload por troca, anti-dive, ricochete e prioridades práticas; números antigos foram filtrados.',
    },
    {
      kind: 'forum',
      label: 'Fórum',
      count: 2,
      status: 'Usado com cautela para experiência de mains, anti-dive, overtime e counter-ult.',
    },
    {
      kind: 'video-transcript',
      label: 'Vídeos',
      count: 0,
      status: 'Pendente: falta transcrição validada com timestamps.',
    },
  ],
}
