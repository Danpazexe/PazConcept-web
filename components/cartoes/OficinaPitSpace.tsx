"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* Mini-cena do PitSpace: a placa é digitada, a OS nasce e o carro percorre
   as cinco etapas da oficina (chegada → diagnóstico → orçamento → execução → caixa).
   Placas fictícias. */

const PLACAS = ["PIT2A26", "BOX7C03", "OFC4E19"];
const ETAPAS = ["Chegada", "Diagnóstico", "Orçamento", "Execução", "Caixa"];
const VERMELHO = "#DB1021";

export default function OficinaPitSpace() {
  const reduzir = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { amount: 0.3 });
  const [placa, setPlaca] = useState(0);
  const [letras, setLetras] = useState(7);
  const [etapa, setEtapa] = useState(2);

  useEffect(() => {
    if (reduzir || !visivel) return;
    // roteiro: digita 7 letras, anda 5 etapas, pausa, próxima placa
    let t = 0;
    setLetras(0);
    setEtapa(-1);
    const id = window.setInterval(() => {
      t++;
      if (t <= 7) setLetras(t);
      else if (t <= 7 + 5 * 3) {
        if ((t - 7) % 3 === 1) setEtapa((e) => Math.min(e + 1, 4));
      } else if (t === 7 + 5 * 3 + 5) {
        t = 0;
        setPlaca((p) => (p + 1) % PLACAS.length);
        setLetras(0);
        setEtapa(-1);
      }
    }, 260);
    return () => window.clearInterval(id);
  }, [reduzir, visivel]);

  const texto = PLACAS[placa];
  const progresso = etapa < 0 ? 0 : (etapa / (ETAPAS.length - 1)) * 100;

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden" aria-hidden>
      {/* faixa zebrada de oficina */}
      <div
        className="absolute inset-x-0 top-0 h-2.5"
        style={{
          background:
            "repeating-linear-gradient(-45deg,#B26A00 0 10px,#111417 10px 20px)",
        }}
      />
      {/* padrão do quarto de disco da marca */}
      <div
        className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full opacity-[0.07]"
        style={{ background: `radial-gradient(circle at 0 0, ${VERMELHO} 0 60%, transparent 61%)` }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 pt-4">
        {/* placa Mercosul */}
        <div className="w-[200px] overflow-hidden rounded-md border-2 border-[#1a1a1a] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between bg-[#1447A8] px-2 py-0.5">
            <span className="h-2 w-3 rounded-[1px] bg-[#2E9A4B]" />
            <span className="font-mono text-[0.5rem] font-bold tracking-[0.3em] text-white">BRASIL</span>
            <span className="h-2 w-3" />
          </div>
          <div className="flex h-11 items-center justify-center gap-[3px] font-mono text-[1.6rem] leading-none font-bold tracking-wider text-[#111417]">
            {texto.split("").map((c, i) => (
              <motion.span
                key={`${placa}-${i}`}
                initial={false}
                animate={{ opacity: i < letras ? 1 : 0.12, y: i < letras ? 0 : 3 }}
                transition={{ duration: 0.18 }}
              >
                {c}
              </motion.span>
            ))}
            {!reduzir && letras < 7 && (
              <span className="ml-0.5 h-6 w-[2px] animate-pulse bg-[#DB1021]" />
            )}
          </div>
        </div>

        {/* OS nasce */}
        <motion.div
          initial={false}
          animate={{ opacity: letras >= 7 ? 1 : 0.25 }}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[0.62rem] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: VERMELHO }} />
          OS-2026-000{198 + placa} aberta
        </motion.div>

        {/* trilho das etapas */}
        <div className="w-full max-w-[340px]">
          <div className="relative h-1.5 rounded-full bg-white/12">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: `linear-gradient(90deg, #F24F5D, ${VERMELHO})` }}
              initial={false}
              animate={{ width: `${progresso}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* o carrinho */}
            <motion.div
              className="absolute -top-[15px]"
              initial={false}
              animate={{ left: `calc(${progresso}% - 12px)`, opacity: etapa < 0 ? 0 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                <path d="M2 9.5V7.2c0-.5.3-.9.8-1l3-.8L8.6 2.4c.4-.4.9-.6 1.4-.6h5.4c.6 0 1.1.3 1.4.7l2.3 3 2.4.6c.5.1.9.6.9 1.1v2.3" fill="#fff" />
                <circle cx="6.5" cy="10.5" r="2.3" fill="#111417" stroke="#fff" strokeWidth="1.2" />
                <circle cx="17.5" cy="10.5" r="2.3" fill="#111417" stroke="#fff" strokeWidth="1.2" />
              </svg>
            </motion.div>
          </div>
          <ol className="mt-2.5 flex justify-between">
            {ETAPAS.map((e, i) => (
              <li
                key={e}
                className={`text-[0.55rem] font-semibold transition-colors duration-300 sm:text-[0.6rem] ${
                  i === etapa ? "text-white" : i < etapa ? "text-[#F24F5D]" : "text-white/40"
                }`}
              >
                {e}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
