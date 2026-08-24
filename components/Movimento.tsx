"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/* Faz todas as animações do Framer Motion respeitarem a preferência
   de movimento reduzido do sistema do visitante. */
export default function Movimento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
