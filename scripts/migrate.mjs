// Migration Ghost -> site statique
// Lit le dernier export Ghost, nettoie le HTML, copie les assets référencés.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = join(ROOT, 'content', 'data');
const IMAGES_DIR = join(ROOT, 'content', 'images');
const MEDIA_DIR = join(ROOT, 'content', 'media');
const FILES_DIR = join(ROOT, 'content', 'files');
const PUBLIC_DIR = join(SITE, 'public');
const CONTENT_DIR = join(SITE, 'src', 'content');

// Vérifier que le dossier Ghost existe
if (!existsSync(DATA_DIR)) {
  console.log('Dossier Ghost non trouvé, migration skip (on utilise uniquement les fichiers CMS via compile-cms.mjs)');
  process.exit(0);
}

// --- 1. Charger le dernier export ---
const exports_ = readdirSync(DATA_DIR).filter(f => f.endsWith('.json')).sort();
const latest = exports_[exports_.length - 1];
console.log('Export utilisé :', latest);
const dump = JSON.parse(readFileSync(join(DATA_DIR, latest), 'utf8'));
const d = dump.data;

// --- 2. Index des images (pour résoudre les vieux chemins /00_Projets/...) ---
const imageIndex = new Map(); // basename(lower) -> chemin relatif "2021/01/file.jpg"
(function walk(dir, rel) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) {
      if (e.name === 'size') continue; // on ne référence que les originaux
      walk(p, r);
    } else {
      imageIndex.set(e.name.toLowerCase(), r);
    }
  }
})(IMAGES_DIR, '');

// --- 3. Mapping vidéos (Cloudflare R2 ou YouTube) ---
const VIDEO_MAP = {
  '2022/02/hyperion.mp4': 'https://www.youtube.com/watch?v=MMUp8Uuw6pI',
  '2022/02/VID_20220225_162537.mp4': 'https://r2.game-makers.xyz/media/2022/02/VID_20220225_162537.mp4',
  '2022/02/IMG_0045.mp4': 'https://r2.game-makers.xyz/media/2022/02/IMG_0045.mp4',
  '2022/02/IMG_0046.mp4': 'https://r2.game-makers.xyz/media/2022/02/IMG_0046.mp4',
};

function youtubeId(url) {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

// --- 4. Nettoyage du HTML ---
function cleanHtml(html, slug) {
  if (!html) return '';
  let h = html;

  // srcset thumbnails -> originaux
  h = h.replace(/__GHOST_URL__\/content\/images\/size\/w\d+\//g, '__GHOST_URL__/content/images/');

  // vieux chemins /00_Projets/images_ProjetXXX/fichier -> résolution par nom
  h = h.replace(/__GHOST_URL__\/[^"'\s)>]*?\/([^"'\s)>/]+\.(?:jpe?g|png|gif|webp|mp4))/gi,
    (m, file) => {
      const hit = imageIndex.get(file.toLowerCase());
      return hit ? `/images/${hit}` : m.replace('__GHOST_URL__', '');
    });

  // chemins standards
  h = h.replace(/__GHOST_URL__\/content\/images\//g, '/images/');
  h = h.replace(/__GHOST_URL__\/content\/media\//g, '/media/');
  h = h.replace(/__GHOST_URL__\/content\/files\//g, '/files/');
  h = h.replace(/__GHOST_URL__\//g, '/');
  // certains embeds Ghost stockent des chemins relatifs /content/...
  h = h.replace(/(["'(=\s])\/content\/media\//g, '$1/media/');
  h = h.replace(/(["'(=\s])\/content\/files\//g, '$1/files/');
  h = h.replace(/(["'(=\s])\/content\/images\//g, '$1/images/');

  // vidéos : si R2 URL définie, remplace les chemins locaux
  for (const [local, remote] of Object.entries(VIDEO_MAP)) {
    const ytId = youtubeId(remote);
    if (ytId) {
      // YouTube : remplacer <video src="/media/hyperion.mp4"> par iframe
      h = h.replace(new RegExp(`<video[^>]*src="/media/${local}"[^>]*>.*?</video>`, 'gs'),
        `<iframe src="https://www.youtube.com/embed/${ytId}" frameborder="0" allowfullscreen></iframe>`);
      h = h.split(`/media/${local}`).join(remote);
    } else {
      h = h.split(`/media/${local}`).join(remote);
    }
  }

  // anciennes URLs absolues du site
  h = h.replace(/https?:\/\/(www\.)?game-makers\.xyz(?::\d+)?(\/[^"'\s)]*)?/gi, (m, g, path) => path || '/');

  // liens internes /tag/xxx/ -> galerie filtrée
  h = h.replace(/href="\/tag\/([a-z0-9-]+)\/?"/gi, 'href="/projets/?tag=$1"');

  // classes Ghost -> classes maison
  h = h.replace(/kg-card kg-image-card/g, 'gm-figure');
  h = h.replace(/kg-card kg-embed-card/g, 'gm-embed');
  h = h.replace(/kg-card kg-gallery-card/g, 'gm-gallery');
  h = h.replace(/kg-card kg-header-card/g, 'gm-header');
  h = h.replace(/kg-[a-z-]+/g, '');
  h = h.replace(/class="\s+"/g, '');
  h = h.replace(/class="\s*"/g, '');

  // srcset / sizes devenus inutiles
  h = h.replace(/\s+srcset="[^"]*"/g, '');
  h = h.replace(/\s+sizes="[^"]*"/g, '');

  return h.trim();
}

function excerptOf(p) {
  const raw = p.excerpt || (p.plaintext || p.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const text = raw.replace(/^[^\p{L}\p{N}]+/u, '').replace(/\s+/g, ' ').trim();
  return text.slice(0, 180) + (text.length > 180 ? '…' : '');
}

// --- 4. Assemblage des contenus ---
const tagsById = Object.fromEntries(d.tags.map(t => [t.id, { name: t.name, slug: t.slug }]));
const authorsById = Object.fromEntries(d.users.map(u => [u.id, u.name]));
const postTags = {};
for (const pt of d.posts_tags) {
  const tag = tagsById[pt.tag_id];
  if (!tag) continue;
  (postTags[pt.post_id] ||= []).push(tag);
}
const postAuthors = {};
for (const pa of d.posts_authors) {
  (postAuthors[pa.post_id] ||= []).push(authorsById[pa.author_id] || 'Game Makers');
}

function toEntry(p, kind) {
  return {
    slug: p.slug,
    title: p.title,
    kind,
    date: p.published_at ? p.published_at.slice(0, 10) : null,
    tags: postTags[p.id] || [],
    authors: postAuthors[p.id] || ['Game Makers'],
    feature: p.feature_image ? p.feature_image.replace('__GHOST_URL__/content/images/', '/images/').replace('__GHOST_URL__/', '/') : null,
    html: cleanHtml(p.html, p.slug),
    excerpt: excerptOf(p),
    featured: !!p.featured,
    meta_title: p.meta_title || null,
    meta_description: p.meta_description || null,
    uuid: p.uuid,
  };
}

const posts = d.posts.filter(p => (p.status === 'published' || p.status === 'draft') && p.type === 'post')
  .map(p => toEntry(p, 'post'))
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
const pages = d.posts.filter(p => p.status === 'published' && p.type === 'page')
  .map(p => toEntry(p, 'page'));

// --- 4b. Réécriture des liens internes Ghost /{slug}/ -> nouvelles routes ---
const routeMap = {};
const uuidBySlug = Object.fromEntries(d.posts.map(p => [p.slug, p.uuid]).filter(([, u]) => u));
for (const p of posts) {
  routeMap['/' + p.slug + '/'] = '/projets/' + p.slug + '/';
  const uuid = uuidBySlug[p.slug];
  if (uuid) routeMap['/p/' + uuid + '/'] = '/projets/' + p.slug + '/';
}
for (const p of pages) {
  const r = p.slug === 'qui-sommes-nous' ? '/a-propos/' : '/' + p.slug + '/';
  routeMap['/' + p.slug + '/'] = r;
}
for (const e of [...posts, ...pages]) {
  for (const [from, to] of Object.entries(routeMap)) {
    e.html = e.html.split(`href="${from}"`).join(`href="${to}"`);
    e.html = e.html.split(`href='${from}'`).join(`href='${to}'`);
  }
}

const site = {
  meta: { title: 'Game Makers', description: 'Concepts et Impression 3D' },
  tags: d.tags.map(t => ({ name: t.name, slug: t.slug })),
  posts,
  pages,
};
writeFileSync(join(SITE, 'src', 'data', 'site.json'), JSON.stringify(site, null, 2), 'utf8');
console.log(`Posts : ${posts.length} | Pages : ${pages.length} | Tags : ${site.tags.length}`);

// --- 5. Copie des assets référencés ---
const wanted = new Set();
const collect = (h) => {
  for (const m of (h || '').matchAll(/(?:src|href|poster|data-src)="(\/(?:images|media|files)\/[^"]+)"/g)) wanted.add(m[1]);
  for (const m of (h || '').matchAll(/(?:src|href|poster|data-src)='(\/(?:images|media|files)\/[^']+)'/g)) wanted.add(m[1]);
};
for (const p of [...posts, ...pages]) { collect(p.html); if (p.feature) wanted.add(p.feature); }
// logo + cover du site
wanted.add('/images/2021/01/LogoImg.png');
wanted.add('/images/2021/01/NewSite-1.png');

const MAX_W = 2000;
let copied = 0, skipped = 0, missing = [];
async function copyAssets() {
  for (const urlPath of wanted) {
    const rel = urlPath.replace(/^\/(images|media|files)\//, '');
    const [kind] = urlPath.split('/').filter(Boolean);
    const srcRoot = kind === 'images' ? IMAGES_DIR : kind === 'media' ? MEDIA_DIR : FILES_DIR;
    const src = join(srcRoot, rel);
    const dst = join(PUBLIC_DIR, urlPath);
    if (!existsSync(src)) { missing.push(urlPath); continue; }
    if (existsSync(dst)) { skipped++; continue; }
    mkdirSync(dirname(dst), { recursive: true });
    const ext = extname(src).toLowerCase();
    if (kind === 'images' && ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      try {
        const img = sharp(src, { failOn: 'none' }).rotate();
        const meta = await img.metadata();
        let pipe = img;
        if ((meta.width || 0) > MAX_W) pipe = pipe.resize({ width: MAX_W, withoutEnlargement: true });
        if (ext === '.png') await pipe.png({ compressionLevel: 9 }).toFile(dst);
        else if (ext === '.webp') await pipe.webp({ quality: 82 }).toFile(dst);
        else await pipe.jpeg({ quality: 80, mozjpeg: true }).toFile(dst);
      } catch (e) {
        copyFileSync(src, dst);
      }
    } else {
      copyFileSync(src, dst);
    }
    copied++;
  }
  console.log(`Assets : ${copied} copiés, ${skipped} déjà présents, ${missing.length} manquants`);
  missing.slice(0, 30).forEach(m => console.log('  MANQUANT', m));
}

await copyAssets();

// --- 6. Export Markdown pour Decap CMS ---
mkdirSync(join(CONTENT_DIR, 'posts'), { recursive: true });
mkdirSync(join(CONTENT_DIR, 'pages'), { recursive: true });

function toMarkdown(e, isPost) {
  const front = [
    `title: "${e.title.replace(/"/g, '\\"')}"`,
    `slug: "${e.slug}"`,
    `date: ${e.date || ''}`,
    ...(isPost ? [`tags: [${e.tags.map(t => `'${t.slug}'`).join(', ')}]`] : []),
    ...(isPost ? [`authors: [${e.authors.map(a => `'${a}'`).join(', ')}]`] : []),
    ...(isPost ? [`featured: ${e.featured}`] : []),
    ...(e.feature ? [`feature: "${e.feature}"`] : []),
    ...(e.excerpt ? [`excerpt: "${e.excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`] : []),
  ].join('\n');
  return `---\n${front}\n---\n\n${e.html}`;
}

let mdPosts = 0, mdPages = 0;
for (const p of posts) {
  writeFileSync(join(CONTENT_DIR, 'posts', p.slug + '.md'), toMarkdown(p, true), 'utf8');
  mdPosts++;
}
for (const p of pages) {
  writeFileSync(join(CONTENT_DIR, 'pages', p.slug + '.md'), toMarkdown(p, false), 'utf8');
  mdPages++;
}
console.log(`Markdown : ${mdPosts} posts, ${mdPages} pages générés pour Decap CMS`);
