import Image from "next/image";
import type { ReactNode } from "react";
import Rastreado from "../Rastreado";
import ConsultorioDietSpace from "./ConsultorioDietSpace";
import FilaElaraSpace from "./FilaElaraSpace";
import OficinaPitSpace from "./OficinaPitSpace";
import type { Destaque } from "@/data/config";

/* Card de sistema — o MESMO esqueleto para todos os produtos (mini-cena
   animada, logo + selo, uma frase de valor, três destaques com ícone
   próprio e os botões), cada um com a sua identidade de cor.
   Escuro nos dois temas do site: as três marcas vivem bem sobre fundo escuro.
   No desktop o card é horizontal (texto à esquerda, cena à direita);
   no celular empilha com a cena em cima, que é o que chama o olho. */

const ic = "h-4 w-4";
const tr = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Tema = {
  fundo: string;
  brilho: string;
  moldura: string;
  sombra: string;
  destaque: string;
  fundoIcone: string;
  botao: string;
  /** `classe`: altura própria quando a proporção da logo a faz parecer menor que as outras. */
  logo: { src: string; w: number; h: number; classe?: string };
  simbolo?: { src: string; w: number; h: number };
  Cena: () => ReactNode;
  icones: ReactNode[];
};

const TEMAS: Record<Destaque["cartao"], Tema> = {
  dietspace: {
    fundo: "bg-[#131826]",
    brilho: "bg-[radial-gradient(circle_at_85%_0%,rgba(136,52,244,0.34),transparent_58%),radial-gradient(circle_at_0%_100%,rgba(3,186,102,0.14),transparent_50%)]",
    moldura: "from-[#BB8BF9]/70 via-[#8834F4]/30 to-[#03BA66]/40",
    sombra: "shadow-[0_22px_60px_rgba(136,52,244,0.25)]",
    destaque: "text-[#CDB0FB]",
    fundoIcone: "bg-[#8834F4]/20",
    botao: "bg-[#8834F4] hover:bg-[#630BD3] focus-visible:outline-[#BB8BF9]",
    // logo oficial (brand/ do DietSpace): símbolo colorido + palavra em branco,
    // porque o "Space" da versão colorida é tinta escura e some no fundo escuro
    logo: { src: "/sistemas/dietspace/palavra-branco.png", w: 335, h: 120 },
    simbolo: { src: "/sistemas/dietspace/simbolo.png", w: 236, h: 256 },
    Cena: ConsultorioDietSpace,
    icones: [
      // prancheta (anamnese e avaliação)
      <svg key="a" className={ic} {...tr}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6M9 16h4" /></svg>,
      // maçã (plano alimentar)
      <svg key="b" className={ic} {...tr}><path d="M12 6.5C10.5 5 8 5 6.5 6.2 4.4 8 4.6 12 6.4 15.6 7.8 18.4 9.8 21 12 20c2.2 1 4.2-1.6 5.6-4.4 1.8-3.6 2-7.6-.1-9.4C16 5 13.5 5 12 6.5Z" /><path d="M12 6.5c0-2 1-3.5 3-4.5" /></svg>,
      // calendário (agenda + app)
      <svg key="c" className={ic} {...tr}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>,
    ],
  },
  elaraspace: {
    fundo: "bg-[#0B0B17]",
    brilho: "bg-[radial-gradient(circle_at_80%_0%,rgba(108,60,255,0.38),transparent_60%)]",
    moldura: "from-[#9E80FF]/70 via-[#6C3CFF]/30 to-[#0B0B17]",
    sombra: "shadow-[0_22px_60px_rgba(108,60,255,0.25)]",
    destaque: "text-[#B9A6FF]",
    fundoIcone: "bg-[#6C3CFF]/20",
    botao: "bg-[#6C3CFF] hover:bg-[#5A2BF0] focus-visible:outline-[#9E80FF]",
    logo: { src: "/sistemas/elaraspace/elaraspace-horizontal-escuro.svg", w: 150, h: 46, classe: "h-16 w-auto" },
    Cena: FilaElaraSpace,
    icones: [
      // sinal cortado (offline)
      <svg key="a" className={ic} {...tr}><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8" /><path d="m2 2 20 20" /></svg>,
      // mão (pegar: um dono)
      <svg key="b" className={ic} {...tr}><path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></svg>,
      // balão de mensagem (WhatsApp)
      <svg key="c" className={ic} {...tr}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>,
    ],
  },
  pitspace: {
    fundo: "bg-[#111417]",
    brilho: "bg-[radial-gradient(circle_at_80%_0%,rgba(219,16,33,0.3),transparent_60%)]",
    moldura: "from-[#F24F5D]/70 via-[#DB1021]/25 to-[#111417]",
    sombra: "shadow-[0_22px_60px_rgba(219,16,33,0.2)]",
    destaque: "text-[#F7858F]",
    fundoIcone: "bg-[#DB1021]/20",
    botao: "bg-[#DB1021] hover:bg-[#B00D1A] focus-visible:outline-[#F24F5D]",
    logo: { src: "/sistemas/pitspace/palavra-branco.png", w: 441, h: 96 },
    simbolo: { src: "/sistemas/pitspace/p-original.png", w: 192, h: 188 },
    Cena: OficinaPitSpace,
    icones: [
      // carro (OS pela placa)
      <svg key="a" className={ic} {...tr}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 6H8.3a2 2 0 0 0-1.6.8L4 10l-1.5.6C1.7 10.9 1 11.7 1 12.6V16c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M9 17h6" /></svg>,
      // celular com check (aprovação pelo link)
      <svg key="b" className={ic} {...tr}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="m9 12 2 2 4-4" /></svg>,
      // chave inglesa (no box)
      <svg key="c" className={ic} {...tr}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    ],
  },
};

const SELOS: Record<Destaque["status"], string> = {
  "Em produção": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Em teste": "border-sky-400/30 bg-sky-400/10 text-sky-300",
  "Em desenvolvimento": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  "Em breve": "border-white/20 bg-white/10 text-white/80",
};

export default function CartaoSistema({ d }: { d: Destaque }) {
  const t = TEMAS[d.cartao];
  const Cena = t.Cena;

  return (
    <div className={`h-full rounded-3xl bg-gradient-to-br p-[1.5px] ${t.moldura} ${t.sombra}`}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] ${t.fundo} text-[#D9D6E8] lg:grid lg:grid-cols-[0.95fr_1.05fr]`}
      >
        <div aria-hidden className={`pointer-events-none absolute inset-0 ${t.brilho}`} />

        {/* mini-cena animada */}
        <div
          className={`relative h-[260px] border-b border-white/10 sm:h-[280px] lg:order-2 lg:h-auto lg:min-h-[400px] lg:border-b-0 lg:border-l`}
        >
          <Cena />
        </div>

        <div className="relative flex flex-1 flex-col p-7 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="m-0 flex items-center gap-2.5">
              {t.simbolo && <Image src={t.simbolo.src} alt="" width={t.simbolo.w} height={t.simbolo.h} className="h-10 w-auto" />}
              <Image
                src={t.logo.src}
                alt={d.nome}
                width={t.logo.w}
                height={t.logo.h}
                unoptimized={t.logo.src.endsWith(".svg")}
                className={t.logo.classe ?? (t.simbolo ? "h-8 w-auto" : "h-10 w-auto")}
              />
            </h3>
            <span
              className={`ml-auto rounded-full border px-3 py-1 font-mono text-[0.62rem] font-semibold tracking-wider uppercase ${SELOS[d.status]}`}
            >
              {d.status}
            </span>
          </div>

          <p className="mt-5 text-[1.12rem] leading-relaxed text-white lg:text-[1.2rem]">
            {d.frase}
          </p>

          <ul className="mt-6 space-y-3">
            {d.recursos.map((r, i) => (
              <li key={r} className="flex items-center gap-3 text-[0.94rem] text-[#D2CFE3]">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${t.fundoIcone} ${t.destaque}`}>
                  {t.icones[i] ?? t.icones[0]}
                </span>
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {/* Sistema cujo acesso JÁ é o site de apresentação: um botão só. */}
            {d.casePagina && d.casePagina !== d.url && (
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
