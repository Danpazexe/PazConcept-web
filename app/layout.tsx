import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Sora, Syne } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
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
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable} ${syne.variable} ${caveat.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
