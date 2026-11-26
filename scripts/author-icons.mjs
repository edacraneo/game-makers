import { readFileSync, writeFileSync } from 'node:fs';
const j = JSON.parse(readFileSync('src/data/site.json', 'utf8'));

const authorIcons = {
  'ian57': '/images/2021/01/logo_ian57.jpg',
  'eLLuiGi': '/images/2021/01/logo_elluigi.jpg',
  'BudDevil': '/images/2021/01/logo_buddevil.jpg',
  'Frakasss': '/images/2021/01/logo_frakasss.jpg',
};

j.posts.forEach(p => {
  p.authorIcons = (p.authors || []).map(a => authorIcons[a] || null).filter(Boolean);
});

writeFileSync('src/data/site.json', JSON.stringify(j, null, 2), 'utf8');
console.log('Added author icons');
