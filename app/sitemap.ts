import type { MetadataRoute } from "next";
import { SERVICOS } from "@/data/servicos";

const BASE = "https://www.pazconcept.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/dietspace`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...SERVICOS.map((s) => ({
      url: `${BASE}/servicos/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
