"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/* Barra fina no topo que preenche conforme a página é rolada */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-roxo-claro via-roxo to-roxo-escuro will-change-transform"
    />
  );
}
