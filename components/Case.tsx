import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Rastreado from "./Rastreado";

/* Peças reutilizáveis das páginas de apresentação de sistema
   (/elaraspace, /pitspace), no mesmo molde do case do DietSpace. */

export function Migalha({ nome }: { nome: string }) {
  return (
    <nav aria-label="Você está em" className="mb-6 font-mono text-xs text-suave">
      <a href="/" className="transition-colors hover:text-roxo">Início</a>
      <span className="mx-2">/</span>
      <a href="/#sistemas" className="transition-colors hover:text-roxo">Sistemas</a>
      <span className="mx-2">/</span>
      <span className="text-roxo">{nome}</span>
    </nav>
  );
}

export const IconeSaida = (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

/* Navegador com a tela do sistema + celular flutuante */
export function Vitrine({
  dominio,
  tela,
  altTela,
  celular,
  altCelular,
  prioridade = false,
}: {
  dominio: string;
  tela: string;
  altTela: string;
  celular?: string;
  altCelular?: string;
  prioridade?: boolean;
}) {
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-2xl border border-linha bg-cartao shadow-[0_24px_60px_rgba(29,18,51,0.18)]">
        <div className="flex items-center gap-2 border-b border-linha bg-cartao px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="mx-auto min-w-0 truncate rounded-md border border-linha bg-fundo-suave px-4 py-0.5 font-mono text-[0.7rem] text-suave">
            {dominio}
          </span>
        </div>
        <Image
          src={tela}
          alt={altTela}
          width={1600}
          height={1000}
          priority={prioridade}
          sizes="(min-width: 1024px) 44vw, 92vw"
          className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      {celular && (
        <div className="absolute -bottom-10 -left-3 w-[100px] rotate-[-7deg] overflow-hidden rounded-[1.3rem] border-[5px] border-cartao shadow-[0_20px_46px_rgba(29,18,51,0.35)] transition-transform duration-500 group-hover:rotate-[-3deg] sm:w-[124px]">
          <Image src={celular} alt={altCelular ?? ""} width={520} height={1125} sizes="124px" className="w-full" />
        </div>
      )}
    </div>
  );
}

export function DesafioSolucao({
  desafio,
  solucao,
}: {
  desafio: { titulo: string; texto: ReactNode };
  solucao: { titulo: string; texto: ReactNode };
}) {
  return (
    <section className="border-y border-linha bg-fundo-suave py-20">
      <div className="mx-auto grid w-[min(1160px,92%)] gap-8 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-2xl border border-linha bg-cartao p-8">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">O desafio</p>
            <h2 className="mt-3 font-heading text-xl font-bold text-tinta">{desafio.titulo}</h2>
            <div className="mt-3 space-y-3 text-suave">{desafio.texto}</div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="h-full rounded-2xl border border-roxo/25 bg-cartao p-8 shadow-[0_12px_36px_rgba(124,34,206,0.1)]">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-roxo uppercase">A solução</p>
            <h2 className="mt-3 font-heading text-xl font-bold text-tinta">{solucao.titulo}</h2>
            <div className="mt-3 space-y-3 text-suave">{solucao.texto}</div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function TituloSecao({ sobre, titulo, children }: { sobre?: string; titulo: string; children?: ReactNode }) {
  return (
    <Reveal className="max-w-2xl">
      {sobre && (
        <p className="font-mono text-xs font-semibold tracking-[0.14em] text-roxo uppercase">{sobre}</p>
      )}
      <h2 className="mt-2 font-display text-[1.8rem] leading-tight font-bold text-tinta md:text-[2.2rem]">{titulo}</h2>
      {children && <p className="mt-3 text-lg text-suave">{children}</p>}
    </Reveal>
  );
}

export type Bloco = { titulo: string; texto: string; icone: ReactNode };

export function GradeBlocos({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blocos.map((b, i) => (
        <Reveal key={b.titulo} delay={(i % 3) * 0.06} className="h-full">
          <article className="h-full rounded-2xl border border-linha bg-cartao p-6 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1 hover:border-roxo/40">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-roxo-suave text-roxo">
              {b.icone}
            </span>
            <h3 className="font-heading text-[1rem] font-semibold text-tinta">{b.titulo}</h3>
            <p className="mt-2 text-sm text-suave">{b.texto}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Galeria({
  itens,
  nota,
  colunas = "md:grid-cols-2",
}: {
  itens: { src: string; alt: string; legenda: string; celular?: boolean }[];
  nota?: string;
  colunas?: string;
}) {
  return (
    <>
      <div className={`mt-10 grid items-start gap-6 ${colunas}`}>
        {itens.map((it, i) => (
          <Reveal key={it.src} delay={i * 0.08}>
            <figure className={it.celular ? "mx-auto max-w-[260px]" : ""}>
              <div
                className={`overflow-hidden border border-linha bg-cartao shadow-[0_16px_40px_rgba(29,18,51,0.12)] ${
                  it.celular ? "rounded-[1.6rem] border-[6px] border-cartao" : "rounded-2xl"
                }`}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={it.celular ? 520 : 1600}
                  height={it.celular ? 1125 : 1000}
                  sizes={it.celular ? "260px" : "(min-width: 768px) 40vw, 92vw"}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-suave">{it.legenda}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {nota && <p className="mt-6 font-mono text-xs text-suave">{nota}</p>}
    </>
  );
}

export function Stack({ itens }: { itens: string[] }) {
  return (
    <Reveal delay={0.1}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">
          Construído com
        </span>
        {itens.map((t) => (
          <span key={t} className="rounded-full border border-roxo/25 bg-roxo-suave px-3.5 py-1 text-xs font-medium text-roxo">
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export function ChamadaFinal({
  titulo,
  texto,
  zap,
  servico,
  sistema,
  url,
  rotuloAcesso,
}: {
  titulo: string;
  texto: string;
  zap: string;
  servico: string;
  sistema: string;
  url: string;
  rotuloAcesso: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2A1052] via-[#1D0B33] to-[#160A2C] py-20 text-[#C9BCE4]">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(157,78,221,0.18),transparent_55%)]" />
      <div className="relative mx-auto w-[min(1160px,92%)] text-center">
        <Reveal>
          <h2 className="font-display text-[1.9rem] leading-tight font-bold text-creme md:text-[2.4rem]">{titulo}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#A895CC]">{texto}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Rastreado
              evento="orcamento_servico"
              dados={{ servico, origem: "case-rodape" }}
              href={zap}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(124,34,206,0.4)] transition-all hover:-translate-y-0.5"
            >
              Conversar sobre o meu projeto
            </Rastreado>
            <Rastreado
              evento="acessar_sistema"
              dados={{ sistema, origem: "case-rodape" }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-creme transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:bg-white/5"
            >
              {rotuloAcesso}
              {IconeSaida}
            </Rastreado>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
