import { readFileSync } from 'node:fs';
const s = JSON.parse(readFileSync('src/data/site.json', 'utf8'));
const str = JSON.stringify(s);
for (const pat of ['/images/size', 'srcset', 'kg-', '__GHOST', 'ghost.org']) {
  console.log(pat, (str.match(new RegExp(pat.replace(/[/.]/g,'\$&'),'g'))||[]).length);
}
