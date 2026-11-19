import { useEffect, useRef } from "react";

/**
 * Assinatura de projetos de Lucas Lagrimante.
 *
 * Vanilla, vinda de /lagrimante (copiada para public/). O nó usa `data-manual`
 * para nao ser preenchido pelo boot automatico do script: se ele montasse antes
 * do React, a arvore divergiria e o commit quebraria. O mount roda no efeito.
 */
type Props = {
  current: string;
  label?: string;
  accent?: string;
  height?: number;
};

export default function LagrimanteTicker({ current, label, accent, height = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--llr-accent", accent ?? "currentColor");
    el.style.setProperty("--llr-h", `${height}px`);

    const montar = () => {
      const api = (window as unknown as { LagrimanteTicker?: { mount: (n: HTMLElement) => void } })
        .LagrimanteTicker;
      if (api?.mount) api.mount(el);
    };

    if ((window as unknown as { LagrimanteTicker?: unknown }).LagrimanteTicker) {
      montar();
      return;
    }
    window.addEventListener("load", montar, { once: true });
    return () => window.removeEventListener("load", montar);
  }, [accent, height]);

  return (
    <div className="lagrimante-slot">
      <nav
        ref={ref}
        className="llr"
        data-lagrimante-ticker="rotativo"
        data-manual=""
        data-current={current}
        data-logo-base="https://lagrimante.com.br/lagrimante/logos/"
        data-label={label}
        aria-label="Outros projetos de Lucas Lagrimante"
        suppressHydrationWarning
      />
    </div>
  );
}
