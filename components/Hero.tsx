"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Rotulo } from "./Secao";

type Metrica = { valor: number; sufixo: string; rotulo: string };

function Contador({ valor, sufixo }: { valor: number; sufixo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true });

  useEffect(() => {
    if (!visivel || !ref.current) return;
    const controle = animate(0, valor, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${sufixo}`;
      },
    });
    return () => controle.stop();
  }, [visivel, valor, sufixo]);

  return (
    <span ref={ref} className="font-mono">
      0{sufixo}
    </span>
  );
}

const entrada = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero({ metricas }: { metricas: Metrica[] }) {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden pt-32 pb-20">
      {/* Fundo: brilhos suaves + grade */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full bg-roxo/12 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-roxo-claro/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-creme blur-3xl opacity-60" />
        <div className="grade-fundo absolute inset-0" />
      </div>

      <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="text-center lg:text-left"
        >
          <motion.div variants={entrada}>
            <Rotulo>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-roxo opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-roxo" />
              </span>
              Sistemas &amp; Projetos
            </Rotulo>
          </motion.div>

          <motion.h1
            variants={entrada}
            className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-tinta sm:text-5xl xl:text-[3.4rem] xl:leading-[1.15]"
          >
            A porta de entrada para os meus{" "}
            <span className="texto-grad">sistemas e projetos</span>
          </motion.h1>

          <motion.p
            variants={entrada}
            className="mx-auto mt-6 max-w-xl text-lg text-suave lg:mx-0"
          >
            Tudo o que eu construo, em um só lugar: plataformas em produção,
            repositórios abertos no GitHub e o que está sendo desenvolvido agora.
          </motion.p>

          <motion.div
            variants={entrada}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#sistemas"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
            >
              Acessar sistemas
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-linha bg-white px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
            >
              Ver repositórios
            </a>
          </motion.div>

          <motion.div
            variants={entrada}
            className="mt-14 flex flex-wrap justify-center gap-10 border-t border-linha pt-8 lg:justify-start"
          >
            {metricas.map((m) => (
              <div key={m.rotulo}>
                <div className="font-heading text-3xl font-bold text-tinta">
                  <Contador valor={m.valor} sufixo={m.sufixo} />
                </div>
                <div className="mt-1 text-sm text-suave">{m.rotulo}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Logo real com anéis orbitando */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden items-center justify-center lg:flex"
          aria-hidden
        >
          <div className="absolute h-[420px] w-[420px] animate-girar rounded-full border border-roxo/15">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-roxo-claro shadow-[0_0_14px_3px_rgba(157,78,221,0.5)]" />
          </div>
          <div className="absolute h-[530px] w-[530px] animate-girar-lento rounded-full border border-dashed border-roxo/10">
            <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-roxo/60" />
          </div>
          <div className="absolute h-72 w-72 rounded-full bg-roxo/15 blur-3xl" />
          <Image
            src="/logo.png"
            alt=""
            width={330}
            height={330}
            priority
            className="relative animate-flutuar drop-shadow-[0_24px_50px_rgba(124,34,206,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
