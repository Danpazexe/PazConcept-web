# DanielPaz — Sistemas & Projetos

Porta de entrada dos meus sistemas e projetos: sistemas em destaque com acesso
direto, e a lista de repositórios carregada automaticamente do GitHub.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Vercel

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Personalização

Quase tudo se ajusta em um único arquivo: [`data/config.ts`](data/config.ts)

- **Contato** — WhatsApp, e-mail e redes sociais
- **Sistemas em destaque** — nome, descrição, status e link de acesso (ex.: DietSpace)
- **Repositórios** — são listados automaticamente da API do GitHub
  (`https://api.github.com/users/Danpazexe/repos`), atualizando a cada 1 hora;
  repositórios que não devem aparecer entram em `reposOcultos`

Outros pontos editáveis estão marcados com `EDITE AQUI` no código.

## Logo

A logo original está em `public/logo-pc.png`, com variações (incluindo preto &
branco) em `public/variacoes/`.

## Deploy

O projeto está pronto para a [Vercel](https://vercel.com):

```bash
vercel --prod
```
