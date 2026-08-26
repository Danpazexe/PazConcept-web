import type { ReactNode } from "react";

/* ============================================================
   EDITE AQUI → serviços da PazConcept.
   Cada item vira um card na home E uma página /servicos/<slug>
   com conteúdo completo (bom para o Google encontrar o site).
   ============================================================ */

export type Servico = {
  slug: string;
  nome: string; // nome curto (card e menus)
  titulo: string; // título da página (H1, pensado para busca)
  frase: string; // frase de apoio abaixo do título
  resumo: string; // texto do card e descrição para o Google
  assunto: string; // mensagem que abre no WhatsApp ao pedir orçamento
  icone: ReactNode;
  icone_cor: string;
  barra: string;
  entregas: { titulo: string; texto: string }[];
  processo: { titulo: string; texto: string }[];
};

export const SERVICOS: Servico[] = [
  {
    slug: "sistemas-sob-medida",
    nome: "Sistemas sob medida",
    titulo: "Sistemas web sob medida para o seu negócio",
    frase: "feitos para o seu processo, não o contrário",
    resumo:
      "Plataformas web completas para gestão, controle e operação — feitas para o seu processo, não o contrário.",
    assunto: "Olá! Quero um orçamento de um sistema sob medida.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    icone_cor: "bg-roxo-suave text-roxo",
    barra: "bg-roxo",
    entregas: [
      {
        titulo: "Plataforma completa",
        texto:
          "Cadastros, agenda, relatórios, documentos em PDF, permissões de acesso — tudo que a sua operação precisa, num só lugar.",
      },
      {
        titulo: "Acesso de qualquer lugar",
        texto:
          "Sistema na nuvem, com domínio próprio e certificado de segurança: funciona no computador, no tablet e no celular.",
      },
      {
        titulo: "Dados protegidos",
        texto:
          "Login seguro, cópias de segurança e boas práticas de proteção de dados desde o primeiro dia.",
      },
      {
        titulo: "Evolução contínua",
        texto:
          "O sistema cresce com o negócio: novas funções entram por etapas, sem parar o que já funciona.",
      },
    ],
    processo: [
      {
        titulo: "Entendimento",
        texto: "Uma conversa para mapear o seu processo e o problema real a resolver.",
      },
      {
        titulo: "Proposta",
        texto: "Escopo claro, prazo e investimento — sem surpresa no meio do caminho.",
      },
      {
        titulo: "Construção",
        texto: "Desenvolvimento por etapas, com entregas para você acompanhar e testar.",
      },
      {
        titulo: "Lançamento e suporte",
        texto: "Publicação com domínio próprio, treinamento e acompanhamento próximo.",
      },
    ],
  },
  {
    slug: "apps-mobile",
    nome: "Apps mobile",
    titulo: "Aplicativos para Android e iOS",
    frase: "do protótipo à publicação nas lojas",
    resumo:
      "Aplicativos em React Native para Android e iOS — do protótipo à publicação nas lojas.",
    assunto: "Olá! Quero um orçamento de um aplicativo mobile.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    icone_cor: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
    barra: "bg-blue-500",
    entregas: [
      {
        titulo: "Um código, duas lojas",
        texto:
          "Com React Native, o mesmo aplicativo funciona no Android e no iPhone — mais rápido e mais econômico de manter.",
      },
      {
        titulo: "Experiência de app de verdade",
        texto:
          "Notificações push, uso offline, câmera, localização — os recursos do celular a favor do seu produto.",
      },
      {
        titulo: "Publicação nas lojas",
        texto:
          "Cuido do processo na Google Play e na App Store: fichas, capturas, revisões e atualizações.",
      },
      {
        titulo: "Conectado ao seu sistema",
        texto:
          "O app conversa com a sua plataforma web: os mesmos dados, sempre sincronizados.",
      },
    ],
    processo: [
      { titulo: "Ideia e protótipo", texto: "Desenho das telas e do fluxo antes de escrever código." },
      { titulo: "Proposta", texto: "Escopo, prazo e investimento definidos com clareza." },
      { titulo: "Desenvolvimento", texto: "Versões de teste no seu celular desde as primeiras semanas." },
      { titulo: "Lojas e evolução", texto: "Publicação, monitoramento e novas versões frequentes." },
    ],
  },
  {
    slug: "automacoes-e-integracoes",
    nome: "Automações e integrações",
    titulo: "Automações e integrações entre sistemas",
    frase: "menos tarefa repetitiva, mais tempo pro que importa",
    resumo:
      "Bots, APIs e integrações entre sistemas para eliminar tarefas repetitivas e ganhar tempo.",
    assunto: "Olá! Quero automatizar um processo / integrar sistemas.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    icone_cor: "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
    barra: "bg-amber-500",
    entregas: [
      {
        titulo: "Robôs de rotina",
        texto:
          "Lembretes automáticos no WhatsApp, e-mails programados, relatórios que se montam sozinhos.",
      },
      {
        titulo: "Sistemas conversando",
        texto:
          "Integração entre as ferramentas que você já usa — planilhas, ERPs, meios de pagamento, agendas.",
      },
      {
        titulo: "APIs bem construídas",
        texto:
          "Pontes seguras e documentadas para outros sistemas consumirem os seus dados.",
      },
      {
        titulo: "Menos erro humano",
        texto:
          "O que era retrabalho manual vira processo automático, auditável e à prova de esquecimento.",
      },
    ],
    processo: [
      { titulo: "Mapeamento", texto: "Onde o seu time perde tempo hoje? É por aí que começamos." },
      { titulo: "Prova rápida", texto: "Uma automação pequena funcionando em dias, não meses." },
      { titulo: "Implantação", texto: "Robôs e integrações rodando em produção, com monitoramento." },
      { titulo: "Expansão", texto: "Novas automações entram conforme o retorno aparece." },
    ],
  },
  {
    slug: "sites-e-landing-pages",
    nome: "Sites e landing pages",
    titulo: "Criação de sites e landing pages que convertem",
    frase: "presença profissional na internet",
    resumo:
      "Páginas rápidas, responsivas e pensadas para converter — presença profissional na internet.",
    assunto: "Olá! Quero um orçamento de site / landing page.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    icone_cor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
    barra: "bg-emerald-500",
    entregas: [
      {
        titulo: "Rápido de verdade",
        texto:
          "Sites que abrem em menos de um segundo — como este aqui, nota 99 de 100 em performance no Google.",
      },
      {
        titulo: "Bonito em qualquer tela",
        texto:
          "Design responsivo, testado do celular mais simples ao monitor grande.",
      },
      {
        titulo: "Pronto para o Google",
        texto:
          "SEO técnico completo: o site nasce preparado para ser encontrado nas buscas.",
      },
      {
        titulo: "Feito para converter",
        texto:
          "Botões de WhatsApp, formulários sem atrito e medição de cliques: visitante vira contato.",
      },
    ],
    processo: [
      { titulo: "Briefing", texto: "Objetivo, público e referências — o que o site precisa fazer por você." },
      { titulo: "Design", texto: "Layout com a cara da sua marca, aprovado antes de virar código." },
      { titulo: "Construção", texto: "Desenvolvimento com as melhores tecnologias do mercado." },
      { titulo: "No ar", texto: "Publicação com domínio, métricas e ajustes finos de performance." },
    ],
  },
  {
    slug: "design-grafico",
    nome: "Design gráfico",
    titulo: "Design gráfico e identidade visual",
    frase: "a cara e a personalidade da sua marca",
    resumo:
      "Logos, identidade visual e artes profissionais que dão cara e personalidade à sua marca.",
    assunto: "Olá! Quero um orçamento de design (logo / identidade visual).",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    icone_cor: "bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300",
    barra: "bg-pink-500",
    entregas: [
      {
        titulo: "Logo e identidade",
        texto:
          "Símbolo, paleta de cores, tipografia e manual de uso — uma marca consistente em todo lugar.",
      },
      {
        titulo: "Artes profissionais",
        texto:
          "Posts, banners, cartões, apresentações e materiais de divulgação com acabamento de estúdio.",
      },
      {
        titulo: "Padrão em tudo",
        texto:
          "Modelos reaproveitáveis para a sua comunicação manter a mesma cara sempre.",
      },
      {
        titulo: "Arquivos certos",
        texto:
          "Entrega organizada nos formatos que você precisa: impressão, redes sociais e web.",
      },
    ],
    processo: [
      { titulo: "Imersão", texto: "Entender o negócio, o público e o que a marca precisa transmitir." },
      { titulo: "Direções", texto: "Propostas de caminho visual para você escolher com segurança." },
      { titulo: "Refino", texto: "Ajustes até a identidade ficar com a sua cara." },
      { titulo: "Entrega", texto: "Arquivos finais organizados + manual de uso da marca." },
    ],
  },
  {
    slug: "social-media",
    nome: "Comunicação e social media",
    titulo: "Social media e artes para redes sociais",
    frase: "sua mensagem comunicada com clareza",
    resumo:
      "Artes para redes sociais e materiais de divulgação que comunicam a sua mensagem com clareza.",
    assunto: "Olá! Quero um orçamento de social media / artes para redes.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    icone_cor: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300",
    barra: "bg-cyan-500",
    entregas: [
      {
        titulo: "Feed com identidade",
        texto:
          "Artes que seguem a linguagem da sua marca e deixam o perfil profissional de verdade.",
      },
      {
        titulo: "Pacotes mensais",
        texto:
          "Posts, stories e capas de destaque entregues em pacotes — sua rede sempre abastecida.",
      },
      {
        titulo: "Design que comunica",
        texto:
          "Cada arte pensada para a mensagem chegar: hierarquia, leitura rápida e chamada clara.",
      },
      {
        titulo: "Materiais de campanha",
        texto:
          "Lançamentos, promoções e datas especiais com kits completos de divulgação.",
      },
    ],
    processo: [
      { titulo: "Linha visual", texto: "Definição do estilo do feed a partir da identidade da marca." },
      { titulo: "Planejamento", texto: "O que publicar e com qual objetivo, antes de desenhar." },
      { titulo: "Produção", texto: "Artes criadas em lote, com revisão sua antes da entrega." },
      { titulo: "Entrega", texto: "Arquivos prontos para publicar, nos tamanhos de cada rede." },
    ],
  },
];
