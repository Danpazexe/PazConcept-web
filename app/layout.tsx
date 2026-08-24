import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/config";

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
  title: SITE.titulo,
  description: SITE.descricao,
  openGraph: {
    title: SITE.titulo,
    description: SITE.descricao,
    type: "website",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
