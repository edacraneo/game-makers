import { readFileSync, writeFileSync } from 'node:fs';
const j = JSON.parse(readFileSync('src/data/site.json', 'utf8'));
let count = 0;
j.posts.forEach(p => {
  if (p.title.includes('\\') || p.title.includes('"')) {
    p.title = p.title.replace(/\\/g, '').replace(/"/g, '"');
    count++;
  }
});
writeFileSync('src/data/site.json', JSON.stringify(j, null, 2), 'utf8');
console.log('Fixed', count, 'titles');
