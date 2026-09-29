import Reveal from "./Reveal";
import Rastreado from "./Rastreado";
import { SecaoCabecalho } from "./Secao";
import { FUTUROS, SITE } from "@/data/config";

/* Sistemas no canteiro de obras: card modelo "Em construção".
   Sem link para o sistema (nada de link quebrado) — só "em breve"
   e o convite para ser avisado. */

const FAIXA =
  "repeating-linear-gradient(-45deg, var(--color-roxo) 0 12px, var(--color-creme) 12px 24px)";

function Guindaste() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 90"
      className="h-24 w-32 text-roxo/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* torre treliçada */}
      <path d="M20 88V14M30 88V14M20 24l10 10M30 24 20 34M20 44l10 10M30 44 20 54M20 64l10 10M30 64 20 74" />
      {/* lança */}
      <path d="M8 14h104M20 14 25 4l5 10M25 4l60 10M25 4 8 14" />
      <path d="M8 14v8h8v-8" />
      {/* cabo + carga (balança) */}
      <g className="origin-[92px_14px] animate-balancar">
        <path d="M92 14v30" />
        <rect x="84" y="44" width="16" height="12" rx="2" className="fill-roxo-suave" />
        <path d="M88 50h8" />
      </g>
      <path d="M4 88h112" />
    </svg>
  );
}

export default function Futuros() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi os sistemas no site e quero conversar sobre um sistema para o meu negócio."
  )}`;

  return (
    <section id="futuros" className="py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Em construção" titulo="No canteiro de obras">
          O que está sendo construído agora e chega em breve por aqui.
        </SecaoCabecalho>

        {/* mesmo esqueleto dos cards de sistema, compacto: texto à esquerda,
            visual (a obra) à direita; no celular o visual vai para cima */}
        <div className="grid gap-6">
          {FUTUROS.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.08}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-dashed border-roxo/25 bg-cartao transition-all hover:-translate-y-1 hover:border-roxo/60 hover:shadow-[0_18px_44px_rgba(124,34,206,0.1)] md:grid md:grid-cols-[1.35fr_0.65fr]">
                {/* visual: canteiro */}
                <div className="relative flex flex-col justify-between border-b border-dashed border-roxo/25 bg-fundo-suave md:order-2 md:border-b-0 md:border-l">
                  <div aria-hidden className="h-2.5 opacity-80" style={{ background: FAIXA }} />
                  <div className="flex flex-1 items-end justify-center px-6 pt-4">
                    <Guindaste />
                  </div>
                  <div className="px-6 pt-3 pb-5">
                    <div className="flex items-center justify-between font-mono text-[0.62rem] font-semibold tracking-wider text-suave uppercase">
                      <span>Obra em andamento</span>
                      <span>em breve</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-roxo-suave">
                      <div
                        className="h-full w-3/5 animate-obra rounded-full"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(-45deg, var(--color-roxo-claro) 0 10px, var(--color-roxo) 10px 20px)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* texto */}
                <div className="flex flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-tinta">{p.nome}</h3>
                    <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-wider text-amber-700 uppercase dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M2 20h20M5 20V9l7-5 7 5v11M9 20v-6h6v6" />
                      </svg>
                      Em construção
                    </span>
                  </div>

                  <p className="mt-3 text-[0.98rem] text-suave">
                    {p.descricao || "Os detalhes chegam junto com o lançamento."}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-roxo/25 bg-roxo-suave px-3 py-1 text-xs font-medium text-roxo"
                      >
                        {t}
                      </span>
                    ))}
                    <a
                      href="#contato"
                      className="ml-auto text-sm font-semibold text-roxo transition-colors hover:text-roxo-escuro dark:hover:text-roxo-claro"
                    >
                      Quero ser avisado →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* a próxima obra pode ser a sua */}
          <Reveal delay={FUTUROS.length * 0.08}>
            <article className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2A1052] via-[#1D0B33] to-[#160A2C] p-6 text-[#C9BCE4] sm:p-7 md:flex-row md:items-center md:justify-between">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(157,78,221,0.28),transparent_55%)]"
              />
              <div className="relative max-w-xl">
                <span className="font-mono text-[0.62rem] font-semibold tracking-[0.14em] text-roxo-claro uppercase">
                  Terreno livre
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-creme">
                  O próximo sistema pode ser o seu
                </h3>
                <p className="mt-2 text-[0.95rem] text-[#A895CC]">
                  Tem um processo que vive no WhatsApp e na planilha? Ele vira
                  sistema sob medida.
                </p>
              </div>
              <Rastreado
                evento="orcamento_servico"
                dados={{ servico: "sistema-sob-medida", origem: "em-construcao" }}
                href={zap}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(124,34,206,0.35)] transition-all hover:-translate-y-0.5"
              >
                Conversar no WhatsApp
              </Rastreado>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
