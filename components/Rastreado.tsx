"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@vercel/analytics";

/* Link que registra o clique no Vercel Analytics.
   Uso: <Rastreado evento="acessar_sistema" dados={{ sistema: "DietSpace" }} href="…"> */

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  evento: string;
  dados?: Record<string, string>;
  children: ReactNode;
};

export default function Rastreado({ evento, dados, children, ...resto }: Props) {
  return (
    <a {...resto} onClick={() => track(evento, dados)}>
      {children}
    </a>
  );
}
