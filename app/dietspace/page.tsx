import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Flutuantes from "@/components/Flutuantes";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Rastreado from "@/components/Rastreado";
import { Rotulo } from "@/components/Secao";
import ConsultorioDietSpace from "@/components/cartoes/ConsultorioDietSpace";
import {
  ChamadaFinal,
  DesafioSolucao,
  GradeBlocos,
  IconeSaida,
  Migalha,
  Stack,
  TituloSecao,
  Vitrine,
  type Bloco,
} from "@/components/Case";
import { SITE } from "@/data/config";

const ENDERECO = "https://www.dietspace.com.br";

export const metadata: Metadata = {
  title: "DietSpace — sistema para consultório de nutrição",
  description:
    "DietSpace: sistema completo para consultório de nutrição. Anamnese, avaliação antropométrica, plano alimentar com mais de 10 mil alimentos, PDFs com a marca do consultório, agenda com lembretes, teleconsulta e app da paciente.",
  alternates: { canonical: "/dietspace" },
  openGraph: {
    title: "DietSpace · PazConcept",
    description:
      "Da anamnese ao plano na mão da paciente: o consultório de nutrição inteiro num só lugar.",
    url: "/dietspace",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept" }],
  },
};

const s = "h-5 w-5";
const sv = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* A consulta, de ponta a ponta: cada etapa alimenta a seguinte */
const FLUXO = [
  { nome: "Anamnese", texto: "Histórico clínico, alergias e restrições — que viram alertas no plano." },
  { nome: "Avaliação", texto: "Dobras, IMC, percentual de gordura e gasto energético calculados na hora." },
  { nome: "Plano alimentar", texto: "Refeições com metas de macros em tempo real e substituições." },
  { nome: "Documentos", texto: "Plano, lista de compras e recibo em PDF, com a marca do consultório." },
  { nome: "Acompanhamento", texto: "A paciente registra diário, água e peso no app; a nutricionista vê a evolução." },
];

const BLOCOS: Bloco[] = [
  {
    titulo: "Anamnese e avaliação completa",
    texto:
      "Protocolos de dobras (Jackson-Pollock, Durnin, Slaughter), IMC, percentual de gordura e cálculo energético (Mifflin, Harris-Benedict, FAO/OMS), com curvas de crescimento e de gestante.",
    icone: <svg className={s} {...sv}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6M9 16h4" /></svg>,
  },
  {
    titulo: "Plano alimentar",
    texto:
      "Mais de 10 mil alimentos brasileiros (base TACO), medidas caseiras, metas de macros em tempo real, substituições e modelos para reaproveitar.",
    icone: <svg className={s} {...sv}><path d="M12 6.5C10.5 5 8 5 6.5 6.2 4.4 8 4.6 12 6.4 15.6 7.8 18.4 9.8 21 12 20c2.2 1 4.2-1.6 5.6-4.4 1.8-3.6 2-7.6-.1-9.4C16 5 13.5 5 12 6.5Z" /><path d="M12 6.5c0-2 1-3.5 3-4.5" /></svg>,
  },
  {
    titulo: "Sugestão do dia com IA",
    texto:
      "A IA propõe o dia inteiro e o motor de cálculo fecha as metas. A nutricionista revisa e corrige — e o sistema aprende com as correções dela.",
    icone: <svg className={s} {...sv}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 17v4M17 19h4" /></svg>,
  },
  {
    titulo: "Documentos em PDF",
    texto:
      "Plano, lista de compras, contrato, recibo, termo de consentimento e evolução — com a marca do consultório, em um clique.",
    icone: <svg className={s} {...sv}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15h6M9 18h4" /></svg>,
  },
  {
    titulo: "Agenda, lembretes e teleconsulta",
    texto:
      "Consultas e retornos com lembrete automático por notificação e e-mail. E, quando a paciente não pode ir, a consulta acontece por vídeo.",
    icone: <svg className={s} {...sv}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>,
  },
  {
    titulo: "App da paciente",
    texto:
      "Diário alimentar, água, peso e evolução na palma da mão. Instala direto do navegador, como um aplicativo, sem passar por loja.",
    icone: <svg className={s} {...sv}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
];

const EXTRAS = ["Receitas", "Mensagens", "Orientações", "Financeiro", "Relatórios", "Busca com Ctrl+K", "Versões com \"O que mudou\"", "Tema escuro"];

const DIFERENCIAIS = [
  {
    titulo: "Cálculo de verdade",
    texto: "Os protocolos que a nutrição usa, implementados um a um e cobertos por testes automatizados.",
  },
  {
    titulo: "A cara do consultório",
    texto: "Documento entregue à paciente sai com a marca da nutricionista: quem aparece é o consultório, não o sistema.",
  },
  {
    titulo: "Cada dado nasce uma vez",
    texto: "A anamnese alimenta a avaliação, a avaliação alimenta o plano, e o plano chega ao app. Nada é redigitado.",
  },
  {
    titulo: "Dados de saúde protegidos",
    texto: "Login seguro, áreas separadas para nutricionista e paciente e cópias automáticas do banco.",
  },
];

const STACK = ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma 7", "PostgreSQL", "PWA", "Vercel"];

export default function ApresentacaoDietSpace() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi a apresentação do DietSpace e quero um sistema para o meu negócio."
  )}`;

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DietSpace",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: ENDERECO,
    creator: { "@type": "Organization", name: "PazConcept", url: "https://www.pazconcept.com.br" },
    description:
      "Sistema para consultório de nutrição: anamnese, avaliação antropométrica, planos alimentares, PDFs, agenda, teleconsulta e app da paciente.",
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
            className="absolute -top-40 -right-40 h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(136,52,244,0.14),transparent_62%)]"
          />
          <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Migalha nome="DietSpace" />

              <div className="flex flex-wrap items-center gap-3">
                <Rotulo>Apresentação</Rotulo>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[0.66rem] font-semibold tracking-wider text-emerald-700 uppercase dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300">
                  Em produção
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/dietspace-icon.png"
                  alt="Ícone do DietSpace"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-[0_10px_26px_rgba(136,52,244,0.3)]"
                />
                <h1 className="font-display text-[2.2rem] leading-[1.08] font-bold text-tinta sm:text-5xl">
                  DietSpace
                </h1>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 rotate-[-1deg] font-script text-[1.6rem] text-roxo-claro">
                o consultório de nutrição, inteiro num só lugar
              </p>

              <p className="mt-5 max-w-xl text-lg text-suave">
                O DietSpace nasceu de um problema real: nutricionista gastando
                horas com ficha de papel, planilha solta e plano montado à mão.
                Hoje ele está em produção num consultório de verdade — da
                anamnese ao plano alimentar na mão da paciente.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Rastreado
                  evento="acessar_sistema"
                  dados={{ sistema: "DietSpace", origem: "case" }}
                  href={ENDERECO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
                >
                  Acessar o DietSpace
                  {IconeSaida}
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

            <Reveal delay={0.15}>
              <Vitrine
                dominio="www.dietspace.com.br"
                tela="/dietspace-desktop.jpg"
                altTela="Página do DietSpace no computador"
                celular="/dietspace-mobile.jpg"
                altCelular="DietSpace no celular"
                prioridade
              />
            </Reveal>
          </div>
        </section>

        <DesafioSolucao
          desafio={{
            titulo: "Consultório no papel e na planilha",
            texto: (
              <p>
                Ficha de anamnese impressa, avaliação em planilha, plano montado
                no editor de texto e agenda no caderno. Cada consulta exigia
                juntar informação espalhada em cinco lugares — e a paciente saía
                com um PDF genérico.
              </p>
            ),
          }}
          solucao={{
            titulo: "Um sistema que acompanha a consulta",
            texto: (
              <p>
                O DietSpace concentra tudo: a anamnese alimenta a avaliação, a
                avaliação alimenta o plano, e o plano chega à paciente num app
                com a marca do consultório. O que era retrabalho virou fluxo — e
                a nutricionista voltou a olhar para a paciente, não para o papel.
              </p>
            ),
          }}
        />

        {/* Como funciona */}
        <section className="py-20">
          <div className="mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-2">
            <div>
              <TituloSecao sobre="Como funciona" titulo="Uma consulta, do começo ao fim" />
              <ol className="mt-8 space-y-3">
                {FLUXO.map((f, i) => (
                  <Reveal key={f.nome} delay={i * 0.06}>
                    <li className="flex gap-4 rounded-2xl border border-linha bg-cartao p-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white ${
                          i === FLUXO.length - 1 ? "bg-[#03864A]" : "bg-[#8834F4]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-[1rem] font-semibold text-tinta">{f.nome}</h3>
                        <p className="mt-1 text-sm text-suave">{f.texto}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal delay={0.1}>
              <div className="relative h-[340px] overflow-hidden rounded-3xl bg-[#131826] shadow-[0_24px_60px_rgba(136,52,244,0.22)] sm:h-[380px]">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(136,52,244,0.34),transparent_58%),radial-gradient(circle_at_0%_100%,rgba(3,186,102,0.14),transparent_50%)]"
                />
                <ConsultorioDietSpace />
              </div>
              <p className="mt-3 text-center font-mono text-xs text-suave">
                Ilustração: o plano se monta, a agenda confirma e a paciente registra a água.
              </p>
            </Reveal>
          </div>
        </section>

        {/* O que o sistema faz */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="O que o DietSpace faz" titulo="Tudo o que a consulta pede, num lugar só" />
            <GradeBlocos blocos={BLOCOS} />
            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {EXTRAS.map((e) => (
                  <li key={e} className="rounded-full border border-linha bg-cartao px-3.5 py-1.5 text-sm text-grafite">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Diferenciais" titulo="Feito para o consultório de verdade" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {DIFERENCIAIS.map((d, i) => (
                <Reveal key={d.titulo} delay={(i % 2) * 0.08} className="h-full">
                  <article className="flex h-full gap-4 rounded-2xl border border-linha bg-cartao p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#A464F7] to-[#630BD3] font-mono text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-[1.05rem] font-semibold text-tinta">{d.titulo}</h3>
                      <p className="mt-2 text-sm text-suave">{d.texto}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <Stack itens={STACK} />
            </div>
          </div>
        </section>

        <ChamadaFinal
          titulo="Seu negócio merece um sistema assim"
          texto="Do consultório à oficina: a PazConcept transforma o processo do seu dia a dia num sistema sob medida."
          zap={zap}
          servico="sistema-como-dietspace"
          sistema="DietSpace"
          url={ENDERECO}
          rotuloAcesso="Acessar o DietSpace"
        />
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
