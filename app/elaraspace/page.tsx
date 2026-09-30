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
  GradeBlocos,
  IconeSaida,
  Migalha,
  Stack,
  TituloSecao,
  Vitrine,
  type Bloco,
} from "@/components/Case";
import { SITE } from "@/data/config";

const ENDERECO = "https://elaraspace.pazconcept.com.br";

export const metadata: Metadata = {
  title: "ElaraSpace — tratativa de ocorrências de entrega",
  description:
    "ElaraSpace: sistema de tratativa de ocorrências de entrega para distribuidoras. App do motorista que funciona sem sinal, painel em tempo real, aviso automático ao vendedor pelo WhatsApp, acertos, sobras e relatórios.",
  alternates: { canonical: "/elaraspace" },
  openGraph: {
    title: "ElaraSpace · PazConcept",
    description:
      "Tira as ocorrências de entrega do WhatsApp e das planilhas: cada caso com um dono, do relato do motorista ao aviso ao vendedor.",
    url: "/elaraspace",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept" }],
  },
};

const s = "h-5 w-5";
const sv = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

/* O fluxo da ocorrência, com as cores e os nomes que a tela usa */
const FLUXO = [
  {
    nome: "Recebida",
    texto: "Chegou do app do motorista (ou do painel). Está livre para alguém pegar.",
    cor: "#1B5FB8",
    fundo: "#E3EEFC",
    icone: <svg className={s} {...sv}><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>,
  },
  {
    nome: "Olhar câmeras",
    texto: "Alguém pegou: a ocorrência tem dono e está sendo conferida contra a nota fiscal.",
    cor: "#8A5300",
    fundo: "#FDF1D8",
    icone: <svg className={s} {...sv}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>,
  },
  {
    nome: "Pendente",
    texto: "Algo não bateu. O setor responsável confirma com o motorista e o motivo fica registrado.",
    cor: "#B42318",
    fundo: "#FDE5E3",
    icone: <svg className={s} {...sv}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4M12 17h.01" /></svg>,
  },
  {
    nome: "Em andamento",
    texto: "Conferida e lançada. O vendedor é avisado pelo WhatsApp, sem ninguém copiar e colar.",
    cor: "#5427E0",
    fundo: "#ECE6FF",
    icone: <svg className={s} {...sv}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>,
  },
  {
    nome: "Resolvida",
    texto: "Crédito, abatimento no boleto ou acerto com o cliente: encerrada, com a linha do tempo inteira.",
    cor: "#067647",
    fundo: "#DCF7E7",
    icone: <svg className={s} {...sv}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>,
  },
];

const BLOCOS: Bloco[] = [
  {
    titulo: "App do motorista",
    texto:
      "Abre no celular, sem loja e sem instalar nada. Formulário na mesma ordem da mensagem de sempre, com busca de cliente e produto, fotos e a carga da rota. Funciona sem sinal e envia sozinho quando a rede volta.",
    icone: <svg className={s} {...sv}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
  {
    titulo: "Painel em tempo real",
    texto:
      "A fila atualiza sem recarregar. \"Pegar\" deixa a ocorrência com uma pessoa só; quem chega depois vê quem está cuidando e desde quando. Pendência, lançamento e resolução, tudo com histórico.",
    icone: <svg className={s} {...sv}><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>,
  },
  {
    titulo: "Acertos",
    texto:
      "Quando a mercadoria precisa ir ao cliente: envio por etapas (separação, embarque, rota, concluído), com requisição, termo e etiquetas impressos.",
    icone: <svg className={s} {...sv}><path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" /></svg>,
  },
  {
    titulo: "Sobras em R$",
    texto:
      "O que sobrou na carga, produto a produto, com o total calculado — no mesmo lugar das ocorrências, pronto para conferir e imprimir.",
    icone: <svg className={s} {...sv}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
  {
    titulo: "Relatórios e apresentação mensal",
    texto:
      "Indicadores do período, comparação com o período anterior e tendência dos últimos meses. Um clique gera a apresentação do mês em PPTX.",
    icone: <svg className={s} {...sv}><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>,
  },
  {
    titulo: "Listas como uma planilha",
    texto:
      "Filtros, agrupar, inserir coluna, cores, colunas calculadas, ações em lote, imprimir e exportar CSV — o conforto do Google Planilhas, com o banco por trás.",
    icone: <svg className={s} {...sv}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" /></svg>,
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Funciona sem sinal",
    texto: "O relato fica guardado no celular e sobe sozinho quando a rede volta — sem duplicar, mesmo se o motorista tocar duas vezes.",
  },
  {
    titulo: "Cada ocorrência tem um dono",
    texto: "Dois cliques no mesmo segundo? Um pega, o outro lê \"Já está com Ana desde 10:32\". Ninguém trata a mesma coisa duas vezes.",
  },
  {
    titulo: "WhatsApp automático",
    texto: "O vendedor recebe o aviso pelo WhatsApp de quem tratou, com o texto pronto, sem ninguém abrir conversa por conversa.",
  },
  {
    titulo: "Seguro por construção",
    texto: "Regras no banco, não só na tela: segurança em nível de linha em todas as tabelas, e cada pessoa vê só o que é dela.",
  },
];

const EXTRAS = [
  "Busca geral com Ctrl+K",
  "Atalhos de teclado na triagem",
  "Alerta de possível duplicata",
  "Guia da primeira vez e ajuda",
  "Versões publicadas com \"O que mudou\"",
  "Aviso no celular do motorista",
];

const STACK = ["React 19", "Vite", "TypeScript", "Tailwind v4", "Supabase", "PostgreSQL + RLS", "PWA offline", "Vercel"];

export default function ApresentacaoElaraSpace() {
  const zap = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Olá! Vi a apresentação do ElaraSpace e quero conversar sobre um sistema assim."
  )}`;

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ElaraSpace",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS (PWA)",
    url: ENDERECO,
    creator: { "@type": "Organization", name: "PazConcept", url: "https://www.pazconcept.com.br" },
    description:
      "Sistema de tratativa de ocorrências de entrega: app do motorista offline, painel em tempo real, acertos, sobras, relatórios e aviso ao vendedor pelo WhatsApp.",
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
            className="absolute -top-40 -right-40 h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(108,60,255,0.16),transparent_62%)]"
          />
          <div className="relative mx-auto grid w-[min(1160px,92%)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Migalha nome="ElaraSpace" />

              <div className="flex flex-wrap items-center gap-3">
                <Rotulo>Apresentação</Rotulo>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-[0.66rem] font-semibold tracking-wider text-sky-700 uppercase dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-300">
                  Em teste
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B0B17] shadow-[0_10px_26px_rgba(108,60,255,0.35)]">
                  <Image
                    src="/sistemas/elaraspace/elaraspace-simbolo-gradiente.svg"
                    alt="Símbolo do ElaraSpace"
                    width={44}
                    height={38}
                    unoptimized
                  />
                </span>
                <h1 className="font-display text-[2.2rem] leading-[1.08] font-bold text-tinta sm:text-5xl">
                  ElaraSpace
                </h1>
              </div>

              <p className="mt-3 inline-flex items-center gap-2 rotate-[-1deg] font-script text-[1.6rem] text-roxo-claro">
                ocorrência de entrega com dono, do caminhão ao vendedor
              </p>

              <p className="mt-5 max-w-xl text-lg text-suave">
                Numa distribuidora, as ocorrências de entrega — falta, avaria,
                cliente que desistiu — chegavam soltas em grupos de WhatsApp e
                eram tratadas em planilhas. O ElaraSpace tira esse fluxo de lá:
                o motorista relata no celular, mesmo sem sinal, e o escritório
                trata num painel em tempo real, sabendo quem pegou o quê.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Rastreado
                  evento="acessar_sistema"
                  dados={{ sistema: "ElaraSpace", origem: "case" }}
                  href={ENDERECO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
                >
                  Acessar o ElaraSpace
                  {IconeSaida}
                </Rastreado>
                <Rastreado
                  evento="orcamento_servico"
                  dados={{ servico: "sistema-como-elaraspace", origem: "case" }}
                  href={zap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-linha bg-cartao px-7 py-3.5 font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-roxo hover:bg-roxo-suave"
                >
                  Quero um sistema assim
                </Rastreado>
              </div>
              <p className="mt-4 text-sm text-suave">
                O acesso é criado pelo administrador da empresa: não há cadastro público.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Vitrine
                dominio="elaraspace.pazconcept.com.br"
                tela="/sistemas/elaraspace/painel-todas.webp"
                altTela="Painel do ElaraSpace com a lista de ocorrências e seus status"
                celular="/sistemas/elaraspace/motorista-nova.webp"
                altCelular="App do motorista: nova ocorrência"
                prioridade
              />
            </Reveal>
          </div>
        </section>

        <DesafioSolucao
          desafio={{
            titulo: "Ocorrência no grupo, tratativa na planilha",
            texto: (
              <>
                <p>
                  O motorista digitava a ocorrência num texto semi-estruturado,
                  de pé, na porta do cliente. A mensagem caía em grupos de
                  WhatsApp sem dono e era copiada à mão para planilhas diferentes.
                </p>
                <p>
                  Várias pessoas, em aparelhos diferentes, sem saber quem já tinha
                  pegado cada caso. Pergunta sobre status só tinha resposta
                  perguntando a alguém — e o vendedor era avisado um a um.
                </p>
              </>
            ),
          }}
          solucao={{
            titulo: "Um fluxo só, com o banco como fonte da verdade",
            texto: (
              <>
                <p>
                  O motorista preenche um formulário na mesma ordem da mensagem
                  que já usava e revisa no &ldquo;formato de sempre&rdquo;. A
                  ocorrência cai numa fila em tempo real, alguém pega, confere
                  contra a nota fiscal, lança, resolve e avisa o vendedor.
                </p>
                <p>
                  Tudo com linha do tempo: quem relatou, quem pegou, o que mudou
                  e quando. O WhatsApp continua sendo o canal da conversa — só o
                  fluxo da ocorrência saiu de lá.
                </p>
              </>
            ),
          }}
        />

        {/* Como funciona */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Como funciona" titulo="Do relato à resolução, em cinco estados">
              Cada estado tem cor, ícone e nome — o mesmo que aparece na tela.
            </TituloSecao>

            <ol className="mt-12 grid gap-4 lg:grid-cols-5">
              {FLUXO.map((f, i) => (
                <Reveal key={f.nome} delay={i * 0.08} className="h-full">
                  <li className="relative flex h-full flex-col rounded-2xl border border-linha bg-cartao p-5">
                    <span className="font-mono text-[0.66rem] font-semibold text-suave">0{i + 1}</span>
                    <span
                      className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold"
                      style={{ color: f.cor, background: f.fundo }}
                    >
                      {f.icone}
                      {f.nome}
                    </span>
                    <p className="mt-3 text-sm text-suave">{f.texto}</p>
                    {i < FLUXO.length - 1 && (
                      <svg
                        aria-hidden
                        className="absolute top-1/2 -right-3.5 z-10 hidden h-5 w-5 -translate-y-1/2 text-roxo lg:block"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <p className="mt-5 text-sm text-suave">
                A pendência pode ir e voltar quantas vezes precisar. E o que não
                segue adiante é <b className="text-grafite">cancelado</b> ou{" "}
                <b className="text-grafite">arquivado</b>, sempre com motivo.
              </p>
            </Reveal>
          </div>
        </section>

        {/* A solução em blocos */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="O que o ElaraSpace faz" titulo="Da rua ao escritório, sem planilha no meio" />
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

        {/* Telas */}
        <section className="py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Por dentro" titulo="As telas do dia a dia" />
            <Galeria
              colunas="md:grid-cols-[1fr_1fr_0.5fr]"
              itens={[
                {
                  src: "/sistemas/elaraspace/painel-detalhe.webp",
                  alt: "Detalhe de uma ocorrência pendente, com a tratativa ao lado da lista",
                  legenda: "Triagem: lista à esquerda, detalhe e tratativa à direita.",
                },
                {
                  src: "/sistemas/elaraspace/painel-relatorios.webp",
                  alt: "Relatórios com resumo do período, comparação e tendência",
                  legenda: "Relatórios com comparação, tendência e exportação em PPTX.",
                },
                {
                  src: "/sistemas/elaraspace/motorista-inicio.webp",
                  alt: "App do motorista com a carga em rota",
                  legenda: "O motorista abre a carga do dia e relata dali.",
                  celular: true,
                },
              ]}
              nota="Telas de uma base de demonstração, com dados fictícios."
            />
          </div>
        </section>

        {/* Diferenciais */}
        <section className="border-y border-linha bg-fundo-suave py-20">
          <div className="mx-auto w-[min(1160px,92%)]">
            <TituloSecao sobre="Diferenciais" titulo="Feito para o mundo real da entrega" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {DIFERENCIAIS.map((d, i) => (
                <Reveal key={d.titulo} delay={(i % 2) * 0.08} className="h-full">
                  <article className="flex h-full gap-4 rounded-2xl border border-linha bg-cartao p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9E80FF] to-[#6C3CFF] font-mono text-sm font-bold text-white">
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
          titulo="Seu processo também pode sair do WhatsApp"
          texto="Da distribuidora à oficina: a PazConcept transforma o processo do seu dia a dia num sistema sob medida."
          zap={zap}
          servico="sistema-como-elaraspace"
          sistema="ElaraSpace"
          url={ENDERECO}
          rotuloAcesso="Acessar o ElaraSpace"
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
