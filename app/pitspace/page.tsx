import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Flutuantes from "@/components/Flutuantes";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Rastreado from "@/components/Rastreado";
import { Rotulo } from "@/components/Secao";
import {
  ChamadaFinal,
  DesafioSolucao,
  Galeria,
  IconeSaida,
  Migalha,
  Stack,
  TituloSecao,
  Vitrine,
} from "@/components/Case";
import { SITE } from "@/data/config";

const ENDERECO = "https://pitspace.pazconcept.com.br";

export const metadata: Metadata = {
  title: "PitSpace — sistema para oficinas mecânicas",
  description:
    "PitSpace: sistema para oficinas. A OS nasce pela placa, o cliente aprova o orçamento pelo link, o mecânico registra pelo celular no box e estoque e caixa fecham sem redigitar nada.",
  alternates: { canonical: "/pitspace" },
  openGraph: {
    title: "PitSpace · PazConcept",
    description: "Mecânica sob controle: do portão ao caixa num sistema só.",
    url: "/pitspace",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept" }],
  },
};

/* As cinco etapas do carro (mesma linguagem da página do produto) */
const CAMINHO = [
  { etapa: "Chegada", texto: "A placa abre a ficha do veículo, com a vistoria de entrada e as fotos do estado em que ele chegou." },
  { etapa: "Diagnóstico", texto: "O mecânico anota pelo celular, no box, com o carro na frente — e o achado vira item do orçamento." },
  { etapa: "Orçamento", texto: "O cliente aprova pelo link, item por item, sem instalar nada e sem senha. A versão fica selada." },
  { etapa: "Execução", texto: "A peça sai do estoque com movimento registrado: o saldo da tela continua sendo o da prateleira." },
  { etapa: "Caixa", texto: "Faturou, recebeu, fechou. A gaveta tem sessão, conferência e a diferença registrada quando falta." },
];

const GARANTIAS = [
  {
    titulo: "Orçamento selado",
    texto: "Enviado, ele congela no banco. Mudar preço cria outra versão, e a anterior continua consultável como prova do que o cliente aprovou.",
  },
  {
    titulo: "Custo congelado no item",
    texto: "O custo de cada peça é gravado na OS na hora da baixa. Aumento de fornecedor no mês que vem não reescreve a margem do mês passado.",
  },
  {
    titulo: "Dinheiro sem borracha",
    texto: "Correção é lançamento inverso, nunca apagamento. O livro mostra o erro e o conserto — que é o que vale numa conferência.",
  },
  {
    titulo: "Passaporte do veículo",
    texto: "O histórico não fica preso na oficina: vira documento do carro, num link e num PDF que o dono leva embora.",
  },
];

const RAMOS = [
  "Mecânica geral",
  "Moto",
  "Auto elétrica e injeção",
  "Funilaria e pintura",
  "Lava-jato e estética",
  "Guincho",
  "Retífica",
  "Gestão de frota",
];

const STACK = ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "Tailwind v4", "PWA", "Vercel"];

export default function ApresentacaoPitSpace() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi a apresentação do PitSpace e quero conversar sobre um sistema para a minha oficina."
  )}`;

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PitSpace",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: ENDERECO,
    creator: { "@type": "Organization", name: "PazConcept", url: "https://www.pazconcept.com.br" },
    description:
      "Sistema para oficinas: ordem de serviço pela placa, orçamento aprovado pelo cliente num link, app do mecânico, estoque e caixa.",
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
            className="absolute -top-40 -right-40 h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(219,16,33,0.1),transparent_62%)]"
          />
          <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Migalha nome="PitSpace" />

              <div className="flex flex-wrap items-center gap-3">
                <Rotulo>Apresentação</Rotulo>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-[0.66rem] font-semibold tracking-wider text-amber-700 uppercase dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300">
                  Em desenvolvimento
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111417] shadow-[0_10px_26px_rgba(219,16,33,0.3)]">
                  <Image src="/sistemas/pitspace/p-original.png" alt="Símbolo do PitSpace" width={40} height={39} />
                </span>
                <h1 className="font-display text-[2.2rem] leading-[1.08] font-bold text-tinta sm:text-5xl">
                  PitSpace
                </h1>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 rotate-[-1deg] font-script text-[1.6rem] text-[#DB1021] dark:text-[#F24F5D]">
                mecânica sob controle
              </p>

              <p className="mt-5 max-w-xl text-lg text-suave">
                Uma oficina não perde dinheiro por falta de serviço: perde
                informação entre as etapas. O PitSpace faz cada dado nascer uma
                vez só — o carro entra pela placa, o cliente aprova pelo link, a
                peça baixa sozinha e a conta fecha.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Rastreado
                  evento="acessar_sistema"
                  dados={{ sistema: "PitSpace", origem: "case" }}
                  href={ENDERECO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
                >
                  Acessar o PitSpace
                  {IconeSaida}
                </Rastreado>
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: "sistema-como-pitspace", origem: "case" }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-linha bg-cartao px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
                >
                  Quero para a minha oficina
                </Rastreado>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Vitrine
                dominio="pitspace.pazconcept.com.br"
                tela="/sistemas/pitspace/painel.webp"
                altTela="Dashboard do PitSpace: ordens de serviço por etapa, valores e o que está travado"
                celular="/sistemas/pitspace/orcamento-celular.webp"
                altCelular="Orçamento aberto no celular do cliente, pronto para aprovar"
                prioridade
              />
            </Reveal>
          </div>
        </section>

        <DesafioSolucao
          desafio={{
            titulo: "O mesmo carro anotado em cinco lugares",
            texto: (
              <p>
                Caderno, WhatsApp, planilha de orçamento, nota. O orçamento
                enviado que ninguém acompanhou, o carro parado esperando peça
                que só o mecânico sabe, o &ldquo;esse arranhão já estava?&rdquo;
                sem foto de entrada — e o histórico que some quando o cliente
                volta meses depois.
              </p>
            ),
          }}
          solucao={{
            titulo: "Um registro que viaja do portão ao caixa",
            texto: (
              <p>
                A placa digitada no check-in aparece no diagnóstico, no
                orçamento, na OS, no estoque e no caixa. Todo orçamento tem dono,
                prazo e status; toda peça tem lançamento; toda alteração tem
                autor. O dono abre o painel e vê onde a oficina está travada.
              </p>
            ),
          }}
        />

        {/* O caminho do carro */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="O caminho do carro" titulo="Cinco etapas. Uma tela cada." />
            <ol className="relative mt-12 grid gap-4 lg:grid-cols-5">
              <span
                aria-hidden
                className="absolute top-[22px] right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-[#F24F5D] to-[#DB1021] opacity-40 lg:block"
              />
              {CAMINHO.map((c, i) => (
                <Reveal key={c.etapa} delay={i * 0.08} className="h-full">
                  <li className="relative flex h-full flex-col items-start rounded-2xl border border-linha bg-cartao p-5 lg:items-center lg:text-center">
                    <span className="-mt-9 flex h-9 w-9 items-center justify-center rounded-full bg-[#111417] font-mono text-sm font-bold text-white ring-4 ring-fundo">
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-[1.02rem] font-semibold text-tinta">{c.etapa}</h3>
                    <p className="mt-2 text-sm text-suave">{c.texto}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Garantias */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Regra do banco, não promessa" titulo="O que foi combinado não muda depois" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {GARANTIAS.map((g, i) => (
                <Reveal key={g.titulo} delay={(i % 2) * 0.08} className="h-full">
                  <article className="h-full rounded-2xl border border-linha border-l-4 border-l-[#DB1021] bg-cartao p-6">
                    <h3 className="font-heading text-[1.05rem] font-semibold text-tinta">{g.titulo}</h3>
                    <p className="mt-2 text-sm text-suave">{g.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* No box + ramos */}
        <section className="py-20">
          <div className="mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <figure className="mx-auto max-w-[270px]">
                <div className="overflow-hidden rounded-[1.6rem] border-[6px] border-cartao shadow-[0_20px_50px_rgba(29,18,51,0.2)]">
                  <Image
                    src="/sistemas/pitspace/mecanico-celular.webp"
                    alt="App do mecânico no celular, com as ordens de serviço dele"
                    width={520}
                    height={1125}
                    sizes="270px"
                    className="w-full"
                  />
                </div>
              </figure>
            </Reveal>
            <div>
              <TituloSecao sobre="No box" titulo="O mecânico não passa no balcão">
                O app abre no celular sem instalar nada. Ele vê só as OS dele,
                aponta o serviço, pede peça e registra o que achou.
              </TituloSecao>
              <Reveal delay={0.1}>
                <ul className="mt-6 space-y-2.5 text-grafite">
                  {[
                    "Alvo de toque grande, para a mão suja.",
                    "Contraste alto, porque o box tem sol e poeira.",
                    "Pelo navegador, sem loja de aplicativo.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DB1021]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 font-mono text-xs font-semibold tracking-[0.14em] text-suave uppercase">
                  Oito ramos, um sistema
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {RAMOS.map((r) => (
                    <li key={r} className="rounded-full border border-linha bg-cartao px-3.5 py-1.5 text-sm text-grafite">
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Telas */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Por dentro" titulo="As telas da oficina" />
            <Galeria
              colunas="md:grid-cols-2"
              itens={[
                {
                  src: "/sistemas/pitspace/kanban.webp",
                  alt: "Quadro das ordens de serviço por etapa",
                  legenda: "O quadro da oficina: cada carro na coluna em que está.",
                },
                {
                  src: "/sistemas/pitspace/os-ficha.webp",
                  alt: "Ficha de uma ordem de serviço",
                  legenda: "A ficha da OS, da vistoria de entrada ao caixa.",
                },
              ]}
              nota="Telas de uma oficina de demonstração, com dados fictícios."
            />
            <div className="mt-12">
              <Stack itens={STACK} />
            </div>
          </div>
        </section>

        <ChamadaFinal
          titulo="Sua oficina merece mais controle"
          texto="Ou o seu negócio, seja ele qual for: a PazConcept transforma o processo do dia a dia num sistema sob medida."
          zap={zap}
          servico="sistema-como-pitspace"
          sistema="PitSpace"
          url={ENDERECO}
          rotuloAcesso="Conhecer o site do PitSpace"
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
