"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

/* Mini-mockup do ElaraSpace: uma fila de ocorrências andando pelo fluxo
   (recebida → olhar câmeras → pendente → em andamento → resolvida).
   Dados 100% ilustrativos: sem nome de cliente, só barras. */

type Etapa = {
  rotulo: string;
  texto: string;
  fundo: string;
  icone: React.ReactNode;
};

const ic = "h-3 w-3 shrink-0";
const ETAPAS: Etapa[] = [
  {
    rotulo: "Recebida",
    texto: "#1B5FB8",
    fundo: "#E3EEFC",
    icone: (
      <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    rotulo: "Olhar câmeras",
    texto: "#8A5300",
    fundo: "#FDF1D8",
    icone: (
      <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    rotulo: "Pendente",
    texto: "#B42318",
    fundo: "#FDE5E3",
    icone: (
      <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
  {
    rotulo: "Em andamento",
    texto: "#5427E0",
    fundo: "#ECE6FF",
    icone: (
      <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    rotulo: "Resolvida",
    texto: "#067647",
    fundo: "#DCF7E7",
    icone: (
      <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const DONOS = [
  { sigla: "AS", cor: "#2563EB" },
  { sigla: "BL", cor: "#16A34A" },
  { sigla: "CR", cor: "#C2410C" },
];

type Linha = { numero: number; etapa: number; dono: number; largura: number };

const INICIAL: Linha[] = [
  { numero: 121, etapa: 4, dono: 0, largura: 62 },
  { numero: 122, etapa: 3, dono: 1, largura: 48 },
  { numero: 123, etapa: 1, dono: 0, largura: 70 },
  { numero: 124, etapa: 0, dono: 2, largura: 54 },
];

export default function FilaElaraSpace() {
  const reduzir = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { amount: 0.3 });
  const [linhas, setLinhas] = useState(INICIAL);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (reduzir || !visivel) return;
    let passo = 0;
    const id = window.setInterval(() => {
      passo++;
      setEnviado((e) => (passo % 3 === 0 ? !e : e));
      setLinhas((atual) => {
        // avança a ocorrência mais antiga que ainda não foi resolvida
        const i = atual.findIndex((l) => l.etapa < 4);
        if (i === -1) return atual;
        const proxima = atual.map((l, j) => (j === i ? { ...l, etapa: l.etapa + 1 } : l));
        // quando a primeira resolve, ela sai por cima e uma nova chega embaixo
        if (proxima[0].etapa === 4 && atual[0].etapa === 4) {
          const ultimo = proxima[proxima.length - 1];
          return [
            ...proxima.slice(1),
            {
              numero: ultimo.numero + 1,
              etapa: 0,
              dono: (ultimo.dono + 1) % DONOS.length,
              largura: 45 + ((ultimo.numero * 7) % 30),
            },
          ];
        }
        return proxima;
      });
    }, 2400);
    return () => window.clearInterval(id);
  }, [reduzir, visivel]);

  return (
    <div ref={ref} className="relative h-full w-full" aria-hidden>
      {/* palco: ocupa o card no celular e fica centrado (altura fixa) no card deitado */}
      <div className="absolute inset-x-5 top-6 bottom-5 sm:inset-x-8 lg:top-1/2 lg:bottom-auto lg:h-[260px] lg:-translate-y-1/2">
      {/* janela do painel */}
      <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-[#F7F8FC] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex h-full">
          <div className="flex w-9 shrink-0 flex-col items-center gap-2 bg-[#0B0B17] pt-3">
            <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#9E80FF] to-[#6C3CFF]" />
            <span className="mt-2 h-1.5 w-4 rounded bg-white/20" />
            <span className="h-1.5 w-4 rounded bg-[#6C3CFF]" />
            <span className="h-1.5 w-4 rounded bg-white/20" />
            <span className="h-1.5 w-4 rounded bg-white/20" />
          </div>
          <div className="min-w-0 flex-1 px-3 pt-2.5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-0.5 rounded bg-[#6C3CFF]" />
              <span className="font-heading text-[0.62rem] font-bold text-[#111426]">
                Todas as ocorrências
              </span>
              <span className="ml-auto rounded-full bg-[#6C3CFF] px-1.5 py-px font-mono text-[0.5rem] font-semibold text-white">
                A tratar
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              <AnimatePresence initial={false} mode="popLayout">
                {linhas.map((l) => {
                  const e = ETAPAS[l.etapa];
                  const dono = DONOS[l.dono];
                  return (
                    <motion.li
                      key={l.numero}
                      layout
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 1, ease: [0.45, 0, 0.2, 1] }}
                      className="flex items-center gap-2 rounded-md border border-[#E5E8F0] bg-white px-2 py-1.5"
                    >
                      <span className="font-mono text-[0.55rem] font-bold text-[#111426] tabular-nums">
                        OC-000{l.numero}
                      </span>
                      <motion.span
                        key={e.rotulo}
                        initial={reduzir ? false : { scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.45, 0, 0.2, 1] }}
                        className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.52rem] font-semibold whitespace-nowrap"
                        style={{ color: e.texto, background: e.fundo }}
                      >
                        {e.icone}
                        {e.rotulo}
                      </motion.span>
                      <span
                        className="hidden h-1.5 rounded bg-[#E5E8F0] min-[420px]:block"
                        style={{ width: `${l.largura}px` }}
                      />
                      <span className="ml-auto flex items-center">
                        {l.etapa === 0 ? (
                          <span className="rounded-full bg-[#6C3CFF] px-1.5 py-0.5 text-[0.5rem] font-bold text-white">
                            Pegar
                          </span>
                        ) : (
                          <motion.span
                            initial={reduzir ? false : { scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.9, ease: [0.45, 0, 0.2, 1] }}
                            className="flex h-4 w-4 items-center justify-center rounded-full text-[0.45rem] font-bold text-white"
                            style={{ background: dono.cor }}
                          >
                            {dono.sigla}
                          </motion.span>
                        )}
                      </span>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>

      {/* celular do motorista: sem sinal, a ocorrência espera na fila do aparelho */}
      <div className="absolute -right-3 -bottom-4 w-[112px] rotate-[4deg] rounded-[14px] border-[3px] border-[#1E1E2E] bg-[#0B0B17] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:right-4">
        <div className="flex items-center justify-between">
          <span className="text-[0.48rem] font-semibold text-white/70">Motorista</span>
          <span className="flex items-end gap-px">
            {[3, 5, 7, 9].map((h, i) => (
              <span
                key={h}
                className={`w-[2px] rounded-sm transition-colors duration-1000 ${
                  enviado || i < 1 ? "bg-white/80" : "bg-white/20"
                }`}
                style={{ height: h }}
              />
            ))}
          </span>
        </div>
        <div
          className={`mt-1.5 flex items-center gap-1 rounded-md px-1.5 py-1 text-[0.5rem] font-semibold transition-colors duration-1000 ${
            enviado ? "bg-[#DCF7E7] text-[#067647]" : "bg-[#FDF1D8] text-[#8A5300]"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${enviado ? "bg-[#067647]" : "bg-[#B26A00]"}`} />
          {enviado ? "Enviado ao painel" : "Sem sinal · na fila"}
        </div>
      </div>
      </div>
    </div>
  );
}
