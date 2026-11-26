import { readFileSync, writeFileSync } from 'node:fs';
const j = JSON.parse(readFileSync('src/data/site.json', 'utf8'));

const BARTOPS = ['mini-sega-outrun', 'mini-new-astro-city', 'mini-aero', 'mini-vewlix-v2-0', 'mini-vewlix-v1-0', 'starone', 'bartop-ng', 'bartop-minitel-v2', 'bartop-minitel-v1'];
const CONSOLES = ['boitier-de-protection-pour-game-watch-mario-35th-anniversary', 'psp', 'neo-geo-x', 'la-big8', 'mini-tv-retro', 'pong', 'gba-ags-101-mod', 'gb-backlight-mod', 'pc-zotac', 'boitier-de-protection-pour-game-watch-zelda'];
const MEDIA_CENTER = ['votre-multimedia-center-a-base-dodroid-n2', 'creez-votre-multimedia-center-pi3-son-spdif-librelec-et-hyperion'];

// Add new tags to site.tags if not exist
const newTags = [];
if (!j.tags.some(t => t.slug === 'bartops')) newTags.push({ name: 'BARTOPS', slug: 'bartops' });
if (!j.tags.some(t => t.slug === 'consoles')) newTags.push({ name: 'CONSOLES', slug: 'consoles' });
if (!j.tags.some(t => t.slug === 'media-center')) newTags.push({ name: 'MEDIA CENTER', slug: 'media-center' });
j.tags.push(...newTags);

let count = 0;
j.posts.forEach(p => {
  if (BARTOPS.includes(p.slug)) {
    if (!p.tags.some(t => t.slug === 'bartops')) {
      p.tags.push({ name: 'BARTOPS', slug: 'bartops' });
      count++;
    }
  }
  if (CONSOLES.includes(p.slug)) {
    if (!p.tags.some(t => t.slug === 'consoles')) {
      p.tags.push({ name: 'CONSOLES', slug: 'consoles' });
      count++;
    }
  }
  if (MEDIA_CENTER.includes(p.slug)) {
    if (!p.tags.some(t => t.slug === 'media-center')) {
      p.tags.push({ name: 'MEDIA CENTER', slug: 'media-center' });
      count++;
    }
  }
});

writeFileSync('src/data/site.json', JSON.stringify(j, null, 2), 'utf8');
console.log('Added tags to', count, 'posts');
