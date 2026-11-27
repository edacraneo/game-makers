// Compare les images du site avec les originaux de l'archive 00_Projets
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const BACKUP = join(SITE, '..', 'Game Makers/u478782546/domains/game-makers.xyz/public_html');

// Index backup : nom de fichier (sans suffixe Ghost -N) -> chemin
const backupIndex = new Map();
function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jpe?g|png|gif)$/i.test(e.name)) {
      const key = e.name.toLowerCase().replace(/-\d+(\.\w+)$/, '$1');
      backupIndex.set(key, p);
    }
  }
}
walk(join(BACKUP, '00_Projets'));
walk(join(BACKUP, '#Archives#'));
console.log(backupIndex.size, 'images dans l archive');

const site = JSON.parse(readFileSync(join(SITE, 'src/data/site.json'), 'utf8'));
const used = new Set();
for (const p of [...site.posts, ...site.pages]) {
  for (const m of p.html.matchAll(/src="(\/images\/[^"]+)"/g)) used.add(m[1]);
  if (p.feature) used.add(p.feature);
}
console.log(used.size, 'images utilisees par le site');

const dims = async (f) => {
  try { const m = await sharp(f).metadata(); return m.width; } catch { return 0; }
};

let better = 0, report = [];
for (const src of used) {
  const siteFile = join(SITE, 'public', src);
  const key = basename(src).toLowerCase().replace(/-\d+(\.\w+)$/, '$1');
  const backupFile = backupIndex.get(key);
  if (!backupFile) continue;
  const [sw, bw] = await Promise.all([dims(siteFile), dims(backupFile)]);
  if (bw > sw * 1.3) { better++; report.push(`${src} : ${sw}px -> ${bw}px (${backupFile.split('public_html\\')[1]})`); }
}
console.log(better, 'images ameliorables');
console.log(report.slice(0, 40).join('\n'));
