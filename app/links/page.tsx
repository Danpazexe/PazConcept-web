import type { Metadata } from "next";
import Image from "next/image";
import Estrelas from "@/components/Estrelas";
import Rastreado from "@/components/Rastreado";
import { SITE } from "@/data/config";

/* Página de links para a bio do Instagram (@pazconcept).
   Sempre escura, com o universo de estrelas ao fundo. */

export const metadata: Metadata = {
  title: "Links",
  description: "Todos os links da PazConcept num só lugar.",
  robots: { index: false, follow: true }, // a home é quem deve aparecer no Google
};

const IconeSeta = (
  <svg className="h-4 w-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Links() {
  const zapOrcamento = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vim pelo Instagram e quero um orçamento."
  )}`;

  const LINKS = [
    {
      alvo: "site",
      titulo: "Conheça a PazConcept",
      texto: "sistemas, projetos e design",
      href: "/",
      externo: false,
    },
    {
      alvo: "orcamento",
      titulo: "Pedir um orçamento",
      texto: "resposta rápida no WhatsApp",
      href: zapOrcamento,
      externo: true,
    },
    {
      alvo: "dietspace",
      titulo: "DietSpace",
      texto: "nosso sistema para nutricionistas",
      href: "/dietspace",
      externo: false,
    },
    {
      alvo: "github",
      titulo: "GitHub",
      texto: `os projetos de @${SITE.usuario}`,
      href: SITE.redes.github,
      externo: true,
    },
  ];

  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-gradient-to-b from-[#241041] via-[#1A0C30] to-[#160A2C] px-5 py-16 text-[#C9BCE4]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Estrelas comFade={false} />
      </div>

      <div className="relative flex w-full max-w-md flex-col items-center">
        <Image
          src="/logo-pc-branca.png"
          alt="Logo da PazConcept"
          width={92}
          height={92}
          priority
          className="drop-shadow-[0_10px_30px_rgba(157,78,221,0.45)]"
        />
        <h1 className="mt-5 font-heading text-2xl font-bold text-creme">
          Paz<em className="not-italic text-roxo-claro">Concept</em>
        </h1>
        <p className="mt-2 text-center text-sm text-[#A895CC]">
          Sistemas &amp; Design · @pazconcept
        </p>

        <div className="mt-9 flex w-full flex-col gap-3.5">
          {LINKS.map((l) => (
            <Rastreado
              key={l.alvo}
              evento="link_bio"
              dados={{ alvo: l.alvo }}
              href={l.href}
              {...(l.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-6 py-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:bg-white/[0.12]"
            >
              <span>
                <b className="block font-heading text-[0.98rem] text-creme">{l.titulo}</b>
                <small className="text-[0.82rem] text-[#A895CC]">{l.texto}</small>
              </span>
              {IconeSeta}
            </Rastreado>
          ))}

          {/* Instagram com o degradê da rede */}
          <Rastreado
            evento="link_bio"
            dados={{ alvo: "instagram" }}
            href={SITE.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-6 py-4 text-white shadow-[0_10px_30px_rgba(221,42,123,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(221,42,123,0.45)]"
          >
            <span>
              <b className="block font-heading text-[0.98rem]">@pazconcept</b>
              <small className="text-[0.82rem] text-white/85">artes e projetos no Instagram</small>
            </span>
            {IconeSeta}
          </Rastreado>
        </div>

        <a
          href="/"
          className="mt-10 font-mono text-xs text-[#A895CC] transition-colors hover:text-creme"
        >
          www.pazconcept.com.br
        </a>
      </div>
    </main>
  );
}
