// Étincelles : elles fusent en jets de la zone incandescente de la photo d'accueil (une meuleuse,
// à droite) : un point de contact, un cône étroit, des traits rapides que la pesanteur courbe ;
// elles refroidissent (blanc-jaune → orange → rouge) et s'éteignent.
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
  const SOURCE = { x0: 0.76, x1: 0.99, y0: 0.14, y1: 0.48 };
  const source = (fx, fy) => {
    const r = photo.getBoundingClientRect();
    const composite = r.width / r.height > 2;       // 2 × 4:3 = 8:3 ≈ 2,67 ; photo seule = 1,33
    const gauche = composite ? r.left + r.width / 2 : r.left;
    const largeur = composite ? r.width / 2 : r.width;
    return { x: gauche + largeur * fx, y: r.top + scrollY + r.height * fy };
  };

  // Un jet : un point de contact pris dans le foyer, une direction (surtout vers la gauche, de
  // légèrement montante à plongeante) qui oscille un peu, comme la meule qu'on promène.
  const DEG = Math.PI / 180;
  let jet = null;
  const nouveauJet = (t) => ({
    fx: SOURCE.x0 + Math.random() * (SOURCE.x1 - SOURCE.x0),
    fy: SOURCE.y0 + Math.random() * (SOURCE.y1 - SOURCE.y0),
    angle: (150 + Math.random() * 45) * DEG,       // 180° = vers la gauche ; > 180° = vers le haut
    debit: 70 + Math.random() * 150,                // étincelles par seconde
    phase: Math.random() * 6,
    fin: t + 300 + Math.random() * 1500,
  });

  const etincelles = [];
  const MAX = 420;
  const lancer = (n, t) => {
    for (let i = 0; i < n && etincelles.length < MAX; i++) {
      const { x, y } = source(jet.fx, jet.fy);
      const braise = Math.random() < 0.13;           // les plus légères : elles descendent la page
      const angle = jet.angle + Math.sin(t / 900 + jet.phase) * 8 * DEG + (Math.random() - 0.5) * 22 * DEG;
      const vitesse = braise ? 90 + Math.random() * 170 : 420 + Math.random() * 560;
      etincelles.push({
        x: x + (Math.random() - 0.5) * 6, y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * vitesse,
        vy: Math.sin(angle) * vitesse,
        age: 0,
        // Braises : vie de 8 à 52 s, surtout courte ; réglée par simulation pour qu'il en reste
        // ~25 le long d'« À propos », ~30 de « Livres », ~15 à « Projets », ~3 à « Contact ».
        vie: braise ? 8 + 44 * Math.pow(Math.random(), 2.2) : 0.35 + Math.random() * 1.2,
        taille: braise ? 2.7 + Math.random() * 2.2 : 3.8 + Math.random() * 3.7,   // épaisseur à la naissance (px)
        // Braises : vitesse limite de chute inchangée (gravite / frein ≈ 93 px/s).
        gravite: braise ? 112 : 520,
        frein: braise ? 1.2 : 0.35,
        phase: Math.random() * Math.PI * 2,
        braise,
      });
    }
  };

  // Jets irréguliers, comme une meuleuse qui mord et relâche : un jet, une pause, un autre jet.
  let reprise = 0, reste = 0;
  let avant = performance.now();
  const image = (t) => {
    const dt = Math.min(0.05, (t - avant) / 1000);
    avant = t;
    if (jet && t >= jet.fin) { jet = null; reprise = t + Math.random() * (Math.random() < 0.25 ? 1200 : 350); }
    if (!jet && t >= reprise) jet = nouveauJet(t);
    if (jet) {
      reste += jet.debit * (0.6 + 0.4 * Math.sin(t / 130 + jet.phase)) * dt;   // la meule mord plus ou moins
      const n = Math.floor(reste);
      reste -= n;
      lancer(n, t);
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
      const trainee = e.braise ? 0.03 : 0.045;          // traits proportionnels à la vitesse
      // Grosses à la naissance (comme les éclats de la photo), elles rapetissent en s'éteignant.
      const epaisseur = Math.max(0.7, e.taille * (0.2 + 0.8 * Math.pow(chaleur, 0.8)));
      const x0 = e.x - e.vx * trainee, y0 = sy - e.vy * trainee;
      if (chaleur > 0.35) {                               // halo doux tant qu'elle est chaude
        ctx.strokeStyle = `hsla(${teinte}, 100%, ${lum - 10}%, ${alpha * 0.22 * (chaleur - 0.35) / 0.65})`;
        ctx.lineWidth = epaisseur * 3.2;
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(e.x, sy); ctx.stroke();
      }
      ctx.strokeStyle = `hsla(${teinte}, 100%, ${lum}%, ${alpha})`;
      ctx.lineWidth = epaisseur;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(e.x, sy); ctx.stroke();
    }
    requestAnimationFrame(image);
  };
  requestAnimationFrame(image);
})();
