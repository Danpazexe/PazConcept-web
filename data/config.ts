/* ============================================================
   EDITE AQUI → dados centrais do site.
   Tudo que é pessoal (contato, redes, destaques) fica neste
   arquivo — o resto do site usa estes valores automaticamente.
   ============================================================ */

export const SITE = {
  nome: "DanielPaz",
  usuario: "Danpazexe", // usuário do GitHub — os repositórios são listados daqui
  titulo: "DanielPaz — Sistemas & Projetos",
  descricao:
    "Porta de entrada dos sistemas e projetos de DanielPaz. Desenvolvimento de sistemas, apps e automações — acompanhe os repositórios e acesse as plataformas.",

  // Número com DDI + DDD, apenas dígitos. Ex.: 5583912345678
  whatsapp: "5583999999999",
  mensagemPadrao: "Olá, Daniel! Vim pelo site e quero conversar.",
  email: "contato@seudominio.com.br",

  redes: {
    github: "https://github.com/Danpazexe",
    linkedin: "https://www.linkedin.com/in/seuusuario", // EDITE ou deixe "" para esconder
    instagram: "", // EDITE ou deixe "" para esconder
  },

  // Repositórios que NÃO devem aparecer na lista automática
  reposOcultos: ["Danpazexe"],
};

/* ---------- Sistemas em destaque (curadoria manual) ----------
   Aqui entram os sistemas prontos, com link de acesso direto.
   Quando um novo sistema ficar pronto, adicione outro objeto. */

export type Destaque = {
  nome: string;
  descricao: string;
  status: "Em produção" | "Em desenvolvimento" | "Em breve";
  url: string; // link de acesso ao sistema ("" = ainda sem link público)
  repo?: string; // link do repositório (opcional)
  recursos: string[];
  dominio: string; // endereço exibido na "janela" do card
};

export const DESTAQUES: Destaque[] = [
  {
    nome: "DietSpace",
    descricao:
      "Plataforma para controle de dieta e alimentação: refeições, metas e acompanhamento da evolução no dia a dia.",
    status: "Em produção",
    url: "", // EDITE AQUI → link do DietSpace quando estiver no ar
    recursos: [
      "Registro de refeições e alimentos",
      "Metas e acompanhamento de evolução",
      "Pensado para o uso diário, simples e direto",
    ],
    dominio: "dietspace — em breve no ar",
  },
];
