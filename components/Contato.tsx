"use client";

import type { FormEvent } from "react";
import Reveal from "./Reveal";
import { SecaoCabecalho } from "./Secao";
import { SITE } from "@/data/config";

const linkZap = (texto: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;

export default function Contato() {
  function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const dados = new FormData(ev.currentTarget);
    const texto = [
      `Olá! Meu nome é ${dados.get("nome")}.`,
      `Assunto: ${dados.get("assunto")}`,
      "",
      `${dados.get("mensagem")}`,
      "",
      `E-mail para retorno: ${dados.get("email")}`,
    ].join("\n");
    window.open(linkZap(texto), "_blank", "noopener");
  }

  const campo =
    "w-full rounded-xl border border-linha bg-fundo-suave px-4 py-3 text-[0.94rem] text-tinta placeholder:text-suave/60 transition-all focus:border-roxo focus:bg-white focus:ring-4 focus:ring-roxo/15 focus:outline-none";

  return (
    <section id="contato" className="py-24">
      <div className="mx-auto w-[min(1160px,92%)]">
        <SecaoCabecalho rotulo="Contato" titulo="Vamos conversar?">
          Quer conhecer um sistema, tirar uma dúvida ou propor um projeto? Me
          chame por aqui.
        </SecaoCabecalho>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {[
              {
                titulo: "WhatsApp",
                texto: "Resposta rápida em horário comercial",
                href: linkZap(SITE.mensagemPadrao),
                externo: true,
                icone: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                ),
              },
              {
                titulo: "E-mail",
                texto: SITE.email,
                href: `mailto:${SITE.email}`,
                externo: false,
                icone: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                ),
              },
              {
                titulo: "GitHub",
                texto: `@${SITE.usuario}`,
                href: SITE.redes.github,
                externo: true,
                icone: (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
              {
                titulo: "Instagram",
                texto: "@pazconcept · artes e projetos",
                href: SITE.redes.instagram,
                externo: true,
                icone: (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.titulo} delay={i * 0.08}>
                <a
                  href={c.href}
                  {...(c.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-linha bg-white p-5 transition-all hover:translate-x-1.5 hover:border-roxo"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-roxo-suave text-roxo [&_svg]:h-5.5 [&_svg]:w-5.5">
                    {c.icone}
                  </span>
                  <span>
                    <b className="block font-heading text-[0.95rem] text-tinta">{c.titulo}</b>
                    <small className="text-sm text-suave">{c.texto}</small>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={enviar}
              className="rounded-3xl border border-linha bg-white p-8 shadow-[0_12px_40px_rgba(29,18,51,0.06)] sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-tinta">Nome</span>
                  <input name="nome" required placeholder="Seu nome" className={campo} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-tinta">E-mail</span>
                  <input name="email" type="email" required placeholder="voce@email.com" className={campo} />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-tinta">Assunto</span>
                <div className="relative">
                  <select
                    name="assunto"
                    className={`${campo} cursor-pointer appearance-none pr-11`}
                  >
                    <option>Quero um sistema sob medida</option>
                    <option>Quero um site / landing page</option>
                    <option>Design gráfico / artes para redes sociais</option>
                    <option>Automação ou integração</option>
                    <option>Dúvida sobre um sistema</option>
                    <option>Outro assunto</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-roxo"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-tinta">Mensagem</span>
                <textarea
                  name="mensagem"
                  required
                  rows={5}
                  placeholder="Conte um pouco sobre o que você precisa…"
                  className={`${campo} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,34,206,0.42)]"
              >
                Enviar pelo WhatsApp
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
              <p className="mt-4 text-center text-xs text-suave">
                Ao enviar, a conversa abre direto no WhatsApp com a sua mensagem pronta.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
