/* ============================================================
   EDITE AQUI → dados centrais do site.
   Tudo que é pessoal (contato, redes, destaques) fica neste
   arquivo — o resto do site usa estes valores automaticamente.
   ============================================================ */

export const SITE = {
  marca: "PazConcept", // nome do site / marca
  nome: "DanielPaz", // seu nome (aparece na seção Sobre)
  usuario: "Danpazexe", // usuário do GitHub — os repositórios são listados daqui
  titulo: "PazConcept — Sistemas & Projetos",
  descricao:
    "PazConcept é a porta de entrada dos sistemas e projetos de DanielPaz. Desenvolvimento de sistemas, apps e automações — acompanhe os repositórios e acesse as plataformas.",

  // Número com DDI + DDD, apenas dígitos
  whatsapp: "5583986595074",
  mensagemPadrao: "Olá, Daniel! Vim pelo site e quero conversar.",
  email: "conceptpaz@gmail.com",

  redes: {
    github: "https://github.com/Danpazexe",
    linkedin: "https://www.linkedin.com/in/seuusuario", // EDITE ou deixe "" para esconder
    instagram: "", // EDITE ou deixe "" para esconder
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
    nome: "Personal Trainer",
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
    recursos: [
      "Avaliação completa e anamnese",
      "Plano alimentar com mais de 10 mil alimentos",
      "Agenda com lembretes e app da paciente",
    ],
    dominio: "www.dietspace.com.br",
  },
];
