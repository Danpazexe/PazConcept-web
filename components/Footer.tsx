import Image from "next/image";
import { DESTAQUES, SITE } from "@/data/config";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#241041] to-[#160A2C] text-[#C9BCE4]">
      <div className="mx-auto grid w-[min(1160px,92%)] gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            {/* Variação em branco da logo (P&B) sobre o fundo roxo */}
            <Image src="/variacoes/logo-branca.png" alt="Logo" width={40} height={40} />
            <span className="font-heading text-lg font-bold text-creme">
              Daniel<em className="not-italic text-roxo-claro">Paz</em>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm text-[#A895CC]">
            Porta de entrada dos meus sistemas e projetos. Tecnologia sob
            medida, com qualidade e propósito.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { nome: "GitHub", url: SITE.redes.github },
              { nome: "LinkedIn", url: SITE.redes.linkedin },
              { nome: "Instagram", url: SITE.redes.instagram },
            ]
              .filter((r) => r.url)
              .map((r) => (
                <a
                  key={r.nome}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-roxo-claro hover:text-creme"
                >
                  {r.nome}
                </a>
              ))}
          </div>
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-col gap-3 text-sm">
          <b className="mb-1 font-heading text-creme">Navegação</b>
          <a href="#inicio" className="transition-colors hover:text-creme">Início</a>
          <a href="#servicos" className="transition-colors hover:text-creme">Serviços</a>
          <a href="#sistemas" className="transition-colors hover:text-creme">Sistemas</a>
          <a href="#projetos" className="transition-colors hover:text-creme">Projetos</a>
          <a href="#sobre" className="transition-colors hover:text-creme">Sobre</a>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <b className="mb-1 font-heading text-creme">Sistemas</b>
          {DESTAQUES.map((d) =>
            d.url ? (
              <a
                key={d.nome}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-creme"
              >
                {d.nome}
              </a>
            ) : (
              <span key={d.nome}>
                {d.nome} <span className="font-mono text-xs text-[#A895CC]">(em breve)</span>
              </span>
            )
          )}
          <a href="#projetos" className="transition-colors hover:text-creme">
            Todos os repositórios
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1160px,92%)] flex-col items-center justify-between gap-2 py-6 text-xs text-[#A895CC] sm:flex-row">
          <span>© {ano} {SITE.nome}. Todos os direitos reservados.</span>
          <span className="font-mono">feito com Next.js · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
