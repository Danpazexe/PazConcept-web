import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Servicos from "@/components/Servicos";
import Sistemas from "@/components/Sistemas";
import Futuros from "@/components/Futuros";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Flutuantes from "@/components/Flutuantes";
import { getRepos } from "@/lib/github";
import { DESTAQUES } from "@/data/config";

export default async function Home() {
  const repos = await getRepos();

  const metricas = [
    { valor: repos.length + DESTAQUES.length, sufixo: "+", rotulo: "Projetos criados" },
    {
      valor: DESTAQUES.filter(
        (d) => d.status === "Em produção" || d.status === "Em teste"
      ).length,
      sufixo: "",
      rotulo: "Sistema no ar",
    },
    { valor: 100, sufixo: "%", rotulo: "Dedicação em cada entrega" },
  ];

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero metricas={metricas} />
        <Marquee />
        <Servicos />
        <Sistemas />
        <Futuros />
        <Sobre />
        <Contato />
      </main>
      <Footer />
      <Flutuantes />
    </>
  );
}
