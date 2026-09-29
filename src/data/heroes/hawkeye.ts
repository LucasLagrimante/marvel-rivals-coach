import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const hawkeye: HeroGuide = {
  id: 'hawkeye', name: 'Gavião Arqueiro', aliases: ['Hawkeye', 'Clint Barton'], game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/hawkeye.png'), bannerUrl: publicAsset('heroes/banners/hawkeye.png'),
  selectionPortraitUrl: publicAsset('heroes/select/hawkeye.png'), selectionHoverUrl: publicAsset('heroes/select/hawkeye_champion.gif'), selectionHoverFit: { scale: 1.04, x: 0, y: 0 },
  theme: { primary: '#c8953e', primaryRgb: '200,149,62', secondary: '#6ea8d8', secondaryRgb: '110,168,216', surface: '#11151c', surfaceRgb: '17,21,28' },
  roles: ['duelist'], lastVerified: '2026-09-29',
  confidenceSummary: 'Gavião Arqueiro é o primeiro herói faltante alfabeticamente após Groot no roster conferido (Luke Cage redireciona para "Minor Characters" no Fandom, ou seja, não é jogável). Nomes de habilidade, vida e recargas vêm da wiki.gg; os dois Team-Ups, incluindo os textos base e aprimorado, vêm do bundle oficial teamup.html. Nenhuma fonte escrita foi usada como fonte de número.',
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
        baseEffect: 'O Blast Arrow é promovido a Psionic Arrow. Enquanto o arco está puxado, o Gavião Arqueiro acumula Psionic Arrows extras; ao soltar a corda, todas as flechas acumuladas são disparadas em sequência para a frente.',
        enhancedEffect: 'Com a Psylocke no time, o tempo de encordoar cada Psionic Arrow cai bastante e cada flecha explode ao atingir inimigos ou o cenário.',
        bestFor: 'Dano contínuo de média distância e composições que se agrupam na mesma linha de tiro.',
        easySetup: 'Psylocke como parceira para as flechas explodirem; sem ela, a versão base já entrega a rajada em sequência.',
        iconUrl: publicAsset('teamups/hawkeye-senbonzakura-strike-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hawkeye-senbonzakura-strike-partner.png')
      },
      {
        name: 'Moonlit Slash', partner: 'Manto e Adaga', partnerRole: 'strategist', input: 'Shift',
        baseEffect: 'O Crescent Slash é promovido a Moonlit Slash, que projeta um corte luminoso para a frente: cura e amplia a cura recebida dos aliados atingidos, causa dano e aplica Vulnerabilidade nos inimigos.',
        enhancedEffect: 'Com Manto e Adaga no time, o Moonlit Slash pode ser encadeado em um combo de três acertos, disparando três lâminas de luz em sequência.',
        bestFor: 'Times que precisam de sustain dentro do objetivo e de um contra-ataque que devolve o inimigo à mesma luta.',
        easySetup: 'Manto e Adaga cobre a entrada; sem elas, use o corte apenas para sair de um dive e recuperar vida.',
        iconUrl: publicAsset('teamups/hawkeye-moonlit-slash-icon.png'),
        partnerPortraitUrl: publicAsset('teamups/hawkeye-moonlit-slash-partner.png')
      }
    ],
    sourceIds: ['official-teamups', 'guide-teamups', 'batru-hawkeye', 'roster-wiki']
  },
  systems: [
    {
      name: 'Carga do arco', input: 'Passiva', heading: 'Um segundo de carga é o seu dano',
      facts: [
        'O arco tem barra de carga própria sob a mira: manter o alvo na linha de visão por cerca de um segundo carrega a flecha, e o dano mínimo com o arco totalmente puxado é 8.',
        'A carga se esvazia quando o alvo sai da sua mira. Carregue atrás da parede e solte no instante em que a ponta aparece.',
        'Flecha totalmente carregada acertando na cabeça entrega 349 de dano: o suficiente para eliminar muitos duelistas de uma vez só.',
        'São dois tipos de flecha e a troca entre eles é livre: Piercing Arrow no ataque principal e Blast Arrow no ataque alternativo.'
      ],
      meter: [
        { label: 'Sem carga', value: '8 de dano' },
        { label: 'Carga máxima', value: '349 na cabeça' },
        { label: 'Tempo de carga', value: '1 segundo' }
      ]
    },
    {
      name: 'Ronin Slash', input: 'Melee', heading: 'Seu seguro de projétil',
      facts: [
        'Acertar um projétil inimigo com o Ronin Slash bloqueia e anula o dano dele: é a forma mais barata de atravessar uma rua sob fogo.',
        'O corte causa cerca de 35 de dano a 2 golpes por segundo — não é a fonte de dano, é a sua seguro de vida.',
        'A anulação é só de projétil direto: explosões, áreas e efeitos criados no impacto passam por cima.',
        'O Skyward Leap dá um pulo duplo com recarga de 6 segundos. Use o primeiro pulo para mudar de altura e guarde o segundo para a saída do dive.'
      ]
    }
  ],
  roleGuides: {
    duelist: {
      key: 'duelist', label: 'Duelista', nickname: 'O arqueiro que sobrevive mudando de ângulo',
      health: '275 HP', difficulty: 'Média-alta: exige leitura de linha de tiro, disciplina de exposição e o hábito de sair antes de ser contestado.',
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
        { rank: 1, input: 'LMB', ability: 'Piercing Arrow', label: 'Carregue antes do peek', baseEffect: 'Tiro carregado de 8 sem carga até 349 em headshot carregado ao todo; carga máxima em 1 segundo.', fightNote: 'Solte no suporte ou no duelista exposto; não gaste uma flecha carregada no tanque.', why: 'É a única fonte de dano que decide a luta sozinho, e o custo dela é tempo de exposição, não recarga.', swapWhen: 'Quando o alvo estiver atrás de cobertura: use o Blast Arrow para expulsá-lo antes de carregar de novo.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 2, input: 'Passiva', ability: 'Carga do arco', label: 'Mire sem se comprometer', baseEffect: 'A barra de carga acumula em cerca de 1 segundo na linha de visão e se zera quando o alvo sai da mira.', fightNote: 'Pré-carregue atrás da parede e exponha-se apenas no instante do disparo.', why: 'A carga é o recurso mais valioso do personagem, e ela só existe enquanto você não está visível.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 3, input: 'E', ability: 'Hypersonic Arrow', label: 'Pare a fuga ou o voo', baseEffect: '55 de dano com pulso sônico que deixa o alvo lento por 1 segundo; acerto em inimigo voando o derruba. Recarga de 12 segundos.', fightNote: 'Acerte na rota de saída, não no centro do modelo parado.', why: 'Lentidão transforma um tiro difícil em confirmação e remove a ameaça aérea antes do dive.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 4, input: 'RMB', ability: 'Blast Arrow', label: 'Tire da cobertura', baseEffect: 'Três flechas explosivas em leque, 47 de dano no acerto direto e splash decrescente com a distância; até 3 conjuntos guardados, recarga de 1 segundo por conjunto.', fightNote: 'Espere a carga do arco antes de disparar: são recargas diferentes.', why: 'É o jeito de recuperar o ângulo de tiro quando o inimigo decide usar a parede.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] },
        { rank: 5, input: 'Q', ability: "Hunter's Sight", label: 'Afterimage vira alvo', baseEffect: 'Durante 10 segundos, inimigos na linha de visão deixam afterimages estáticos ao se moverem, e cada afterimage vale um acerto.', fightNote: 'Ative fora da visão e só depois que os escudos físicos tiverem caído.', why: 'A ultimate converte movimento previsível em várias oportunidades de tiro no mesmo objetivo.', sourceIds: ['wiki-gg-hawkeye', 'official-heroes'] }
      ],
      adaptations: [
        'Contra voadores: conserve o Hypersonic Arrow e dispare quando o alvo começar a subir, não quando ele estiver no ponto mais alto.',
        'Contra Doutor Estranho, Capitão América e Magneto: escudos físicos negam dano aos afterimages, então guarde a Hunter’s Sight para depois que a barreira cair.',
        'Contra Homem-Aranha, Pantera Negra e Demolidor: atire de uma cobertura que tenha rota de pulo — nunca de uma posição sem saída.',
        'Com Senbonzakura Strike equipada: pare de usar o Blast Arrow como remoção de cobertura isolada e passe a segurar a corda acumulando flechas antes de soltar a rajada.',
        'Com Moonlit Slash equipada: o corte vira sustain e Vulnerabilidade, então use-o para entrar no objetivo em vez de gastá-lo na fuga.'
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
        'A wiki.gg confirma todos os nomes do kit (Piercing Arrow, Blast Arrow, Ronin Slash, Skyward Leap, Hypersonic Arrow, Crescent Slash e Hunter’s Sight), a vida de 275 e os valores de dano, recarga e duração.',
        'O bundle oficial teamup.html confirma as duas opções atuais (Senbonzakura Strike com Psylocke e Moonlit Slash com Manto e Adaga) e os textos base e aprimorado copiados acima.',
        'A wiki.gg marca Supersensory Vision e Ice Arrow como indisponíveis na temporada atual, por isso não entram no guia.',
        'Guias e comunidade sustentam ângulo, cobertura e disciplina de saída, não os valores numéricos.'
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
    { id: 'official-heroes', kind: 'official', title: 'Ficha oficial de heróis — Marvel Rivals', url: 'https://www.marvelrivals.com/heroes/', author: 'Marvel Rivals / NetEase', published: '2026-09-29', confidence: 'alta', takeaways: ['Roster oficial consultado para confirmar que Gavião Arqueiro está no jogo e é Duelista.', 'Referência primária para o kit atual.'] },
    { id: 'official-teamups', kind: 'official', title: 'Team-Up oficial (bundle teamup.html)', url: 'https://www.marvelrivals.com/heroes/teamup.html', author: 'Marvel Rivals / NetEase', published: '2026-09-29', confidence: 'alta', takeaways: ['O bundle oficial fornece os textos base e aprimorado de Senbonzakura Strike e Moonlit Slash, além dos ícones e dos retratos dos parceiros.', 'A chave de Moonlit Slash é Shift; a de Senbonzakura Strike não vem preenchida no bundle, por isso o guia usa a tecla do ataque alternativo (RMB), que é exatamente o Blast Arrow substituído.'] },
    { id: 'wiki-gg-hawkeye', kind: 'database', title: 'Gavião Arqueiro — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Hawkeye', author: 'Marvel Rivals Wiki', published: '2026-09-29', confidence: 'media', takeaways: ['Detalha a barra de carga, o dano de 8 sem carga até 349 em headshot carregado, o Blast Arrow de 47 com 3 conjuntos, o Ronin Slash anulando projétil, o Hypersonic Arrow de 55 com lentidão de 1 segundo, o pulo duplo de 6 segundos e a Hunter’s Sight de 10 segundos.', 'Marca Supersensory Vision e Ice Arrow como indisponíveis na temporada atual.'] },
    { id: 'guide-teamups', kind: 'guide', title: 'Best Team-Ups for Every Hero', url: 'https://gamelevate.com/marvel-rivals-best-team-ups/', author: 'Gamelevate', published: '2026', confidence: 'media', takeaways: ['Usado para comparar a recomendação de Team-Up; não usado como fonte de número.'] },
    { id: 'batru-hawkeye', kind: 'database', title: 'Hawkeye — Batru synergy', url: 'https://batru.gg/marvel-rivals/meta/synergy/hawkeye', author: 'Batru', published: '2026-09', confidence: 'media', takeaways: ['Win rate de dupla consultado como contexto; a dupla medida mistura a força individual dos heróis e não prova causalidade.'] },
    { id: 'community-hawkeye', kind: 'forum', title: 'Hawkeye mains — busca no Reddit', url: 'https://www.reddit.com/r/marvelrivals/search/?q=hawkeye%20tips', author: 'r/marvelrivals', published: '2026-09', confidence: 'media', takeaways: ['Leitura por snippets: a comunidade valoriza cobertura, mudança de ângulo e guardar mobilidade para o dive. O Reddit bloqueou a leitura integral.'] },
    { id: 'roster-wiki', kind: 'database', title: 'Heroes — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Heroes', author: 'Marvel Rivals Wiki', published: '2026-09-29', confidence: 'media', takeaways: ['Comparado ao índice local: Hawkeye consta no roster e Luke Cage não é personagem jogável, o que define a fila alfabética.'] }
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Site Oficial & Team-Up', count: 2, status: 'Roster e bundle de Team-Up conferidos.' },
    { kind: 'database', label: 'Wiki & Base Pública', count: 3, status: 'wiki.gg (valores), Batru (duplas) e roster da wiki.' },
    { kind: 'guide', label: 'Guias Especializados', count: 1, status: 'Usado para decisão, não para números.' },
    { kind: 'forum', label: 'Comunidade & Fóruns', count: 1, status: 'Reddit conferido por snippets.' },
    { kind: 'video-transcript', label: 'Vídeos & Transcrições', count: 0, status: 'Pendente: nenhuma transcrição auditável foi localizada.' }
  ]
}
