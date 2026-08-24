"use client";

import { useEffect, useRef } from "react";

/* Universo interativo: estrelas nas cores da marca que se conectam em
   constelações e reagem ao mouse (repulsão + brilho ao se aproximar). */

type Estrela = {
  x: number;
  y: number;
  z: number; // profundidade (afeta tamanho, força e brilho)
  r: number;
  fase: number;
  vx: number;
  vy: number;
  cor: string;
  dx: number; // posição desenhada (com o empurrão do mouse)
  dy: number;
};

const CORES = ["#7C22CE", "#9D4EDD", "#B47AFF", "#5B189E", "#DD2A7B"];
const RAIO_MOUSE = 140;

export default function Estrelas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cv = canvas;
    const g = ctx;

    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let ativo = true;
    let estrelas: Estrela[] = [];
    const mouse = { x: -9e4, y: -9e4 };

    function medir() {
      const pai = cv.parentElement;
      if (!pai) return;
      const rect = pai.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const total = Math.min(120, Math.floor((w * h) / 15000));
      estrelas = Array.from({ length: total }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x,
          y,
          z: 0.3 + Math.random() * 0.7,
          r: 0.8 + Math.random() * 1.9,
          fase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.14,
          cor: CORES[(Math.random() * CORES.length) | 0],
          dx: x,
          dy: y,
        };
      });
    }

    function quadro(t: number) {
      g.clearRect(0, 0, w, h);

      for (const e of estrelas) {
        if (!reduzir) {
          e.x += e.vx * e.z;
          e.y += e.vy * e.z;
          if (e.x < -12) e.x = w + 12;
          if (e.x > w + 12) e.x = -12;
          if (e.y < -12) e.y = h + 12;
          if (e.y > h + 12) e.y = -12;
        }
        // empurrão do mouse
        const dx = e.x - mouse.x;
        const dy = e.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < RAIO_MOUSE * RAIO_MOUSE && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = ((RAIO_MOUSE - d) / RAIO_MOUSE) * 30 * e.z;
          e.dx = e.x + (dx / d) * f;
          e.dy = e.y + (dy / d) * f;
        } else {
          e.dx = e.x;
          e.dy = e.y;
        }
      }

      // constelações: liga estrelas próximas
      for (let i = 0; i < estrelas.length; i++) {
        const a = estrelas[i];
        for (let j = i + 1; j < estrelas.length; j++) {
          const b = estrelas[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const d2 = dx * dx + dy * dy;
          if (d2 < 95 * 95) {
            const alfa = (1 - Math.sqrt(d2) / 95) * 0.22;
            g.strokeStyle = `rgba(124, 34, 206, ${alfa})`;
            g.lineWidth = 1;
            g.beginPath();
            g.moveTo(a.dx, a.dy);
            g.lineTo(b.dx, b.dy);
            g.stroke();
          }
        }
      }

      // estrelas (com cintilar e brilho perto do mouse)
      for (const e of estrelas) {
        const cintilar = 0.4 + 0.4 * Math.abs(Math.sin(t / 900 * e.z + e.fase));
        const dx = e.dx - mouse.x;
        const dy = e.dy - mouse.y;
        const perto = dx * dx + dy * dy < RAIO_MOUSE * RAIO_MOUSE;
        g.globalAlpha = Math.min(1, cintilar + (perto ? 0.45 : 0));
        g.fillStyle = e.cor;
        g.beginPath();
        g.arc(e.dx, e.dy, e.r * e.z * (perto ? 1.5 : 1), 0, Math.PI * 2);
        g.fill();
      }
      g.globalAlpha = 1;

      if (!reduzir && ativo) raf = requestAnimationFrame(quadro);
    }

    function aoMover(ev: MouseEvent) {
      const rect = cv.getBoundingClientRect();
      mouse.x = ev.clientX - rect.left;
      mouse.y = ev.clientY - rect.top;
    }
    function aoSair() {
      mouse.x = -9e4;
      mouse.y = -9e4;
    }

    medir();
    raf = requestAnimationFrame(quadro);

    // pausa quando o hero sai da tela
    const io = new IntersectionObserver(([entrada]) => {
      ativo = entrada.isIntersecting;
      if (ativo && !reduzir) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(quadro);
      }
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => medir());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    window.addEventListener("mousemove", aoMover, { passive: true });
    window.addEventListener("mouseout", aoSair, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("mousemove", aoMover);
      window.removeEventListener("mouseout", aoSair);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
}
