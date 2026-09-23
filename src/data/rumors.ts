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

// Candidatos reais levantados em .rumor-research/rumores-2026-09-23.md.
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
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
    source: 'Levantamento de 23/09/2026',
    updatedAt: '23/09/2026',
    speculation: 'Nome recorrente em lista de leak, sem confirmação oficial. Não há base para registrar kit, role ou data.',
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
