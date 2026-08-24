import { SITE } from "@/data/config";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  topics?: string[];
}

/** Busca os repositórios públicos no GitHub (atualiza a cada 1h). */
export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${SITE.usuario}/repos?sort=pushed&per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter(
      (r) => !r.fork && !r.archived && !SITE.reposOcultos.includes(r.name)
    );
  } catch {
    return [];
  }
}
