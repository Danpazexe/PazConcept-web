import Reveal from "./Reveal";
import Rastreado from "./Rastreado";
import { SecaoCabecalho } from "./Secao";
import CartaoObra from "./cartoes/CartaoObra";
import { FUTUROS, SITE } from "@/data/config";

/* Sistemas em construção: cards de obra (CartaoObra), no mesmo esqueleto
   horizontal dos cards de produto. Sem link para o sistema (nada de link
   quebrado): só o convite para ser avisado. */

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

        <div className="grid gap-6">
          {FUTUROS.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.08}>
              <CartaoObra p={p} progresso={p.status === "Em desenvolvimento" ? 62 : 30} />
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
