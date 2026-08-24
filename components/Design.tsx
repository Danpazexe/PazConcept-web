import Image from "next/image";
import Reveal from "./Reveal";
import { SITE } from "@/data/config";

const IconeInstagram = (
  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Design() {
  return (
    <section
      id="design"
      className="relative overflow-hidden bg-gradient-to-br from-[#2A1052] via-[#1D0B33] to-[#160A2C] py-24 text-[#C9BCE4]"
    >
      {/* Logo gigante decorativa ao fundo */}
      <Image
        src="/logo-pc-branca.png"
        alt=""
        aria-hidden
        width={560}
        height={560}
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.06] select-none"
      />

      <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-creme uppercase">
            Design &amp; Comunicação
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-creme md:text-4xl">
            Artes que dão vida às marcas
          </h2>
          <p className="mt-4 max-w-xl text-lg text-[#A895CC]">
            Além de sistemas, a PazConcept cria design gráfico e comunicação
            visual: identidade, artes para redes sociais e materiais de
            divulgação. O portfólio completo está no nosso Instagram.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(221,42,123,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(221,42,123,0.45)]"
            >
              {IconeInstagram}
              Ver artes no @pazconcept
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-creme transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:bg-white/5"
            >
              Pedir um orçamento
            </a>
          </div>
        </Reveal>

        {/* Galeria com artes reais do @pazconcept
            EDITE AQUI → troque os arquivos (estão em public/artes) */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 gap-3">
            {[
              "/artes/arte-03.jpg",
              "/artes/arte-01.jpg",
              "/artes/arte-04.jpg",
              "/artes/arte-02.jpg",
              "/artes/arte-10.jpg",
              "/artes/arte-05.jpg",
            ].map((src, i) => (
              <a
                key={src}
                href={SITE.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:z-10 hover:scale-105 ${
                  i % 2 === 1 ? "translate-y-3" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Arte do portfólio PazConcept ${i + 1}`}
                  width={334}
                  height={449}
                  className="h-full w-full object-cover"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
