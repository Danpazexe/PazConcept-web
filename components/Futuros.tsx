import Reveal from "./Reveal";
import Rastreado from "./Rastreado";
import { SecaoCabecalho } from "./Secao";
import Blueprint from "./cartoes/Blueprint";
import { FUTUROS, SITE } from "@/data/config";

/* Sistemas em construção: mesma família dos cards de produto (raio, moldura,
   fundo escuro e tipografia), em versão compacta — texto à esquerda e, à
   direita, o blueprint da interface se desenhando devagar. Sem link para
   o sistema (nada de link quebrado): só o convite para ser avisado. */

export default function Futuros() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi os sistemas no site e quero conversar sobre um sistema para o meu negócio."
  )}`;

  return (
    <section id="futuros" className="py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Em construção" titulo="O que vem por aí">
          Sistemas sendo construídos agora — chegam em breve por aqui.
        </SecaoCabecalho>

        <div className="grid gap-6">
          {FUTUROS.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.08}>
              <div className="rounded-3xl bg-gradient-to-br from-[#C084FC]/45 via-white/5 to-[#7C3AED]/35 p-[1.5px] shadow-[0_18px_50px_rgba(124,34,206,0.16)]">
                <article className="relative flex flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#150E24] text-[#D9D6E8] md:grid md:grid-cols-[1.3fr_0.7fr]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(157,78,221,0.16),transparent_55%)]"
                  />

                  {/* visual: blueprint (em cima no celular, à direita no desktop) */}
                  <div className="relative border-b border-white/10 md:order-2 md:border-b-0 md:border-l">
                    <Blueprint semente={i} progresso={p.status === "Em desenvolvimento" ? 62 : 28} />
                  </div>

                  {/* texto */}
                  <div className="relative flex flex-col p-7 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-2xl font-bold text-white">{p.nome}</h3>
                      <span className="ml-auto rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[0.72rem] font-semibold text-amber-200">
                        Em construção
                      </span>
                    </div>

                    <p className="mt-3 text-[1rem] leading-relaxed text-[#C9C6DC]">
                      {p.descricao || "Os detalhes chegam junto com o lançamento."}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#D2CFE3]"
                        >
                          {t}
                        </span>
                      ))}
                      <a
                        href="#contato"
                        className="ml-auto inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/45 hover:bg-white/5"
                      >
                        Quero ser avisado
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}

          {/* a próxima obra pode ser a sua */}
          <Reveal delay={FUTUROS.length * 0.08}>
            <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2A1052] via-[#1D0B33] to-[#160A2C] p-7 text-[#C9BCE4] sm:p-8 md:flex-row md:items-center md:justify-between">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(157,78,221,0.28),transparent_55%)]"
              />
              <div className="relative max-w-xl">
                <h3 className="font-heading text-2xl font-bold text-creme">
                  O próximo sistema pode ser o seu
                </h3>
                <p className="mt-2 text-[0.98rem] text-[#A895CC]">
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
                className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(124,34,206,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
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
