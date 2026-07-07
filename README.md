# Vidraçaria RJ

Site institucional de alta conversão para a **Vidraçaria RJ**, especializada em vidros temperados, box de banheiro, envidraçamento de varanda, guarda corpo, divisórias, portas, janelas, espelhos e atendimento em vidraçaria em todos os bairros do Rio de Janeiro.

**Status:** Pronto para produção.

## Tecnologias

- [Astro](https://astro.build/) 4.x — framework estático com ótimo desempenho
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — geração automática de sitemap
- [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) — adapter de deploy

## Estrutura

- `src/components/` — componentes reutilizáveis (Header, Hero, Footer, CTA, WhatsApp, SEO, Schema, formulário)
- `src/pages/` — páginas do site e rotas dinâmicas de serviços e bairros
- `src/content/` — coleções de serviços e posts do blog
- `src/data/` — configuração central (NAP, domínio, palavras-chave, diferenciais)
- `src/layouts/` — layout base com SEO, Schema.org e WhatsApp flutuante
- `src/styles/` — estilos globais e utilitários customizados

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview local do build
```

## Deploy

O projeto está configurado com o adapter estático da Vercel. Para publicar:

1. Faça push deste repositório para o GitHub.
2. No dashboard da Vercel, importe o repositório.
3. O framework será detectado automaticamente (Astro).
4. Após o deploy, configure o domínio definitivo em `src/data/config.ts` e refaça o build.

## SEO e conversão

- Meta tags e Open Graph centralizados no componente `SEO.astro`
- Schema.org `LocalBusiness` injetado em todas as páginas
- Sitemap automático com 162 páginas (home, institucionais, serviços, bairros, blog)
- Botão flutuante do WhatsApp com pulsação e label "Fale Conosco"
- Menu mobile full-screen com trava de scroll
- CTAs de orçamento grátis em todas as páginas principais
