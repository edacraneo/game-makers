// Compile les fichiers Markdown (Decap CMS) vers src/data/site.json
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = join(SITE, 'src', 'content');

function readDir(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isFile() && d.name.endsWith('.md'))
    .map(d => {
      const content = readFileSync(join(dir, d.name), 'utf8');
      const parts = content.split('---');
      if (parts.length < 3) return null;
      const frontmatter = parts[1];
      const body = parts.slice(2).join('---').trim();
      const front = {};
      for (const line of frontmatter.split('\n')) {
        const [k, ...v] = line.split(':');
        if (k && v.length) {
          const val = v.join(':').trim().replace(/^"|"$/g, '');
          if (val.startsWith('[')) {
            front[k.trim()] = val.slice(1, -1).split(',').map(x => x.trim().replace(/^'|'$/g, ''));
          } else if (val === 'true') {
            front[k.trim()] = true;
          } else if (val === 'false') {
            front[k.trim()] = false;
          } else {
            front[k.trim()] = val;
          }
        }
      }
      return { ...front, body, slug: d.name.replace('.md', '') };
    }).filter(Boolean);
}

const posts = readDir(join(CONTENT_DIR, 'posts')).map(p => ({
  slug: p.slug,
  title: p.title,
  kind: 'post',
  date: p.date,
  tags: (p.tags || []).map((s, i) => ({ name: s, slug: s })),
  authors: p.authors || ['Game Makers'],
  feature: p.feature,
  excerpt: p.excerpt,
  featured: p.featured,
  html: p.body,
})).sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const pages = readDir(join(CONTENT_DIR, 'pages')).map(p => ({
  slug: p.slug,
  title: p.title,
  kind: 'page',
  date: p.date,
  tags: [],
  authors: ['Game Makers'],
  feature: null,
  excerpt: '',
  featured: false,
  html: p.body,
}));

const site = {
  meta: { title: 'Game Makers', description: 'Concepts et Impression 3D' },
  tags: [
    { name: 'Créations', slug: 'creations' },
    { name: 'Projets', slug: 'projets' },
    { name: 'Jeux', slug: 'jeux' },
    { name: 'Circuits imprimés', slug: 'pcb' },
    { name: 'Offres', slug: 'offres' },
  ],
  posts,
  pages,
};

writeFileSync(join(SITE, 'src', 'data', 'site.json'), JSON.stringify(site, null, 2), 'utf8');
console.log(`Compilation CMS : ${posts.length} posts, ${pages.length} pages`);
