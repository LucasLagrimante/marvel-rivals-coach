import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const blade: HeroGuide = {
  id: 'blade',
  name: 'Blade',
  aliases: ['Blade', 'Eric Brooks', 'The Daywalker'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/blade.png'),
  bannerUrl: publicAsset('heroes/banners/blade.png'),
  selectionPortraitUrl: publicAsset('heroes/select/blade.png'),
  selectionHoverUrl: publicAsset('heroes/select/blade_champion.gif'),
  selectionHoverFit: { scale: 1.55, x: 0, y: -20 },
  theme: { primary: '#d72638', primaryRgb: '215, 38, 56', secondary: '#f0a51a', secondaryRgb: '240, 165, 26', surface: '#171317', surfaceRgb: '23, 19, 23' },
  roles: ['duelist'],
  lastVerified: '2026-09-23',
  confidenceSummary: 'Blade é um Duelista de 350 HP que converte pressão corpo a corpo em sustentação: a decisão central é escolher entre shotgun para aplicar redução de cura e espada para acelerar Bloodline Awakening. Números de habilidades foram cruzados com wiki.gg e a ficha oficial; guias escritos sustentam os combos, não os valores. A página oficial de Team-Up atual mudou a segunda opção para Bleed for Battle; confirmei o nome no bundle baixado pelo script.',
  coreRead: [
    'Troca de arma é o macete: use Hunter\'s Shotgun ([key:RMB]) para negar cura e criar distância; volte à Ancestral Sword ([key:LMB]) antes de entrar no corpo a corpo para alimentar Bloodline Awakening e ganhar velocidade de ataque.',
    'Scarlet Shroud ([key:E]) não é só defesa: bloquear dano acelera Daywalker Dash ([key:Shift]) e concede Unstoppable por um instante. Segure o bloqueio até o disparo importante, então converta a janela em avanço ou saída.',
    'Daywalker Dash ([key:Shift]) atravessa a luta em duas cargas. Use a versão de espada para slow e a de arma para reduzir cura; não gaste as duas cargas antes de saber por onde o alvo vai escapar.',
  ],
  teamUps: {
    summary: 'Blade of Khonshu é a escolha de dano para caçar alvos; Bleed for Battle atende a lutas em que o parceiro habilita pressão sustentada. A troca é livre na sala de spawn.',
    recommended: 'Blade of Khonshu',
    recommendedReason: 'A opção recomendada pelos dados oficiais e pelo guia de Team-Ups é a que transforma a entrada de Blade em ameaça adicional imediata. Bleed for Battle é a alternativa quando a composição já tem outro iniciador e quer pressão de troca.',
    options: [
      { name: 'Blade of Khonshu', partner: 'Moon Knight', partnerRole: 'Duelista', input: 'C', baseEffect: 'Concede Eclipse Edge: Blade avança e desfere uma sequência de cortes que lança Darkmoon Blades.', enhancedEffect: 'Com Moon Knight no time, os cortes e as lâminas do Team-Up mantêm a pressão conjunta sobre alvos próximos.', bestFor: 'Finalizar alvos isolados após Daywalker Dash e punir retaguardas sem mobilidade.', easySetup: 'Moon Knight joga no mesmo flanco; o efeito base já adiciona uma entrada sem depender do parceiro.', iconUrl: publicAsset('teamups/blade-blade-of-khonshu-icon.png'), partnerPortraitUrl: publicAsset('teamups/blade-blade-of-khonshu-partner.png') },
      { name: 'Bleed for Battle', partner: 'Capitão América', partnerRole: 'Vanguarda', input: 'C', baseEffect: 'Concede uma habilidade de Team-Up que reforça a pressão de combate corpo a corpo de Blade.', enhancedEffect: 'Com Capitão América no time, o aprimoramento acrescenta pressão de sangramento à luta combinada.', bestFor: 'Composições de brawl que querem manter o inimigo preso no objetivo.', easySetup: 'Capitão América cria a linha de frente; coordenem a entrada de Blade no mesmo alvo.', iconUrl: publicAsset('teamups/blade-lunar-force-icon.png'), partnerPortraitUrl: publicAsset('teamups/blade-lunar-force-partner.png') },
    ],
    sourceIds: ['official-teamups', 'gamelevate-teamups-blade', 'batru-blade', 'season10-balance'],
  },
  systems: [
    { name: 'Bloodline Awakening', input: 'Passiva', heading: 'Acelere com acertos, não com pressa', facts: ['Acertos no estado awakened aumentam gradualmente a velocidade de ataque, até 100%; a bonificação cai rapidamente quando você para de conectar golpes.', 'A cada 5 acertos, Blade executa um golpe giratório. Enquanto awakened, ele enxerga através de paredes inimigos abaixo de 50% de vida, mas não pode usar a shotgun.', 'O estado concede lifesteal e redução de cura recebida: entre já com um alvo marcado, não ative no vazio.'], meter: [{ label: 'Velocidade de ataque', value: '+10% a +100%' }, { label: 'Gatilho', value: '5 acertos' }, { label: 'Lifesteal', value: '65%' }, { label: 'Restrição', value: 'sem shotgun' }] },
    { name: 'Scarlet Shroud', input: 'E', heading: 'Bloqueio que recarrega sua entrada', facts: ['O bloqueio reduz o dano recebido e usa uma barra de energia especial; resistir a dano acelera a recarga de Daywalker Dash.', 'Ao iniciar a guarda, Blade recebe Unstoppable por uma janela muito breve: use para atravessar o primeiro controle, não para ficar parado encarando a equipe.', 'Hunter\'s Shotgun aplica 40% de redução de cura por 3,5s; isso transforma um bloqueio bem-timado em oportunidade de negar a recuperação do alvo.'] },
  ],
  roleGuides: {
    duelist: {
      key: 'duelist', label: 'Duelista', nickname: 'The Daywalker', health: '350 HP', difficulty: 'Alta: alternância de armas e gerenciamento de cargas',
      job: 'Entrar por ângulo, negar cura com a shotgun, trocar para espada para sustentar o duelo e sair com Daywalker Dash antes de perder o estado awakened.',
      verdict: 'Escolha Blade contra retaguardas dependentes de cura e composições que precisam atravessar corredores estreitos. Evite iniciar em campo aberto contra poke de longo alcance sem uma rota de cobertura.',
      playstyle: ['Comece pelo ângulo, não pelo centro: aproxime-se com a espada pronta, guarde uma carga de Daywalker Dash ([key:Shift]) e force o suporte a recuar.', 'Quando o alvo tentar ser curado, troque para Hunter\'s Shotgun ([key:RMB]) e aplique a redução de cura; em seguida volte à espada para manter Bloodline Awakening ativo.', 'Use Scarlet Shroud ([key:E]) para absorver o primeiro impacto e recarregar a ferramenta de entrada. Se o bloqueio não criou uma eliminação, use a segunda carga para sair, não para insistir.'],
      priorityKicker: 'Sequência de luta', priorityTitle: 'O que apertar primeiro', priorityDescription: 'A prioridade é criar uma janela de cura reduzida, converter os acertos em velocidade e preservar uma saída.',
      upgradePlan: [
        { rank: 1, input: 'LMB', ability: 'Ancestral Sword', label: 'Construa Bloodline Awakening', why: 'É a arma que alimenta a velocidade de ataque e o giro a cada 5 acertos. Use-a para começar o duelo quando o alvo não estiver recebendo cura.', swapWhen: 'Troque para Hunter\'s Shotgun ([key:RMB]) assim que a cura chegar ou quando o alvo sair do alcance da espada.', sourceIds: ['wiki-blade', 'official-blade'] },
        { rank: 2, input: 'RMB', ability: 'Hunter\'s Shotgun', label: 'Anti-cura para fechar a eliminação', why: 'Atinge de perto, aplica slow por 1s e reduz a cura recebida em 40% por 3,5s. O valor está no momento, não no spam.', swapWhen: 'Volte à espada quando o alvo estiver sem cura ou quando a carga awakened estiver prestes a cair.', sourceIds: ['wiki-blade', 'official-blade'] },
        { rank: 3, input: 'E', ability: 'Scarlet Shroud', label: 'Bloqueio que devolve mobilidade', why: 'Reduz dano, concede Unstoppable no início e acelera Daywalker Dash ao resistir a dano.', swapWhen: 'Não segure a guarda até zerar a energia: use a janela inicial para atravessar o golpe e imediatamente reposicione.', sourceIds: ['wiki-blade', 'official-blade'] },
        { rank: 4, input: 'Shift', ability: 'Daywalker Dash', label: 'Escolha a versão conforme o alvo', why: 'Tem 2 cargas e 9s de recarga. Com arma, aplica redução de cura; com espada, causa o golpe giratório e slow.', swapWhen: 'Guarde uma carga para a fuga quando a equipe inimiga ainda tiver controle disponível.', sourceIds: ['wiki-blade', 'official-blade'] },
        { rank: 5, input: 'Q', ability: 'Thousand-Fold Slash', label: 'Ultimate para separar e finalizar', why: 'O dash causa 100 e o ciclone 225 por segundo, com redução de cura de 20% por 4s. Carregue apenas o necessário: o máximo leva 3s.', swapWhen: 'Use cedo para quebrar a formação se o objetivo estiver agrupado; não espere o alvo ficar com pouca vida e perder a janela.', sourceIds: ['wiki-blade', 'official-blade'] },
      ],
      adaptations: ['Contra Strategists de cura forte, abra com shotgun e mantenha a redução de cura antes de gastar a ultimate.', 'Contra atiradores, avance de cobertura em cobertura e use Scarlet Shroud para atravessar o primeiro disparo; não faça Daywalker Dash em linha reta sem saída.', 'Contra duelistas de dive, preserve uma carga de Dash e use a espada para slowar a perseguição antes de recuar.', 'Com Moon Knight, Blade of Khonshu ganha valor em flanco; sincronizem o Team-Up no mesmo alvo, não em dois alvos separados.'],
      ultimates: [{ stance: 'Ciclone de execução', name: 'Thousand-Fold Slash', bestUse: 'Agrupe ou divida a retaguarda no objetivo, especialmente quando o inimigo já gastou mobilidade.', execution: 'Carregue [key:Q] apenas até alcançar o alvo e lance o dash. O ciclone dura 2s; mantenha o inimigo dentro dele e aproveite a redução de cura de 20% por 4s.', upgradeValue: 'O dano do ciclone chega a 225 por segundo e o dash causa 100. A ultimate também pode ser uma saída: atravesse o grupo, cause dano e termine atrás de cobertura.' }],
      dashGuide: { ability: 'Daywalker Dash ([key:Shift])', shortRule: 'Uma carga entra, a segunda garante que você não morra depois da eliminação.', mechanics: ['A habilidade armazena 2 cargas e tem 9s de recarga.', 'Com a arma, o acerto aplica slow e redução de cura; com a espada, o segundo golpe causa dano em vários hits e aplica redução de cura.', 'Scarlet Shroud acelera a recarga quando bloqueia dano: use a guarda antes do Dash, não depois de já estar preso.'], drills: ['Treine alternar [key:LMB] e [key:RMB] em um alvo que recebe cura: espada para acelerar, shotgun no momento da cura.', 'Treine guardar uma carga de [key:Shift] após cada entrada e sair assim que o estado awakened cair.', 'Treine carregar [key:Q] por tempos diferentes para não ficar parado por 3s diante de uma equipe alerta.'] },
      patterns: [{ title: 'Anti-cura e duelo', steps: ['Entre por cobertura com Ancestral Sword ([key:LMB]).', 'Acerte o alvo e construa Bloodline Awakening.', 'Troque para Hunter\'s Shotgun ([key:RMB]) quando a cura começar.', 'Finalize com a espada ou Daywalker Dash ([key:Shift]) e guarde a segunda carga para sair.'] }, { title: 'Bloqueio de contra-ataque', steps: ['Inicie Scarlet Shroud ([key:E]) no primeiro controle.', 'Use a recarga acelerada para recuperar Daywalker Dash.', 'Aplique o slow da espada no alvo que tentou escapar.', 'Se a equipe inimiga virar, use a carga restante para reposicionar.'] }, { title: 'Ciclone no objetivo', steps: ['Espere o inimigo gastar a mobilidade principal.', 'Carregue Thousand-Fold Slash ([key:Q]) pelo mínimo necessário.', 'Atravesse o grupo com o dash e mantenha o ciclone no cluster.', 'Aplique shotgun ao sobrevivente para impedir a recuperação.'] }],
      mistakes: ['Ficar no modo espada enquanto o suporte cura o alvo: use a shotgun para negar a janela.', 'Gastar as duas cargas de Daywalker Dash para entrar e morrer sem rota de saída.', 'Ativar Bloodline Awakening sem um alvo acessível: a velocidade cai rapidamente quando os golpes param.', 'Segurar Scarlet Shroud até acabar a energia em vez de usar a breve janela de Unstoppable para atravessar controle.'],
      evidence: ['wiki-blade', 'official-blade', 'beebom-blade', 'reddit-blade'],
      abilityLoop: ['Ancestral Sword', 'Hunter\'s Shotgun', 'Scarlet Shroud', 'Daywalker Dash', 'Thousand-Fold Slash'],
    },
  },
  sources: [
    { id: 'wiki-blade', kind: 'database', title: 'Blade — The Marvel Rivals Wiki (wiki.gg)', url: 'https://marvelrivals.wiki.gg/wiki/Blade', published: '2026-09', confidence: 'alta', takeaways: ['Confirma Duelist, 350 HP, nomes das habilidades, dano, duração, cargas e recargas.', 'Registra Bloodline Awakening, lifesteal, redução de cura e restrição de shotgun.'] },
    { id: 'official-blade', kind: 'official', title: 'Blade — Marvel Rivals oficial', url: 'https://www.marvelrivals.com/heroes?id=4bb813d7-30ab-4c36-bd05-b9d299e4c1e3', published: '2026-09', confidence: 'alta', takeaways: ['Ficha oficial confirma o herói e a função de Duelista.', 'Valores de combate foram cruzados com a tabela oficial renderizada.'] },
    { id: 'official-teamups', kind: 'official', title: 'Team-Up — Marvel Rivals oficial', url: 'https://www.marvelrivals.com/heroes/teamup.html', published: '2026-09', confidence: 'alta', takeaways: ['Bundle oficial confirma Blade of Khonshu e Bleed for Battle e os assets correspondentes.', 'A página é a fonte canônica de nomes, parceiros, teclas e efeito base/aprimorado.'] },
    { id: 'gamelevate-teamups-blade', kind: 'guide', title: 'Best Team-Ups for Every Hero — Gamelevate', url: 'https://gamelevate.com/best-team-ups-for-every-hero-in-marvel-rivals/', published: '2026-09', confidence: 'media', takeaways: ['Usado para comparar recomendação de Team-Up por composição e parceiro.'] },
    { id: 'batru-blade', kind: 'guide', title: 'Blade synergy — Batru', url: 'https://batru.gg/marvel-rivals/meta/synergy/blade', published: '2026-09', confidence: 'media', takeaways: ['Base de win rate de dupla consultada; a medição mistura força individual e composição, então não é prova isolada de melhor opção.'] },
    { id: 'season10-balance', kind: 'official', title: 'Marvel Rivals — Balance post Season 10', url: 'https://www.marvelrivals.com/news/', published: '2026-09', confidence: 'media', takeaways: ['Consultado para verificar se os Team-Ups de Blade tiveram ajuste na temporada atual.'] },
    { id: 'beebom-blade', kind: 'guide', title: 'Marvel Rivals tier list Season 9.5 — Beebom', url: 'https://beebom.com/marvel-rivals-tier-list/', published: '2026-08', confidence: 'media', takeaways: ['Recomenda Blade para pressionar alvos e aponta composições e counters; usado apenas para posicionamento e matchup.'] },
    { id: 'reddit-blade', kind: 'forum', title: 'r/BladeRivalsMains — comunidade', url: 'https://www.reddit.com/r/BladeRivalsMains/', published: '2026-09', confidence: 'media', takeaways: ['Snippets da comunidade reforçam aprender uma habilidade por vez, rever posicionamento e não perseguir eliminações sem rota de saída.'] },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Site Oficial & Patch Notes', count: 3, status: 'Ficha oficial, Team-Up e notícias da Temporada 10 consultados.' },
    { kind: 'database', label: 'Wiki & Base Pública', count: 1, status: 'wiki.gg consultada para números e mecânicas.' },
    { kind: 'guide', label: 'Guias Especializados', count: 3, status: 'Beebom, Gamelevate e Batru consultados para decisão e contexto.' },
    { kind: 'forum', label: 'Comunidade & Fóruns', count: 1, status: 'Snippets de r/BladeRivalsMains consultados.' },
    { kind: 'video-transcript', label: 'Vídeos & Transcrições', count: 0, status: 'Pendente; não foram usados números de vídeo.' },
  ],
}
