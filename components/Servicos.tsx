import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import { SERVICOS } from "@/data/servicos";

export default function Servicos() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Serviços" titulo="Como posso ajudar">
          Da ideia ao sistema publicado: soluções completas, construídas sob
          medida para cada desafio.
        </SecaoCabecalho>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <a
                href={`/servicos/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-linha bg-cartao p-7 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(29,18,51,0.1)]"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${s.barra}`}
                />
                <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ${s.icone_cor} [&_svg]:h-6 [&_svg]:w-6`}>
                  {s.icone}
                </div>
                <h3 className="font-heading text-lg font-semibold text-tinta">{s.nome}</h3>
                <p className="mt-2.5 text-[0.94rem] text-suave">{s.resumo}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-roxo transition-transform group-hover:translate-x-1">
                  Saiba mais
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
