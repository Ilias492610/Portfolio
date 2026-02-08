# Stageportfolio - Ilias Hamdaoui

Next.js portfolio/blog voor WPL-stage, klaar om later op Vercel te deployen.

## Inhoud
- Landingspagina met introductie en laatste posts
- Over-pagina met mini-cv, stagecontext en socials
- Blog-overzicht met filtering op tags
- Individuele blogdetailpagina's

## Stack
- Next.js (App Router)
- TypeScript
- CSS (custom design system)

## Starten
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## GitHub koppelen
```bash
git init
git add .
git commit -m "Initial stage portfolio"
git branch -M main
git remote add origin https://github.com/Ilias492610/Portfolio.git
git push -u origin main
```

## Aanpassen
- Vervang `public/ilias-profile-placeholder.svg` door je echte foto
- Pas je LinkedIn/GitHub links aan in `/src/app/about/page.tsx`
- Voeg of wijzig blogposts in `/src/lib/posts.ts`
