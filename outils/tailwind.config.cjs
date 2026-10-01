// Configuration Tailwind de mahigan.com (reprise de l'ancienne config du CDN).
// Regénérer la feuille de style après toute modification de classes dans index.html ou script.js :
//   npx tailwindcss@3 -c outils/tailwind.config.cjs -i outils/tailwind.css -o assets/site.css --minify
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        nocturne: { 900: '#0f172a', 800: '#1e293b', 700: '#334155', 600: '#475569' },
      },
    },
  },
};
