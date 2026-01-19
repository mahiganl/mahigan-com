Agis comme un développeur Web Senior et Designer UI spécialisé en Tailwind CSS.

Je veux créer mon site personnel "Mahigan Lepage" à l'adresse mahigan.com.
C'est le site d'un écrivain, docteur en littérature et explorateur de l'IA.
Le site doit être une "Landing Page enrichie" bilingue (Français/Anglais).

VOICI LA STRUCTURE DE MES FICHIERS ACTUELLE :
.
├── assets
│   ├── about-pictures (ex: mahigan lepage.PNG)
│   ├── book-covers (ex: big-bang-city.PNG, coulees.JPG, etc.)
│   ├── project-picture
│   └── theme-picture (IMAGE CLÉ : "Animaux numériques.PNG")
└── content
    ├── english (Fichiers texte contenant le contenu)
    │   ├── about
    │   ├── books
    │   ├── newsletter
    │   ├── projects
    │   └── social-media
    └── french
        ├── à propos
        ├── infolettre
        ├── livres
        ├── projets
        └── social-media

DIRECTIVES DE DESIGN (STYLE "DIGITAL NOCTURNE") :
1. Ambiance : Calme, intellectuelle, futuriste mais organique. Une galerie digitale sombre.
2. Palette :
   - Fond : bg-slate-900 (ou #0f172a). JAMAIS de noir pur.
   - Texte : text-slate-300 (gris perle) pour le corps, text-slate-100 pour les titres.
   - Accents : Indigo subtil ou Violet électrique très pâle pour les liens/hover.
3. Typographie (Google Fonts) :
   - Titres : "Inter" ou "Space Grotesk" (Sans-serif, géométrique).
   - Corps : "Lora" ou "Merriweather" (Serif élégant pour la lisibilité littéraire).
4. UI/UX :
   - Glassmorphism : Utilise des arrières-plans semi-transparents (backdrop-blur) pour la navigation.
   - Effet "Glow" : Légère lueur diffuse derrière l'image principale ou au survol des cartes.
   - Espace négatif important (Whitespace).

INSTRUCTIONS DE DÉVELOPPEMENT :
1. Stack : HTML5 pur + Tailwind CSS (via CDN pour le prototypage rapide) + Vanilla JS léger.
2. Structure de la page :
   - Header : Nom "Mahigan Lepage" + Switch Langue (EN/FR) + Menu Navigation.
   - Hero Section : Utilise l'image "assets/theme-picture/Animaux numériques.PNG" de manière artistique (ex: fade-in, ou à côté d'une phrase d'accroche).
   - Sections dynamiques : Crée une section pour chaque fichier du dossier 'content'.
     - Books : Grille montrant les couvertures dans 'assets/book-covers'.
     - Newsletter : Mise en avant du lien Substack avec un style distinct.
3. Comportement :
   - Le site est une "Single Page Application" (SPA) simple ou une page à défilement fluide (anchor links).
   - Le switch de langue doit changer le contenu textuel instantanément.

TA MISSION :
Génère le code complet (index.html, styles.css si besoin, script.js) en commençant par une structure HTML solide intégrant Tailwind.