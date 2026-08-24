import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";

const PASSOS = [
  {
    num: "01",
    titulo: "Descoberta",
    texto: "Conversamos para entender o problema, o contexto e o que precisa ser resolvido.",
  },
  {
    num: "02",
    titulo: "Planejamento",
    texto: "Escopo, prazo e tecnologia definidos — você sabe exatamente o que será entregue.",
  },
  {
    num: "03",
    titulo: "Desenvolvimento",
    texto: "Construção com entregas frequentes, para você acompanhar a evolução de perto.",
  },
  {
    num: "04",
    titulo: "Entrega e evolução",
    texto: "Publicação, treinamento e suporte contínuo, com melhorias constantes.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="border-y border-linha bg-fundo-suave py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Método" titulo="Como um projeto acontece">
          Um processo claro e transparente, do primeiro contato à entrega — e além dela.
        </SecaoCabecalho>

        <ol className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <span
            aria-hidden
            className="absolute top-13 right-[4%] left-[4%] hidden h-px bg-gradient-to-r from-transparent via-roxo/25 to-transparent xl:block"
          />
          {PASSOS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <li className="relative h-full rounded-2xl border border-linha bg-white p-7 transition-all hover:-translate-y-1.5 hover:border-roxo/40 hover:shadow-[0_18px_44px_rgba(29,18,51,0.08)]">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro font-mono text-sm font-bold text-white shadow-[0_6px_18px_rgba(124,34,206,0.3)]">
                  {p.num}
                </span>
                <h3 className="font-heading text-lg font-semibold text-tinta">{p.titulo}</h3>
                <p className="mt-2 text-[0.92rem] text-suave">{p.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
