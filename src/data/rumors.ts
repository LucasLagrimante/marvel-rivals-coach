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

// Candidatos reais levantados em .rumor-research/rumores-2026-09-21.md.
// Nada aqui é dado de jogo confirmado: sem kit, números, role ou data.
export const rumors: Rumor[] = [
  {
    id: 'gorr',
    title: 'Gorr',
    summary: 'Apontado por listas atribuídas ao dataminer X0X_LEAK como personagem da Season 10 — e virou herói jogável com manual publicado no app.',
    status: 'validado',
    confidence: 'alta',
    links: [
      { label: 'MarvelRivals.gg — Gorr Leaks', url: 'https://marvelrivals.gg/gorr-leaks' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Rumor concluído: o personagem entrou no jogo e ganhou manual próprio.',
  },
  {
    id: 'nightcrawler',
    title: 'Noturno (Nightcrawler)',
    summary: 'Listado junto de Gorr como possível personagem da Season 10 em material atribuído ao dataminer X0X_LEAK; discutido pela comunidade.',
    status: 'aguardando-definicao',
    confidence: 'media',
    links: [
      { label: 'MarvelRivals.gg — Nightcrawler Leak', url: 'https://marvelrivals.gg/nightcrawler-leaks' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Nome recorrente, mas sem confirmação oficial da NetEase. Qualquer menção a kit ou role por aí é chute.',
  },
  {
    id: 'doctor-doom',
    title: 'Doutor Destino (Doctor Doom)',
    summary: 'Aparece em listas de futuros personagens; alguns relatos o posicionam na Season 11, sem confirmação.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — Doctor Doom Leaks', url: 'https://marvelrivals.gg/doctor-doom' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters' },
      { label: 'Geeks + Gamers — leaks das Seasons 9–11', url: 'https://geeksandgamers.com/marvel-rivals-season-9-10-11-leaks-jubilee-nightcrawler-doctor-doom-more-incoming' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Informação derivada de listas de leaks; janela de lançamento não confirmada.',
  },
  {
    id: 'captain-marvel',
    title: 'Capitã Marvel (Captain Marvel)',
    summary: 'Incluída em listas de personagens potencialmente futuros; sem anúncio oficial nem janela confiável.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters' },
      { label: 'Khel Now — heróis vazados', url: 'https://khelnow.com/gaming/marvel-rivals-all-leaked-heroes-villains-expected-release-202606' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Rumor de lista, sem evidência primária de lançamento.',
  },
  {
    id: 'professor-x',
    title: 'Professor X',
    summary: 'Citados em listas de vazamento e em discussões de jogadores; sem anúncio oficial.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
      { label: 'Beebom — personagens vazados', url: 'https://beebom.com/leaked-marvel-rivals-characters' },
      { label: 'Reddit — personagens de 2026', url: 'https://www.reddit.com/r/marvelrivals/comments/1q37czp/which_characters_will_be_added_during_2026' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Evidência de lista e conversa comunitária; nada de kit, role ou data.',
  },
  {
    id: 'green-goblin',
    title: 'Duende Verde (Green Goblin)',
    summary: 'Nome presente em listas públicas de personagens vazados, sem janela ou confirmação oficial.',
    status: 'aguardando-definicao',
    confidence: 'baixa',
    links: [
      { label: 'MarvelRivals.gg — Green Goblin Leaks', url: 'https://marvelrivals.gg/green-goblin-leaks' },
      { label: 'MarvelRivals.gg — próximos personagens', url: 'https://marvelrivals.gg/upcoming-characters' },
    ],
    source: 'Levantamento de 21/09/2026',
    updatedAt: '21/09/2026',
    speculation: 'Só cobertura de leak/lista localizada; previsões de gameplay não são evidência.',
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
