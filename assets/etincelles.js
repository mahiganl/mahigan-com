// Étincelles : elles jaillissent par rafales de la zone incandescente de la photo d'accueil (une
// meuleuse, à droite), retombent, refroidissent (blanc-jaune → orange → rouge) et s'éteignent.
// Quelques-unes, plus légères, continuent de descendre le long de la page en se raréfiant :
// il n'en reste que des poussières à « Projets » et « Contact ».
// Un seul calque <canvas> fixe, sans interaction ; rien si l'appareil demande moins de mouvement.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const photo = document.querySelector('.hero-photo');
  if (!photo) return;

  const toile = document.createElement('canvas');
  toile.setAttribute('aria-hidden', 'true');
  Object.assign(toile.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '40' });
  document.body.appendChild(toile);
  const ctx = toile.getContext('2d');
  let dpr = 1;
  const redimensionner = () => {
    dpr = Math.min(2, devicePixelRatio || 1);
    toile.width = innerWidth * dpr;
    toile.height = innerHeight * dpr;
  };
  redimensionner();
  addEventListener('resize', redimensionner);

  // Zone source, en coordonnées de la photo (x, y en fraction) : le foyer lumineux à droite.
  // Sur écran large, l'image est un composite deux fois plus large (photo dans la moitié droite).
  const SOURCE = { x0: 0.80, x1: 0.96, y0: 0.20, y1: 0.42 };
  const source = () => {
    const r = photo.getBoundingClientRect();
    const composite = r.width / r.height > 2;       // 2 × 4:3 = 8:3 ≈ 2,67 ; photo seule = 1,33
    const gauche = composite ? r.left + r.width / 2 : r.left;
    const largeur = composite ? r.width / 2 : r.width;
    return {
      x: gauche + largeur * (SOURCE.x0 + Math.random() * (SOURCE.x1 - SOURCE.x0)),
      y: r.top + scrollY + r.height * (SOURCE.y0 + Math.random() * (SOURCE.y1 - SOURCE.y0)),
    };
  };

  const etincelles = [];
  const MAX = 420;
  const lancer = (n) => {
    for (let i = 0; i < n && etincelles.length < MAX; i++) {
      const { x, y } = source();
      const braise = Math.random() < 0.13;           // les plus légères : elles descendent la page
      etincelles.push({
        x, y,
        vx: (Math.random() - 0.65) * (braise ? 70 : 170),
        vy: (Math.random() - 0.7) * (braise ? 90 : 220),
        age: 0,
        // Braises : vie de 8 à 52 s, surtout courte ; réglée par simulation pour qu'il en reste
        // ~25 le long d'« À propos », ~30 de « Livres », ~15 à « Projets », ~3 à « Contact ».
        vie: braise ? 8 + 44 * Math.pow(Math.random(), 2.2) : 0.5 + Math.random() * 2.2,
        taille: braise ? 1.1 + Math.random() * 1.1 : 1.4 + Math.random() * 1.6,
        gravite: braise ? 70 : 260,
        frein: braise ? 0.75 : 1.1,
        phase: Math.random() * Math.PI * 2,
        braise,
      });
    }
  };

  // Rafales irrégulières, comme une meuleuse qui mord et relâche.
  let prochaineRafale = 0;
  let avant = performance.now();
  const image = (t) => {
    const dt = Math.min(0.05, (t - avant) / 1000);
    avant = t;
    if (t >= prochaineRafale) {
      lancer(6 + Math.floor(Math.random() * 16));
      prochaineRafale = t + 60 + Math.random() * (Math.random() < 0.2 ? 900 : 260);
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';

    for (let i = etincelles.length - 1; i >= 0; i--) {
      const e = etincelles[i];
      e.age += dt;
      if (e.age >= e.vie) { etincelles.splice(i, 1); continue; }
      e.vy += e.gravite * dt;
      e.vx -= e.vx * e.frein * dt;
      e.vy -= e.vy * e.frein * dt;
      if (e.braise) e.vx += Math.sin(e.age * 1.7 + e.phase) * 14 * dt;   // balancement
      e.x += e.vx * dt;
      e.y += e.vy * dt;

      const sy = e.y - scrollY;
      if (sy < -30 || sy > innerHeight + 30 || e.x < -30 || e.x > innerWidth + 30) continue;

      const chaleur = 1 - e.age / e.vie;                  // 1 : incandescente → 0 : éteinte
      const teinte = 8 + 42 * chaleur;                    // rouge → jaune
      const lum = 52 + 40 * chaleur * chaleur;            // presque blanche au départ
      const alpha = e.braise ? 0.25 + 0.6 * chaleur : Math.min(1, 1.6 * chaleur);
      const trainee = e.braise ? 0.03 : 0.055;
      ctx.strokeStyle = `hsla(${teinte}, 100%, ${lum}%, ${alpha})`;
      ctx.lineWidth = e.taille * (e.braise ? 0.6 + 0.4 * chaleur : 1);
      ctx.beginPath();
      ctx.moveTo(e.x - e.vx * trainee, sy - e.vy * trainee);
      ctx.lineTo(e.x, sy);
      ctx.stroke();
    }
    requestAnimationFrame(image);
  };
  requestAnimationFrame(image);
})();
