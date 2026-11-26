# Game Makers — nouveau site statique

Site Astro + Tailwind CSS v4 migré depuis l'ancienne install Ghost (`../content`).

## Commandes

- `npm run migrate` — ré-importe le dernier export Ghost (`../content/data/*.json`), nettoie le HTML et copie les assets dans `public/`. À relancer si le contenu Ghost change.
- `npm run dev` — serveur de dev Astro (port 4321)
- `npm run build` — build statique dans `dist/`
- `npm run preview` — sert `dist/` en local

## Structure

- `src/data/site.json` — contenu migré (posts, pages, tags). Généré, ne pas éditer à la main.
- `src/pages/projets/[slug].astro` — articles
- `src/pages/projets/index.astro` — galerie avec filtres `?tag=` (client-side)
- `src/pages/a-propos|contact|partenaires|montage-global-borne-outrun.astro` — pages Ghost
- `scripts/migrate.mjs` — script de migration (nettoyage `__GHOST_URL__`, `game-makers.xyz`, classes `kg-*`, redimensionnement sharp max 2000px)

## Environnement

Node.js n'est pas dans le PATH par défaut sous Git Bash : `export PATH="/c/Program Files/nodejs:$PATH"`.
