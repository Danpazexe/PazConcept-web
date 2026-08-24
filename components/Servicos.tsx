import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";

const SERVICOS = [
  {
    titulo: "Sistemas sob medida",
    texto:
      "Plataformas web completas para gestão, controle e operação — feitas para o seu processo, não o contrário.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    icone_cor: "bg-roxo-suave text-roxo",
    barra: "bg-roxo",
  },
  {
    titulo: "Apps mobile",
    texto:
      "Aplicativos em React Native para Android e iOS — do protótipo à publicação nas lojas.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    icone_cor: "bg-blue-50 text-blue-600",
    barra: "bg-blue-500",
  },
  {
    titulo: "Automações e integrações",
    texto:
      "Bots, APIs e integrações entre sistemas para eliminar tarefas repetitivas e ganhar tempo.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    icone_cor: "bg-amber-50 text-amber-600",
    barra: "bg-amber-500",
  },
  {
    titulo: "Sites e landing pages",
    texto:
      "Páginas rápidas, responsivas e pensadas para converter — presença profissional na internet.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    icone_cor: "bg-emerald-50 text-emerald-600",
    barra: "bg-emerald-500",
  },
  {
    titulo: "Design gráfico",
    texto:
      "Logos, identidade visual e artes profissionais que dão cara e personalidade à sua marca.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    icone_cor: "bg-pink-50 text-pink-600",
    barra: "bg-pink-500",
  },
  {
    titulo: "Comunicação e social media",
    texto:
      "Artes para redes sociais e materiais de divulgação que comunicam a sua mensagem com clareza.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    icone_cor: "bg-cyan-50 text-cyan-600",
    barra: "bg-cyan-500",
  },
];

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
            <Reveal key={s.titulo} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-linha bg-white p-7 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(29,18,51,0.1)]">
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${s.barra}`}
                />
                <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ${s.icone_cor} [&_svg]:h-6 [&_svg]:w-6`}>
                  {s.icone}
                </div>
                <h3 className="font-heading text-lg font-semibold text-tinta">{s.titulo}</h3>
                <p className="mt-2.5 text-[0.94rem] text-suave">{s.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
