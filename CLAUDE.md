# mahigan.com — consignes pour Claude

Site personnel de Mahigan Lepage : une page statique bilingue (FR/EN), `index.html` + `script.js`,
hébergée sur Netlify (dépôt GitHub `mahiganl/mahigan-com`, publication automatique à chaque push
sur `main`, sans étape de construction). Le bilinguisme se fait par classes `lang-fr` / `lang-en`
et `script.js` (qui fixe aussi le titre : « Mahigan | écritures et intelligences »).

## Structure
- `index.html` — la page ; `script.js` — langue, menu mobile, fiches des livres (modale).
- `assets/site.css` — feuille Tailwind **compilée** (plus de CDN). Après tout ajout ou changement
  de classes Tailwind dans `index.html` ou `script.js`, la regénérer :
  `npx tailwindcss@3 -c outils/tailwind.config.cjs -i outils/tailwind.css -o assets/site.css --minify`
- `outils/images.mjs` — produit les images allégées (Chrome sans interface) : accueil en WebP
  + JPEG de secours, couvertures en JPEG 600 px, images de projets 560 px. Les originaux lourds
  restent dans le dépôt mais ne sont plus chargés. Relancer : `node outils/images.mjs`.
  Il retouche aussi l'étoile ✦ (filigrane Gemini) dans « Deux soleils ».
- `assets/partage.jpg` — image de partage (Open Graph) 1200 × 630.
- `_redirects` — relaie `/tt/*` vers le site Netlify de Terminal terrestre (dépôt séparé
  `mahiganl/terminal-terrestre`). **Ne pas ajouter de règle `/tt → /tt/`** (boucle).
- `robots.txt` — signale le plan du site de Terminal terrestre.

## Accueil : « Deux soleils » vivant
Le dessin est posé dans une toile au format exact de l'image (2400 × 1340), calée sous la barre
de navigation et cadrée à 44 % de sa largeur (entre les deux soleils). Deux calques animés
(`.hero-soleil-1`, `-2`, aux coordonnées des soleils peints : 39,2 % / 48,75 %, 11,2 %) font
respirer les soleils à contretemps ; `.hero-ciel` fait dériver un voile de lumière ; un petit
script déplace l'ensemble avec le curseur (ou l'inclinaison du téléphone). Tout s'arrête si
l'appareil demande moins de mouvement. Si l'image change, recalculer ces coordonnées.

## Projets
Trois cartes, du plus récent au plus ancien : Terminal terrestre (/tt/, en français), L'écriture
intelligente (intelligent-writing.com/fr/ et /en/), L'obsolescence humaine programmée
(obsolescence-humaine.com / human-obsolescence.com).

## Photos
Les photos d'iPhone peuvent être en HDR (PNG « Display P3 / PQ ») : elles s'affichent voilées
sur les écrans standard. Toujours partir du HEIC et exporter en JPEG sRGB (sips -m sRGB).
