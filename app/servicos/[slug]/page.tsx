import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Flutuantes from "@/components/Flutuantes";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Rastreado from "@/components/Rastreado";
import { Rotulo } from "@/components/Secao";
import { SERVICOS } from "@/data/servicos";
import { SITE } from "@/data/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICOS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.titulo,
    description: `${s.resumo} Peça um orçamento à PazConcept.`,
    alternates: { canonical: `/servicos/${s.slug}` },
    openGraph: {
      title: s.titulo,
      description: s.resumo,
      url: `/servicos/${s.slug}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept" }],
    },
  };
}

const IconeEstrela = (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
  </svg>
);

export default async function PaginaServico({ params }: Props) {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) notFound();

  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(servico.assunto)}`;
  const outros = SERVICOS.filter((s) => s.slug !== servico.slug);

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servico.titulo,
    description: servico.resumo,
    provider: { "@type": "Organization", name: "PazConcept", url: "https://www.pazconcept.com.br" },
    areaServed: "Brasil",
    url: `https://www.pazconcept.com.br/servicos/${servico.slug}`,
  };

  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="inicio">
        {/* Abertura */}
        <section className="relative overflow-hidden pt-36 pb-16">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(124,34,206,0.13),transparent_62%)]"
          />
          <div className="relative mx-auto w-[min(1160px,92%)]">
            <Reveal>
              <nav aria-label="Você está em" className="mb-6 font-mono text-xs text-suave">
                <a href="/" className="transition-colors hover:text-roxo">Início</a>
                <span className="mx-2">/</span>
                <a href="/#servicos" className="transition-colors hover:text-roxo">Serviços</a>
                <span className="mx-2">/</span>
                <span className="text-roxo">{servico.nome}</span>
              </nav>

              <Rotulo>Serviço</Rotulo>
              <h1 className="mt-5 max-w-3xl font-display text-[2.2rem] leading-[1.1] font-bold text-tinta sm:text-5xl">
                {servico.titulo}
              </h1>
              <p className="mt-3 inline-flex items-center gap-2 rotate-[-1deg] font-script text-[1.6rem] text-roxo-claro">
                {servico.frase}
                {IconeEstrela}
              </p>
              <p className="mt-4 max-w-2xl text-lg text-suave">{servico.resumo}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: servico.slug }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
                >
                  Pedir um orçamento
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4 20-7z" />
                  </svg>
                </Rastreado>
                <a
                  href="/#servicos"
                  className="inline-flex items-center gap-2 rounded-xl border border-linha bg-cartao px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
                >
                  Ver todos os serviços
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <Reveal>
              <h2 className="font-display text-[1.8rem] leading-tight font-bold text-tinta md:text-[2.2rem]">
                O que você recebe
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {servico.entregas.map((e, i) => (
                <Reveal key={e.titulo} delay={i * 0.08}>
                  <article className="h-full rounded-2xl border border-linha bg-cartao p-7 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1 hover:border-roxo/40">
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${servico.icone_cor} [&_svg]:h-5 [&_svg]:w-5`}>
                      {servico.icone}
                    </div>
                    <h3 className="font-heading text-[1.05rem] font-semibold text-tinta">{e.titulo}</h3>
                    <p className="mt-2 text-[0.94rem] text-suave">{e.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <Reveal>
              <h2 className="font-display text-[1.8rem] leading-tight font-bold text-tinta md:text-[2.2rem]">
                Como funciona
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {servico.processo.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 0.08}>
                  <li className="relative h-full rounded-2xl border border-linha bg-cartao p-6 pt-7">
                    <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro font-mono text-sm font-bold text-white shadow-[0_6px_16px_rgba(124,34,206,0.35)]">
                      {i + 1}
                    </span>
                    <h3 className="font-heading font-semibold text-tinta">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-suave">{p.texto}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Chamada final */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2A1052] via-[#1D0B33] to-[#160A2C] py-20 text-[#C9BCE4]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(157,78,221,0.18),transparent_55%)]"
          />
          <div className="relative mx-auto w-[min(1160px,92%)] text-center">
            <Reveal>
              <h2 className="font-display text-[1.9rem] leading-tight font-bold text-creme md:text-[2.4rem]">
                Vamos tirar o seu projeto do papel?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#A895CC]">
                Me conte o que você precisa — a conversa abre direto no WhatsApp,
                sem compromisso.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: servico.slug, origem: "rodape" }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(124,34,206,0.4)] transition-all hover:-translate-y-0.5"
                >
                  Chamar no WhatsApp
                </Rastreado>
                <a
                  href="/dietspace"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-creme transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:bg-white/5"
                >
                  Ver um sistema que criamos
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outros serviços */}
        <section className="py-16">
          <div className="mx-auto w-[min(1160px,92%)]">
            <p className="mb-5 font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">
              Outros serviços
            </p>
            <div className="flex flex-wrap gap-3">
              {outros.map((o) => (
                <a
                  key={o.slug}
                  href={`/servicos/${o.slug}`}
                  className="rounded-full border border-linha bg-cartao px-5 py-2.5 text-sm font-medium text-grafite transition-all hover:-translate-y-0.5 hover:border-roxo hover:text-roxo"
                >
                  {o.nome}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Flutuantes />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
    </>
  );
}
