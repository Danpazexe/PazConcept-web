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
  recursos: string[];
  dominio: string; // endereço exibido na "janela" do card
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
    nome: "MecanicaOS",
    descricao:
      "Sistema de gestão para oficinas mecânicas: ordens de serviço, clientes e controle completo da oficina, do check-in do veículo à entrega.",
    status: "Em desenvolvimento",
    tags: ["SaaS", "Web"],
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
    recursos: [
      "Avaliação completa e anamnese",
      "Plano alimentar com mais de 10 mil alimentos",
      "Agenda com lembretes e app da paciente",
    ],
    dominio: "www.dietspace.com.br",
  },
];
