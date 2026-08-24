import Image from "next/image";
import Link from "next/link";

export default function NaoEncontrada() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-[#1D0B33] to-[#2A1052] px-6 text-center text-[#C9BCE4]">
      <Image
        src="/logo-pc.png"
        alt="PazConcept"
        width={110}
        height={110}
        className="animate-flutuar drop-shadow-[0_20px_50px_rgba(139,49,232,0.5)]"
      />
      <p className="mt-10 font-mono text-sm tracking-[0.3em] text-roxo-claro uppercase">
        Erro 404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-creme md:text-5xl">
        Página perdida no espaço
      </h1>
      <p className="mt-4 max-w-md text-[#A895CC]">
        O endereço que você tentou acessar não existe — ou foi tragado por um
        buraco negro.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-roxo-claro to-roxo-escuro px-7 py-3.5 font-semibold text-white shadow-[0_8px_26px_rgba(124,34,206,0.4)] transition-all hover:-translate-y-0.5"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
