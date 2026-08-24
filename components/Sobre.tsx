import Image from "next/image";
import Reveal from "./Reveal";
import { Rotulo } from "./Secao";
import { SITE } from "@/data/config";

const VALORES = [
  {
    titulo: "Qualidade técnica",
    texto: "Código bem construído, testado e pronto para crescer.",
    cor: "bg-roxo-suave text-roxo",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.2 13.9 7 23l5-3 5 3-1.2-9.1" />
      </svg>
    ),
  },
  {
    titulo: "Transparência",
    texto: "Comunicação clara e direta em todas as etapas.",
    cor: "bg-blue-50 text-blue-600",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    titulo: "Segurança",
    texto: "Dados protegidos e boas práticas do início ao fim.",
    cor: "bg-emerald-50 text-emerald-600",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    titulo: "Evolução constante",
    texto: "Sistemas vivos, com melhorias e novidades frequentes.",
    cor: "bg-amber-50 text-amber-600",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
      </svg>
    ),
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto grid w-[min(1160px,92%)] items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <Rotulo>Sobre</Rotulo>
          <h2 className="mt-5 font-heading text-3xl font-bold text-tinta md:text-4xl">
            Tecnologia com propósito
          </h2>

          <div className="mt-7 flex items-center gap-4">
            <Image
              src="https://avatars.githubusercontent.com/u/180876988?v=4"
              alt={`Foto de ${SITE.nome}`}
              width={64}
              height={64}
              className="rounded-2xl border-2 border-roxo/30"
            />
            <div>
              <b className="font-heading text-tinta">{SITE.nome}</b>
              <p className="font-mono text-sm text-suave">@{SITE.usuario}</p>
            </div>
          </div>

          {/* EDITE AQUI → escreva sobre você */}
          <p className="mt-6 text-suave">
            <strong className="font-semibold text-tinta">
              Este é o ponto central de tudo o que eu desenvolvo.
            </strong>{" "}
            Aqui você encontra os sistemas em produção, os repositórios abertos
            e o que está sendo construído agora.
          </p>
          <p className="mt-4 text-suave">
            Cada solução nasce de um problema real e é desenvolvida com atenção
            à qualidade, à segurança e à experiência de quem usa no dia a dia —
            sem complexidade desnecessária.
          </p>

          <a
            href={SITE.redes.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(124,34,206,0.3)] transition-all hover:-translate-y-0.5"
          >
            Me acompanhe no GitHub
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {VALORES.map((v, i) => (
            <Reveal
              key={v.titulo}
              delay={i * 0.08}
              className={i % 2 === 1 ? "sm:translate-y-5" : ""}
            >
              <div className="h-full rounded-2xl border border-linha bg-white p-6 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1 hover:border-roxo/40">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${v.cor} [&_svg]:h-5 [&_svg]:w-5`}>
                  {v.icone}
                </div>
                <b className="font-heading text-[0.98rem] font-semibold text-tinta">
                  {v.titulo}
                </b>
                <p className="mt-1.5 text-sm text-suave">{v.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
