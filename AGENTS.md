# Marvel Rivals Coach

## Premissa do projeto

Este app é uma base viva de coaching para Marvel Rivals, mas a tela do personagem deve priorizar o "V principal": a decisão curta que muda a próxima luta. Ele não deve ser uma ficha genérica nem um relatório enciclopédico. Cada herói precisa começar pela dica que altera a jogabilidade, depois mostrar só o necessário para executar: quando escolher a role, qual habilidade ou recurso priorizar, como usar ultimate, qual é o ponto-chave mecânico e quais adaptações fazer contra composições reais.

Detalhe, metadata, cobertura de fonte e evidências continuam obrigatórios na estrutura, mas não devem disputar espaço com o coaching. Na interface, essas informações devem ficar recolhidas, secundárias ou em ação de apoio, como botão flutuante, painel expansível ou seção compacta. Se um texto não ajuda o jogador a decidir a próxima fight, ele deve ser resumido, movido para evidências ou removido da primeira leitura.

## Padrão de pesquisa

Ao adicionar ou atualizar um personagem, pesquisar e registrar evidências de fontes diferentes:

- Fonte oficial: site de Marvel Rivals, patch notes, página de habilidades e anúncios.
- Wiki/public database: Marvel Rivals Wiki, wiki.gg, Liquipedia ou equivalente para valores e imagens públicas.
- Guias escritos: sites especializados, desde que a recomendação seja específica do herói.
- Fórum/comunidade: Reddit, Discord exportado, comentários de mains, discussões de meta recente.
- Vídeos/transcrições: guias no YouTube, VODs, coach review e transcrições com timestamps quando possível.

Não inventar dado de vídeo sem transcrição ou anotação auditável. Se vídeo ainda não foi processado, deixar fonte como pendente.

## Enriquecimento de dados

Cada personagem deve guardar dados em estrutura tipada, hoje em `src/data/heroes.ts`, com:

- `portraitUrl` e `bannerUrl`: foto do personagem. Prioridade: asset oficial. Fallback: Wiki/public asset. Sempre preferir links públicos estáveis.
- `sources`: lista de fontes com tipo, URL, confiança e takeaways.
- `sourceCoverage`: contagem por categoria para mostrar o quanto a análise está enriquecida.
- `systems`: sistemas globais do personagem.
- `roleGuides`: guia por role, com plano de upgrade, adaptações, ultimates, dash/mecânica-chave, padrões de luta, erros comuns e evidências.

## Assets de personagens

Para a tela de seleção, baixar assets apenas dos heróis cadastrados no app, não o roster inteiro. O script local é `scripts/download_fandom_avatars.py`; usar `--only` com os slugs presentes em `src/data/heroes.ts`.

Exemplo para PNG padrão de seleção e GIF animado do modo dinâmico:

```bash
python scripts/download_fandom_avatars.py --kind table --only deadpool black_cat magneto
python scripts/download_fandom_avatars.py --kind champion --only deadpool black_cat magneto
```

No Fandom, o PNG padrão de seleção vem de `<Hero>_DEFAULT_Table_Icon.png` e deve ser salvo como `public/heroes/select/<slug>.png`. Os GIFs dinâmicos vêm do padrão `Champion_Icon_*_Animated.gif` e são salvos como `public/heroes/select/<slug>_champion.gif`. Não baixar nem manter PNG lord estático para a seleção quando já houver GIF dinâmico. Não rodar o script sem `--only` salvo se a intenção explícita for baixar todos os personagens.

## Qualidade da análise

Toda recomendação deve responder:

- O que fazer primeiro.
- Por que isso ganha a próxima luta.
- Quando trocar a ordem.
- Qual habilidade e ponto-chave do personagem.
- Que erro comum faz o personagem parecer ruim.
- Quais fontes sustentam a recomendação.

Evitar frases como "jogue agressivo", "use suas habilidades" ou "mantenha posicionamento" sem contexto específico. Transformar toda dica em instrução aplicável.

## Exemplo de novo prompt

Se o usuário disser "procure para a Luna Snow", seguir este fluxo:

1. Confirmar o nome correto se houver erro de transcrição evidente, mas seguir com a melhor inferência quando for seguro.
2. Buscar fonte oficial, wiki/public asset, guias, fórum e vídeos/transcrições.
3. Popular a estrutura do personagem com foto, fontes e análise específica.
4. Explicar no app quais fontes ainda estão pendentes.
5. Rodar build/lint antes de encerrar quando houver alteração de código.

## Princípio de interface

A tela inicial deve parecer uma seleção de personagens do jogo: visual forte, busca rápida por nome/apelido, cards com foto, roles visíveis e acesso imediato ao guia. A leitura precisa ser fluida: o usuário deve achar rápido "o que muda minha jogabilidade agora" e só depois aprofundar em mecânica, ultimate, erros e evidências.

## Layout por personagem

O layout do guia deve servir à mecânica central do personagem, não o contrário. Não reaproveitar cegamente a estrutura de outro herói.

- Se o personagem tem sistema de upgrades, livro, talentos ou escolhas numeradas, como o Deadpool, faz sentido ter bloco de ordem de upgrade, número da magia e prioridades por role.
- Se o personagem gira em torno de recurso, loja, relíquias, forma, combo, postura ou rotação, criar uma experiência própria para isso. A Gata Negra, por exemplo, deve mostrar Fortuna, Gilded Deal, relíquias, plano de roubo, execução, saída e Calling Card, sem citar Deadpool nem fingir que ela tem livrinho.
- A estrutura de dados pode continuar compartilhada quando ajudar, mas a renderização pode ser específica por personagem quando isso melhora clareza e leitura.
- O tema visual também deve acompanhar o personagem selecionado, usando uma paleta derivada da arte/capa quando possível.
- Antes de finalizar um novo herói, perguntar: "Qual é a coisa que esse personagem precisa dominar para ficar bom?" O layout deve responder essa pergunta na primeira leitura, com pouco ruído e sem espaços vazios artificiais entre fieldsets.
- Cards que fazem parte da mesma etapa do plano precisam estar visualmente conectados por uma faixa, coluna ou grupo comum. Evitar pares de fieldsets soltos que deixam o fundo aparecer como buraco entre conteúdos relacionados; se dois blocos se explicam juntos, eles devem parecer uma unidade.
- Revisar o layout também em viewport maior. Um card curto em meia coluna não pode deixar metade da tela vazia; nesses casos, transformar em faixa full-width, grupo conectado ou coluna independente.





