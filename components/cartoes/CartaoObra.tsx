"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { ProjetoFuturo } from "@/data/config";

/* Card "em construção": mesmo esqueleto horizontal dos cards de produto
   (texto à esquerda, cena à direita; no celular a cena vai para cima),
   em versão clara e compacta. A cena é um canteiro: guindaste de traço
   uniforme, carga subindo e descendo devagar, luz de sinalização lenta,
   fita de obra fina e barra de progresso. As animações (CSS, em globals.css)
   só rodam com o card na tela e param com movimento reduzido. */

function Guindaste() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 170 128"
      className="h-auto w-[210px] text-roxo sm:w-[230px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* chão e base */}
      <path d="M8 122h154" strokeOpacity="0.25" />
      <path d="M34 122h26M38 116h18" strokeOpacity="0.6" />

      {/* torre: montantes + treliça */}
      <path d="M40 116V34M54 116V34" strokeOpacity="0.85" />
      <path
        d="M40 116l14-16-14-16 14-16-14-16 14-16-14-2M40 100h14M40 84h14M40 68h14M40 52h14"
        strokeOpacity="0.4"
        strokeWidth="1.25"
      />

      {/* cabine */}
      <rect x="37" y="26" width="20" height="9" rx="2" className="fill-roxo-suave" strokeOpacity="0.85" />

      {/* topo (mastro) e tirantes */}
      <path d="M47 26V10" strokeOpacity="0.85" />
      <path d="M47 10 16 30M47 10l104 20" strokeOpacity="0.35" strokeWidth="1.25" />

      {/* lança: banzos + treliça */}
      <path d="M14 30h140M14 36h140" strokeOpacity="0.85" />
      <path
        d="M62 36l6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6"
        strokeOpacity="0.4"
        strokeWidth="1.25"
      />
      <path d="M14 30v6M154 30v6" strokeOpacity="0.85" />

      {/* contrapeso */}
      <rect x="16" y="37" width="16" height="10" rx="2" className="fill-roxo-suave" strokeOpacity="0.6" />

      {/* luz de sinalização no topo (pulsa bem devagar) */}
      <circle data-anim="luz" cx="47" cy="7.5" r="2.4" className="fill-roxo-claro" stroke="none" />

      {/* carrinho + cabo + gancho + viga (sobe e desce devagar) */}
      <rect x="120" y="36" width="12" height="4" rx="1.5" className="fill-roxo-suave" strokeOpacity="0.75" strokeWidth="1.25" />
      <g data-anim="carga">
        <path d="M126 40v44" strokeOpacity="0.55" strokeWidth="1.1" />
        <path d="M126 84c0 3.5 3 3.5 3 6.5a3 3 0 0 1-6 0" strokeOpacity="0.8" strokeWidth="1.4" />
        <path d="M126 94l-12 6M126 94l12 6" strokeOpacity="0.45" strokeWidth="1.1" />
        <rect x="104" y="100" width="44" height="8" rx="2" className="fill-roxo-suave" strokeOpacity="0.85" />
        <path d="M112 100v8M120 100v8M128 100v8M136 100v8" strokeOpacity="0.3" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function CartaoObra({ p, progresso = 62 }: { p: ProjetoFuturo; progresso?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { amount: 0.3 });

  return (
    <div
      ref={ref}
      data-ativo={visivel ? "sim" : "nao"}
      className="obra overflow-hidden rounded-3xl border border-roxo/15 bg-cartao shadow-[0_18px_50px_rgba(124,34,206,0.1)] transition-shadow duration-500 hover:shadow-[0_22px_60px_rgba(124,34,206,0.16)]"
    >
      {/* fita de obra: fina, acompanhando o raio do card */}
      <div data-anim="fita" aria-hidden className="obra-fita h-[7px]" />

      <article className="flex flex-col md:grid md:grid-cols-[1.3fr_0.7fr]">
        {/* cena: canteiro */}
        <div className="relative flex flex-col justify-end gap-4 bg-gradient-to-b from-fundo-suave to-roxo-suave/60 px-7 pt-6 pb-6 md:order-2 md:border-l md:border-roxo/10">
          <div className="flex justify-center">
            <Guindaste />
          </div>
          <div>
            <div className="flex items-center justify-between text-[0.66rem] font-semibold tracking-[0.16em] text-suave uppercase">
              <span>Obra em andamento</span>
              <span>Em breve</span>
            </div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-roxo/10">
              <div
                data-anim="progresso"
                className="obra-progresso h-full rounded-full"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>
        </div>

        {/* texto */}
        <div className="flex flex-col p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-heading text-2xl font-bold text-tinta">{p.nome}</h3>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 20h20M5 20V9l7-5 7 5v11M9 20v-6h6v6" />
              </svg>
              Em construção
            </span>
          </div>

          <p className="mt-3 text-[1rem] leading-relaxed text-suave">
            {p.descricao || "Os detalhes chegam junto com o lançamento."}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-roxo/20 bg-roxo-suave px-3 py-1 text-xs font-medium text-roxo">
                {t}
              </span>
            ))}
            <a
              href="#contato"
              className="ml-auto inline-flex items-center gap-1.5 rounded-xl border border-linha px-4 py-2 text-sm font-semibold text-tinta transition-colors duration-300 hover:border-roxo hover:bg-roxo-suave"
            >
              Quero ser avisado
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
