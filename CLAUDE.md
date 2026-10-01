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

## Accueil : Kolkata, la nuit
Photo de l'auteur (iPhone 4S, Kolkata, 2013) : un taxi jaune filé derrière une vitre mouillée.
Source : `assets/theme-picture/sources/taxi-kolkata.jpg`. `outils/images.mjs` l'**étalonne** :
dominante verte des noirs retirée (point noir 1, 13, 1), puis noirs relevés exactement au bleu
nuit du site (#0f172a) — la photo se fond dans la page sans bord, et peut donc déborder.
**Règle de l'auteur : tout ce qui est surimprimé doit être sur une zone noire de la photo.**
- **Écran large** (choix de l'auteur) : la photo est **réduite** (≈ 70 % de la largeur, jamais plus
  haute que l'écran) et **ancrée en bas à droite** ; le haut et la gauche sont une nuit
  « artificielle » (le fond du site). La **route** (filés verdâtres, bande y 60–81 % de la photo)
  est **prolongée sur toute la largeur** vers la gauche : image composite deux fois plus large
  (`taxi-kolkata-route-*`, produite par `outils/images.mjs`, option `route` : les 20 % de gauche
  de la photo en miroir puis étirés, fondu en haut et à l'extrême gauche, bord bas net).
  Titre, sous-titre et boutons sont dans la nuit, ramenés vers le centre (`.hero-texte` : left
  20vw, top 27 % sous la barre) ; leur taille suit la largeur (vw). L'auteur accepte qu'ils
  chevauchent un peu les motifs.
- Flèche et crédit (« Kolkata, 2013 • Photo : Mahigan Lepage ») : bande noire de la portière
  (y ≈ 86 % de la photo).
- Écrans en hauteur : photo cadrée sur le taxi et les lumières dans le bas, texte au-dessus.
- Vérifié par mesure (luminosité de la photo sous chaque élément) de 375 px à 2560 px : tout est
  sur du noir pur. Refaire cette mesure si la mise en page de l'accueil change.
- Écarté : photo pleine largeur (trop présente, texte collé dans le coin).
- **Photo fixe ; ce sont les étincelles qui bougent** (idée de l'auteur) : `assets/etincelles.js`.
  Grosses à la naissance (4–7,5 px, halo doux, pour se confondre avec les éclats de la photo), elles
  rapetissent en s'éteignant. Elles jaillissent par rafales du foyer lumineux (une meuleuse : zone
  x 70–97 %, y 14–48 % de la photo ; sur écran large, la photo est la moitié droite du
  composite), retombent, refroidissent (blanc-jaune → orange → rouge). ~13 % sont des braises
  légères (vie 8–52 s) qui descendent la page en se balançant et en pâlissant : réglé par
  simulation pour ~100 étincelles dans l'accueil, ~25 le long d'« À propos », ~30 de « Livres »,
  ~15 à « Projets », ~3 à « Contact » (poussières). Calque <canvas> fixe, sans clic, en coordonnées
  de la page ; rien si l'appareil demande moins de mouvement. Si les sections changent beaucoup
  de hauteur, refaire la simulation (même physique) pour garder cette décroissance.
- Écartés : dérive lente de la photo et profondeur au curseur (remplacées par les étincelles).
- Essayés et écartés : « Deux soleils » (version paysage de Gemini : suture visible ; portrait seul
  au centre : marges latérales). Le dessin original reste dans `assets/theme-picture/`.

## Projets
Trois cartes, du plus récent au plus ancien : Terminal terrestre (/tt/, en français), L'écriture
intelligente (intelligent-writing.com/fr/ et /en/), L'obsolescence humaine programmée
(obsolescence-humaine.com / human-obsolescence.com). Images de cartes **sans titre** (choix de
l'auteur : cohérence, pas de répétition du titre de la carte) ; même image en FR et en EN.
Les images de travail à haute résolution vont dans `assets/project-picture/sources/`.

## Photos
Les photos d'iPhone peuvent être en HDR (PNG « Display P3 / PQ ») : elles s'affichent voilées
sur les écrans standard. Toujours partir du HEIC et exporter en JPEG sRGB (sips -m sRGB).
