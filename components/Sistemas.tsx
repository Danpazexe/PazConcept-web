import Image from "next/image";
import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import { DESTAQUES } from "@/data/config";

const SELOS: Record<string, string> = {
  "Em produção": "border-emerald-200 bg-emerald-50 text-emerald-600",
  "Em teste": "border-blue-200 bg-blue-50 text-blue-600",
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
              {/* moldura em gradiente (vitrine de lançamento) */}
              <div className="rounded-3xl bg-gradient-to-br from-roxo-claro/60 via-linha to-roxo-escuro/50 p-[1.5px] shadow-[0_22px_70px_rgba(124,34,206,0.18)]">
              <article className="grid overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-white lg:grid-cols-[1.05fr_0.95fr]">
                {/* Informações */}
                <div className="flex min-w-0 flex-col p-8 sm:p-10">
                  {d.lancamento && (
                    <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-roxo-claro to-roxo-escuro px-4 py-1.5 font-mono text-[0.62rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_6px_18px_rgba(124,34,206,0.35)]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                      </span>
                      Lançamento
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                    </span>
                  )}
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

                {/* Vitrine: navegador com o sistema real + celular flutuante */}
                <div className="relative flex min-w-0 flex-col justify-center border-t border-linha bg-fundo-suave p-6 pb-16 sm:p-9 sm:pb-16 lg:border-t-0 lg:border-l">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(124,34,206,0.14),transparent_60%)]"
                  />
                  <div className="group relative">
                    <div className="overflow-hidden rounded-2xl border border-linha bg-white shadow-[0_24px_60px_rgba(29,18,51,0.18)]">
                      <div className="flex items-center gap-2 border-b border-linha bg-white px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                        <span className="mx-auto min-w-0 truncate rounded-md border border-linha bg-fundo-suave px-4 py-0.5 font-mono text-[0.7rem] text-suave">
                          {d.dominio}
                        </span>
                      </div>
                      {d.imagem ? (
                        <Image
                          src={d.imagem}
                          alt={`Tela do ${d.nome}`}
                          width={1280}
                          height={800}
                          sizes="(min-width: 1024px) 42vw, 92vw"
                          className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex min-h-56 flex-col items-center justify-center gap-4 bg-gradient-to-br from-roxo-claro to-roxo-escuro p-8">
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
                      )}
                    </div>

                    {d.imagemMobile && (
                      <div className="absolute -bottom-10 -left-3 w-[100px] rotate-[-7deg] overflow-hidden rounded-[1.3rem] border-[5px] border-white shadow-[0_20px_46px_rgba(29,18,51,0.35)] transition-transform duration-500 group-hover:rotate-[-3deg] sm:w-[118px]">
                        <Image
                          src={d.imagemMobile}
                          alt={`${d.nome} no celular`}
                          width={390}
                          height={844}
                          sizes="118px"
                          className="w-full"
                        />
                      </div>
                    )}

                    {d.icone && d.imagem && (
                      <Image
                        src={d.icone}
                        alt=""
                        width={62}
                        height={62}
                        className="absolute -top-5 -right-3 rotate-6 rounded-2xl shadow-[0_14px_32px_rgba(29,18,51,0.3)] ring-4 ring-white transition-transform duration-500 group-hover:rotate-3"
                      />
                    )}

                    <svg
                      aria-hidden
                      className="absolute -top-7 left-6 h-6 w-6 rotate-[-8deg] text-roxo-claro"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                    </svg>
                  </div>
                </div>
              </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
