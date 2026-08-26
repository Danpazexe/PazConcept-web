"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { Rotulo } from "./Secao";
import Estrelas from "./Estrelas";

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
  /* Parallax: conforme a página desce, cada camada se move em velocidade diferente */
  const secaoRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: secaoRef,
    offset: ["start start", "end start"],
  });
  const fundoY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textoOpacidade = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const logoEscala = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const logoOpacidade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={secaoRef}
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-32 pb-20"
    >
      {/* Fundo: brilhos suaves + grade (sobe devagar no parallax).
          Gradientes radiais no lugar de blur() — mesmo visual, muito mais leve */}
      <motion.div
        aria-hidden
        style={{ y: fundoY }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute -top-48 -right-40 h-[680px] w-[680px] bg-[radial-gradient(circle,rgba(124,34,206,0.14),transparent_62%)]" />
        <div className="absolute -bottom-48 -left-44 h-[580px] w-[580px] bg-[radial-gradient(circle,rgba(157,78,221,0.12),transparent_62%)]" />
        <div className="absolute top-1/4 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(245,239,225,0.7),transparent_60%)] dark:opacity-[0.08]" />
        <div className="grade-fundo absolute inset-0" />
      </motion.div>

      {/* Universo de estrelas interativo (reage ao mouse).
          O fade que deixa as estrelas discretas na área do texto é
          desenhado dentro do próprio canvas — sem máscara CSS, que
          custava uma passada de composição por quadro */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Estrelas />
      </div>

      <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          style={{ y: textoY, opacity: textoOpacidade }}
          className="text-center will-change-transform lg:text-left"
        >
          <motion.div variants={entrada}>
            <Rotulo>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-roxo opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-roxo" />
              </span>
              Sistemas · Design · Comunicação
            </Rotulo>
          </motion.div>

          <motion.h1
            variants={entrada}
            className="mt-6 font-display text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-tinta sm:text-5xl sm:leading-[1.08] xl:text-[4.1rem] xl:leading-[1.05]"
          >
            A porta de entrada para os meus{" "}
            <span className="texto-grad">sistemas e projetos</span>
          </motion.h1>

          <motion.p
            variants={entrada}
            className="mx-auto mt-6 max-w-xl text-lg text-suave lg:mx-0"
          >
            Tudo o que a PazConcept cria, em um só lugar: sistemas em produção,
            projetos em desenvolvimento e design que dá vida às marcas.
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
              href="#futuros"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-linha bg-cartao px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
            >
              Projetos futuros
            </a>
          </motion.div>

          <motion.div
            variants={entrada}
            className="mt-14 flex flex-wrap justify-center gap-10 border-t border-linha pt-8 lg:justify-start"
          >
            {metricas.map((m) => (
              <div key={m.rotulo}>
                <div className="font-display text-4xl font-bold text-tinta">
                  <Contador valor={m.valor} sufixo={m.sufixo} />
                </div>
                <div className="mt-1 text-[0.82rem] tracking-wide text-suave uppercase">{m.rotulo}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Logo real com anéis orbitando (desce e some no parallax) */}
        <motion.div
          style={{ y: logoY, scale: logoEscala, opacity: logoOpacidade }}
          className="relative mx-auto hidden items-center justify-center will-change-transform lg:flex"
          aria-hidden
        >
          <div className="absolute h-[420px] w-[420px] animate-girar rounded-full border border-roxo/15 will-change-transform">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-roxo-claro shadow-[0_0_14px_3px_rgba(157,78,221,0.5)]" />
          </div>
          <div className="absolute h-[530px] w-[530px] animate-girar-lento rounded-full border border-dashed border-roxo/10 will-change-transform">
            <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-roxo/60" />
          </div>
          <div className="absolute h-[380px] w-[380px] bg-[radial-gradient(circle,rgba(124,34,206,0.18),transparent_62%)]" />
          <Image
            src="/logo-pc.png"
            alt=""
            width={330}
            height={330}
            priority
            className="relative animate-flutuar drop-shadow-[0_24px_50px_rgba(124,34,206,0.35)] will-change-transform"
          />
          <span className="absolute right-2 -bottom-8 inline-flex items-center gap-1.5 rotate-[-4deg] font-script text-[1.6rem] text-roxo/70">
            o universo PazConcept
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
            </svg>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
