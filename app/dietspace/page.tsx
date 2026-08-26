import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Flutuantes from "@/components/Flutuantes";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Rastreado from "@/components/Rastreado";
import { Rotulo } from "@/components/Secao";
import { SITE } from "@/data/config";

export const metadata: Metadata = {
  title: "Case DietSpace — sistema para consultório de nutrição",
  description:
    "Como a PazConcept criou o DietSpace: sistema completo para consultório de nutrição, da anamnese ao plano alimentar na mão da paciente. Veja o case e peça um sistema para o seu negócio.",
  alternates: { canonical: "/dietspace" },
  openGraph: {
    title: "Case DietSpace · PazConcept",
    description:
      "Da anamnese ao plano na mão da paciente: o sistema de nutrição criado pela PazConcept.",
    url: "/dietspace",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept" }],
  },
};

const RECURSOS = [
  {
    titulo: "Anamnese e avaliação completa",
    texto:
      "Histórico clínico, dobras cutâneas, IMC, percentual de gordura e cálculo energético — com alertas que acompanham a paciente no plano.",
  },
  {
    titulo: "Plano alimentar inteligente",
    texto:
      "Mais de 10 mil alimentos brasileiros (base TACO), medidas caseiras, metas de macros em tempo real e substituições.",
  },
  {
    titulo: "Documentos profissionais em PDF",
    texto:
      "Plano, lista de compras, contrato, recibo e termos — todos com a marca da nutricionista, gerados em um clique.",
  },
  {
    titulo: "Agenda com lembretes",
    texto:
      "Consultas e retornos com lembrete automático — menos falta, mais consultório cheio.",
  },
  {
    titulo: "App da paciente",
    texto:
      "Diário alimentar, água, peso e evolução na palma da mão — instala direto do navegador, como um aplicativo.",
  },
  {
    titulo: "Seguro desde o início",
    texto:
      "Dados de saúde protegidos com login seguro, criptografia e cópias automáticas.",
  },
];

const STACK = ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma", "PostgreSQL", "Vercel"];

export default function CaseDietSpace() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi o case do DietSpace e quero um sistema para o meu negócio."
  )}`;

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DietSpace",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: "https://www.dietspace.com.br",
    creator: { "@type": "Organization", name: "PazConcept", url: "https://www.pazconcept.com.br" },
    description:
      "Sistema para consultório de nutrição: anamnese, avaliação antropométrica, planos alimentares, PDFs, agenda e portal da paciente.",
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
          <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <nav aria-label="Você está em" className="mb-6 font-mono text-xs text-suave">
                <a href="/" className="transition-colors hover:text-roxo">Início</a>
                <span className="mx-2">/</span>
                <a href="/#sistemas" className="transition-colors hover:text-roxo">Sistemas</a>
                <span className="mx-2">/</span>
                <span className="text-roxo">DietSpace</span>
              </nav>

              <div className="flex flex-wrap items-center gap-3">
                <Rotulo>Case de sucesso</Rotulo>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[0.66rem] font-semibold tracking-wider text-blue-600 uppercase dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-300">
                  Em teste
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/dietspace-icon.png"
                  alt="Ícone do DietSpace"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-[0_10px_26px_rgba(29,18,51,0.2)]"
                />
                <h1 className="font-display text-[2.2rem] leading-[1.08] font-bold text-tinta sm:text-5xl">
                  DietSpace
                </h1>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 rotate-[-1deg] font-script text-[1.6rem] text-roxo-claro">
                o consultório de nutrição, inteiro num só lugar
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                </svg>
              </p>

              <p className="mt-5 max-w-xl text-lg text-suave">
                O DietSpace nasceu de um problema real: nutricionistas gastando
                horas com fichas de papel, planilhas soltas e planos montados à
                mão. A PazConcept transformou esse dia a dia num sistema único —
                da anamnese ao plano alimentar na mão da paciente.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Rastreado
                  evento="acessar_sistema"
                  dados={{ sistema: "DietSpace", origem: "case" }}
                  href="https://www.dietspace.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
                >
                  Acessar o DietSpace
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </Rastreado>
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: "sistema-como-dietspace", origem: "case" }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-linha bg-cartao px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
                >
                  Quero um sistema assim
                </Rastreado>
              </div>
            </Reveal>

            {/* Vitrine com as telas reais */}
            <Reveal delay={0.15}>
              <div className="group relative">
                <div className="overflow-hidden rounded-2xl border border-linha bg-cartao shadow-[0_24px_60px_rgba(29,18,51,0.18)]">
                  <div className="flex items-center gap-2 border-b border-linha bg-cartao px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                    <span className="mx-auto min-w-0 truncate rounded-md border border-linha bg-fundo-suave px-4 py-0.5 font-mono text-[0.7rem] text-suave">
                      www.dietspace.com.br
                    </span>
                  </div>
                  <Image
                    src="/dietspace-desktop.jpg"
                    alt="Tela do DietSpace no computador"
                    width={1280}
                    height={800}
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -bottom-10 -left-3 w-[100px] rotate-[-7deg] overflow-hidden rounded-[1.3rem] border-[5px] border-cartao shadow-[0_20px_46px_rgba(29,18,51,0.35)] transition-transform duration-500 group-hover:rotate-[-3deg] sm:w-[118px]">
                  <Image
                    src="/dietspace-mobile.jpg"
                    alt="DietSpace no celular"
                    width={390}
                    height={844}
                    sizes="118px"
                    className="w-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Desafio → solução */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto grid w-[min(1160px,92%)] gap-8 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl border border-linha bg-cartao p-8">
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">
                  O desafio
                </p>
                <h2 className="mt-3 font-heading text-xl font-bold text-tinta">
                  Consultório no papel e na planilha
                </h2>
                <p className="mt-3 text-suave">
                  Fichas de anamnese impressas, avaliações em planilhas, planos
                  montados no editor de texto e agenda num caderno. Cada consulta
                  exigia juntar informação espalhada em cinco lugares — e a
                  paciente saía com um PDF genérico.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="h-full rounded-2xl border border-roxo/25 bg-cartao p-8 shadow-[0_12px_36px_rgba(124,34,206,0.1)]">
                <p className="font-mono text-xs font-semibold tracking-[0.14em] text-roxo uppercase">
                  A solução
                </p>
                <h2 className="mt-3 font-heading text-xl font-bold text-tinta">
                  Um sistema que acompanha a consulta
                </h2>
                <p className="mt-3 text-suave">
                  O DietSpace concentra tudo: a anamnese alimenta a avaliação, a
                  avaliação alimenta o plano, e o plano chega à paciente num app
                  com a marca do consultório. O que era retrabalho virou fluxo —
                  e a nutricionista voltou a olhar para a paciente, não para o papel.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* O que o sistema faz */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <Reveal>
              <h2 className="font-display text-[1.8rem] leading-tight font-bold text-tinta md:text-[2.2rem]">
                O que o DietSpace faz
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RECURSOS.map((r, i) => (
                <Reveal key={r.titulo} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-linha bg-cartao p-6 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1 hover:border-roxo/40">
                    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-roxo-suave">
                      <svg className="h-4 w-4 text-roxo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <h3 className="font-heading text-[1rem] font-semibold text-tinta">{r.titulo}</h3>
                    <p className="mt-2 text-sm text-suave">{r.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="mr-2 font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">
                  Construído com
                </span>
                {STACK.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-roxo/25 bg-roxo-suave px-3.5 py-1 text-xs font-medium text-roxo"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
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
                Seu negócio merece um sistema assim
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#A895CC]">
                Do consultório à oficina: a PazConcept transforma o processo do
                seu dia a dia num sistema sob medida.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: "sistema-como-dietspace", origem: "case-rodape" }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(124,34,206,0.4)] transition-all hover:-translate-y-0.5"
                >
                  Conversar sobre o meu projeto
                </Rastreado>
                <a
                  href="/servicos/sistemas-sob-medida"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-creme transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:bg-white/5"
                >
                  Ver o serviço de sistemas
                </a>
              </div>
            </Reveal>
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
