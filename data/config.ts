/* ============================================================
   EDITE AQUI → dados centrais do site.
   Tudo que é pessoal (contato, redes, destaques) fica neste
   arquivo — o resto do site usa estes valores automaticamente.
   ============================================================ */

export const SITE = {
  marca: "PazConcept", // nome do site / marca
  nome: "DanielPaz", // seu nome (aparece na seção Sobre)
  usuario: "Danpazexe", // usuário do GitHub — os repositórios são listados daqui
  titulo: "PazConcept — Sistemas & Design",
  descricao:
    "PazConcept: desenvolvimento de sistemas, apps e automações + design gráfico e comunicação. Conheça os projetos, acesse as plataformas e veja as artes no Instagram @pazconcept.",

  // Número com DDI + DDD, apenas dígitos
  whatsapp: "5583986595074",
  mensagemPadrao: "Olá, Daniel! Vim pelo site e quero conversar.",
  email: "conceptpaz@gmail.com",

  redes: {
    github: "https://github.com/Danpazexe",
    linkedin: "", // EDITE ou deixe "" para esconder
    instagram: "https://www.instagram.com/pazconcept",
  },

  // Repositórios que NÃO devem aparecer na lista automática
  reposOcultos: ["Danpazexe"],

  // Mostrar também os forks (cópias de projetos de outras pessoas)?
  mostrarForks: false,
};

/* ---------- Sistemas em destaque (curadoria manual) ----------
   Cada sistema vira um card com o mesmo esqueleto (components/cartoes):
   mini-cena animada, logo + selo, uma frase de valor, três destaques e os
   botões. Os cards são horizontais e empilhados, na ordem
   desta lista. Sistema novo: adicione o objeto e o tema dele em
   components/cartoes/CartaoSistema.tsx. */

export type Destaque = {
  nome: string;
  descricao: string;
  status: "Em produção" | "Em teste" | "Em desenvolvimento" | "Em breve";
  url: string; // link de acesso ao sistema ("" = ainda sem link público)
  repo?: string; // link do repositório (opcional)
  icone?: string; // ícone do sistema (arquivo em /public)
  casePagina?: string; // página de case dentro do site (ex.: "/dietspace")
  recursos: string[]; // três destaques (cada um ganha um ícone próprio no card)
  dominio: string; // endereço público exibido nas páginas de apresentação
  cartao: "dietspace" | "elaraspace" | "pitspace"; // tema e mini-cena do card
  frase: string; // uma frase de valor: o que o sistema resolve
  rotuloAcesso?: string; // texto do botão de acesso (padrão: "Acessar")
};

/* ---------- Projetos futuros (o que vem por aí) ---------- */

export type ProjetoFuturo = {
  nome: string;
  descricao: string;
  status: "Em desenvolvimento" | "Planejado";
  tags: string[];
};

export const FUTUROS: ProjetoFuturo[] = [
  {
    nome: "PerformX",
    descricao:
      "Aplicativo para personal trainers: gestão de alunos, montagem de treinos e acompanhamento da evolução — tudo em um só lugar.",
    status: "Em desenvolvimento",
    tags: ["App mobile", "SaaS"],
  },
  {
    // Só o nome do produto: a apresentação sai quando ele estiver pronto.
    nome: "GestãoHub",
    descricao: "",
    status: "Em desenvolvimento",
    tags: ["Web", "Gestão"],
  },
];

export const DESTAQUES: Destaque[] = [
  {
    nome: "DietSpace",
    descricao:
      "Sistema para consultório de nutrição: da anamnese ao plano na mão da paciente — avaliação completa, plano alimentar, agenda com lembretes e app da paciente.",
    frase:
      "Da anamnese ao plano na mão da paciente: o consultório de nutrição inteiro num só lugar, sem ficha de papel e sem planilha.",
    status: "Em produção",
    url: "https://www.dietspace.com.br",
    icone: "/dietspace-icon.png",
    casePagina: "/dietspace",
    cartao: "dietspace",
    rotuloAcesso: "Acessar o DietSpace",
    recursos: [
      "Anamnese e avaliação completa, com os cálculos prontos",
      "Plano alimentar com mais de 10 mil alimentos brasileiros",
      "Agenda com lembretes e app da paciente",
    ],
    dominio: "www.dietspace.com.br",
  },
  {
    nome: "ElaraSpace",
    descricao:
      "Tratativa de ocorrências de entrega para distribuidoras: o motorista relata no celular, mesmo sem sinal, e o escritório trata num painel em tempo real.",
    frase:
      "Tira as ocorrências de entrega do WhatsApp e das planilhas: cada caso com um dono, do relato do motorista ao aviso ao vendedor.",
    status: "Em produção",
    url: "https://elaraspace.pazconcept.com.br",
    icone: "/sistemas/elaraspace/elaraspace-simbolo-gradiente.svg",
    casePagina: "/elaraspace",
    cartao: "elaraspace",
    rotuloAcesso: "Acessar o sistema",
    recursos: [
      "App do motorista que funciona sem sinal",
      "Fila em tempo real: cada caso com um dono só",
      "Aviso automático ao vendedor pelo WhatsApp",
    ],
    dominio: "elaraspace.pazconcept.com.br",
  },
  {
    nome: "PitSpace",
    descricao:
      "Sistema para oficinas: do check-in pela placa ao caixa, com orçamento aprovado pelo cliente num link e estoque que baixa sozinho.",
    frase:
      "Mecânica sob controle: o carro entra pela placa, o cliente aprova pelo link e a conta fecha — sem redigitar nada.",
    status: "Em desenvolvimento",
    url: "https://pitspace.vercel.app",
    icone: "/sistemas/pitspace/p-original.png",
    casePagina: "/pitspace",
    cartao: "pitspace",
    rotuloAcesso: "Conhecer o site",
    recursos: [
      "Ordem de serviço que nasce pela placa",
      "Orçamento aprovado pelo cliente no celular",
      "App do mecânico direto no box",
    ],
    dominio: "pitspace.vercel.app",
  },
];
