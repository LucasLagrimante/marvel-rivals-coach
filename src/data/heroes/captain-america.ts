import type { HeroGuide } from '../../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const captainAmerica: HeroGuide = {
  id: 'captain-america',
  name: 'Captain America',
  aliases: ['Cap', 'Steve Rogers'],
  game: 'Marvel Rivals',
  portraitUrl: publicAsset('heroes/banners/captain_america.png'),
  bannerUrl: publicAsset('heroes/banners/captain_america.png'),
  selectionPortraitUrl: publicAsset('heroes/select/captain_america.png'),
  selectionHoverUrl: publicAsset('heroes/select/captain_america_champion.gif'),
  selectionHoverFit: { scale: 1.42, x: 0, y: -13 },
  theme: { primary: '#3c75bc', primaryRgb: '60, 117, 188', secondary: '#d9b44a', secondaryRgb: '217, 180, 74', surface: '#0b1728', surfaceRgb: '11, 23, 40' },
  roles: ['vanguard'],
  lastVerified: '2026-09-24',
  confidenceSummary: 'Role, vida, controles e nomes do kit conferidos na página oficial; mecânicas práticas cruzadas com wiki.gg e guia escrito. A página oficial expõe os dois Team-Ups atuais, mas não todos os números de efeito; esses detalhes ficam pendentes quando não há confirmação.',
  coreRead: [
    'Escudo é rota, não bunker: use Leading Dash para atravessar a linha de frente e chegar ao estrategista; a vitória vem de separar o alvo, não de trocar dano parado.',
    'Sentinel Strike ganha valor ao ricochetear: ataque uma parede ou deployable para entrar na fase de arremesso e faça o escudo rastrear alvos móveis.',
    'Freedom Charge transforma avanço em tempo para o time: atravesse os aliados, use Living Legend e Leading Dash para lançar inimigos e force a luta enquanto eles perdem espaço.',
  ],
  teamUps: {
    summary: 'Stars Aligned é a escolha de pressão com Winter Soldier; Voltaic Union serve quando Thor ou Storm já compõem a linha de frente. A recomendação depende da dupla real, não só do nome do Team-Up.',
    recommended: 'Stars Aligned',
    recommendedReason: 'A página oficial e a nota de balance confirmam Captain America + Winter Soldier e o bônus do âncora; a medição pública de sinergia não foi localizada de forma específica para os dois loadouts na sessão.',
    options: [
      { name: 'Stars Aligned', partner: 'Winter Soldier', partnerRole: 'Duelista', input: 'C - Team-Up', baseEffect: 'Captain America recebe o efeito base publicado para Stars Aligned.', enhancedEffect: 'Com Winter Soldier, o efeito aprimorado é ativado automaticamente. O texto numérico completo do bundle atual requer confirmação.', bestFor: 'Pressionar backline com um parceiro que converte o espaço criado em eliminações.', easySetup: 'Winter Soldier no time; o efeito base já funciona sem ele.', iconUrl: publicAsset('teamups/captain-america-savage-slam-icon.png'), partnerPortraitUrl: publicAsset('teamups/captain-america-savage-slam-partner.png') },
      { name: 'Voltaic Union', partner: 'Thor / Storm', partnerRole: 'Vanguarda / Duelista', input: 'C - Team-Up', baseEffect: 'Captain America recebe o efeito base publicado para Voltaic Union.', enhancedEffect: 'Com Thor ou Storm, o efeito aprimorado é ativado automaticamente. O texto numérico completo do bundle atual requer confirmação.', bestFor: 'Composições que querem iniciar em conjunto e manter pressão em objetivo.', easySetup: 'Thor ou Storm no time; sem parceiro, use apenas o efeito base.', iconUrl: publicAsset('teamups/captain-america-voltaic-union-icon.png'), partnerPortraitUrl: publicAsset('teamups/captain-america-voltaic-union-partner.png') },
    ],
    sourceIds: ['official-teamups', 'gamelevate-teamups', 'batru-captain-america', 'season10-balance'],
  },
  systems: [
    { name: 'Regenerative Shield', input: 'Passiva', heading: 'Bloqueie só o que compra entrada', facts: ['A ficha oficial lista 300 HP e 300 de escudo regenerativo.', 'Girar o escudo para a ameaça certa preserva o recurso; não fique imóvel absorvendo dano enquanto o time não ganha espaço.', 'Depois de atravessar a linha inimiga, vire o corpo para cobrir o aliado que acompanha a entrada.'] },
    { name: 'Sentinel Strike', input: 'LMB', facts: ['Atingir deployables ou paredes pode levar ao estágio de arremesso; a comunidade documenta o uso contra paredes de Groot e clones de Loki.', 'O arremesso rastreia o inimigo: reserve-o para alvos móveis, não gaste em quem já está parado na sua frente.'] },
  ],
  roleGuides: {
    vanguard: {
      key: 'vanguard', label: 'Vanguarda', nickname: 'O Primeiro Vingador', health: '300 HP + 300 de escudo regenerativo', difficulty: 'Média: exige leitura de rota e disciplina para não gastar os dois avanços',
      job: 'Criar uma rota segura até o backline, expulsar o alvo-chave e voltar com vida suficiente para contestar o objetivo.',
      verdict: 'Escolha Captain America quando seu time consegue acompanhar uma entrada rápida. Evite mergulhar sozinho em cinco inimigos: ele aguenta o ponto, mas não sustenta 1 contra muitos sem ajuda.',
      playstyle: ['Comece com escudo voltado para a maior fonte de dano, atravesse o primeiro choke com Leading Dash ([key:Shift]) e só então procure o estrategista. A linha de frente é obstáculo, não destino.', 'Use Liberty Rush ([key:F]) para entrar e sair da mesma luta: se o alvo perdeu cobertura, mantenha pressão; se o apoio inimigo virou em você, recue pelo caminho já protegido.', 'Guarde Vibranium Energy Saw ([key:E]) para confirmar dano depois que o alvo gastar mobilidade. A ameaça do arremesso vale mais quando o inimigo não pode simplesmente escapar.'],
      priorityKicker: 'Decisão', priorityTitle: 'Ordem de execução', priorityDescription: 'Priorize a ferramenta que abre a rota, depois o controle que converte a chegada em eliminação.',
      upgradePlan: [
        { rank: 1, input: 'Shift', ability: 'Leading Dash', label: 'Abrir a rota', why: 'O dash decide se você chega ao backline com escudo e posição ou fica preso na frente. Use atravessando o ângulo, não em linha reta para o centro do inimigo.', swapWhen: 'Se a equipe não acompanha, guarde-o para sair e aguarde a próxima janela.', sourceIds: ['official-cap', 'wiki-cap'] },
        { rank: 2, input: 'E', ability: 'Vibranium Energy Saw', label: 'Confirmar controle', why: 'Converta o alvo isolado antes que o suporte consiga estabilizar a luta. Não use o arremesso em um tank cheio só para causar dano.', swapWhen: 'Contra dive, mantenha-o para interromper a entrada no aliado.', sourceIds: ['official-cap', 'wiki-cap'] },
        { rank: 3, input: 'F', ability: 'Liberty Rush', label: 'Segundo avanço', why: 'O segundo movimento cria a falsa escolha: seguir você para longe do time ou abandonar o objetivo. Use lateralmente para cortar a fuga.', swapWhen: 'Se você é o último vivo na área, use para voltar ao seu suporte.', sourceIds: ['official-cap', 'wiki-cap'] },
        { rank: 4, input: 'LMB', ability: 'Sentinel Strike', label: 'Arremesso e pressão', why: 'O ataque troca de função conforme a distância: bata em parede/deployable para habilitar o arremesso e rastrear um alvo veloz.', swapWhen: 'Em curta distância, use golpes básicos para não desperdiçar o arremesso rastreador.', sourceIds: ['rivals-tips-cap'] },
        { rank: 5, input: 'Q', ability: 'Freedom Charge', label: 'Janela de avanço coletivo', why: 'A ultimate dá vida bônus, velocidade e aceleração de ultimate aos aliados no caminho; é uma ferramenta de início do time, não só um botão de sobrevivência.', swapWhen: 'Use defensivamente quando o objetivo exige apenas alguns segundos de contestação.', sourceIds: ['official-cap', 'wiki-cap'] },
      ],
      adaptations: ['Contra Devil Dinosaur ou Wolverine, não prolongue o duelo: use a mobilidade para mudar o ângulo e peça foco do time.', 'Contra suportes isolados, atravesse a vanguarda com [key:Shift], pressione [key:E] e retorne antes de perder o escudo.', 'Em payload, mantenha o corpo entre o alvo e a rota; em ponto aberto, use a borda para transformar o escudo em cobertura e negar visão.'],
      ultimates: [{ stance: 'Avanço coletivo', name: 'Freedom Charge', bestUse: 'Iniciar uma luta com pelo menos dois aliados na rota ou salvar uma contestação decisiva.', execution: 'Pressione [key:Q] apontando a rota de entrada e atravesse o grupo. Use Living Legend e Leading Dash durante a carga para lançar inimigos e abrir a passagem.', upgradeValue: 'O bônus de vida, movimento e aceleração de ultimate é confirmado na ficha oficial; números detalhados do patch atual ficam pendentes.' }],
      dashGuide: { ability: 'Leading Dash → Vibranium Energy Saw → Liberty Rush', shortRule: 'Entre em diagonal, controle o alvo e deixe uma saída.', mechanics: ['[key:Shift] não é apenas dano: o valor é atravessar a primeira camada sem abandonar os aliados.', 'Não gaste [key:F] antes de saber como o alvo escapará; dois avanços ofensivos deixam Captain America sem ferramenta para sobreviver.', 'Durante [key:Q], Leading Dash e Living Legend podem lançar inimigos; use isso para separar o alvo da cura.'], drills: ['No treino, pratique entrar pela lateral de um bot, virar o escudo para a fonte de dano e sair pela mesma cobertura.', 'Ataque uma parede ou deployable, espere o estágio de arremesso e acerte um alvo móvel três vezes seguidas.', 'Use a ultimate com um aliado atrás de você: a métrica é chegar ao outro lado sem perder o aliado da rota.'] },
      patterns: [
        { title: 'Mergulho com retorno', steps: ['Espere o estrategista inimigo aparecer ou gastar mobilidade.', 'Entre com Leading Dash ([key:Shift]) pela diagonal protegida.', 'Converta com Vibranium Energy Saw ([key:E]) e pressione Sentinel Strike.', 'Use Liberty Rush ([key:F]) para retornar ao aliado, não para perseguir a kill para dentro do spawn.'] },
        { title: 'Contestação de objetivo', steps: ['Ative Freedom Charge ([key:Q]) quando dois aliados puderem seguir a rota.', 'Atravesse o ponto com o escudo virado para o dano principal.', 'Use Living Legend e Leading Dash para lançar quem bloqueia a passagem.', 'Pare de perseguir quando o objetivo estiver seguro: a próxima luta começa com sua vida, não com a kill extra.'] },
      ],
      mistakes: ['Ficar parado com o escudo levantado enquanto o time não ganha terreno.', 'Usar os dois avanços para entrar e morrer sem uma rota de retorno.', 'Gastar Sentinel Strike em um tank parado e depois não ter arremesso para um alvo veloz.', 'Usar Freedom Charge apenas para se salvar quando ela poderia mover o time inteiro pelo choke.'],
      evidence: ['official-cap', 'wiki-cap', 'rivals-tips-cap', 'official-teamups', 'gamelevate-teamups', 'batru-captain-america', 'season10-balance'],
      abilityLoop: [{ ability: 'Leading Dash', input: 'Shift' }, { ability: 'Vibranium Energy Saw', input: 'E' }, { ability: 'Sentinel Strike', input: 'LMB' }, { ability: 'Liberty Rush', input: 'F' }, 'Freedom Charge'],
    },
  },
  sources: [
    { id: 'official-cap', kind: 'official', title: 'Captain America — Marvel Rivals oficial', url: 'https://www.marvelrivals.com/heroes/index.html?id=b3e3bc0b-0a15-4fa8-8139-e08f7fcd9beb', published: '2026-09', confidence: 'alta', takeaways: ['Confirma VANGUARD, 300 HP + 300 de escudo regenerativo, velocidade 6 m/s e os nomes/controles do kit.', 'Lista Sentinel Strike, Freedom Charge, Leading Dash, Vibranium Energy Saw, Liberty Rush, Super-Soldier Slam e Living Legend.'] },
    { id: 'wiki-cap', kind: 'database', title: 'Captain America — Marvel Rivals Wiki', url: 'https://marvelrivals.wiki.gg/wiki/Captain_America', published: '2026', confidence: 'alta', takeaways: ['Fonte de conferência da mecânica detalhada do kit e dos valores; números não reproduzidos aqui sem confirmação pós-patch específica.'] },
    { id: 'rivals-tips-cap', kind: 'guide', title: 'Captain America — Rivals Tips', url: 'https://rivalstips.com/heroes/captain-america', published: '2026-07-05', confidence: 'alta', takeaways: ['Recomenda tratar Cap como dive, atravessar a frontline para pressionar suportes e usar Freedom Charge como ultimate de apoio.', 'Registra que Sentinel Strike pode atingir deployables para chegar ao estágio de arremesso e rastrear alvos velozes.'] },
    { id: 'official-teamups', kind: 'official', title: 'Team-Up — Marvel Rivals', url: 'https://www.marvelrivals.com/heroes/teamup.html', published: '2026-09', confidence: 'alta', takeaways: ['Bundle atual identifica Stars Aligned e Voltaic Union para Captain America; assets foram baixados do bundle oficial.'] },
    { id: 'gamelevate-teamups', kind: 'guide', title: 'Best Team-Ups for Every Hero — Gamelevate', url: 'https://gamelevate.com/best-team-ups-for-every-hero-in-marvel-rivals/', published: '2026', confidence: 'media', takeaways: ['Consultado para recomendação de Team-Up; não localizou recomendação específica verificável para Captain America nesta sessão.'] },
    { id: 'batru-captain-america', kind: 'database', title: 'Captain America synergy — Batru', url: 'https://batru.gg/marvel-rivals/meta/synergy/captain-america', published: '2026-09', confidence: 'pendente', takeaways: ['Página de win rate de dupla específica não retornou dados verificáveis na sessão; pendente, não inventar percentuais.'] },
    { id: 'season10-balance', kind: 'official', title: 'Season 10: Butcher’s Blasphemy — Dev Vision Vol. 21', url: 'https://www.marvelrivals.com/20260909/41525_1313397.html', published: '2026-09-09', confidence: 'alta', takeaways: ['Consultado para checar mudanças da temporada; a busca não expôs alteração específica do kit de Captain America nem texto completo dos dois Team-Ups.'] },
    { id: 'reddit-cap', kind: 'forum', title: 'Busca Reddit de mains de Captain America', url: 'https://www.reddit.com/r/CaptainAmericaMains/', published: '2026', confidence: 'pendente', takeaways: ['Acesso direto/snippets úteis não retornaram consenso auditável nesta sessão; fórum fica pendente.'] },
  ],
  sourceCoverage: [
    { kind: 'official', label: 'Oficial', count: 3, status: 'Página do herói, Team-Up e Dev Vision consultados.' },
    { kind: 'database', label: 'Wiki/Database', count: 2, status: 'wiki.gg e Batru registrados; Batru sem win rate verificável na sessão.' },
    { kind: 'guide', label: 'Guias', count: 2, status: 'Rivals Tips e Gamelevate consultados; guia de 2026 disponível.' },
    { kind: 'forum', label: 'Fórum/Comunidade', count: 1, status: 'Reddit registrado como pendente por falta de snippet auditável.' },
    { kind: 'video-transcript', label: 'Vídeos', count: 0, status: 'Pendente: nenhuma transcrição auditável usada.' },
  ],
}
