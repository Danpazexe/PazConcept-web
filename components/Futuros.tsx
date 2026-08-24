import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import { FUTUROS } from "@/data/config";

const SELOS: Record<string, string> = {
  "Em desenvolvimento": "border-amber-200 bg-amber-50 text-amber-600",
  Planejado: "border-roxo/25 bg-roxo-suave text-roxo",
};

export default function Futuros() {
  return (
    <section id="futuros" className="border-y border-linha bg-fundo-suave py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Em breve" titulo="Projetos futuros">
          O que está sendo construído agora e chega em breve por aqui.
        </SecaoCabecalho>

        <div className="grid gap-6 md:grid-cols-2">
          {FUTUROS.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.1}>
              <article className="group relative h-full rounded-2xl border-2 border-dashed border-roxo/25 bg-white p-8 transition-all hover:-translate-y-1.5 hover:border-roxo/60 hover:shadow-[0_18px_44px_rgba(124,34,206,0.1)]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-roxo opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-roxo-claro to-roxo-escuro" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-tinta">{p.nome}</h3>
                  <span
                    className={`ml-auto rounded-full border px-3 py-1 font-mono text-[0.64rem] font-semibold tracking-wider uppercase ${SELOS[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="mt-4 text-[0.95rem] text-suave">{p.descricao}</p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-roxo/25 bg-roxo-suave px-3.5 py-1 text-xs font-medium text-roxo"
                    >
                      {t}
                    </span>
                  ))}
                  <a
                    href="#contato"
                    className="ml-auto text-sm font-semibold text-roxo transition-colors hover:text-roxo-escuro"
                  >
                    Quero ser avisado →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
