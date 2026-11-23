import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const hawkeye: HeroGuide = {
  id: 'hawkeye', name: 'Gavião Arqueiro', aliases: ['Hawkeye', 'Clint Barton'], game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/hawkeye.png'), bannerUrl: publicAsset('heroes/banners/hawkeye.png'),
  selectionPortraitUrl: publicAsset('heroes/select/hawkeye.png'), selectionHoverUrl: publicAsset('heroes/select/hawkeye_champion.gif'), selectionHoverFit: { scale: 1.04, x: 0, y: 0 },
  theme: { primary: '#c8953e', primaryRgb: '200,149,62', secondary: '#6ea8d8', secondaryRgb: '110,168,216', surface: '#11151c', surfaceRgb: '17,21,28' },
  roles: ['duelist'], lastVerified: '2026-11-23',
  confidenceSummary:
    'Revalidado em 23/11/2026 contra a ficha oficial da temporada (window.__HERO_DATA__), que passa a ser a fonte dos números de dano: Piercing Arrow vai de 28 a 70 por flecha (máximo após 0,9s de carga, com carga mínima de 0,7s) e o projétil de 140 a 210 m/s; o Archer’s Focus soma 0 a 90 contra alvos a até 40m. Os valores antigos de “8 sem carga até 349 no headshot” vinham da wiki.gg e foram retirados: com 70 de base, 90 de Focus e crítico de 1,5x, o headshot cheio fica em 240. Blast Arrow dispara três flechas por conjuração, com 16 de dano no projétil e 34 no campo de 3m, 3 cargas e 0,5s por carga. Hypersonic Arrow causa 55 + 55 com 40% de slow por 1s em 12s de recarga; Crescent Slash causa 40 em 8m com 12s; Hunter’s Sight custa 3100 de energia, dura 10s e gera afterimage a cada 0,5s (3s cada). Moonlit Slash causa e cura 60 com 15% de Vulnerabilidade e healing boost por 4s, e o combo aprimorado usa três lâminas de 35. Senbonzakura Strike acumula cinco Psionic Arrows de 33 com 0,09s de encordoamento cada (0,07s e 24 + 8 de explosão com Psylocke). O balance Version 20261009 (recuperação de Crescent Slash, largura do Hypersonic, 33 de dano da Psionic Arrow) segue válido e não foi revisto pelo patch 20261119, que é só de correções. Vida de 250 confirmada.',
  coreRead: [
    'Carregue atrás da cobertura e exponha-se só no instante do disparo: o dano vem do tempo mirando, e a sobrevivência vem de nunca oferecer o mesmo ângulo duas vezes.',
    'Ronin Slash bloqueia projéteis diretos: use-o para atravessar uma janela de fogo sem gastar o Hypersonic Arrow, que precisa ficar guardado para derrubar voadores.',
    'Hunter’s Sight pune movimento previsível: ative fora da linha de visão, revele o suporte e atire no afterimage enquanto o alvo real ainda procura a saída.',
    'Blast Arrow é remoção de cobertura, não substituto do tiro carregado: gaste as três cargas para expulsar quem está atrás e volte ao Piercing Arrow para confirmar.'
  ],
  teamUps: {
    summary: 'Senbonzakura Strike troca o Blast Arrow por uma metralhadora de flechas acumuladas; Moonlit Slash transforma o corte em sustain e vulnerabilidade. A primeira ganha a luta de longe, a segunda ganha a luta de entrada.',
    recommended: 'Senbonzakura Strike',
    recommendedReason: 'O bundle oficial mostra que a Senbonzakura Strike não exige Psylocke para funcionar: a base já acumula e dispara as Psionic Arrows em sequência, e a Psylocke só acelera o encordoamento e faz cada flecha explodir. É um plano de dano que o Gavião Arqueiro executa sozinho; a Moonlit Slash é a escolha do time que quer sustain e negação, não do time que quer eliminar.',
    options: [
      {
        name: 'Senbonzakura Strike', partner: 'Psylocke', partnerRole: 'duelist', input: 'RMB',
        baseEffect: 'O Blast Arrow é promovido a Psionic Arrow. Enquanto o arco está puxado, o Gavião Arqueiro acumula Psionic Arrows extras; ao soltar a corda, até cinco flechas de 33 de dano cada são disparadas em sequência para a frente, com 0,09s de encordoamento por flecha.',
        enhancedEffect: 'Com a Psylocke no time, o tempo de encordoar cada Psionic Arrow cai bastante e cada flecha explode ao atingir inimigos ou o cenário.',
        bestFor: 'Dano contínuo de média distância e composições que se agrupam na mesma linha de tiro.',
        easySetup: 'Psylocke como parceira para as flechas explodirem; sem ela, a versão base já entrega a rajada em sequência.',
        iconUrl: publicAsset('teamups/hawkeye-senbonzakura-strike-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hawkeye-senbonzakura-strike-partner.png')
      },
      {
        name: 'Moonlit Slash', partner: 'Manto e Adaga', partnerRole: 'strategist', input: 'Shift',
        baseEffect: 'O Crescent Slash é promovido a Moonlit Slash, que projeta um corte luminoso de 60 de dano e 60 de cura: amplia a cura recebida dos aliados atingidos e aplica 15% de Vulnerabilidade nos inimigos, ambos por 4s, com 12s de recarga. Ao conjurar, Hawkeye também recebe cura própria igual à cura concedida.',
        enhancedEffect: 'Com Manto e Adaga no time, o Moonlit Slash pode ser encadeado em um combo de três acertos, disparando três lâminas de luz de 35 de dano e 35 de cura cada.',
        bestFor: 'Times que precisam de sustain dentro do objetivo e de um contra-ataque que devolve o inimigo à mesma luta.',
        easySetup: 'Manto e Adaga cobre a entrada; sem elas, use o corte apenas para sair de um dive e recuperar vida.',
        iconUrl: publicAsset('teamups/hawkeye-moonlit-slash-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hawkeye-moonlit-slash-partner.png')
      }
    ],
    sourceIds: ['official-teamups', 'balance-20261009', 'guide-teamups', 'guide-hawkeye', 'batru-hawkeye', 'roster-wiki']
  },
  systems: [
    {
      name: 'Carga do arco', input: 'Passiva', heading: 'Um segundo de carga é o seu dano',
      facts: [
        'O arco tem barra de carga própria sob a mira: a carga mínima é 0,7s e o dano máximo sai com 0,9s de arco puxado, indo de 28 a 70 por flecha; a velocidade do projétil sobe junto, de 140 a 210 m/s.',
        'A carga se esvazia quando o alvo sai da sua mira. Carregue atrás da parede e solte no instante em que a ponta aparece.',
        'Archer’s Focus soma de 0 a 90 de dano à flecha carregada contra alvos a até 40m: com o bônus cheio, a flecha de 70 vira 160 e o headshot (crítico de 1,5x) passa de 240. O 349 que circulava vinha da wiki antiga e não se sustenta na ficha atual.',
        'São dois tipos de flecha e a troca entre eles é livre: Piercing Arrow no ataque principal e Blast Arrow no ataque alternativo.'
      ],
      meter: [
        { label: 'Sem carga', value: '28 de dano' },
        { label: 'Carga máxima', value: '70 (+ até 90 do Focus)' },
        { label: 'Tempo de carga', value: '0,9s (mínima 0,7s)' }
      ]
    },
    {
      name: 'Ronin Slash', input: 'Melee', heading: 'Seu seguro de projétil',
      facts: [
        'Acertar um projétil inimigo com o Ronin Slash bloqueia e anula o dano dele: é a forma mais barata de atravessar uma rua sob fogo.',
        'O Ronin Slash não tem dano listado na ficha atual: são 3m de alcance e a função é anular projétil, não ferir. O corte que causa 40 de dano em 8m com 12s de recarga é o Crescent Slash ([key:Shift]).',
        'A anulação é só de projétil direto: explosões, áreas e efeitos criados no impacto passam por cima.',
        'O Skyward Leap dá um pulo duplo com recarga de 6 segundos. Use o primeiro pulo para mudar de altura e guarde o segundo para a saída do dive.'
      ]
    }
  ],
  roleGuides: {
    duelist: {
      key: 'duelist', label: 'Duelista', nickname: 'O arqueiro que sobrevive mudando de ângulo',
      health: '250 HP', difficulty: 'Média-alta: exige leitura de linha de tiro, disciplina de exposição e o hábito de sair antes de ser contestado.',
      job: 'Criar pressão de média e longa distância, revelar o backline e usar o pulo duplo para nunca oferecer o mesmo ângulo duas vezes.',
      verdict: 'Escolha Gavião Arqueiro quando o mapa tem linhas de visão longas e coberturas altas. Troque quando dois flanqueadores entram juntos e a equipe não tem como separá-los.',
      playstyle: [
        'Comece atrás de cobertura lateral, carregue a flecha e só apareça para soltar o disparo.',
        'Guarde o Hypersonic Arrow para o instante em que o voador começa a subir, não para dano automático em qualquer alvo.',
        'Depois de cada tiro revelador, mude alguns metros: o inimigo deve responder a um ângulo novo, não apenas correr até você.',
        'Contra dive, o Ronin Slash compra o primeiro instante e o Skyward Leap é a saída — nunca o botão de chegada.'
      ],
      priorityKicker: 'Ordem de decisão', priorityTitle: 'A próxima luta em cinco escolhas', priorityDescription: 'Priorize a ferramenta que mantém o arco carregado e o arqueiro vivo.',
      upgradePlan: [
        { rank: 1, input: 'LMB', ability: 'Piercing Arrow', label: 'Carregue antes do peek', baseEffect: 'Tiro carregado de 28 (sem carga) a 70 de dano, máximo após 0,9s de arco puxado; o Archer’s Focus soma até 90 em alvos a 40m, o que leva a flecha cheia a 160 e o headshot a mais de 240.', fightNote: 'Solte no suporte ou no duelista exposto; não gaste uma flecha carregada no tanque.', why: 'É a única fonte de dano que decide a luta sozinho, e o custo dela é tempo de exposição, não recarga.', swapWhen: 'Quando o alvo estiver atrás de cobertura: use o Blast Arrow para expulsá-lo antes de carregar de novo.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 2, input: 'Passiva', ability: 'Carga do arco', label: 'Mire sem se comprometer', baseEffect: 'A barra de carga exige 0,7s para o mínimo e chega ao máximo em 0,9s de linha de visão; ela se zera quando o alvo sai da mira.', fightNote: 'Pré-carregue atrás da parede e exponha-se apenas no instante do disparo.', why: 'A carga é o recurso mais valioso do personagem, e ela só existe enquanto você não está visível.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 3, input: 'E', ability: 'Hypersonic Arrow', label: 'Pare a fuga ou o voo', baseEffect: '55 de dano no primeiro campo e 55 no segundo, com lentidão de 40% por 1 segundo; acerto em inimigo voando o derruba. Recarga de 12 segundos e projétil a 150 m/s.', fightNote: 'Acerte na rota de saída, não no centro do modelo parado; o campo do impacto inicial agora tem 5 m de largura, antes 3 m.', why: 'Lentidão transforma um tiro difícil em confirmação e remove a ameaça aérea antes do dive.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 4, input: 'RMB', ability: 'Blast Arrow', label: 'Tire da cobertura', baseEffect: 'Três flechas explosivas em leque: 16 de dano no projétil e 34 no campo de 3m gerado no impacto; até 3 conjuntos guardados, com 0,5s de recarga por conjunto.', fightNote: 'Espere a carga do arco antes de disparar: são recargas diferentes.', why: 'É o jeito de recuperar o ângulo de tiro quando o inimigo decide usar a parede.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 5, input: 'Q', ability: "Hunter's Sight", label: 'Afterimage vira alvo', baseEffect: 'Durante 10 segundos (3100 de energia), inimigos na linha de visão deixam afterimages a cada 0,5s, cada um durando 3s e valendo um acerto; a velocidade de puxada do arco sobe 1,5x durante a ultimate.', fightNote: 'Ative fora da visão e só depois que os escudos físicos tiverem caído.', why: 'A ultimate converte movimento previsível em várias oportunidades de tiro no mesmo objetivo.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] }
      ],
      adaptations: [
        'Contra voadores: conserve o Hypersonic Arrow e dispare quando o alvo começar a subir, não quando ele estiver no ponto mais alto.',
        'Contra Doutor Estranho, Capitão América e Magneto: escudos físicos negam dano aos afterimages, então guarde a Hunter’s Sight para depois que a barreira cair.',
        'Contra Homem-Aranha, Pantera Negra e Demolidor: atire de uma cobertura que tenha rota de pulo — nunca de uma posição sem saída.',
        'Com Senbonzakura Strike equipada: pare de usar o Blast Arrow como remoção de cobertura isolada e passe a segurar a corda acumulando flechas antes de soltar a rajada.',
        'Com Moonlit Slash equipada: o corte cura aliados, amplia a cura recebida e aplica Vulnerabilidade; também cura Hawkeye pelo total curado. Use-o para sustentar o avanço no objetivo sem abandonar a saída.'
      ],
      ultimates: [
        { stance: 'Pick de cobertura', name: "Hunter's Sight", bestUse: 'Quando dois alvos precisam cruzar a mesma linha estreita ou o suporte está prestes a reposicionar.', execution: 'Ative fora da linha de visão, revele o backline, mude levemente o ângulo e dispare no afterimage mais exposto.', upgradeValue: 'São 10 segundos de validade e afterimages viram hitboxes: o valor vem da sequência de acertos, nunca de um tiro isolado.' },
        { stance: 'Resposta ao dive', name: "Hunter's Sight", bestUse: 'Depois de separar o flanqueador com o Ronin Slash ou o Crescent Slash.', execution: 'Lance o inimigo, crie distância, ative a ultimate e use a cobertura para impedir que o alvo real esconda o afterimage.', upgradeValue: 'Não ative enquanto um escudo físico estiver pronto para apagar seus alvos — a janela de 10 segundos é curta demais para desperdiçar.' }
      ],
      dashGuide: {
        ability: 'Skyward Leap', shortRule: 'Use o pulo para mudar de altura e guarde a recarga para a saída do dive.',
        mechanics: [
          'O pulo duplo tem recarga de 6 segundos e não precisa ser gasto de uma vez: atrasar o segundo pulo quebra a leitura do perseguidor.',
          'Atirar de cima muda a linha de visão, mas denuncia sua posição — aterrisse já apontando para a próxima cobertura.',
          'O Ronin Slash é seguro contra projétil direto, não licença para ficar no corpo a corpo.'
        ],
        drills: [
          'Treine a sequência carga atrás de parede, peek, disparo, pulo e nova cobertura.',
          'Pratique o Hypersonic Arrow em alvos aéreos antes de gastar a ultimate.',
          'Treine o Crescent Slash para recuar, sem abrir com o corte.'
        ]
      },
      patterns: [
        { title: 'Pick pelo segundo ângulo', steps: ['Chegue com o pulo ou por uma cobertura lateral sem ser visto.', 'Carregue o arco atrás da parede.', 'Solte [key:LMB] no suporte no instante em que ele cruzar a linha.', 'Mude de altura com o Skyward Leap antes do contra-ângulo.', 'Repita só depois de recuperar a rota de saída.'] },
        { title: 'Anti-dive', steps: ['Espere o flanqueador revelar a entrada.', 'Use [key:Melee] para bloquear o projétil e criar o instante de reação.', 'Gaste o Crescent Slash em [key:Shift] para ganhar distância e negar a perseguição.', 'Acerte [key:E] na rota de fuga e finalize com [key:LMB].'] },
        { title: 'Hunter’s Sight no objetivo', steps: ['Espere os escudos físicos acabarem.', 'Ative [key:Q] já atrás de cobertura.', 'Atire no afterimage que cruza a rota, não no tanque da frente.', 'Troque de ângulo após cada disparo para não ser marcado.'] }
      ],
      mistakes: [
        'Ficar parado carregando o arco no meio da rua.',
        'Gastar o Skyward Leap para chegar e não ter resposta ao dive.',
        'Tentar anular explosões ou áreas com o Ronin Slash.',
        'Usar a Hunter’s Sight enquanto um escudo físico está ativo.',
        'Gastar as três cargas do Blast Arrow em poke e ficar sem remoção de cobertura.'
      ],
      evidence: [
        'balance-20261009',
        'official-heroes',
        'ficha-oficial-hawkeye',
        'official-teamups',
        'wiki-gg-hawkeye',
        'guide-hawkeye',
        'community-hawkeye', 'patch-20261015'
      ],
      abilityLoop: [
        { ability: 'Piercing Arrow', input: 'LMB' },
        { ability: 'Carga do arco', input: 'Passiva' },
        { ability: 'Hypersonic Arrow', input: 'E' },
        { ability: 'Blast Arrow', input: 'RMB' },
        { ability: "Hunter's Sight", input: 'Q' }
      ]
    }
  },
  sources: [
    { id: 'balance-20261009', kind: 'official', title: 'Marvel Rivals Version 20261009 Balance Post', url: 'https://www.marvelrivals.com/balancepost/20261006/41667_1315864.html', author: 'Marvel Rivals / NetEase', published: '2026-10-06', confidence: 'alta', takeaways: ['Vigente desde 09/10/2026: Piercing Arrow 130–195→140–210 m/s; recuperação da animação de Crescent Slash ligeiramente reduzida (sem valor publicado); largura do impacto inicial de Hypersonic Arrow 3→5 m.', 'Com Team-Up Psylocke, Psionic Arrow single-shot damage 32→33; com Cloak & Dagger, Moonlit Slash também concede a Hawkeye cura própria igual à cura causada.'] },
    { id: 'guide-hawkeye', kind: 'guide', title: 'Hawkeye Guide: How to Play, Tips and Tricks & Matchups', url: 'https://marvelrivals.gg/hawkeye-guide/', author: 'MarvelRivals.gg', published: '2025', confidence: 'media', takeaways: ['Recomenda guardar Hypersonic Arrow para derrubar voadores, usar Ronin Slash para repelir/defletir e reservar Blast Arrow para finalizar alvos que alcançam cobertura. Guia anterior ao balance atual: usado apenas para decisões táticas.'] },
    { id: 'official-heroes', kind: 'official', title: 'Ficha oficial de heróis — Marvel Rivals', url: 'https://www.marvelrivals.com/heroes/', author: 'Marvel Rivals / NetEase', published: '2026-10-21', confidence: 'alta', takeaways: ['Roster oficial confirma Gavião Arqueiro como Duelista; valores da página de habilidades podem estar defasados em relação ao balance post.'] },
    { id: 'ficha-oficial-hawkeye', kind: 'official', title: 'Ficha oficial de Hawkeye (window.__HERO_DATA__, lida em 23/11/2026)', url: 'https://www.marvelrivals.com/heroes/', author: 'Marvel Rivals / NetEase', published: '2026-11-23 (leitura)', confidence: 'alta', takeaways: ['Piercing Arrow: 28–70 de dano (máximo após 0,9s de carga), carga mínima de 0,7s, projétil de 140–210 m/s, munição infinita e crítico habilitado. Archer’s Focus soma 0–90 contra alvos a até 40m.', 'Blast Arrow: 3 flechas por conjuração, 16 de dano de projétil, campo de 3m com 34 de dano, 3 cargas e 0,5s por carga. Hypersonic Arrow: 55 + 55 de dano, 40% de slow por 1s, 12s de recarga. Crescent Slash: 40 de dano, 8m, 12s. Ronin Slash: 3m, sem dano listado. Skyward Leap: 6s.', 'Hunter’s Sight: 10s, 3100 de energia, afterimage a cada 0,5s com 3s de duração e puxada 1,5x mais rápida. Moonlit Slash: 60 de dano e 60 de cura, 15% de Vulnerabilidade e healing boost por 4s, 12s de recarga; aprimorado com três lâminas de 35. Senbonzakura Strike: 5 Psionic Arrows de 33, 0,09s cada (0,07s e 24 + 8 de explosão com Psylocke).'] },
    { id: 'official-teamups', kind: 'official', title: 'Team-Up oficial (bundle teamup.html)', url: 'https://www.marvelrivals.com/heroes/teamup.html', author: 'Marvel Rivals / NetEase', published: '2026-10-21', confidence: 'alta', takeaways: ['Bundle ao vivo confirma Senbonzakura Strike com Psylocke e Moonlit Slash com Cloak & Dagger. Efeitos: acumular Psionic Arrows enquanto puxa e disparar em sequência; com Psylocke, encordoamento mais rápido e explosões ao atingir inimigos/cenário. Moonlit Slash cura e amplia cura de aliados, causa dano e Vulnerabilidade; com Cloak & Dagger, combo de três lâminas.', 'A chave de Moonlit Slash é Shift; Senbonzakura Strike não declara tecla e substitui Blast Arrow, portanto usa RMB. Patch 20261009 acrescenta mudanças que o texto-base do bundle não reflete.'] },
    { id: 'wiki-gg-hawkeye', kind: 'database', title: 'Gavião Arqueiro — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Hawkeye', author: 'Marvel Rivals Wiki', published: '2026-10-21', confidence: 'media', takeaways: ['Detalha a barra de carga, o Blast Arrow com 3 conjuntos, o Ronin Slash anulando projétil, o Hypersonic Arrow de 55 com lentidão de 1 segundo, o pulo duplo de 6 segundos e a Hunter’s Sight de 10 segundos. Os valores de dano da wiki (8 sem carga, 349 no headshot, 47 no Blast Arrow) foram superados pela ficha oficial de 23/11/2026 e ficam registrados só como histórico.', 'Marca Supersensory Vision e Ice Arrow como indisponíveis na temporada atual.'] },
    { id: 'guide-teamups', kind: 'guide', title: 'Best Team-Ups for Every Hero', url: 'https://gamelevate.com/marvel-rivals-best-team-ups/', author: 'Gamelevate', published: '2026', confidence: 'media', takeaways: ['Usado para comparar a recomendação de Team-Up; não usado como fonte de número.'] },
    { id: 'batru-hawkeye', kind: 'database', title: 'Hawkeye — Batru synergy', url: 'https://batru.gg/marvel-rivals/meta/synergy/hawkeye', author: 'Batru', published: '2026-10-14', confidence: 'media', takeaways: ['Dados de duplas consultados em 14/10/2026: Psylocke +4,2% acima do esperado e Cloak & Dagger +2,3% acima do esperado. Associação observacional mistura força individual e não prova causalidade.'] },
    { id: 'community-hawkeye', kind: 'forum', title: 'Dicas para main Hawkeye — r/rivals', url: 'https://www.reddit.com/r/rivals/comments/1junl55/tips_on_maining_hawkeye/', author: 'r/rivals', published: '2025-03', confidence: 'media', takeaways: ['Thread consultada: recomenda paciência e predição, explosivas para quebrar paredes/finalizar e guardar slash/pulos para escapar. Fonte antiga; usada apenas para princípios táticos.'] },
    { id: 'roster-wiki', kind: 'database', title: 'Heroes — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Heroes', author: 'Marvel Rivals Wiki', published: '2026-10-21', confidence: 'media', takeaways: ['Comparado ao índice local: Hawkeye consta no roster e Luke Cage não é personagem jogável, o que define a fila alfabética.'] },
    { id: 'patch-20261015', kind: 'official', title: 'Marvel Rivals Version 20261015 Patch Notes', url: 'https://www.marvelrivals.com/20261014/41525_1316588.html', author: 'Marvel Rivals / NetEase', published: '2026-10-14', confidence: 'alta', takeaways: ['Patch anunciado em 14/10 e lançado em 15/10: inclui conteúdos sazonais e correções para Jeff, Black Widow e colisões de mapa; não lista ajuste de gameplay para Hawkeye.'] },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Site Oficial & Team-Up', count: 5, status: 'Balance 20261009, ficha e bundle oficiais; patch 20261015 verificado, sem ajuste de gameplay para Hawkeye.' },
    { kind: 'database', label: 'Wiki & Base Pública', count: 3, status: 'wiki.gg (valores), Batru (duplas) e roster da wiki.' },
    { kind: 'guide', label: 'Guias Especializados', count: 2, status: 'Guias consultados para decisões táticas; sem números.' },
    { kind: 'forum', label: 'Comunidade & Fóruns', count: 1, status: 'Reddit conferido por snippets.' },
    { kind: 'video-transcript', label: 'Vídeos & Transcrições', count: 0, status: 'Pendente: nenhuma transcrição auditável foi localizada.' }
  ]
}
