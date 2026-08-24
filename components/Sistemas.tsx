import Image from "next/image";
import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import { DESTAQUES } from "@/data/config";

const SELOS: Record<string, string> = {
  "Em produção": "border-emerald-200 bg-emerald-50 text-emerald-600",
  "Em desenvolvimento": "border-amber-200 bg-amber-50 text-amber-600",
  "Em breve": "border-roxo/25 bg-roxo-suave text-roxo",
};

export default function Sistemas() {
  return (
    <section id="sistemas" className="border-y border-linha bg-fundo-suave py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Sistemas" titulo="Sistemas em destaque">
          As plataformas principais, prontas para uso — com acesso direto por aqui.
        </SecaoCabecalho>

        <div className="grid gap-8">
          {DESTAQUES.map((d, i) => (
            <Reveal key={d.nome} delay={i * 0.1}>
              <article className="grid overflow-hidden rounded-3xl border border-linha bg-white shadow-[0_12px_40px_rgba(29,18,51,0.06)] lg:grid-cols-[1.05fr_0.95fr]">
                {/* Informações */}
                <div className="flex flex-col p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-tinta sm:text-3xl">
                      {d.nome}
                    </h3>
                    <span
                      className={`rounded-full border px-3 py-1 font-mono text-[0.66rem] font-semibold tracking-wider uppercase ${SELOS[d.status]}`}
                    >
                      {d.status}
                    </span>
                  </div>

                  <p className="mt-4 text-suave">{d.descricao}</p>

                  <ul className="mt-6 space-y-2.5">
                    {d.recursos.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-[0.94rem] text-grafite">
                        <span className="mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-roxo/30 bg-roxo-suave">
                          <svg className="h-2.5 w-2.5 text-roxo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {d.url ? (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(124,34,206,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(124,34,206,0.4)]"
                      >
                        Acessar sistema
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </a>
                    ) : (
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(124,34,206,0.3)] transition-all hover:-translate-y-0.5"
                      >
                        Quero ser avisado
                      </a>
                    )}
                    {d.repo && (
                      <a
                        href={d.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-linha px-6 py-3 font-semibold text-tinta transition-all hover:border-roxo hover:bg-roxo-suave"
                      >
                        Ver repositório
                      </a>
                    )}
                  </div>
                </div>

                {/* Mockup de janela */}
                <div className="relative flex flex-col border-t border-linha bg-fundo-suave p-6 sm:p-8 lg:border-t-0 lg:border-l">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-linha bg-white shadow-[0_14px_40px_rgba(29,18,51,0.1)]">
                    <div className="flex items-center gap-2 border-b border-linha bg-fundo-suave px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                      <span className="mx-auto rounded-md border border-linha bg-white px-4 py-0.5 font-mono text-[0.7rem] text-suave">
                        {d.dominio}
                      </span>
                    </div>
                    <div className="flex min-h-56 flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-br from-roxo-claro to-roxo-escuro p-8">
                      <Image
                        src={d.icone ?? "/logo-pc-branca.png"}
                        alt={`Ícone do ${d.nome}`}
                        width={116}
                        height={116}
                        className={
                          d.icone
                            ? "rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                            : "drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                        }
                      />
                      <span className="font-heading text-xl font-bold text-creme">{d.nome}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
