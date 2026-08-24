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
  private: boolean;
  pushed_at: string;
  topics?: string[];
}

/**
 * Busca os repositórios no GitHub (atualiza a cada 10 minutos).
 * Com GITHUB_TOKEN definido (.env.local / variável na Vercel), inclui
 * também os repositórios privados; sem token, só os públicos.
 */
export async function getRepos(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN;
  const url = token
    ? "https://api.github.com/user/repos?sort=pushed&per_page=100&visibility=all&affiliation=owner"
    : `https://api.github.com/users/${SITE.usuario}/repos?sort=pushed&per_page=100`;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter(
      (r) =>
        (SITE.mostrarForks || !r.fork) &&
        !r.archived &&
        !SITE.reposOcultos.includes(r.name)
    );
  } catch {
    return [];
  }
}
