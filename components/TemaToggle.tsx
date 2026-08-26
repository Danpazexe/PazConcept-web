"use client";

import { useEffect, useState } from "react";

/* Alterna entre tema claro e escuro.
   O tema fica salvo no navegador (localStorage) e é aplicado
   antes da página pintar por um script no layout — sem "piscada". */

export default function TemaToggle() {
  const [escuro, setEscuro] = useState(false);

  useEffect(() => {
    setEscuro(document.documentElement.dataset.tema === "escuro");
  }, []);

  function alternar() {
    const novo = !escuro;
    setEscuro(novo);
    if (novo) {
      document.documentElement.dataset.tema = "escuro";
    } else {
      delete document.documentElement.dataset.tema;
    }
    try {
      localStorage.setItem("tema", novo ? "escuro" : "claro");
    } catch {
      /* navegação privada sem localStorage — só não persiste */
    }
  }

  return (
    <button
      onClick={alternar}
      aria-label={escuro ? "Mudar para tema claro" : "Mudar para tema escuro"}
      title={escuro ? "Tema claro" : "Tema escuro"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-linha text-grafite transition-all hover:border-roxo hover:text-roxo"
    >
      {escuro ? (
        /* sol */
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* lua */
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
        </svg>
      )}
    </button>
  );
}
