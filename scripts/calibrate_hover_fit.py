"""Calibra o enquadramento do hover (`selectionHoverFit`) dos tiles de seleção.

Contexto: o tile da tela de seleção é quadrado e renderiza o GIF champion
INTEIRO (object-fit: cover num canvas quadrado não corta nada — só a escala
1.14 + translate do fit se aplicam). Como o sujeito costuma ficar baixo/fora
do centro na arte original, cada herói precisa de um `selectionHoverFit`
calibrado, senão sobra faixa escura no topo, o rosto fica pequeno/afundado e
o rótulo do rodapé tapa a arte. NUNCA copiar o fit de outro herói.

O script gera uma PRANCHA de calibração (candidatos x frames) com o recorte
exato do CSS do tile para inspeção visual, e tem um modo `--audit` que varre
`src/data/heroes/*.ts` e aponta fit ausente/genérico/inválido.

Exemplos:
  python scripts/calibrate_hover_fit.py --hero black_panther
  python scripts/calibrate_hover_fit.py --hero adam_warlock \
      --candidates "atual:1.15:0:-6;A:1.5:0:-18;B:1.6:0:-22"
  python scripts/calibrate_hover_fit.py --audit

Regra de limite: |x| e |y| <= 50 * (scale - 1) (%) — acima disso o tile mostra
borda vazia (o translate % é relativo ao próprio tamanho do elemento).
Critérios de aprovação (inspecionar em >= 8 frames, incluindo o meio do loop):
  1. preenche o quadro (sem faixa escura vazia no topo/laterais);
  2. rosto/cabeça grande e na metade de cima do tile;
  3. topo da cabeça NÃO é cortado em NENHUM frame;
  4. composição estável ao longo da animação;
  5. o rodapé (área do rótulo de nome) cobre só conteúdo descartável.
"""

from __future__ import annotations

import argparse
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SELECT_DIR = ROOT / "public" / "heroes" / "select"
HEROES_DIR = ROOT / "src" / "data" / "heroes"

LIMIT_NOTE = "limite: |x|,|y| <= 50*(scale-1) %"

# Escada default para heróis novos (sujeito baixo no canvas: zoom + subir arte).
DEFAULT_LADDER = [
    ("A", 1.35, 0, -12),
    ("B", 1.45, 0, -16),
    ("C", 1.55, 0, -20),
    ("D", 1.65, 0, -24),
    ("E", 1.75, 0, -28),
]

FIT_RE = re.compile(
    r"selectionHoverFit:\s*\{\s*scale:\s*([0-9.]+)\s*,\s*x:\s*(-?[0-9.]+)\s*,\s*y:\s*(-?[0-9.]+)\s*\}"
)

# Valores genéricos já vistos em produção (copiados entre heróis sem calibrar).
GENERIC_FITS = {(1.15, 0.0, -6.0), (1.18, 1.0, -5.0)}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Calibra/audita o selectionHoverFit dos tiles de seleção.")
    parser.add_argument("--hero", help="slug do app (ex.: black-panther); usa public/heroes/select/<slug>_champion.gif")
    parser.add_argument(
        "--candidates",
        help='prancha manual "label:scale:x:y;..." -- default: fit atual do .ts + escada padrão',
    )
    parser.add_argument("--frames", help="índices de frames separados por vírgula -- default: 8 distribuídos no loop")
    parser.add_argument("--tile", type=int, default=240, help="lado do tile na prancha em px (default 240)")
    parser.add_argument("--out", help="PNG de saída -- default: <tmp>/hover_fit_<slug>.png")
    parser.add_argument("--audit", action="store_true", help="varre src/data/heroes/*.ts e aponta fit ausente/genérico/inválido")
    return parser.parse_args()


def limit_ok(scale: float, x: float, y: float) -> bool:
    lim = 50 * (scale - 1)
    return abs(x) <= lim + 1e-9 and abs(y) <= lim + 1e-9


def current_fit(slug: str) -> tuple[float, float, float] | None:
    ts = HEROES_DIR / f"{slug}.ts"
    if not ts.exists():
        return None
    m = FIT_RE.search(ts.read_text(encoding="utf-8"))
    if not m:
        return None
    return float(m.group(1)), float(m.group(2)), float(m.group(3))


def load_frames(slug: str, wanted: str | None):
    from PIL import Image

    gif = SELECT_DIR / f"{slug.replace('-', '_')}_champion.gif"
    static = SELECT_DIR / f"{slug.replace('-', '_')}.png"
    if gif.exists():
        im = Image.open(gif)
        n = getattr(im, "n_frames", 1)
        if wanted:
            idxs = [int(i) for i in wanted.split(",") if i.strip() != ""]
        else:
            idxs = sorted({round(i * (n - 1) / 7) for i in range(8)})
        frames = []
        for i in idxs[:16]:
            im.seek(min(i, n - 1))
            frames.append((i, im.convert("RGB").copy()))
        return frames, f"{gif.name} ({n} frames)"
    if static.exists():
        im = Image.open(static).convert("RGB")
        return [(0, im)], f"{static.name} (PNG estático)"
    raise SystemExit(f"ERRO: não achei {gif.name} nem {static.name} em {SELECT_DIR}")


def render_tile(frame, scale: float, x: float, y: float, tile: int):
    from PIL import Image

    side = max(1, round(scale * tile))
    img = frame.resize((side, side))
    canvas = Image.new("RGB", (tile, tile), (10, 10, 14))
    canvas.paste(img, (round(tile / 2 + x / 100 * tile - side / 2), round(tile / 2 + y / 100 * tile - side / 2)))
    return canvas


def make_sheet(slug: str, cands, frames, tile: int, out: Path):
    from PIL import Image, ImageDraw

    try:
        from PIL import ImageFont

        font = ImageFont.load_default(size=14)
    except Exception:  # Pillow antigo
        font = None

    pad, lab = 6, 30
    cols, rows = len(frames), len(cands)
    sheet = Image.new("RGB", (cols * (tile + pad) + pad, rows * (tile + lab + pad) + pad), (16, 16, 20))
    d = ImageDraw.Draw(sheet)
    for ri, (label, s, x, y) in enumerate(cands):
        ok = limit_ok(s, x, y)
        y0 = pad + ri * (tile + lab + pad)
        d.text((pad, y0), f"{slug} {label}  s={s} x={x} y={y}  [{LIMIT_NOTE}]".replace("[]", ""), fill=(120, 255, 160) if ok else (255, 110, 110), font=font)
        if not ok:
            d.text((pad, y0 + 16), "FORA DO LIMITE — vai abrir borda vazia", fill=(255, 110, 110), font=font)
        for ci, (fi, frame) in enumerate(frames):
            d.text((pad + ci * (tile + pad), y0 + 18), f"f{fi}", fill=(150, 150, 160), font=font)
            sheet.paste(render_tile(frame, s, x, y, tile), (pad + ci * (tile + pad), y0 + lab))
    sheet.save(out)


def audit() -> int:
    rows = []
    problems = 0
    for ts in sorted(HEROES_DIR.glob("*.ts")):
        if ts.name == "index.ts":
            continue
        slug = ts.stem
        fit = current_fit(slug)
        if fit is None:
            status = "sem fit (default 1.14 — ok se aprovado)"
        elif fit in GENERIC_FITS:
            status = "PROBLEMA: fit genérico copiado"
            problems += 1
        elif not limit_ok(*fit):
            lim = 50 * (fit[0] - 1)
            status = f"aviso: passa do limite ({lim:.1f}%) — conferir borda visualmente"
        else:
            status = "ok"
        rows.append((slug, fit, status))
    width = max(len(r[0]) for r in rows)
    for slug, fit, status in rows:
        f = f"{fit[0]:.2f}/{fit[1]}/{fit[2]}" if fit else "-"
        print(f"{slug.ljust(width)}  {f:>20}  {status}")
    print(f"\n{len(rows)} heróis | {problems} problema(s)")
    if problems:
        print(
            "ATENÇÃO: fit genérico = tile com faixa vazia e rosto afundado.\n"
            "Calibre com: python scripts/calibrate_hover_fit.py --hero <slug> (leia a prancha antes de commitar)."
        )
    return 1 if problems else 0


def main() -> int:
    args = parse_args()
    try:
        import PIL  # noqa: F401
    except ImportError:
        raise SystemExit("ERRO: Pillow não instalado — rode: python -m pip install pillow")

    if args.audit:
        return audit()

    if not args.hero:
        raise SystemExit("ERRO: use --hero <slug> (ou --audit). Veja --help.")

    if args.candidates:
        cands = []
        for spec in args.candidates.split(";"):
            if not spec.strip():
                continue
            label, s, x, y = spec.split(":")
            cands.append((label, float(s), float(x), float(y)))
    else:
        cands = []
        cur = current_fit(args.hero)
        if cur:
            cands.append(("atual", *cur))
        cands += DEFAULT_LADDER

    frames, source = load_frames(args.hero, args.frames)
    out = Path(args.out) if args.out else Path(tempfile.gettempdir()) / f"hover_fit_{args.hero}.png"
    make_sheet(args.hero, cands, frames, args.tile, out)

    print(f"fonte: {source}")
    print(f"prancha: {out}")
    print(f"({LIMIT_NOTE})")
    print(
        "Checklist antes de fechar o valor: preenche o quadro; rosto grande na metade de cima; "
        "topo nunca cortado em nenhum frame; estável no loop; rodapé (nome) cobre só conteúdo descartável."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
