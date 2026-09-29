"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* "Em construção" sem clichê: o wireframe da interface se desenhando devagar
   sobre uma grade de planta (blueprint). Os blocos surgem em sequência, com
   easing longo, e um brilho de baixa opacidade atravessa o esqueleto.
   Fora da tela o brilho pausa; com movimento reduzido tudo fica no estado
   final, parado (MotionConfig do site + regra global do CSS). */

const SUAVE = [0.45, 0, 0.2, 1] as const;

type Bloco = { x: number; y: number; w: number; h: number; r?: number; forte?: boolean };

// esqueleto de um painel: barra lateral, topo, indicadores e lista
const BLOCOS: Bloco[] = [
  { x: 8, y: 8, w: 44, h: 144, r: 6 },
  { x: 60, y: 8, w: 212, h: 18, r: 5 },
  { x: 60, y: 34, w: 64, h: 40, r: 6, forte: true },
  { x: 132, y: 34, w: 64, h: 40, r: 6 },
  { x: 204, y: 34, w: 68, h: 40, r: 6 },
  { x: 60, y: 82, w: 212, h: 16, r: 4 },
  { x: 60, y: 104, w: 212, h: 16, r: 4 },
  { x: 60, y: 126, w: 150, h: 16, r: 4 },
];

export default function Blueprint({ semente = 0, progresso = 60 }: { semente?: number; progresso?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduzir = useReducedMotion();
  const visivel = useInView(ref, { amount: 0.35 });
  const pronto = { pathLength: 1, opacity: 1 };
  // cada card começa o desenho num ponto diferente, para não ficarem idênticos
  const ordem = BLOCOS.map((_, i) => (i + semente * 3) % BLOCOS.length);

  return (
    <div
      ref={ref}
      aria-hidden
      data-ativo={visivel ? "sim" : "nao"}
      className="blueprint relative flex h-full min-h-[220px] w-full flex-col overflow-hidden"
    >
      {/* grade de planta */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(190,160,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(190,160,255,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(157,78,221,0.22),transparent_65%)]" />

      <div className="relative flex-1">
      <svg viewBox="0 0 280 160" className="absolute inset-0 m-auto h-[84%] w-[88%]" fill="none">
        <defs>
          <linearGradient id={`bp-brilho-${semente}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.14" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`bp-clip-${semente}`}>
            {BLOCOS.map((b, i) => (
              <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={b.r ?? 4} />
            ))}
          </clipPath>
        </defs>

        {/* contorno de cada bloco se desenhando, depois o preenchimento */}
        {BLOCOS.map((b, i) => {
          const atraso = 0.25 + ordem[i] * 0.22;
          return (
            <g key={i}>
              <motion.rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx={b.r ?? 4}
                stroke="rgba(200,175,255,0.55)"
                strokeWidth="0.8"
                initial={reduzir ? false : { pathLength: 0, opacity: 0 }}
                animate={visivel || reduzir ? pronto : undefined}
                transition={{ duration: 1.4, delay: atraso, ease: SUAVE }}
              />
              <motion.rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx={b.r ?? 4}
                fill={b.forte ? "rgba(157,78,221,0.32)" : "rgba(200,175,255,0.08)"}
                initial={reduzir ? false : { opacity: 0 }}
                animate={visivel || reduzir ? { opacity: 1 } : undefined}
                transition={{ duration: 1.2, delay: atraso + 0.7, ease: SUAVE }}
              />
            </g>
          );
        })}

        {/* brilho lento atravessando o esqueleto */}
        <g clipPath={`url(#bp-clip-${semente})`}>
          <rect className="bp-brilho" x="-120" y="0" width="120" height="160" fill={`url(#bp-brilho-${semente})`} />
        </g>
      </svg>
      </div>

      {/* progresso: barra fina, gradiente suave e um brilho lento passando */}
      <div className="relative px-6 pb-5">
        <div className="flex items-center justify-between text-[0.72rem] font-medium text-[#B9AED6]">
          <span>Em desenvolvimento</span>
          <span>Lançamento em breve</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="progresso-brilho relative h-full overflow-hidden rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C084FC] shadow-[0_0_12px_rgba(192,132,252,0.45)]"
            initial={reduzir ? false : { width: "0%" }}
            animate={visivel || reduzir ? { width: `${progresso}%` } : undefined}
            transition={{ duration: 1.6, delay: 0.4, ease: SUAVE }}
          />
        </div>
      </div>
    </div>
  );
}
