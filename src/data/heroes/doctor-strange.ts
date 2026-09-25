import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const doctorStrange: HeroGuide = {
  id: 'doctor-strange',
  name: 'Doctor Strange',
  aliases: ['Stephen Strange', 'Sorcerer Supreme'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/doctor_strange.png'),
  bannerUrl: publicAsset('heroes/banners/doctor_strange.png'),
  selectionPortraitUrl: publicAsset('heroes/select/doctor_strange.png'),
  selectionHoverUrl: publicAsset('heroes/select/doctor_strange_champion.gif'),
  selectionHoverFit: { scale: 1.45, x: 0, y: -15 },
  theme: { primary: '#7d4ac7', primaryRgb: '125, 74, 199', secondary: '#d6a7ff', secondaryRgb: '214, 167, 255', surface: '#130d20', surfaceRgb: '19, 13, 32' },
  roles: ['vanguard'],
  lastVerified: '2026-09-25',
  confidenceSummary: 'Nomes, controles, vida, escudo e valores numéricos foram cruzados entre a página oficial e wiki.gg; o guia de 2026 sustenta execução e combos. Win rates são contexto de bases públicas, não promessa de resultado.',
  coreRead: [
    'Price of Magic pune dano automático: descarregue Dark Magic com Maelstrom of Madness antes do anti-heal, em vez de continuar batendo no piloto automático.',
    'Shield of the Seraphim é uma janela, não uma casa: abaixe-o para recarregar e cancele a animação de reload com shield ou melee no timing certo.',
    'Pentagram of Farallah deixa o corpo vulnerável durante a colocação: escolha a saída antes da entrada e use portal para mudar ângulo, não só para atravessar choke.',
  ],
  teamUps: {
    summary: 'Gamma Maelstrom é o pick de pressão com Hulk; Psionic Vortex é a opção de controle e sustain com Invisible Woman. A escolha depende de quem realmente acompanha a entrada.',
    recommended: 'Psionic Vortex',
    recommendedReason: 'A página oficial descreve a versão base como Maelstrom que puxa inimigos e aumenta Shield of the Seraphim; com Invisible Woman, o dano converte em Bonus Health. Counterwatch mede Doctor Strange + Magik como 57,7%, mas isso é sinergia de dupla geral, não win rate isolado de Team-Up.',
    options: [
      { name: 'Gamma Maelstrom', partner: 'Hulk', partnerRole: 'Vanguarda', input: 'E', baseEffect: 'Upgrade Maelstrom of Madness para Gamma Maelstrom: aumenta drasticamente a taxa de carga de energia e remove a maldição de Anti-Heal.', enhancedEffect: 'Com Hulk, ao liberar Gamma Maelstrom parte da energia é mantida e a energia Gamma armazenada não decai.', bestFor: 'Lutas longas em que você precisa transformar Dark Magic em pressão sem ser punido pelo anti-heal.', easySetup: 'Hulk no time ativa o aprimoramento; sem Hulk, o efeito base já remove Anti-Heal.', iconUrl: publicAsset('teamups/doctor-strange-gamma-maelstrom-icon.png'), partnerPortraitUrl: publicAsset('teamups/doctor-strange-gamma-maelstrom-partner.png') },
      { name: 'Psionic Vortex', partner: 'Invisible Woman', partnerRole: 'Estrategista', input: 'E', baseEffect: 'Upgrade Maelstrom of Madness para Psionic Vortex: inimigos atingidos são lançados em direção a você e Shield of the Seraphim recebe valor aumentado.', enhancedEffect: 'Com Invisible Woman, o dano de Psionic Vortex concede Bonus Health proporcional a Doctor Strange.', bestFor: 'Composições que querem agrupar inimigos para a ultimate ou ganhar tempo no objetivo.', easySetup: 'Invisible Woman no time ativa o aprimoramento; a atração e o escudo melhorado já existem no efeito base.', iconUrl: publicAsset('teamups/doctor-strange-psionic-vortex-icon.png'), partnerPortraitUrl: publicAsset('teamups/doctor-strange-psionic-vortex-partner.png') },
    ],
    sourceIds: ['official-teamups', 'gamelevate-teamups', 'batru-doctor-strange', 'season10-balance'],
  },
  systems: [
    { name: 'Price of Magic', input: 'Passiva', heading: 'Dark Magic é uma dívida com prazo', facts: ['Cada acerto de Daggers of Denak gera 3,5 Dark Magic; cada inimigo atingido pelo melee gera 10.', 'O limite é 100. Se permanecer no máximo, o anti-heal ativa após 3s e dura 2s; Maelstrom of Madness limpa o recurso.', 'Melee em curta distância carrega o recurso muito mais rápido: use-o para preparar a descarga, mas não entre sem escudo.'], meter: [{ label: '0', value: 'Sem pressão' }, { label: '50', value: 'Boa descarga' }, { label: '100', value: 'Descarregue antes do anti-heal' }] },
    { name: 'Shield of the Seraphim', input: 'RMB', facts: ['O escudo tem 850 de valor máximo (1000 com Invisible Woman no time); a recuperação foi reduzida para 60/s no balance post de fevereiro de 2026.', 'Abaixar o escudo começa a recuperação: bloqueie a rajada que compra espaço e depois esconda-se por um instante para recarregar.', 'Não desperdice o escudo em dano que o time pode evitar; ele é sua moeda para atravessar o choke.'] },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard', label: 'Vanguarda', nickname: 'O Arquiteto do Choke', health: '650 HP', difficulty: 'Média: kit simples de usar, mas exige disciplina de escudo e recurso', job: 'Criar espaço com escudo e portais, separar alvos com Dark Magic e converter agrupamentos em uma ultimate decisiva.', verdict: 'Escolha Doctor Strange quando seu time consegue jogar atrás do escudo e aproveitar uma entrada agrupada. Evite prolongar poke com Dark Magic cheio: o anti-heal transforma sua própria pressão em risco.',
      playstyle: ['Comece com Daggers of Denak ([key:LMB]) para gerar Dark Magic de uma distância segura; aproxime-se só quando Shield of the Seraphim ([key:RMB]) comprar a travessia.', 'Use Cloak of Levitation ([key:Shift]) para subir, trocar o ângulo do escudo e escapar. Entrar voando é bom contra alvos aéreos; pousar sem rota de retorno é desperdício.', 'Depois de bloquear a primeira rajada, abaixe o escudo, use melee e Maelstrom of Madness ([key:E]) para descarregar; volte a levantar o escudo apenas quando a próxima ameaça aparecer.'],
      priorityKicker: 'Decisão', priorityTitle: 'Ordem de execução', priorityDescription: 'Primeiro preserve a rota, depois controle o recurso e só então transforme a abertura em eliminação.',
      upgradePlan: [
        { rank: 1, input: 'RMB', ability: 'Shield of the Seraphim', label: 'Comprar passagem', why: 'O escudo determina quanto tempo você consegue ocupar a frente sem pedir cura. Use-o em pulsos contra dano relevante, não como botão permanente.', swapWhen: 'Contra poke baixo, abaixe mais cedo para acelerar a recuperação.', sourceIds: ['official-strange', 'wiki-strange'] },
        { rank: 2, input: 'E', ability: 'Maelstrom of Madness', label: 'Limpar a dívida', why: 'A descarga remove Dark Magic e evita o anti-heal. O dano cresce com o recurso, mas uma descarga segura vale mais que esperar o máximo sob fogo.', swapWhen: 'Com Gamma Maelstrom, você pode segurar mais quando a luta ainda não começou.', sourceIds: ['official-strange', 'wiki-strange'] },
        { rank: 3, input: 'F', ability: 'Pentagram of Farallah', label: 'Mudar o choke', why: 'O portal cria uma nova linha de ataque para aliados e projéteis. Posicione a saída antes de revelar a entrada ao inimigo.', swapWhen: 'Sem ultimate ou follow-up, use-o apenas para atravessar uma área impossível.', sourceIds: ['official-strange', 'guide-gamesgg'] },
        { rank: 4, input: 'Shift', ability: 'Cloak of Levitation', label: 'Reposicionar', why: 'A elevação permite escapar, perseguir alvo aéreo ou manter visão sobre o escudo. Não gaste a fuga antes do controle inimigo aparecer.', swapWhen: 'Contra dive, guarde para sair do alcance de corpo a corpo.', sourceIds: ['official-strange', 'guide-ign'] },
        { rank: 5, input: 'Q', ability: 'Eye of Agamotto', label: 'Separar almas', why: 'A ultimate cria almas separadas e transfere dano para os corpos. Use após agrupar ou quando o inimigo gastou mobilidade; não a descarregue em um alvo impossível de alcançar.', swapWhen: 'Use cedo para negar uma ultimate inimiga decisiva, mesmo sem cinco almas.', sourceIds: ['official-strange', 'wiki-strange'] },
      ],
      adaptations: ['Contra The Hood, The Thing ou Magik, não permaneça isolado: Counterwatch aponta esses duelos como ameaças e sua saída precisa estar pronta antes do engage.', 'Contra Iron Man ou Storm, use Cloak of Levitation para tirar o duelo do eixo vertical e force-os a atravessar seu escudo.', 'Em objetivo fechado, prefira Psionic Vortex para puxar inimigos; em luta longa e com Hulk, Gamma Maelstrom reduz a punição do anti-heal.'],
      ultimates: [{ stance: 'Separação', name: 'Eye of Agamotto', bestUse: 'Prender dois ou mais inimigos agrupados, ou interromper uma ultimate que depende de habilidades.', execution: 'Aproxime-se atrás do escudo, pressione [key:Q] no centro da luta e foque as almas expostas com o time. Não abandone o raio para perseguir um alvo distante.', upgradeValue: 'A ficha oficial confirma 60 de dano, raio de 10 m e separação por 3s; dano nas almas é transferido aos corpos.', }],
      dashGuide: { ability: 'Portal → Shield → Maelstrom', shortRule: 'Abra uma rota, bloqueie a resposta e descarregue antes do anti-heal.', mechanics: ['Durante Pentagram of Farallah ([key:F]), seu corpo permanece vulnerável no ponto inicial: faça a colocação atrás de cobertura.', 'O reload de Daggers of Denak pode ser encurtado ao usar shield ou melee pouco depois da metade da animação; treine o timing.', 'Dark Magic não é dano grátis: quando chegar perto do limite, pare de gerar recurso e procure uma descarga segura.'], drills: ['No treino, pratique reload e cancel com [key:RMB] até recuperar as 8 munições sem deixar a animação terminar.', 'Crie um portal com entrada protegida e saída lateral; atravesse com dois aliados sem deixar o time dividido.', 'Carregue Dark Magic com daggers, aproxime-se com escudo e descarregue em seguida sem passar do anti-heal.'] },
      patterns: [
        { title: 'Entrada pelo portal', steps: ['Escolha uma saída lateral protegida para o time.', 'Abra Pentagram of Farallah ([key:F]) e atravesse com Shield of the Seraphim ([key:RMB]).', 'Gere Dark Magic com Daggers of Denak ([key:LMB]) e melee.', 'Use Maelstrom of Madness ([key:E]) antes do anti-heal e recue pelo portal se o suporte perder visão.'] },
        { title: 'Almas no choke', steps: ['Espere o inimigo gastar mobilidade ou agrupe-o com Psionic Vortex.', 'Aproxime-se atrás do escudo e use Eye of Agamotto ([key:Q]).', 'Foque as almas expostas com daggers e a descarga de Dark Magic.', 'Baixe o escudo depois da rajada para iniciar a recuperação, em vez de ficar parado no dano restante.'] },
      ],
      mistakes: ['Manter Dark Magic no máximo até receber anti-heal.', 'Colocar portais com o corpo exposto ou sem planejar a saída.', 'Segurar Shield of the Seraphim enquanto ele não bloqueia nada e atrasar a própria recuperação.', 'Usar Cloak of Levitation para entrar e ficar sem mobilidade para recuar.', 'Ativar Eye of Agamotto sem aliado com linha de tiro nas almas.'],
      evidence: ['official-strange', 'wiki-strange', 'guide-gamesgg', 'guide-ign', 'community-strange', 'official-teamups', 'gamelevate-teamups', 'batru-doctor-strange', 'season10-balance', 'balance-20260710'],
      abilityLoop: [{ ability: 'Shield of the Seraphim', input: 'RMB' }, { ability: 'Daggers of Denak', input: 'LMB' }, { ability: 'Maelstrom of Madness', input: 'E' }, { ability: 'Pentagram of Farallah', input: 'F' }, 'Eye of Agamotto'],
    },
  },
  sources: [
    { id: 'official-strange', kind: 'official', title: 'Doctor Strange — Marvel Rivals oficial', url: 'https://www.marvelrivals.com/20241123/41360_1195649.html', published: '2024-11-23', confidence: 'alta', takeaways: ['Confirma VANGUARD, Price of Magic, nomes do kit e Team-Ups atuais; informa 60 de dano no Eye, raio de 10 m e separação por 3s. Alguns números da ficha antiga estão defasados — vida e escudo foram atualizados pelos balance posts (ver balance-20260710).'] },
    { id: 'wiki-strange', kind: 'database', title: 'Doctor Strange — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Doctor_Strange', published: '2026', confidence: 'alta', takeaways: ['Detalha Dark Magic, 3,5 por dagger, 10 por melee, limite 100, Maelstrom até 130 e escudo/portal.'] },
    { id: 'guide-gamesgg', kind: 'guide', title: 'Doctor Strange Guide: Abilities, Tips & Combos — Games.GG', url: 'https://games.gg/marvel-rivals/guides/doctor-strange-marvel-rivals', published: '2026-06-06', confidence: 'media', takeaways: ['Recomenda o ciclo Dark Magic → Maelstrom e descreve o combo de curta distância; seus números de guia divergem das fontes primárias e não foram usados como valores.'] },
    { id: 'guide-ign', kind: 'guide', title: 'Doctor Strange — IGN', url: 'https://www.ign.com/wikis/marvel-rivals/Doctor_Strange', published: '2026', confidence: 'media', takeaways: ['Confirma controles e a função do portal, escudo e ultimate; seus valores (600 de vida, escudo de 800) estão defasados e não foram usados como número — prevalecem a página oficial e o balance post.'] },
    { id: 'community-strange', kind: 'forum', title: 'Busca Reddit de mains de Doctor Strange', url: 'https://www.reddit.com/r/DoctorStrangeMains/', published: '2026', confidence: 'pendente', takeaways: ['Snippets do Reddit não retornaram consenso auditável nesta sessão; fórum registrado como pendente, sem transformar ausência em fato.'] },
    { id: 'official-teamups', kind: 'official', title: 'Team-Up — Marvel Rivals', url: 'https://www.marvelrivals.com/heroes/teamup.html', published: '2026-09', confidence: 'alta', takeaways: ['Bundle atual identificado pelo script oficial: Gamma Maelstrom e Psionic Vortex, com assets locais baixados.'] },
    { id: 'gamelevate-teamups', kind: 'guide', title: 'Best Team-Ups for Every Hero — Gamelevate', url: 'https://gamelevate.com/best-team-ups-for-every-hero-in-marvel-rivals/', published: '2026', confidence: 'media', takeaways: ['Consultado para recomendação de Team-Up; a recomendação específica para os dois loadouts não ficou exposta de forma verificável no snippet.'] },
    { id: 'batru-doctor-strange', kind: 'database', title: 'Doctor Strange synergy — Batru', url: 'https://batru.gg/marvel-rivals/meta/synergy/doctor-strange', published: '2026-09', confidence: 'pendente', takeaways: ['Página específica consultada; win rate de dupla não foi exposto de forma verificável. Não inventar percentual.'] },
    { id: 'season10-balance', kind: 'official', title: 'Version 20260213 Balance Post — Marvel Rivals', url: 'https://www.marvelrivals.com/balancepost/20260209/41667_1286166.html', published: '2026-02-09', confidence: 'alta', takeaways: ['Confirma a redução da recuperação do Shield of the Seraphim de 70/s para 60/s e registra a chegada do Team-Up Psionic Mayhem na temporada.'] },
    { id: 'balance-20260710', kind: 'official', title: 'Version 20260710 Balance Post — Marvel Rivals', url: 'https://www.marvelrivals.com/20260706/41525_1306647.html', published: '2026-07-06', confidence: 'alta', takeaways: ['Aumenta a vida base de Doctor Strange de 575 para 650 e o escudo de Shield of the Seraphim de 700 para 850 (+150 com Invisible Woman = 1000); remove o Team-Up Anchor de 100 de vida bônus. É a fonte atual dos números de vida/escudo usados no guia.'] },
    { id: 'counterwatch-strange', kind: 'database', title: 'Doctor Strange Counters & Win Rate — Counterwatch', url: 'https://www.counterwatch.gg/stats/marvel-rivals/heroes/doctor-strange', published: '2026-09', confidence: 'media', takeaways: ['Mede Doctor Strange + Magik em 57,7% e lista ameaças de matchup; são dados comunitários agregados, não efeito oficial de Team-Up.'] },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 4, status: 'Página do herói, Team-Up e balance posts (fev e jul/2026) consultados.' },
    { kind: 'database', label: 'Wiki/Database', count: 3, status: 'wiki.gg, Batru e Counterwatch; Batru sem win rate verificável.' },
    { kind: 'guide', label: 'Guias', count: 3, status: 'Games.GG, IGN e Gamelevate consultados; guia de 2026 usado para execução.' },
    { kind: 'forum', label: 'Fórum/Comunidade', count: 1, status: 'Reddit registrado como pendente por falta de snippet auditável.' },
    { kind: 'video-transcript', label: 'Vídeos', count: 0, status: 'Pendente: nenhuma transcrição auditável usada.' },
  ],
}
