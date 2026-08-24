"use client";

import { motion } from "framer-motion";
import { SecaoCabecalho } from "./Secao";
import { SITE } from "@/data/config";
import type { Repo } from "@/lib/github";

/* Cores oficiais das linguagens (mesmas do GitHub) */
const CORES_LINGUAGEM: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Java: "#B07219",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#663399",
  "C#": "#178600",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Rust: "#DEA584",
};

function dataFormatada(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });
}

export default function Repos({ repos }: { repos: Repo[] }) {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SecaoCabecalho rotulo="Projetos" titulo="Repositórios no GitHub">
            Esta lista se atualiza sozinha: todo repositório público que eu
            criar aparece aqui automaticamente.
          </SecaoCabecalho>
          <a
            href={SITE.redes.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-14 inline-flex items-center gap-2 rounded-xl border border-linha px-5 py-2.5 text-sm font-semibold text-tinta transition-all hover:border-roxo hover:bg-roxo-suave"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Ver perfil completo
          </a>
        </div>

        {repos.length === 0 ? (
          <div className="rounded-2xl border border-linha bg-fundo-suave p-12 text-center">
            <p className="text-suave">
              Não foi possível carregar os repositórios agora.
            </p>
            <a
              href={SITE.redes.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-roxo hover:underline"
            >
              Ver direto no GitHub →
            </a>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((r, i) => (
              <motion.article
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-linha bg-white p-6 shadow-[0_8px_28px_rgba(29,18,51,0.05)] transition-all hover:-translate-y-1.5 hover:border-roxo/40 hover:shadow-[0_18px_44px_rgba(124,34,206,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-roxo-suave text-roxo">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                    </svg>
                  </span>
                  <h3 className="font-heading font-semibold break-all text-tinta">
                    {r.name}
                  </h3>
                </div>

                <p className="mt-3.5 flex-1 text-[0.92rem] text-suave">
                  {r.description ?? "Sem descrição ainda — em breve por aqui."}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-suave">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: CORES_LINGUAGEM[r.language] ?? "#9D4EDD" }}
                      />
                      {r.language}
                    </span>
                  )}
                  {r.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      {r.stargazers_count}
                    </span>
                  )}
                  <span className="ml-auto">atual. {dataFormatada(r.pushed_at)}</span>
                </div>

                <div className="mt-5 flex gap-3 border-t border-linha pt-5">
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-linha px-4 py-2.5 text-sm font-semibold text-tinta transition-all hover:border-roxo hover:bg-roxo-suave"
                  >
                    Repositório
                  </a>
                  {r.homepage && (
                    <a
                      href={r.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-roxo-claro to-roxo-escuro px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                    >
                      Acessar
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
