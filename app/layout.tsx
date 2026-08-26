import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Sora, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE } from "@/data/config";
import Movimento from "@/components/Movimento";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space",
});
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pazconcept.com.br"),
  title: { default: SITE.titulo, template: "%s · PazConcept" },
  description: SITE.descricao,
  alternates: { canonical: "/" },
  keywords: [
    "PazConcept",
    "desenvolvimento de sistemas",
    "design gráfico",
    "social media",
    "criação de sites",
    "aplicativos",
    "automações",
    "identidade visual",
  ],
  authors: [{ name: SITE.nome, url: SITE.redes.github }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PazConcept",
    locale: "pt_BR",
    title: SITE.titulo,
    description: SITE.descricao,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PazConcept — Sistemas & Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.titulo,
    description: SITE.descricao,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PazConcept",
  url: "https://www.pazconcept.com.br",
  logo: "https://www.pazconcept.com.br/logo-pc.png",
  description: SITE.descricao,
  founder: { "@type": "Person", name: SITE.nome },
  sameAs: [SITE.redes.github, SITE.redes.instagram].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="font-sans">
        {/* aplica o tema salvo antes da primeira pintura — evita "piscada" */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('tema')==='escuro')document.documentElement.dataset.tema='escuro'}catch(e){}",
          }}
        />
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-xl focus:bg-roxo focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Movimento>{children}</Movimento>
        {/* só na Vercel — evita 404 do script em ambiente local */}
        {process.env.VERCEL && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
