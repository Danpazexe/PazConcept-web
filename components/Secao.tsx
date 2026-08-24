import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Rotulo({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-roxo/25 bg-roxo-suave px-4 py-1.5 font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-roxo uppercase">
      {children}
    </span>
  );
}

export function SecaoCabecalho({
  rotulo,
  titulo,
  children,
}: {
  rotulo: string;
  titulo: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <Rotulo>{rotulo}</Rotulo>
      <h2 className="mt-5 font-display text-[2.1rem] leading-tight font-bold text-tinta md:text-[2.75rem]">
        {titulo}
      </h2>
      {children && <p className="mt-4 text-lg text-suave">{children}</p>}
    </Reveal>
  );
}
