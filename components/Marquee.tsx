/* EDITE AQUI → tecnologias exibidas na faixa deslizante */
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
];

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-creme-escuro bg-creme py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-3.5 hover:[animation-play-state:paused]">
        {[...TECNOLOGIAS, ...TECNOLOGIAS].map((t, i) => (
          <span
            key={i}
            className="rounded-full border border-creme-escuro bg-white px-5 py-2 font-mono text-sm whitespace-nowrap text-grafite"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
