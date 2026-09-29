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
   Aqui entram os sistemas prontos, com link de acesso direto.
   Quando um novo sistema ficar pronto, adicione outro objeto. */

export type Destaque = {
  nome: string;
  descricao: string;
  status: "Em produção" | "Em teste" | "Em desenvolvimento" | "Em breve";
  url: string; // link de acesso ao sistema ("" = ainda sem link público)
  repo?: string; // link do repositório (opcional)
  icone?: string; // ícone do sistema (arquivo em /public)
  imagem?: string; // screenshot desktop do sistema (arquivo em /public)
  imagemMobile?: string; // screenshot mobile (arquivo em /public)
  lancamento?: boolean; // exibe o selo animado de lançamento
  casePagina?: string; // página de case dentro do site (ex.: "/dietspace")
  recursos: string[];
  dominio: string; // endereço exibido na "janela" do card
  // Card personalizado (ilustração animada com a identidade do produto).
  // Sem "cartao", o sistema aparece na vitrine grande com screenshots.
  cartao?: "elaraspace" | "pitspace";
  frase?: string; // uma frase: o que o sistema resolve (cards personalizados)
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
    status: "Em teste",
    url: "https://www.dietspace.com.br",
    icone: "/dietspace-icon.png",
    imagem: "/dietspace-desktop.jpg",
    imagemMobile: "/dietspace-mobile.jpg",
    lancamento: true,
    casePagina: "/dietspace",
    recursos: [
      "Avaliação completa e anamnese",
      "Plano alimentar com mais de 10 mil alimentos",
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
      "Fila em tempo real com posse de uma pessoa só",
      "Aviso automático ao vendedor pelo WhatsApp",
      "Relatórios e apresentação mensal em PPTX",
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
      "Estoque e caixa sem borracha",
    ],
    dominio: "pitspace.vercel.app",
  },
];
