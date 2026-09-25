export type RumorStatus = 'aguardando-definicao' | 'validado' | 'descartado'

export type RumorConfidence = 'alta' | 'media' | 'baixa'

export interface RumorLink {
  label: string
  url: string
}

export interface Rumor {
  id: string
  title: string
  summary: string
  status: RumorStatus
  confidence: RumorConfidence
  links: RumorLink[]
  source: string
  updatedAt: string
  speculation: string
}

// Candidatos reais levantados em .rumor-research/rumores-2026-09-24.md.
// Nada aqui é dado de jogo confirmado: sem kit, números, role ou data.
export const rumors: Rumor[] = [
  {
    id: 'gorr',
    title: 'Gorr',
    summary: 'O personagem entrou no roster oficial da Season 10 e já possui manual publicado no app.',
    status: 'validado',
    confidence: 'alta',
    links: [
      { label: 'Marvel Rivals — página oficial de Gorr', url: 'https://www.marvelrivals.com/heroes/index.html?id=3cd78727-99d9-41a9-ab1c-0dc5e80451c0' },
      { label: 'MarvelRivals.gg — roadmap da Season 10', url: 'https://marvelrivals.gg/season-10-roadmap' },
      { label: 'MarvelRivals.gg — Gorr Leaks', url: 'https://marvelrivals.gg/gorr-leaks' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Rumor encerrado como confirmado: a página oficial lista Gorr como herói e o app tem manual em src/data/heroes/gorr.ts.',
  },
  {
    id: 'nightcrawler',
    title: 'Noturno (Nightcrawler)',
    summary: 'Permanece em listas de personagens vazados, mas não apareceu no roster oficial consultado nem recebeu confirmação da NetEase.',
    status: 'aguardando-definicao',
    confidence: 'media',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados (atualizado em 11/09/2026)', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — roadmap da Season 10', url: 'https://marvelrivals.gg/season-10-roadmap' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A fonte editorial registra mudança de expectativa sobre a Season 10, mas isso não é desmentido oficial. Sem kit, role ou data confirmados.',
  },
  {
    id: 'doctor-doom',
    title: 'Doutor Destino (Doctor Doom)',
    summary: 'Continua em listas de futuros personagens e em cobertura de leaks; não está no roster oficial consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Geeks + Gamers — leaks das Seasons 9–11', url: 'https://geeksandgamers.com/marvel-rivals-season-9-10-11-leaks-jubilee-nightcrawler-doctor-doom-more-incoming' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A associação com a Season 11 e com Avengers: Doomsday é especulação de cobertura, não anúncio oficial. Sem kit, role ou data confirmados.',
  },
  {
    id: 'captain-marvel',
    title: 'Capitã Marvel (Captain Marvel)',
    summary: 'Permanece em listas de personagens potencialmente futuros, sem confirmação oficial nem presença no roster consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'Khel Now — heróis vazados', url: 'https://khelnow.com/gaming/marvel-rivals-all-leaked-heroes-villains-expected-release-202606' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Rumor de lista, sem evidência primária de lançamento. Não registrar role, kit ou janela como fato.',
  },
  {
    id: 'professor-x',
    title: 'Professor X',
    summary: 'Citado em listas de vazamento e discussões comunitárias, mas não confirmado nem listado como jogável no roster oficial consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Reddit — personagens de 2026', url: 'https://www.reddit.com/r/marvelrivals/comments/1q37czp/which_characters_will_be_added_during_2026' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Evidência de lista e conversa comunitária; nenhuma confirmação oficial localizada.',
  },
  {
    id: 'green-goblin',
    title: 'Duende Verde (Green Goblin)',
    summary: 'Continua como rumor de leak; uma previsão anterior de chegada na Season 9 não ocorreu e não há confirmação oficial.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — Green Goblin Leaks', url: 'https://marvelrivals.gg/green-goblin' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A própria cobertura registra que a previsão para a Season 9 foi falsa; isso não prova descarte definitivo. Sem confirmação da NetEase.',
  },
  {
    id: 'amaranth',
    title: 'Amaranth',
    summary: 'Nome incluído em listas recentes de personagens encontrados em arquivos ou leaks, sem confirmação oficial de que será jogável.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A presença em lista de leak apenas indica circulação do nome; não há anúncio, roster oficial, kit, role ou data.',
  },
  {
    id: 'forge',
    title: 'Forge',
    summary: 'Nome presente em listas recentes de personagens vazados, sem anúncio oficial ou entrada no roster jogável.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Rumor de lista sem evidência primária pública verificável. Não inferir kit, role ou cronograma.',
  },
  {
    id: 'beast',
    title: 'Fera (Beast)',
    summary: 'Aparece em listas recentes de personagens vazados, mas não foi confirmado pela NetEase nem consta no roster oficial consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Nome recorrente em lista de leak, sem confirmação oficial. Não há base para registrar kit, role ou data.',
  },
  {
    id: 'armor',
    title: 'Armor',
    summary: 'Nome listado entre personagens encontrados em arquivos ou leaks, sem confirmação oficial nem presença no roster jogável consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A menção em lista de leaks é evidência de circulação do nome, não confirmação da NetEase. Sem kit, role ou data.',
  },
  {
    id: 'hive',
    title: 'Hive',
    summary: 'Nome listado entre personagens encontrados em arquivos ou leaks, sem confirmação oficial nem presença no roster jogável consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A menção em lista de leaks é evidência de circulação do nome, não confirmação da NetEase. Sem kit, role ou data.',
  },
  {
    id: 'dazzler',
    title: 'Dazzler',
    summary: 'Nome associado a falas encontradas em arquivos, sem confirmação oficial nem presença no roster jogável consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A referência a voice lines em uma lista de leaks não confirma produção, kit ou lançamento. Sem role ou data.',
  },
  {
    id: 'ant-man',
    title: 'Homem-Formiga (Ant-Man)',
    summary: 'Nome listado entre personagens encontrados em arquivos ou leaks, sem confirmação oficial nem presença no roster jogável consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A menção em lista de leaks é evidência de circulação do nome, não confirmação da NetEase. Sem kit, role ou data.',
  },
  {
    id: 'the-wasp',
    title: 'The Wasp',
    summary: 'Surge em levantamentos recentes de personagens futuros; sem anúncio oficial nem entrada no roster jogável consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Nome em lista de especulação; nada indica kit, role ou cronograma. Não tratar como produção confirmada.',
  },
  {
    id: 'colossus',
    title: 'Colossus',
    summary: 'Nome recorrente em listas de leaks de personagens, sem confirmação da NetEase nem presença no roster consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Circulação do nome sem evidência primária. Sem role, kit ou janela registráveis como fato.',
  },
  {
    id: 'sleepwalker',
    title: 'Sleepwalker',
    summary: 'Personagem obscuro citado em listas de futuros heróis; nenhuma confirmação oficial localizada.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A escolha de um personagem de nicho sugere lista editorial, não vazamento de arquivos. Sem confirmação.',
  },
  {
    id: 'juggernaut',
    title: 'Juggernaut',
    summary: 'Nome listado entre possíveis adições, sem anúncio oficial nem entrada no roster consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Presença em lista de leaks apenas indica circulação do nome. Sem kit, role ou data.',
  },
  {
    id: 'thanos',
    title: 'Thanos',
    summary: 'Citado em especulação de grande vilão para temporadas futuras, sem confirmação da NetEase.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Nome de peso que circula por expectativa da comunidade; nada oficial publicado. Sem role, kit ou data.',
  },
  {
    id: 'hit-monkey',
    title: 'Hit-Monkey',
    summary: 'Aparece em listas recentes de personagens futuros, sem anúncio oficial nem roster jogável confirmado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Menção em lista de leaks sem evidência primária. Não inferir role, kit ou cronograma.',
  },
  {
    id: 'modok',
    title: 'M.O.D.O.K',
    summary: 'Nome listado entre candidatos a personagens futuros; nenhuma confirmação oficial localizada.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Circulação do nome em listas; sem anúncio, kit, role ou data verificáveis.',
  },
  {
    id: 'quicksilver',
    title: 'Quicksilver',
    summary: 'Recorrente em listas de personagens vazados, mas ausente do roster oficial consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Nome recorrente sem confirmação da NetEase. Nada de kit, role ou janela como fato.',
  },
  {
    id: 'trapster',
    title: 'Paste Pot Pete/Trapster',
    summary: 'Nome citado em listas de leaks, sem confirmação oficial nem presença no roster consultado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A dupla nomenclatura vem da própria cobertura (nome de origem e codinome), não de anúncio oficial.',
  },
  {
    id: 'crystal',
    title: 'Crystal',
    summary: 'Aparece em levantamentos de personagens futuros; sem anúncio oficial nem entrada no roster.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Menção de lista sem evidência primária de lançamento. Não registrar role ou kit.',
  },
  {
    id: 'locus',
    title: 'Locus',
    summary: 'Nome pouco conhecido citado em listas de futuros heróis, sem confirmação da NetEase.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'A presença de um nome de nicho sugere lista editorial; nada indica produção oficial.',
  },
  {
    id: 'sprite',
    title: 'Jia Jing/Sprite',
    summary: 'Nome listado entre candidatos a personagens futuros, sem anúncio oficial localizado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Circulação do nome em listas; sem confirmação de kit, role ou data.',
  },
  {
    id: 'valkyrie',
    title: 'Valkyrie',
    summary: 'Recorrente em listas de personagens vazados, sem confirmação oficial nem roster confirmado.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Nome de lista de leaks sem evidência primária. Não inferir role, kit ou cronograma.',
  },
  {
    id: 'blue-marvel',
    title: 'Blue Marvel',
    summary: 'Aparece em levantamentos de futuros personagens, sem anúncio oficial nem entrada no roster.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Menção em lista sem confirmação da NetEase. Sem kit, role ou data registráveis.',
  },
  {
    id: 'ghost-rider',
    title: 'Ghost Rider',
    summary: 'Nome recorrente em especulação de personagens futuros; nenhuma confirmação oficial localizada.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Expectativa comunitária e listas de leaks; nada oficial. Não tratar como produção confirmada.',
  },
  {
    id: 'crescent',
    title: 'Crescent',
    summary: 'Nome citado em listas recentes de personagens futuros, sem confirmação oficial.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters/' },
    ],
    source: 'Levantamento de 25/09/2026',
    updatedAt: '25/09/2026',
    speculation: 'Circulação do nome em lista de leaks, sem evidência primária. Sem kit, role ou data.',
  },
]

export const rumorStatusLabel: Record<RumorStatus, string> = {
  'aguardando-definicao': 'Aguardando definição',
  validado: 'Validado',
  descartado: 'Descartado',
}

export const rumorConfidenceLabel: Record<RumorConfidence, string> = {
  alta: 'Confiança alta',
  media: 'Confiança média',
  baixa: 'Confiança baixa',
}
