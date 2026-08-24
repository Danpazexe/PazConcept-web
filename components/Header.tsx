"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/data/config";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#projetos", label: "Projetos" },
  { href: "#metodo", label: "Método" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [rolado, setRolado] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 10);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all ${
        rolado
          ? "border-b border-linha bg-white/90 shadow-[0_4px_24px_rgba(29,18,51,0.05)]"
          : "border-b border-transparent bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-20 w-[min(1160px,92%)] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Image src="/logo-pc.png" alt="Logo" width={42} height={42} priority />
          <span className="font-heading text-lg font-bold text-tinta">
            Paz<em className="not-italic text-roxo">Concept</em>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-grafite transition-colors hover:text-roxo"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(124,34,206,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(124,34,206,0.4)]"
          >
            Fale comigo
          </a>
        </nav>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          <span
            className={`h-0.5 w-6 rounded bg-tinta transition-transform ${
              aberto ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 rounded bg-tinta transition-opacity ${aberto ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded bg-tinta transition-transform ${
              aberto ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-linha bg-white/95 backdrop-blur-xl lg:hidden"
            aria-label="Menu móvel"
          >
            <div className="flex flex-col items-center gap-1 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="w-full py-3 text-center font-medium text-grafite hover:text-roxo"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setAberto(false)}
                className="mt-2 mb-3 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-8 py-3 font-semibold text-white"
              >
                Fale comigo
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
