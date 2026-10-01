#!/usr/bin/env node
// Images du site, allégées : redimensionnées, converties (WebP / JPEG sRGB), retouchées au besoin.
// Utilise Google Chrome sans interface (canvas) : pas de dépendance à installer.
//   node outils/images.mjs
// Les originaux restent dans le dépôt ; seules les versions produites sont chargées par le site.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const IW = path.resolve(RACINE, '../../intelligent-writing/public/images/cover.png');

// Étoile ✦ (filigrane Gemini) dans « Deux soleils » : remplacée par l'aquarelle située à sa
// gauche, avec un masque radial adouci.
const ETOILE = { x: 2640, y: 1424, rayon: 62, decalage: -140 };

const travaux = [
  // Accueil : photo de nuit à Kolkata (iPhone 4S, 2013). Étalonnage : on retire la dominante verte
  // des noirs (point noir mesuré : 1, 13, 1), puis on relève les noirs jusqu'au bleu nuit du site
  // (#0f172a) : la photo se fond dans la page sans bord visible ; les lumières ne bougent pas.
  { src: 'assets/theme-picture/sources/taxi-kolkata.jpg', etalonnage: { noir: [1, 13, 1], fond: [15, 23, 42] }, sorties: [
    { fichier: 'assets/theme-picture/taxi-kolkata-2400.webp', largeur: 2400, format: 'image/webp', qualite: 0.82 },
    { fichier: 'assets/theme-picture/taxi-kolkata-1280.webp', largeur: 1280, format: 'image/webp', qualite: 0.82 },
    { fichier: 'assets/theme-picture/taxi-kolkata-1600.jpg', largeur: 1600, format: 'image/jpeg', qualite: 0.84 },
  ] },
  ...['peuplement.jpg', 'big-bang-city.png', 'fleuve-colere.jpg', 'fuites-mineures.jpg', 'coulees.jpg', 'relief.png', 'surqualifie-lettres.jpg']
    .map((f) => ({ src: `assets/book-covers/${f}`, sorties: [
      { fichier: `assets/book-covers/${f.replace(/\.(png|jpg)$/, '')}-600.jpg`, largeur: 600, format: 'image/jpeg', qualite: 0.84 },
    ] })),
  // Dessin de L'obsolescence humaine programmée (sans titre, pour ne pas répéter celui de la carte) ;
  // étoile ✦ de Gemini retouchée.
  { src: 'assets/project-picture/sources/obsolescence-dessin.webp', retouche: { x: 1890, y: 1890, rayon: 50, decalage: -140 },
    sorties: [{ fichier: 'assets/project-picture/obsolescence.jpg', largeur: 560, format: 'image/jpeg', qualite: 0.85 }] },
  // Couverture de L'écriture intelligente ; étoile ✦ de Gemini retouchée.
  { src: IW, retouche: { x: 1938, y: 1940, rayon: 52, decalage: -150 },
    sorties: [{ fichier: 'assets/project-picture/intelligent-writing.jpg', largeur: 560, format: 'image/jpeg', qualite: 0.85 }] },
];

const url = (p) => 'file://' + (path.isAbsolute(p) ? p : path.join(RACINE, p)).split('/').map(encodeURIComponent).join('/');

const page = `<!doctype html><meta charset="utf-8"><body><pre id="sortie"></pre><script>
const travaux = ${JSON.stringify(travaux.map((t) => ({ ...t, src: url(t.src) })))};
const charger = (s) => new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = s; });
(async () => {
  const res = {};
  for (const t of travaux) {
    const img = await charger(t.src);
    let base = document.createElement('canvas');
    base.width = img.naturalWidth; base.height = img.naturalHeight;
    const c = base.getContext('2d');
    c.drawImage(img, 0, 0);
    if (t.egaliser) {
      // Luminosité moyenne du ciel par colonne, lissée ; gain par colonne pour ramener chaque
      // colonne au niveau de la zone de référence (le dessin d'origine).
      const { y0, y1, ref, lissage } = t.egaliser;
      const W = base.width, H = base.height;
      const img = c.getImageData(0, 0, W, H), d = img.data;
      const lum = new Float64Array(W);
      const ya = Math.round(y0 * H), yb = Math.round(y1 * H);
      for (let x = 0; x < W; x++) {
        let s = 0, n = 0;
        for (let y = ya; y < yb; y += 2) { const q = (y * W + x) * 4; s += 0.2126 * d[q] + 0.7152 * d[q + 1] + 0.0722 * d[q + 2]; n++; }
        lum[x] = s / n;
      }
      const flou = (v, sig) => { const r = Math.ceil(sig * 3), k = []; let t = 0;
        for (let i = -r; i <= r; i++) { const w = Math.exp(-(i * i) / (2 * sig * sig)); k.push(w); t += w; }
        return Array.from(v, (_, x) => { let a = 0; for (let i = -r; i <= r; i++) { const xx = Math.min(W - 1, Math.max(0, x + i)); a += v[xx] * k[i + r]; } return a / t; }); };
      const lisse = flou(lum, lissage * 2);
      let cible = 0; for (let x = ref[0]; x < ref[1]; x++) cible += lisse[x]; cible /= (ref[1] - ref[0]);
      const gain = flou(lisse.map((v, x) => (x >= ref[0] && x < ref[1]) ? 1 : Math.min(1.02, Math.max(0.85, cible / v))), lissage);
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const q = (y * W + x) * 4, g = gain[x];
        d[q] = d[q] * g; d[q + 1] = d[q + 1] * g; d[q + 2] = d[q + 2] * g;
      }
      c.putImageData(img, 0, 0);
    }
    if (t.etalonnage) {
      const { noir, fond } = t.etalonnage;
      const img = c.getImageData(0, 0, base.width, base.height), d = img.data;
      for (let q = 0; q < d.length; q += 4) for (let k = 0; k < 3; k++) {
        const v = Math.max(0, d[q + k] - noir[k]) * 255 / (255 - noir[k]);   // point noir neutre
        d[q + k] = fond[k] + v * (255 - fond[k]) / 255;                     // noirs → bleu nuit
      }
      c.putImageData(img, 0, 0);
    }
    if (t.retouche) {
      const { x, y, rayon, decalage, decalageY = 0 } = t.retouche;
      const r2 = rayon * 1.7, cote = Math.ceil(r2 * 2);
      const piece = document.createElement('canvas'); piece.width = piece.height = cote;
      const p = piece.getContext('2d');
      p.drawImage(base, x + decalage - r2, y + decalageY - r2, cote, cote, 0, 0, cote, cote);
      const g = p.createRadialGradient(r2, r2, rayon, r2, r2, r2);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      p.globalCompositeOperation = 'destination-in'; p.fillStyle = g; p.fillRect(0, 0, cote, cote);
      c.drawImage(piece, x - r2, y - r2);
    }
    for (const s of t.sorties) {
      const l = Math.min(s.largeur, base.width), h = Math.round(base.height * l / base.width);
      const out = document.createElement('canvas'); out.width = l; out.height = h;
      const o = out.getContext('2d');
      o.imageSmoothingQuality = 'high';
      if (s.format === 'image/jpeg') { o.fillStyle = '#fff'; o.fillRect(0, 0, l, h); }
      o.drawImage(base, 0, 0, l, h);
      res[s.fichier] = out.toDataURL(s.format, s.qualite);
    }
  }
  document.getElementById('sortie').textContent = JSON.stringify(res);
})().catch((e) => { document.getElementById('sortie').textContent = 'ERREUR ' + e; });
</script>`;

const tmp = path.join(os.tmpdir(), 'mahigan-images.html');
fs.writeFileSync(tmp, page);
const dom = execFileSync(CHROME, [
  '--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--virtual-time-budget=60000',
  '--dump-dom', 'file://' + tmp,
], { maxBuffer: 512 * 1024 * 1024 }).toString();
const brut = dom.match(/<pre id="sortie">([\s\S]*?)<\/pre>/)[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&');
if (brut.startsWith('ERREUR') || !brut) throw new Error(brut || 'aucune sortie');
for (const [fichier, donnees] of Object.entries(JSON.parse(brut))) {
  const octets = Buffer.from(donnees.split(',')[1], 'base64');
  fs.writeFileSync(path.join(RACINE, fichier), octets);
  console.log(`${fichier}  ${(octets.length / 1024).toFixed(0)} Ko`);
}
