// Convertit les corps HTML des .md (posts + pages) en Markdown propre.
// Conserve : figures (-> ![]()), galeries (-> lignes d'images = rangées),
// embeds/liens-cartes (-> HTML brut), pre (-> blocs ```), blockquotes (-> >).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content');
const DRY = process.argv.includes('--dry');

const ENT = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', eacute: 'é', egrave: 'è',
  agrave: 'à', ccedil: 'ç', ecirc: 'ê', ugrave: 'ù', ocirc: 'ô', icirc: 'î', acirc: 'â',
  ucirc: 'û', auml: 'ä', euml: 'ë', iuml: 'ï', ouml: 'ö', uuml: 'ü', Agrave: 'À', Eacute: 'É',
  Egrave: 'È', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', hellip: '…', mdash: '—', ndash: '–',
  times: '×', deg: '°', frac12: '½', sup2: '²', micro: 'µ', reg: '®', copy: '©', trade: '™',
};
const decodeEntities = (s) => s
  .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&([a-zA-Z]+);/g, (m, n) => ENT[n] ?? m);

// --- inline : HTML -> Markdown ---
function escText(t) {
  let s = decodeEntities(t);
  s = s.replace(/[\\`_[\]]/g, '\\$&');           // caractères de syntaxe
  s = s.replace(/\*/g, '&#42;');                 // * littéral -> entité (jamais ambigu)
  s = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  s = s.replace(/(^|\n)(\s*)([-+#>])/g, '$1$2\\$3'); // débuts de ligne
  s = s.replace(/(^|\n)(\s*)(\d{1,2})([.)])/g, '$1$2$3\\$4'); // "1." en début
  return s;
}

function inline(html) {
  let out = '';
  let i = 0;
  let strongDepth = 0, emDepth = 0;
  const tagRe = /<\/?[a-zA-Z!][^>]*>/g;
  let m;
  // Fermeture : si le buffer finit par un espace, le marqueur passe avant
  // ("text **" ne ferme pas en Markdown -> "text** ")
  const close = (marker) => {
    const sp = out.match(/ +$/);
    if (sp) out = out.slice(0, -sp[0].length) + marker + sp[0];
    else out += marker;
  };
  while ((m = tagRe.exec(html))) {
    out += escText(html.slice(i, m.index));
    const t = m[0];
    if (t.startsWith('<strong') || t.startsWith('<em')) {
      // "<em> texte</em>" : l'espace passe AVANT le marqueur sinon il ne peut pas ouvrir
      const marker = t[1] === 's' ? '**' : '_';
      if (t[1] === 's') strongDepth++; else emDepth++;
      if (html[m.index + t.length] === ' ') {
        out += ' ' + marker;
        i = m.index + t.length + 1;
        tagRe.lastIndex = i;
        continue;
      }
      out += marker;
    }
    else if (t === '</strong>') { if (strongDepth > 0) { close('**'); strongDepth--; } }
    else if (t === '</em>') { if (emDepth > 0) { close('_'); emDepth--; } }
    else if (t.startsWith('<code')) {
      // contenu verbatim jusqu'à </code> — pas d'échappement Markdown à l'intérieur
      const rest = html.slice(m.index + t.length);
      const c = rest.indexOf('</code>');
      const inner = c > -1 ? rest.slice(0, c) : rest;
      out += '`' + decodeEntities(inner.replace(/<[^>]+>/g, '')).replace(/`/g, "'") + '`';
      i = c > -1 ? m.index + t.length + c + 7 : html.length;
      tagRe.lastIndex = i;
      continue;
    }
    else if (t === '</code>') out += '`';
    else if (t.startsWith('<br')) out += '\n';
    else if (t.startsWith('<img')) {
      const src = t.match(/src="([^"]+)"/)?.[1] ?? '';
      const alt = decodeEntities(t.match(/alt="([^"]*)"/)?.[1] ?? '');
      out += alt ? `![${alt}](${src})` : `![](${src})`;
    }
    else if (t.startsWith('<a ')) {
      const href = decodeEntities(t.match(/href="([^"]+)"/)?.[1] ?? '');
      // trouve le contenu jusqu'à </a> — inline simple, pas de <a> imbriqué
      const rest = html.slice(m.index + t.length);
      const close = rest.indexOf('</a>');
      const inner = close > -1 ? rest.slice(0, close) : '';
      out += `[${inline(inner)}](${href})`;
      i = close > -1 ? m.index + t.length + close + 4 : m.index + t.length;
      tagRe.lastIndex = i;
      continue;
    }
    else if (t === '</a>') out += '';
    else if (t.startsWith('<!--')) out += t;
    else out += t; // tags inconnus : laisser en brut
    i = tagRe.lastIndex;
  }
  out += escText(html.slice(i));
  return out;
}

// --- blocs ---
const skipWs = (s, i) => { while (i < s.length && /\s/.test(s[i])) i++; return i; };

function findClose(s, openIdx, tag) {
  // cherche </tag> avec gestion de l'imbrication du même tag
  let depth = 0;
  const re = new RegExp(`<\\/?${tag}(\\s|>|/)`, 'gi');
  re.lastIndex = openIdx;
  let m;
  while ((m = re.exec(s))) {
    if (m[0].startsWith('</')) { depth--; if (depth === 0) return m.index + m[0].length + (s[m.index + m[0].length] === '>' ? 1 : 0); }
    else if (!m[0].endsWith('/')) depth++;
  }
  return -1;
}

function blockInner(s, tag) {
  const close = `</${tag}>`;
  return s.replace(new RegExp(`^<${tag}[^>]*>`), '').replace(new RegExp(`${close}\\s*$`), '');
}

// Équilibre les ** par ligne : collapse ****, ferme les ouverts, jette les orphelins,
// et répare "x **" (fermant précédé d'un espace = littéral en Markdown) -> "x** "
function fixStars(md) {
  return md.split('\n').map((line) => {
    line = line.replace(/\*\*{2,}/g, '**');
    let depth = 0;
    line = line.replace(/\*\*/g, (m, off) => {
      depth ^= 1;
      if (depth === 0 && line.slice(0, off).endsWith(' ')) return 'CLOSE';
      return m;
    });
    line = line.replace(/ \u007fCLOSE/g, '** ').replace(/\u007fCLOSE/g, '**');
    const count = (line.match(/\*\*/g) || []).length;
    if (count % 2 === 0) return line;
    if (/^(\s*>?\s*)?\*\*\\?- /.test(line)) return line.replace('**', ''); // orphan close
    if (/^(\s*>?\s*)?\*\*/.test(line)) return line + '**'; // ouvert non fermé
    return line.replace(/\*\*(?![^*]*\*\*)/, '');
  }).join('\n');
}

function convertFigure(f) {
  if (/class="gm-embed|<iframe/.test(f)) return dedent(f); // embed : HTML brut
  const imgs = [...f.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/g)].map((x) => x[1]);
  if (/class="gm-figure/.test(f) && imgs.length === 1) {
    const cap = f.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1];
    let out = `![](${imgs[0]})`;
    if (cap) out += `\n<figcaption>${inline(cap)}</figcaption>`;
    return out;
  }
  if (/class="gm-gallery/.test(f) && imgs.length) {
    // chaque <div> de rangée contient des cellules <div><img>
    const rows = [];
    const rowRe = /<div[^>]*>((?:(?!<div\b)[\s\S])*?)<\/div>/g; // rangées = divs les plus externes… approximation
    // Plus simple : parcourir la structure linéaire
    let depth = 0, row = [];
    const tok = /<div[^>]*>|<\/div>|<img[^>]*src="([^"]+)"[^>]*>|<figcaption>([\s\S]*?)<\/figcaption>/g;
    let m;
    while ((m = tok.exec(f))) {
      if (m[0].startsWith('<div')) {
        depth++;
        if (depth === 2 && row.length) { rows.push(row); row = []; } // nouvelle rangée
      } else if (m[0] === '</div>') {
        depth--;
        if (depth === 1 && row.length) { rows.push(row); row = []; }
      } else if (m[0].startsWith('<img')) row.push(m[1]);
      else if (m[1] !== undefined && m[0].startsWith('<figcaption')) row.push({ cap: inline(m[1]) });
    }
    if (row.length) rows.push(row);
    return rows.map((r) => r.map((c) => typeof c === 'string' ? `![](${c})` : `<figcaption>${c.cap}</figcaption>`).join(' ')).join('\n');
  }
  // figure avec lien / autre : brut
  return dedent(f);
}

// Retire l'indentation commune des blocs HTML bruts — sinon Markdown les
// interprète comme du code (lignes indentées 4+ espaces)
const dedent = (s) => s.trim().split('\n').map((l) => l.trim()).join('\n');

function convertBlockquote(b) {
  const inner = blockInner(b, 'blockquote');
  const lines = inline(inner).split('\n').map((l) => l.trimEnd());
  return lines.map((l) => (l ? `> ${l}` : '>')).join('\n');
}

function convertPre(b) {
  const inner = blockInner(b, 'pre');
  const code = decodeEntities(inner.replace(/<\/?code[^>]*>/g, '').replace(/<[^>]+>/g, ''));
  return '```\n' + code.replace(/\n+$/, '') + '\n```';
}

function convertList(b, ordered) {
  const inner = blockInner(b, ordered ? 'ol' : 'ul');
  const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)];
  if (!items.length) return b;
  return items.map((x, i) => `${ordered ? `${i + 1}.` : '-'} ${inline(x[1]).replace(/\n+/g, ' ')}`).join('\n');
}

function htmlToMd(body) {
  const blocks = [];
  let i = 0, text = '';
  const BLOCK = /<(figure|blockquote|pre|h[1-6]|p|ul|ol|table|hr|iframe|div|!--)[^>]*>/g;
  let m;
  const flush = () => { const t = text.trim(); if (t) blocks.push(inline(t)); text = ''; };
  while ((m = BLOCK.exec(body))) {
    // texte avant le bloc
    text += body.slice(i, m.index);
    flush();
    const tag = m[1].replace(/^!--$/, '!--');
    if (tag === 'hr') { blocks.push('---'); i = BLOCK.lastIndex; continue; }
    if (tag === '!--') {
      const end = body.indexOf('-->', m.index);
      if (end === -1) { text += m[0]; i = BLOCK.lastIndex; continue; }
      i = end + 3; BLOCK.lastIndex = i; continue; // commentaires : on jette
    }
    const end = findClose(body, m.index, tag);
    const raw = end > -1 ? body.slice(m.index, end) : m[0];
    i = end > -1 ? end : BLOCK.lastIndex;
    BLOCK.lastIndex = i;
    if (tag === 'figure') blocks.push(convertFigure(raw));
    else if (tag === 'blockquote') blocks.push(convertBlockquote(raw));
    else if (tag === 'pre') blocks.push(convertPre(raw));
    else if (tag === 'ul' || tag === 'ol') blocks.push(convertList(raw, tag === 'ol'));
    else if (tag === 'p') blocks.push(inline(blockInner(raw, 'p')));
    else if (/^h[1-6]$/.test(tag)) {
      const n = +tag[1];
      const txt = inline(blockInner(raw, tag)).replace(/\n+/g, ' ').replace(/\*+/g, '').trim();
      blocks.push('#'.repeat(n) + ' ' + txt);
    }
    else blocks.push(dedent(raw)); // table, iframe, div, autre : brut
  }
  text += body.slice(i);
  flush();
  return blocks.filter(Boolean).map((b) => (/^\s*(<|```)/.test(b) ? b : fixStars(b))).join('\n\n') + '\n';
}

const dirs = ['posts', 'pages'];
let done = 0, skipped = [];
for (const d of dirs) {
  for (const f of readdirSync(join(ROOT, d))) {
    if (!f.endsWith('.md')) continue;
    const p = join(ROOT, d, f);
    const s = readFileSync(p, 'utf8');
    const split = s.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!split) { skipped.push(`${d}/${f}: frontmatter illisible`); continue; }
    const body = split[2].trim();
    if (!body.startsWith('<')) { skipped.push(`${d}/${f}: déjà markdown`); continue; }
    const md = htmlToMd(body);
    if (!DRY) writeFileSync(p, `---\n${split[1]}\n---\n${md}`);
    done++;
    if (DRY) console.log(`--- ${d}/${f} ---\n${md.slice(0, 300)}\n`);
  }
}
console.log(`${done} fichiers convertis${DRY ? ' (dry-run, rien écrit)' : ''}`);
skipped.forEach((x) => console.log('SKIP', x));
