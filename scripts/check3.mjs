import { readFileSync } from 'node:fs';
const s = JSON.parse(readFileSync('src/data/site.json', 'utf8'));
const hrefs = new Set();
for (const p of [...s.posts, ...s.pages])
  for (const m of (p.html||'').matchAll(/href="(\/[^"#?]*)"/g)) hrefs.add(m[1]);
[...hrefs].sort().forEach(h => console.log(h));
