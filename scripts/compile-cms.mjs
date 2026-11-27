// Compile les fichiers Markdown (Decap CMS) vers src/data/site.json
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { marked } from 'marked';

marked.use({ gfm: true, breaks: true });

// Transforme le Markdown édité dans le CMS en HTML avec les classes du site.
// - paragraphe = 1 image            -> <figure class="gm-figure">
// - paragraphe = N images (et <br>) -> <figure class="gm-gallery"> (1 rangée par ligne)
// - <figcaption> accolée            -> repliée dans la figure
function mdToHtml(body) {
  let html = marked.parse(body);
  html = html.replace(
    /<p>((?:<img[^>]*>|<br\s*\/?>|<figcaption>[\s\S]*?<\/figcaption>|\s)+)<\/p>/g,
    (m, inner) => {
      const cap = inner.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1];
      const rows = inner
        .replace(/<figcaption>[\s\S]*?<\/figcaption>/g, '')
        .split(/<br\s*\/?>/)
        .map((r) => r.match(/<img[^>]*>/g) || [])
        .filter((r) => r.length);
      if (!rows.length) return m;
      const figcap = cap ? `<figcaption>${cap}</figcaption>` : '';
      if (rows.length === 1 && rows[0].length === 1)
        return `<figure class="gm-figure">${rows[0][0]}${figcap}</figure>`;
      const rowsHtml = rows
        .map((r) => `<div >${r.map((im) => `<div >${im}</div>`).join('')}</div>`)
        .join('');
      return `<figure class="gm-gallery "><div >${rowsHtml}</div>${figcap}</figure>`;
    }
  );
  // figcaption orpheline juste après une figure -> repliée dedans
  html = html.replace(/<\/figure>\s*<figcaption>([\s\S]*?)<\/figcaption>/g, '<figcaption>$1</figcaption></figure>');
  html = html.replace(/<img(?![^>]*loading)/g, '<img loading="lazy" ');
  return html;
}

const renderBody = (body) => (body || '').trimStart().startsWith('<') ? body : mdToHtml(body || '');

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = join(SITE, 'src', 'content');

const TAG_NAMES = {
  creations: 'Créations',
  collection: 'Collection',
  bartops: 'BARTOPS',
  consoles: 'CONSOLES',
  'media-center': 'MEDIA CENTER',
  jeux: 'Jeux',
  pcb: 'Circuits imprimés',
  projets: 'Projets',
  offres: 'Offres',
};

function readDir(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith('.md'))
    .map((d) => {
      const content = readFileSync(join(dir, d.name), 'utf8');
      const parts = content.split(/^---\s*$/m);
      if (parts.length < 3) return null;
      const front = YAML.parse(parts[1]) || {};
      const body = parts.slice(2).join('---').trim();
      return { ...front, body, slug: front.slug || d.name.replace('.md', '') };
    })
    .filter(Boolean);
}

function isoDate(d) {
  if (!d) return null;
  const dt = d instanceof Date ? d : new Date(d);
  return isNaN(dt) ? String(d) : dt.toISOString().slice(0, 10);
}

const posts = readDir(join(CONTENT_DIR, 'posts'))
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    kind: 'post',
    date: isoDate(p.date),
    tags: (Array.isArray(p.tags) ? p.tags : []).map((s) => ({
      name: TAG_NAMES[s] || String(s),
      slug: String(s),
    })),
    authors: Array.isArray(p.authors) && p.authors.length ? p.authors : ['Game Makers'],
    feature: p.feature || null,
    excerpt: p.excerpt || '',
    featured: p.featured === true,
    visible: p.visible !== false,
    html: renderBody(p.body),
  }))
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const pages = readDir(join(CONTENT_DIR, 'pages')).map((p) => ({
  slug: p.slug,
  title: p.title,
  kind: 'page',
  date: isoDate(p.date),
  tags: [],
  authors: ['Game Makers'],
  feature: null,
  excerpt: p.excerpt || '',
  featured: false,
  html: renderBody(p.body),
}));

const site = {
  meta: { title: 'Game Makers', description: 'Concepts et Impression 3D' },
  tags: Object.entries(TAG_NAMES).map(([slug, name]) => ({ name, slug })),
  posts,
  pages,
};

writeFileSync(join(SITE, 'src', 'data', 'site.json'), JSON.stringify(site, null, 2), 'utf8');
console.log(`Compilation CMS : ${posts.length} posts, ${pages.length} pages`);
