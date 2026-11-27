# Game Makers — nouveau site statique

Site Astro + Tailwind CSS v4 migré depuis l'ancienne install Ghost (`../content`).
Contenu éditable via le CMS (Sveltia) sur `/admin`.

## Commandes

- `npm run compile-cms` — compile `src/content/**/*.md` (Markdown + frontmatter YAML) vers `src/data/site.json`. À relancer après toute édition manuelle des `.md` (le CMS et la CI le font automatiquement).
- `npm run dev` — serveur de dev Astro (port 4321)
- `npm run build` — build statique dans `dist/`
- `npm run preview` — sert `dist/` en local

## Structure

- `src/content/posts/*.md`, `src/content/pages/*.md` — sources du contenu (frontmatter YAML + corps **Markdown** ; les blocs HTML bruts — embeds YouTube `gm-embed`, cartes partenaires — passent tels quels).
- `src/data/site.json` — contenu compilé. **Généré, ne pas éditer à la main.**
- `src/pages/projets/[slug].astro` — articles
- `src/pages/projets/index.astro` — galerie avec filtres `?tag=` (client-side)
- `src/pages/a-propos|contact|partenaires|montage-global-borne-outrun.astro` — pages
- `src/pages/admin/index.html` — charge Sveltia CMS (`config` : `public/admin/config.yml`, backend GitHub `edacraneo/game-makers`, OAuth `https://gm-cms-auth.edacraneo.workers.dev`)
- `scripts/compile-cms.mjs` — `.md` → `site.json`. Rend les corps Markdown en HTML via `marked` (images seules → `gm-figure`, images consécutives → `gm-gallery`, corps commençant par `<` passés tels quels).
- `scripts/html-to-md.mjs` — script one-shot ayant converti les corps Ghost HTML → Markdown (conservé pour référence).
- `worker/` — worker Cloudflare d'auth OAuth GitHub pour le CMS.
- Rollback pré-refactor Markdown : tag git `pre-markdown`.

## Conventions contenu

- Frontmatter `.md` : `---` seul sur sa ligne, corps Markdown après le 2e `---`.
- Ligne séparatrice : `---` sur une ligne vide. Image seule = figure, images consécutives sur la même ligne = rangée de galerie.
- La 1re image du corps identique à l'image à la une (`feature`) est dédupliquée à l'affichage (`EntryArticle.astro`) — `miniNN`/`imgNN` et suffixes `-N` Ghost reconnus comme même photo.
- Fichiers sans `visible: false` sont publiés ; `featured: true` épingle sur l'accueil.

## Environnement

Node.js n'est pas dans le PATH par défaut sous Git Bash : `export PATH="/c/Program Files/nodejs:$PATH"`.
