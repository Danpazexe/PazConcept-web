/* EDITE AQUI → itens exibidos na faixa deslizante */
const TECNOLOGIAS = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Firebase",
  "Tailwind CSS",
  "Framer Motion",
  "APIs REST",
  "Vercel",
  "Java",
  "Design Gráfico",
  "Identidade Visual",
  "Social Media",
];

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-[#3A2A5C] bg-gradient-to-r from-[#241040] via-[#1A0C30] to-[#241040] py-5"
    >
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3.5 will-change-transform hover:[animation-play-state:paused]">
          {[...TECNOLOGIAS, ...TECNOLOGIAS].map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 font-mono text-sm whitespace-nowrap text-[#D9CCF2]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
