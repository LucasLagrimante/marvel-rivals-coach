---
name: hover-art-enquadramento
description: selectionHoverFit (scale/x/y em HeroGuide) reposiciona a arte animada do menu; GIFs têm movimento de câmera, calibrar por vários frames
module: ui
metadata:
  type: project
---
**Why:** As artes champion têm o sujeito fora do centro (Elsa à direita, Mulher Invisível embaixo, Demolidor/Homem-Aranha com o rosto sob o rótulo) e os próprios GIFs animam com pan/zoom — um enquadramento aprovado num frame pode cortar o rosto em outro. O rótulo do tile cobre ~38% inferiores.
**How to apply:** Definir `selectionHoverFit: { scale, x, y }` no `src/data/heroes/<slug>.ts` (`x`/`y` em % de translate; `scale` absoluto). O `HeroTile.tsx` publica `--hover-art-scale/-x/-y` e `src/styles/select.css` aplica `translate(...) scale(...)` só em `.hero-tile-art.is-hover img`. Limite para não abrir borda: `|x|` e `|y|` ≤ `50·scale − 50` (%). Calibrar olhando 4–8 frames do hover (a câmera do GIF se move) e mantendo o rosto no terço superior. Quando o GIF dá zoom-out/deriva (Magneto desce até o rótulo no fim do loop), calibrar pelo frame final (rosto mais baixo) e conferir que o capacete não corta no frame inicial. Valores atuais: Elsa 1.7/−35/−27, Mulher Invisível 2/−8/−44, Magneto 1.45/11/−11, Homem-Aranha 1.3/12.1/−19.6, Demolidor 1.35/13.7/−17.1, Magia 1.3/4.4/−8.5, Dinossauro 1.45/4/−12, Gata Negra 1.35/1.8/−8.3, Gorr (arte Lord estática) 1.2/0/2.
