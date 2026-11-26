import { readFileSync } from 'node:fs';
const s = JSON.parse(readFileSync('src/data/site.json', 'utf8'));
const str = JSON.stringify(s);
const refs = [...str.matchAll(/\/content\/[a-z]+\/[^"'\s)\\]+/g)].map(m => m[0]);
const uniq = [...new Set(refs)];
console.log('count', uniq.length);
uniq.slice(0, 50).forEach(u => console.log(u));
// also any remaining http absolute internal
const abs = [...str.matchAll(/https?:\/\/[^"'\s)]+/g)].map(m => m[0]);
const absInt = [...new Set(abs.filter(u => /ghost|game-makers|localhost/.test(u)))];
console.log('--- absolute ---'); absInt.forEach(u => console.log(u));
