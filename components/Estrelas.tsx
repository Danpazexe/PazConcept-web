"use client";

import { useEffect, useRef } from "react";

/* Universo interativo:
   - estrelas com brilho (sprites de luz) e cintilar
   - constelações entre estrelas e ligadas ao cursor
   - parallax 3D seguindo o mouse, com profundidade
   - estrelas cadentes com rastro
   - estrelas de 4 pontas girando
   - explosão de faíscas ao clicar                                    */

type Estrela = {
  x: number; y: number; z: number; r: number; fase: number;
  vx: number; vy: number; cor: number; dx: number; dy: number;
};
type Cadente = { x: number; y: number; vx: number; vy: number; vida: number };
type Faisca = { x: number; y: number; vx: number; vy: number; vida: number; cor: number };
type Ponta4 = { x: number; y: number; z: number; r: number; fase: number; rot: number; vrot: number };

const CORES = ["#7C22CE", "#9D4EDD", "#B47AFF", "#DD2A7B", "#E8A020"];
const RAIO_MOUSE = 150;

function sortearCor() {
  const s = Math.random();
  if (s < 0.34) return 0;
  if (s < 0.62) return 1;
  if (s < 0.86) return 2;
  if (s < 0.95) return 3;
  return 4;
}

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
    // 1.5x já é nítido para brilhos suaves — em tela Retina isso corta ~44% dos pixels desenhados
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0, raf = 0, ativo = true;
    let docLeft = 0, docTop = 0;
    // fade lateral (antes era mask-image no CSS; aqui sai de graça, sem passada extra de composição)
    let fadeDirX = 0.9848, fadeDirY = 0.1736, fadeL = 1;
    let estrelas: Estrela[] = [];
    let pontas: Ponta4[] = [];
    const cadentes: Cadente[] = [];
    const faiscas: Faisca[] = [];
    let proximaCadente = 1800;

    // mouse suavizado (o campo "persegue" o cursor com atraso gostoso)
    const alvo = { x: 0, y: 0, dentro: false };
    const mouse = { x: 0, y: 0 };

    // sprites de brilho pré-renderizados (glow barato e bonito)
    const sprites = CORES.map((cor) => {
      const s = document.createElement("canvas");
      s.width = s.height = 64;
      const sg = s.getContext("2d")!;
      const grad = sg.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,255,255,0.95)");
      grad.addColorStop(0.25, cor + "CC");
      grad.addColorStop(1, cor + "00");
      sg.fillStyle = grad;
      sg.fillRect(0, 0, 64, 64);
      return s;
    });

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
      docLeft = rect.left + window.scrollX;
      docTop = rect.top + window.scrollY;
      const ang = (100 * Math.PI) / 180; // mesmo ângulo do gradiente antigo (100deg)
      fadeDirX = Math.sin(ang);
      fadeDirY = -Math.cos(ang);
      fadeL = Math.abs(w * fadeDirX) + Math.abs(h * fadeDirY);
      alvo.x = mouse.x = w / 2;
      alvo.y = mouse.y = h / 2;

      const total = Math.min(110, Math.floor((w * h) / 16000));
      estrelas = Array.from({ length: total }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x, y,
          z: 0.3 + Math.random() * 0.7,
          r: 0.7 + Math.random() * 1.8,
          fase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          cor: sortearCor(),
          dx: x, dy: y,
        };
      });
      pontas = Array.from({ length: 7 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.5 + Math.random() * 0.5,
        r: 5 + Math.random() * 7,
        fase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI,
        vrot: (Math.random() - 0.5) * 0.004,
      }));
    }

    /* Curva idêntica ao antigo mask-image:
       linear-gradient(100deg, 45% 0%, 55% 45%, 85% 65%, 100% 85%) */
    function fade(x: number, y: number) {
      const t = ((x - w / 2) * fadeDirX + (y - h / 2) * fadeDirY) / fadeL + 0.5;
      if (t <= 0) return 0.45;
      if (t < 0.45) return 0.45 + (t / 0.45) * 0.1;
      if (t < 0.65) return 0.55 + ((t - 0.45) / 0.2) * 0.3;
      if (t < 0.85) return 0.85 + ((t - 0.65) / 0.2) * 0.15;
      return 1;
    }

    // baldes de linhas por opacidade: 1 stroke() por balde em vez de 1 por linha
    const NIVEIS = 6;
    const baldes: number[][] = Array.from({ length: NIVEIS }, () => []);
    const baldesCursor: number[][] = Array.from({ length: NIVEIS }, () => []);

    function desenharBaldes(lista: number[][], corLinha: string, alfaMax: number) {
      g.strokeStyle = corLinha;
      for (let n = 0; n < NIVEIS; n++) {
        const seg = lista[n];
        if (!seg.length) continue;
        g.globalAlpha = ((n + 0.5) / NIVEIS) * alfaMax;
        g.beginPath();
        for (let s = 0; s < seg.length; s += 4) {
          g.moveTo(seg[s], seg[s + 1]);
          g.lineTo(seg[s + 2], seg[s + 3]);
        }
        g.stroke();
        seg.length = 0;
      }
      g.globalAlpha = 1;
    }

    function desenharPonta4(x: number, y: number, r: number, rot: number, alfa: number) {
      g.save();
      g.translate(x, y);
      g.rotate(rot);
      g.globalAlpha = alfa;
      g.fillStyle = "#B47AFF";
      g.beginPath();
      for (let i = 0; i < 8; i++) {
        const raio = i % 2 === 0 ? r : r * 0.28;
        const ang = (i * Math.PI) / 4;
        g.lineTo(Math.cos(ang) * raio, Math.sin(ang) * raio);
      }
      g.closePath();
      g.fill();
      g.restore();
    }

    function quadro(t: number) {
      g.clearRect(0, 0, w, h);

      // mouse com inércia
      mouse.x += (alvo.x - mouse.x) * 0.1;
      mouse.y += (alvo.y - mouse.y) * 0.1;
      const px = (mouse.x - w / 2) / Math.max(w, 1);
      const py = (mouse.y - h / 2) / Math.max(h, 1);

      // atualiza estrelas (deriva + parallax + repulsão)
      for (const e of estrelas) {
        if (!reduzir) {
          e.x += e.vx * e.z;
          e.y += e.vy * e.z;
          if (e.x < -14) e.x = w + 14;
          if (e.x > w + 14) e.x = -14;
          if (e.y < -14) e.y = h + 14;
          if (e.y > h + 14) e.y = -14;
        }
        let ox = px * 30 * e.z;
        let oy = py * 30 * e.z;
        if (alvo.dentro) {
          const dx = e.x - mouse.x;
          const dy = e.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < RAIO_MOUSE * RAIO_MOUSE && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = ((RAIO_MOUSE - d) / RAIO_MOUSE) * 34 * e.z;
            ox += (dx / d) * f;
            oy += (dy / d) * f;
          }
        }
        e.dx = e.x + ox;
        e.dy = e.y + oy;
      }

      // constelações entre estrelas (agrupadas por opacidade — poucos strokes)
      g.lineWidth = 1;
      for (let i = 0; i < estrelas.length; i++) {
        const a = estrelas[i];
        const fadeA = fade(a.dx, a.dy);
        for (let j = i + 1; j < estrelas.length; j++) {
          const b = estrelas[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const d2 = dx * dx + dy * dy;
          if (d2 < 92 * 92) {
            const alfa = (1 - Math.sqrt(d2) / 92) * fadeA;
            const n = Math.min(NIVEIS - 1, (alfa * NIVEIS) | 0);
            baldes[n].push(a.dx, a.dy, b.dx, b.dy);
          }
        }
        // linha da estrela até o cursor
        if (alvo.dentro) {
          const dxm = a.dx - mouse.x;
          const dym = a.dy - mouse.y;
          const dm2 = dxm * dxm + dym * dym;
          if (dm2 < 170 * 170) {
            const alfa = (1 - Math.sqrt(dm2) / 170) * fadeA;
            const n = Math.min(NIVEIS - 1, (alfa * NIVEIS) | 0);
            baldesCursor[n].push(a.dx, a.dy, mouse.x, mouse.y);
          }
        }
      }
      desenharBaldes(baldes, "#7C22CE", 0.2);
      if (alvo.dentro) desenharBaldes(baldesCursor, "#9D4EDD", 0.4);

      // estrelas com brilho
      for (const e of estrelas) {
        const cintilar = 0.45 + 0.4 * Math.abs(Math.sin((t / 900) * e.z + e.fase));
        const dxm = e.dx - mouse.x;
        const dym = e.dy - mouse.y;
        const perto = alvo.dentro && dxm * dxm + dym * dym < RAIO_MOUSE * RAIO_MOUSE;
        const tam = e.r * e.z * (perto ? 1.6 : 1);
        const halo = tam * 7;
        g.globalAlpha = Math.min(1, cintilar + (perto ? 0.5 : 0)) * 0.9 * fade(e.dx, e.dy);
        g.drawImage(sprites[e.cor], e.dx - halo / 2, e.dy - halo / 2, halo, halo);
      }
      g.globalAlpha = 1;

      // estrelas de 4 pontas girando
      for (const p of pontas) {
        if (!reduzir) p.rot += p.vrot;
        const pulso = 0.35 + 0.3 * Math.abs(Math.sin(t / 1400 + p.fase));
        const ox = px * 40 * p.z;
        const oy = py * 40 * p.z;
        desenharPonta4(p.x + ox, p.y + oy, p.r * p.z, p.rot, pulso * fade(p.x + ox, p.y + oy));
      }
      g.globalAlpha = 1;

      if (!reduzir) {
        // estrelas cadentes
        if (t > proximaCadente && cadentes.length < 2) {
          const daEsquerda = Math.random() < 0.5;
          cadentes.push({
            x: daEsquerda ? -30 : Math.random() * w,
            y: daEsquerda ? Math.random() * h * 0.5 : -30,
            vx: 7 + Math.random() * 5,
            vy: 3.5 + Math.random() * 2.5,
            vida: 1,
          });
          proximaCadente = t + 3200 + Math.random() * 4200;
        }
        for (let i = cadentes.length - 1; i >= 0; i--) {
          const c = cadentes[i];
          c.x += c.vx;
          c.y += c.vy;
          c.vida -= 0.008;
          if (c.x > w + 60 || c.y > h + 60 || c.vida <= 0) {
            cadentes.splice(i, 1);
            continue;
          }
          const cx = c.x - c.vx * 9;
          const cy = c.y - c.vy * 9;
          const fadeC = fade(c.x, c.y);
          const grad = g.createLinearGradient(cx, cy, c.x, c.y);
          grad.addColorStop(0, "rgba(180,122,255,0)");
          grad.addColorStop(1, `rgba(200,155,255,${0.85 * c.vida * fadeC})`);
          g.strokeStyle = grad;
          g.lineWidth = 2.2;
          g.lineCap = "round";
          g.beginPath();
          g.moveTo(cx, cy);
          g.lineTo(c.x, c.y);
          g.stroke();
          g.globalAlpha = c.vida * fadeC;
          g.drawImage(sprites[2], c.x - 11, c.y - 11, 22, 22);
          g.globalAlpha = 1;
        }

        // faíscas do clique
        for (let i = faiscas.length - 1; i >= 0; i--) {
          const f = faiscas[i];
          f.x += f.vx;
          f.y += f.vy;
          f.vx *= 0.96;
          f.vy = f.vy * 0.96 + 0.05;
          f.vida -= 0.02;
          if (f.vida <= 0) {
            faiscas.splice(i, 1);
            continue;
          }
          g.globalAlpha = f.vida * fade(f.x, f.y);
          g.drawImage(sprites[f.cor], f.x - 8, f.y - 8, 16, 16);
        }
        g.globalAlpha = 1;
      }

      if (!reduzir && ativo) raf = requestAnimationFrame(quadro);
    }

    /* Posição do canvas em cache (medida no medir()) — nada de
       getBoundingClientRect a cada mousemove, que força layout */
    function posRelativa(cx: number, cy: number) {
      return { x: cx - docLeft + window.scrollX, y: cy - docTop + window.scrollY };
    }
    function aoMover(ev: MouseEvent) {
      const p = posRelativa(ev.clientX, ev.clientY);
      alvo.dentro = p.x >= 0 && p.x <= w && p.y >= 0 && p.y <= h;
      alvo.x = alvo.dentro ? p.x : w / 2;
      alvo.y = alvo.dentro ? p.y : h / 2;
    }
    function aoClicar(ev: MouseEvent) {
      const p = posRelativa(ev.clientX, ev.clientY);
      if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) return;
      for (let i = 0; i < 16; i++) {
        const ang = Math.random() * Math.PI * 2;
        const vel = 1.5 + Math.random() * 3.5;
        faiscas.push({
          x: p.x, y: p.y,
          vx: Math.cos(ang) * vel,
          vy: Math.sin(ang) * vel,
          vida: 0.9 + Math.random() * 0.3,
          cor: sortearCor(),
        });
      }
    }
    function aoSair() {
      alvo.dentro = false;
      alvo.x = w / 2;
      alvo.y = h / 2;
    }

    medir();
    raf = requestAnimationFrame(quadro);

    const io = new IntersectionObserver(([entrada]) => {
      ativo = entrada.isIntersecting;
      if (ativo && !reduzir) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(quadro);
      }
    });
    io.observe(cv);

    const ro = new ResizeObserver(() => medir());
    if (cv.parentElement) ro.observe(cv.parentElement);

    window.addEventListener("mousemove", aoMover, { passive: true });
    window.addEventListener("click", aoClicar, { passive: true });
    window.addEventListener("mouseout", aoSair, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("mousemove", aoMover);
      window.removeEventListener("click", aoClicar);
      window.removeEventListener("mouseout", aoSair);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
}
