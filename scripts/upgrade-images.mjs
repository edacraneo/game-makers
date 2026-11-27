// Remplace les miniatures miniNN du site par les originaux imgNN de l'archive 00_Projets
// Securite: compare les pixels site vs archive pour identifier le bon dossier projet
import { readFileSync, readdirSync, renameSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROJETS = join(SITE, '..', 'Game Makers/u478782546/domains/game-makers.xyz/public_html/00_Projets');
const DRY = process.argv.includes('--dry');

const isImg = (n) => /\.(jpe?g|png|gif)$/i.test(n);
const base = (n) => n.toLowerCase().replace(/-\d+(\.\w+)$/, '$1');

const projDirs = readdirSync(PROJETS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.startsWith('images_Projet'))
  .map((d) => join(PROJETS, d.name));
const dirFiles = new Map(projDirs.map((d) => [d, new Set(readdirSync(d).filter(isImg))]));

const dims = async (f) => {
  try { const m = await sharp(f).metadata(); return { w: m.width, h: m.height }; } catch { return null; }
};

// Empreinte visuelle: 16x16 gris
const fingerprint = async (f) => {
  try {
    const { data } = await sharp(f).resize(16, 16, { fit: 'fill' }).grayscale().raw().toBuffer({ resolveWithObject: true });
    return data;
  } catch { return null; }
};
const diff = (a, b) => {
  if (!a || !b || a.length !== b.length) return 999;
  let s = 0;
  for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]);
  return s / a.length; // 0 = identique, seuil ~ <25 acceptable (recompression)
};

const site = JSON.parse(readFileSync(join(SITE, 'src/data/site.json'), 'utf8'));
const used = new Set();
for (const p of [...site.posts, ...site.pages]) {
  for (const m of p.html.matchAll(/src="(\/images\/[^"]+\.(?:jpe?g|png|gif))"/gi)) used.add(m[1]);
  if (p.feature && /\.(jpe?g|png|gif)$/i.test(p.feature)) used.add(p.feature);
}

let replaced = 0, noMatch = 0, noOrig = 0, notBigger = 0;
for (const src of used) {
  const name = basename(src).toLowerCase();
  if (!/^mini/.test(name)) continue;
  const num = name.match(/^mini(\d+)/)?.[1];
  if (!num) continue;

  const siteFile = join(SITE, 'public', src);
  const sd = await dims(siteFile);
  const sfp = await fingerprint(siteFile);
  if (!sd || !sfp) { noMatch++; continue; }

  // Identifier le bon dossier projet par comparaison de pixels
  let bestDir = null, bestDiff = 40;
  for (const dir of projDirs) {
    const cand = [...dirFiles.get(dir)].find((f) => base(f) === name);
    if (!cand) continue;
    const d = await dims(join(dir, cand));
    if (!d) continue;
    // ratio compatible (tolérance recadrage léger)
    const dScore = Math.abs(d.w / d.h - sd.w / sd.h);
    if (dScore > 0.15) continue;
    const dd = await diff(sfp, await fingerprint(join(dir, cand)));
    if (dd < bestDiff) { bestDiff = dd; bestDir = dir; }
  }
  if (!bestDir) { noMatch++; continue; }

  const orig = [...dirFiles.get(bestDir)].find((f) => base(f).replace(/\.\w+$/, '') === `img${num}`);
  if (!orig) { noOrig++; continue; }
  const od = await dims(join(bestDir, orig));
  if (!od || od.w <= sd.w * 1.15) { notBigger++; continue; }

  console.log(`${src} : ${sd.w}px -> ${od.w}px (${basename(bestDir)}/${orig}, diff=${bestDiff.toFixed(0)})`);
  if (!DRY) {
    await sharp(join(bestDir, orig))
      .resize({ width: Math.min(od.w, 2000), withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(siteFile + '.tmp');
    renameSync(siteFile + '.tmp', siteFile);
  }
  replaced++;
}
console.log(`\n${DRY ? '[DRY] ' : ''}${replaced} remplacées | ${noMatch} sans correspondance | ${noOrig} sans imgNN | ${notBigger} pas plus grandes`);
