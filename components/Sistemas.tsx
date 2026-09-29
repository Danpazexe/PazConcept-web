import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import CartaoSistema from "./cartoes/CartaoSistema";
import { DESTAQUES } from "@/data/config";

/* Vitrine dos sistemas: o primeiro de DESTAQUES é o destaque principal
   (card deitado no desktop); os demais seguem em grade, com o mesmo
   esqueleto de card e a identidade de cada produto. */
export default function Sistemas() {
  const [principal, ...demais] = DESTAQUES;

  return (
    <section id="sistemas" className="border-y border-linha bg-fundo-suave py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Sistemas" titulo="Sistemas em destaque">
          Os sistemas da casa, cada um com a sua identidade — veja a apresentação
          completa ou acesse direto por aqui.
        </SecaoCabecalho>

        {principal && (
          <Reveal>
            <CartaoSistema d={principal} principal />
          </Reveal>
        )}

        {demais.length > 0 && (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {demais.map((d, i) => (
              <Reveal key={d.nome} delay={i * 0.1} className="h-full">
                <CartaoSistema d={d} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
