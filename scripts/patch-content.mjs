// Patch site.json : partenaires (logos locaux, sans Ghost) + videos YouTube odroid
import { readFileSync, writeFileSync } from 'node:fs';

const file = 'src/data/site.json';
const data = JSON.parse(readFileSync(file, 'utf8'));

// --- Page partenaires ---
const partenaires = data.pages.find((p) => p.slug === 'partenaires');
if (partenaires) {
  partenaires.html = `<hr><p>Un <strong>grand "Merci"</strong> à nos partenaires qui soutiennent nos différents projets !<br>Sans eux, nous ne serions pas là :</p>
<figure><a href="https://www.artcab.fr/"><div><div>Hommage à Art'Cab (2015-2025)</div><div>Spécialiste du flipper virtuel (pincab) et de l'arcade. Artcab a fermé ses portes en 2025 après 10 années de passion. Ils nous ont aidés pour l'électronique et les pièces détachées de nos bornes d'arcade et pincabs. Un immense merci à toute l'équipe pour leur accompagnement.</div></div><div><img src="/logo/artcab.png" alt="Art'Cab"></div></a></figure>
<hr>
<figure><a href="https://www.kubii.fr/"><div><div>Boutique Officielle Raspberry PI - KUBII</div><div>Distributeur officiel du Raspberry PI et de ses accessoires, vente en ligne de cartes d'extension Arduino, de matériel de retrogaming et d'équipements robotiques de loisirs.</div></div><div><img src="/logo/kubii.png" alt="KUBII"></div></a></figure>
<hr>
<figure><a href="https://www.recalbox.com/fr/"><div><div>recalbox.com</div><div>Recalbox allows you to re-play a variety of videogame consoles and platforms in your living room, with ease! Recalbox OS is free, open source and designed to let you create your very own Recalbox in no time!</div></div><div><img src="/logo/recalbox.png" alt="Recalbox"></div></a></figure>
<p>Big merci à <strong>SEB</strong> de <strong>pointpointslash.com</strong></p>
<hr><p>Vous souhaitez vous aussi nous soutenir à votre manière ? Venez nous en parler :</p><p>Edacraneo@gmail.com</p>`;
  console.log('partenaires: patched');
}

// --- Vidéos YouTube article Odroid N2+ ---
const YT = {
  'VID_20220225_162537.mp4': 'U7QIuv42SUM',
  'IMG_0045.mp4': 'cwX0lw-YV80',
  'IMG_0046.mp4': 'hbcL70qUNm0',
};
const odroid = data.posts.find((p) => p.slug === 'votre-multimedia-center-a-base-dodroid-n2');
if (odroid) {
  odroid.html = odroid.html.replace(
    /<video[^>]*src="[^"]*\/([\w.-]+\.mp4)"[\s\S]*?<\/video>/g,
    (m, fname) => {
      const id = YT[fname];
      if (!id) return m;
      return `<figure class="gm-youtube"><iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>`;
    }
  );
  console.log('odroid videos:', (odroid.html.match(/gm-youtube/g) || []).length, 'iframes');
}

writeFileSync(file, JSON.stringify(data, null, 2));
console.log('site.json saved');
