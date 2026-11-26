// Resynchronise le frontmatter des .md (tags/visible/featured) depuis site.json
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(readFileSync(join(SITE, 'src/data/site.json'), 'utf8'));

let updated = 0;
for (const p of site.posts) {
  const f = join(SITE, 'src/content/posts', `${p.slug}.md`);
  let raw;
  try { raw = readFileSync(f, 'utf8'); } catch { console.log('pas de .md:', p.slug); continue; }
  const parts = raw.split(/^---\s*$/m);
  if (parts.length < 3) continue;
  const front = YAML.parse(parts[1]) || {};
  const body = parts.slice(2).join('---');

  front.tags = (p.tags || []).map((t) => t.slug);
  front.visible = p.visible !== false;
  if (p.featured) front.featured = true;

  const fm = YAML.stringify(front).trimEnd();
  writeFileSync(f, `---\n${fm}\n---${body.startsWith('\n') ? body : '\n' + body}`);
  updated++;
}
console.log(updated, 'md synchronisés');
