import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import CartaoSistema from "./cartoes/CartaoSistema";
import { DESTAQUES } from "@/data/config";

/* Vitrine dos sistemas: um card horizontal por produto, empilhados
   (texto à esquerda, mini-cena à direita; no celular a cena vai para cima). */
export default function Sistemas() {
  return (
    <section id="sistemas" className="border-y border-linha bg-fundo-suave py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Sistemas" titulo="Sistemas em destaque">
          Os sistemas da casa, cada um com a sua identidade — veja a apresentação
          completa ou acesse direto por aqui.
        </SecaoCabecalho>

        <div className="grid gap-8">
          {DESTAQUES.map((d, i) => (
            <Reveal key={d.nome} delay={i * 0.08}>
              <CartaoSistema d={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
