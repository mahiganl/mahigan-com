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
Deux versions du dessin, plein cadre (jamais de marges sur les côtés — l'auteur y tient) :
- **Écrans larges** : la version paysage (agrandie par Gemini à partir du portrait). Le portrait
  d'origine y occupe la bande centrale (x ≈ 830–1900 sur 2752), plus sombre que les côtés
  ajoutés : `outils/images.mjs` **égalise** les côtés sur le centre (colonne par colonne, en
  fondu) pour effacer la suture. Toile 2400 × 1340 calée sous la barre, qui montre toute la
  hauteur du dessin (soleils en haut, vague en bas) ; cadrée à 44 % si elle déborde.
  Soleils animés : 39,2 % / 48,75 %, 11,2 %, largeur 12 %.
- **Écrans en hauteur** (`max-aspect-ratio: 4/5`, téléphones) : le **portrait d'origine**
  (`../../obsolescence-site/assets/colored-drawings/chapter 4.png`, étoile ✦ retouchée), où la
  vague d'immeubles est grande. Cadré à 36 %. Soleils : 23,4 % / 48 %, 11 %, largeur 26 %.
- Essayé et écarté : le portrait seul au centre sur grand écran (grosses marges latérales).
Animation : les soleils respirent à contretemps, `.hero-ciel` fait dériver un voile de lumière,
un petit script déplace l'ensemble avec le curseur (ou l'inclinaison du téléphone). Tout
s'arrête si l'appareil demande moins de mouvement. Si une image change, recalculer les
coordonnées des soleils.

## Projets
Trois cartes, du plus récent au plus ancien : Terminal terrestre (/tt/, en français), L'écriture
intelligente (intelligent-writing.com/fr/ et /en/), L'obsolescence humaine programmée
(obsolescence-humaine.com / human-obsolescence.com). Images de cartes **sans titre** (choix de
l'auteur : cohérence, pas de répétition du titre de la carte) ; même image en FR et en EN.
Les images de travail à haute résolution vont dans `assets/project-picture/sources/`.

## Photos
Les photos d'iPhone peuvent être en HDR (PNG « Display P3 / PQ ») : elles s'affichent voilées
sur les écrans standard. Toujours partir du HEIC et exporter en JPEG sRGB (sips -m sRGB).
