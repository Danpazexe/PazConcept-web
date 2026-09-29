import Image from "next/image";
import Rastreado from "../Rastreado";
import FilaElaraSpace from "./FilaElaraSpace";
import OficinaPitSpace from "./OficinaPitSpace";
import type { Destaque } from "@/data/config";

/* Card personalizado de sistema: cada produto com a própria identidade
   (cor, logo e uma mini-cena animada). Escuro nos dois temas do site,
   porque as duas marcas nascem sobre fundo escuro. */

const TEMAS = {
  elaraspace: {
    fundo: "bg-[#0B0B17]",
    brilho: "bg-[radial-gradient(circle_at_80%_0%,rgba(108,60,255,0.38),transparent_60%)]",
    moldura: "from-[#9E80FF]/70 via-[#6C3CFF]/30 to-[#0B0B17]",
    sombra: "shadow-[0_22px_60px_rgba(108,60,255,0.25)]",
    destaque: "text-[#B9A6FF]",
    botao: "bg-[#6C3CFF] hover:bg-[#5A2BF0] focus-visible:outline-[#9E80FF]",
    logo: { src: "/sistemas/elaraspace/elaraspace-horizontal-escuro.svg", w: 150, h: 46 },
    simbolo: undefined,
    Cena: FilaElaraSpace,
  },
  pitspace: {
    fundo: "bg-[#111417]",
    brilho: "bg-[radial-gradient(circle_at_80%_0%,rgba(219,16,33,0.3),transparent_60%)]",
    moldura: "from-[#F24F5D]/70 via-[#DB1021]/25 to-[#111417]",
    sombra: "shadow-[0_22px_60px_rgba(219,16,33,0.2)]",
    destaque: "text-[#F7858F]",
    botao: "bg-[#DB1021] hover:bg-[#B00D1A] focus-visible:outline-[#F24F5D]",
    logo: { src: "/sistemas/pitspace/palavra-branco.png", w: 441, h: 96 },
    simbolo: "/sistemas/pitspace/p-original.png",
    Cena: OficinaPitSpace,
  },
} as const;

const SELOS: Record<Destaque["status"], string> = {
  "Em produção": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Em teste": "border-sky-400/30 bg-sky-400/10 text-sky-300",
  "Em desenvolvimento": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  "Em breve": "border-white/20 bg-white/10 text-white/80",
};

export default function CartaoSistema({ d }: { d: Destaque }) {
  if (!d.cartao) return null;
  const t = TEMAS[d.cartao];
  const Cena = t.Cena;

  return (
    <div className={`h-full rounded-3xl bg-gradient-to-br p-[1.5px] ${t.moldura} ${t.sombra}`}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] ${t.fundo} text-[#D9D6E8]`}
      >
        <div aria-hidden className={`pointer-events-none absolute inset-0 ${t.brilho}`} />

        {/* mini-cena animada */}
        <div className="relative h-[250px] border-b border-white/10 sm:h-[270px]">
          <Cena />
        </div>

        <div className="relative flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="m-0 flex items-center gap-2.5">
              {t.simbolo && <Image src={t.simbolo} alt="" width={34} height={33} className="h-8 w-auto" />}
              <Image
                src={t.logo.src}
                alt={d.nome}
                width={t.logo.w}
                height={t.logo.h}
                unoptimized={t.logo.src.endsWith(".svg")}
                className={t.simbolo ? "h-6 w-auto" : "h-9 w-auto"}
              />
            </h3>
            <span
              className={`ml-auto rounded-full border px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-wider uppercase ${SELOS[d.status]}`}
            >
              {d.status}
            </span>
          </div>

          <p className="mt-5 text-[1.02rem] leading-relaxed text-white">{d.frase ?? d.descricao}</p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {d.recursos.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[0.9rem] text-[#C9C6DC]">
                <svg className={`mt-1 h-3.5 w-3.5 shrink-0 ${t.destaque}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {d.casePagina && (
              <a
                href={d.casePagina}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 ${t.botao}`}
              >
                Ver apresentação
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
            {d.url && (
              <Rastreado
                evento="acessar_sistema"
                dados={{ sistema: d.nome, origem: "card" }}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
              >
                {d.rotuloAcesso ?? "Acessar"}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
                <span className="sr-only">(abre em nova aba)</span>
              </Rastreado>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
