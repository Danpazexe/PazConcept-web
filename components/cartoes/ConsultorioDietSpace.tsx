"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

/* Mini-cena do DietSpace: o plano alimentar se monta refeição por refeição,
   o anel de kcal enche até a meta, a agenda do dia recebe as confirmações e
   a paciente marca a água no app. Tudo ilustrativo: sem nome de paciente. */

const ROXO = "#8834F4";
const LILAS = "#BB8BF9";
const VERDE = "#03BA66";
const META = 2000;

const REFEICOES = [
  { nome: "Café da manhã", hora: "07:00", kcal: 348 },
  { nome: "Almoço", hora: "12:00", kcal: 854 },
  { nome: "Lanche", hora: "16:00", kcal: 212 },
  { nome: "Jantar", hora: "19:30", kcal: 433 },
];

const AGENDA = [
  { hora: "08:00", tipo: "Primeira consulta" },
  { hora: "09:30", tipo: "Retorno" },
  { hora: "11:00", tipo: "Avaliação" },
  { hora: "14:00", tipo: "Teleconsulta" },
];

// passos do roteiro: 0..4 refeições, depois 4 confirmações, depois pausa
const TOTAL_PASSOS = REFEICOES.length + AGENDA.length + 3;

export default function ConsultorioDietSpace() {
  const reduzir = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { amount: 0.3 });
  const [passo, setPasso] = useState(TOTAL_PASSOS - 1);

  useEffect(() => {
    if (reduzir || !visivel) return;
    setPasso(0);
    const id = window.setInterval(() => setPasso((p) => (p + 1) % TOTAL_PASSOS), 1100);
    return () => window.clearInterval(id);
  }, [reduzir, visivel]);

  const nRefeicoes = Math.min(passo, REFEICOES.length);
  const nConfirmadas = Math.max(0, Math.min(passo - REFEICOES.length, AGENDA.length));
  const kcal = REFEICOES.slice(0, nRefeicoes).reduce((t, r) => t + r.kcal, 0);
  const fracao = Math.min(kcal / META, 1);
  const agua = 2 + Math.min(passo, 6);

  const R = 34;
  const C = 2 * Math.PI * R;
  const macros = [
    { rotulo: "P", valor: 0.82 * fracao, cor: ROXO },
    { rotulo: "C", valor: 0.9 * fracao, cor: VERDE },
    { rotulo: "G", valor: 0.7 * fracao, cor: "#E0892B" },
  ];

  return (
    <div ref={ref} className="relative h-full w-full" aria-hidden>
      <div className="absolute inset-x-5 top-6 bottom-5 flex items-center gap-3 sm:inset-x-8">
        {/* plano alimentar */}
        <div className="flex min-h-[214px] min-w-0 flex-1 flex-col rounded-xl border border-white/10 bg-[#F8F7FC] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-3">
            <div className="relative h-[84px] w-[84px] shrink-0">
              <svg viewBox="0 0 84 84" className="h-full w-full -rotate-90">
                <circle cx="42" cy="42" r={R} fill="none" stroke="#ECE6F8" strokeWidth="8" />
                <motion.circle
                  cx="42"
                  cy="42"
                  r={R}
                  fill="none"
                  stroke={ROXO}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  initial={false}
                  animate={{ strokeDashoffset: C * (1 - fracao) }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-[0.95rem] leading-none font-bold text-[#222C3D] tabular-nums">
                  {kcal.toLocaleString("pt-BR")}
                </span>
                <span className="mt-0.5 text-[0.55rem] font-medium text-[#5B6478]">meta 2.000</span>
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-1.5">
              <p className="text-[0.74rem] font-bold text-[#222C3D]">Plano alimentar</p>
              {macros.map((m) => (
                <div key={m.rotulo} className="flex items-center gap-1.5">
                  <span className="w-2 text-[0.55rem] font-bold" style={{ color: m.cor }}>
                    {m.rotulo}
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#ECE6F8]">
                    <motion.span
                      className="block h-full rounded-full"
                      style={{ background: m.cor }}
                      initial={false}
                      animate={{ width: `${m.valor * 100}%` }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-2.5 space-y-1">
            <AnimatePresence initial={false}>
              {REFEICOES.slice(0, nRefeicoes).map((r) => (
                <motion.li
                  key={r.nome}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2 rounded-md border border-[#E8E4F2] bg-white px-2 py-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: VERDE }} />
                  <span className="text-[0.68rem] font-semibold text-[#222C3D]">{r.nome}</span>
                  <span className="text-[0.55rem] text-[#5B6478] tabular-nums">{r.hora}</span>
                  <span className="ml-auto text-[0.66rem] font-bold text-[#222C3D] tabular-nums">
                    {r.kcal} <span className="font-medium text-[#5B6478]">kcal</span>
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* agenda do dia */}
        <div className="hidden min-h-[214px] w-[46%] shrink-0 flex-col rounded-xl border border-white/10 bg-[#F8F7FC] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)] min-[520px]:flex">
          <p className="text-[0.74rem] font-bold text-[#222C3D]">Agenda de hoje</p>
          <ul className="mt-2 space-y-1.5">
            {AGENDA.map((a, i) => {
              const ok = i < nConfirmadas;
              return (
                <li key={a.hora} className="flex items-center gap-2 rounded-md border border-[#E8E4F2] bg-white px-2 py-1.5">
                  <span className="text-[0.66rem] font-bold text-[#222C3D] tabular-nums">{a.hora}</span>
                  <span className="min-w-0 truncate text-[0.66rem] text-[#5B6478]">{a.tipo}</span>
                  <span className="ml-auto">
                    <AnimatePresence mode="wait" initial={false}>
                      {ok ? (
                        <motion.span
                          key="ok"
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 420, damping: 22 }}
                          className="inline-flex items-center gap-0.5 rounded-full bg-[#CDF4E2] px-1.5 py-0.5 text-[0.52rem] font-bold whitespace-nowrap text-[#026F3C]"
                        >
                          <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          confirmou
                        </motion.span>
                      ) : (
                        <motion.span
                          key="espera"
                          exit={{ opacity: 0 }}
                          className="inline-flex rounded-full bg-[#F1ECFB] px-1.5 py-0.5 text-[0.52rem] font-semibold whitespace-nowrap text-[#6A1FD0]"
                        >
                          lembrete enviado
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* app da paciente: água do dia */}
      <div className="absolute right-2 bottom-2 w-[118px] rotate-[4deg] rounded-[14px] border-[3px] border-[#2B2440] bg-[#1B1530] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:right-4">
        <div className="flex items-center justify-between">
          <span className="text-[0.5rem] font-semibold text-white/75">App da paciente</span>
          <span className="text-[0.5rem] font-bold tabular-nums" style={{ color: LILAS }}>
            {agua}/8
          </span>
        </div>
        <p className="mt-1 text-[0.55rem] font-bold text-white">Água de hoje</p>
        <div className="mt-1 flex gap-[3px]">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="relative h-4 flex-1 overflow-hidden rounded-[3px] border border-white/25">
              <motion.span
                className="absolute inset-x-0 bottom-0 rounded-[2px]"
                style={{ background: "#5BB8F5" }}
                initial={false}
                animate={{ height: i < agua ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
