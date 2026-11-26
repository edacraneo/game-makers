# Game Makers — Nouveau site statique

Site Astro + Tailwind CSS v4 migré depuis l'ancienne install Ghost (`../content`).

## 🚀 Déploiement sur Cloudflare Pages avec GitHub

### 1. Créer le repo GitHub
```bash
cd nouveau-site
git init
git add .
git commit -m "Initial commit"
gh repo create game-makers --public --source=. --push
```

### 2. Configurer Cloudflare Pages
- Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project
- Connectez votre compte GitHub, sélectionnez le repo `game-makers`
- Build settings :
  - Build command: `npm run compile-cms && npm run build`
  - Build output directory: `dist`
- Environment variables (si vous utilisez Netlify Identity pour Decap CMS) :
  - `NETLIFY_IDENTITY_TOKEN` (si activé)

### 3. Secrets GitHub pour le workflow
Dans le repo GitHub → Settings → Secrets and variables → Actions :
- `CLOUDFLARE_API_TOKEN` : depuis Cloudflare → My Profile → API Tokens (Create Custom Token → Account → Cloudflare Pages Edit)
- `CLOUDFLARE_ACCOUNT_ID` : depuis Cloudflare Dashboard → Workers & Pages → Overview (right sidebar)

### 4. Workflow GitHub Actions
Le fichier `.github/workflows/deploy.yml` déclenche un build et déploie sur Cloudflare Pages à chaque push sur `main`.

## 📝 Éditer le contenu via /admin (Decap CMS)

### Dev local (backend "file")
Ouvrez `http://localhost:4321/admin` — le CMS écrira directement dans `src/content/posts/` et `src/content/pages/`.
Après chaque édition, lancez `npm run compile-cms` pour régénérer `src/data/site.json`.

### Prod (backend "github")
Pour permettre l'édition depuis le navigateur en prod :

1. Remplacez `backend: { name: 'file' }` dans `src/pages/admin/index.html` par :
```js
backend: {
  name: 'github',
  repo: 'VOTRE_REPO_GITHUB', // ex: budde/game-makers
  branch: 'main',
  auth_endpoint: 'https://oauth.provider/.netlify/functions/identity',
}
```

2. Utilisez [Netlify Identity](https://www.netlify.com/docs/identity/) pour gérer les utilisateurs et OAuth GitHub.

## 🎥 Vidéos Cloudflare R2

### Fichiers à uploader
Voir `VIDEOS_R2.md` pour la liste complète (4 fichiers MP4).

Upload sur votre bucket R2 public :
- Créez un bucket public (ex: `game-makers-media`)
- Uploadez les fichiers en respectant le chemin `media/2022/02/`
- Activez l'accès public via Custom Domain (ex: `r2.game-makers.xyz`)

### Configurer les URLs
Modifiez `src/lib/videos.ts` avec vos URLs R2 réelles.

## 📦 Scripts

- `npm run dev` — serveur local (port 4321)
- `npm run build` — build statique
- `npm run preview` — preview du build
- `npm run migrate` — migration Ghost (nécéssite le dossier `../content` de l'install Ghost)
- `npm run compile-cms` — compile les fichiers Markdown CMS vers JSON

## 🎨 Design

- Fond anthracite `#0d0f13`, accents orange néon + cyan
- Grille blueprint subtile, scanlines CRT
- Typographies : Space Grotesk, Inter, JetBrains Mono
- Logo robot + texte "Game Makers" pixelé rouge
