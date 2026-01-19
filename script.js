/**
 * Mahigan Lepage - Site Personnel
 * Script principal pour la gestion de la langue et des interactions
 */

// ============================================
// DONNÉES DES LIVRES
// ============================================

const booksData = {
    peuplement: {
        title: "Peuplement",
        titleEn: "Peopling",
        year: "2021",
        publisher: "Leméac Éditeur",
        pages: "120",
        isbnPaper: "978-2-76094-866-2",
        isbnEbook: "978-2-76096-750-2",
        buyLink: "https://www.leslibraires.ca/livres/peuplement-mahigan-lepage-9782760948662.html",
        epigraph: {
            fr: "Dehors étaient la guerre et les montagnes abruptes, et les enfants des poussières dans les foulées des colosses.",
            en: "Outside were war and steep mountains, and the children of dust in the strides of colossi."
        },
        summary: {
            fr: "Dans le fond de la Gaspésie, à la charnière des années 70 et 80, des jeunes aux cheveux longs font leur retour à la terre. Mus par l'illusion d'un monde à refaire, ils cultivent le sol, bûchent la forêt, retapent des maisons, fondent une commune, plantent des herbes rieuses, font la fête et des poèmes. L'aventure durera dix ans à peine. Entre-temps, des enfants voient le jour, auxquels on donne de drôles de prénoms. Pour ceux-là – dont je suis –, l'épisode terrien n'est pas qu'une simple passade. C'est une origine rompue. Une mémoire chue. Une Antiquité.",
            en: "In the depths of the Gaspé, at the hinge of the 70s and 80s, young long-hairs make their return to the land. Driven by the illusion of a world to be remade, they till the soil, log the forest, fix up houses, found a commune, plant laughing herbs, party, and make poems. The adventure will last barely ten years. In the meantime, children see the light of day, children given funny names. For those ones—of whom I am one—the earthy episode is not a mere fling. It is a broken origin. A fallen memory. An Antiquity."
        },
        excerpt: {
            fr: "C'était la fin d'une époque. C'était la fin des dieux. Mais, dans la forge de la mémoire, les figures tiennent encore d'un seul tenant, statues pérennes fondues dans le paysage. Ç'aurait été leur faire violence que d'en déliter les strates et de les morceler sur une ligne de temps, car ces figures ne sont pas soumises aux calendriers : elles sont faites de temps comme d'un métal coulé.",
            en: "It was the end of an era. It was the end of the gods. But, in the forge of memory, the figures still hold in a single piece, perennial statues cast into the landscape. It would have been doing them violence to delaminate their strata and break them up on a timeline, for these figures are not subject to calendars: they are made of time as if of cast metal."
        },
        cover: "assets/book-covers/peuplement.jpg"
    },

    bigbangcity: {
        title: "Big Bang City",
        subtitle: {
            fr: "Voyage en mégapoles d'Asie",
            en: "Voyage in Asian Megacities"
        },
        year: "2017",
        publisher: "Leméac Éditeur",
        collection: "Nomades",
        pages: "304",
        isbnPaper: "978-2-7609-3658-4",
        buyLink: "https://www.leslibraires.ca/livres/big-bang-city-mahigan-lepage-9782760936584.html",
        paperOnly: true,
        epigraph: {
            fr: "Qu'est-ce qui explose sinon soi-même,\nla ville,\ndans le cri.",
            en: "What explodes if not oneself,\nthe city,\nin the scream."
        },
        summary: {
            fr: "Dans ces très beaux carnets de voyage, Mahigan Lepage explore huit mégapoles d'Asie : Manille, Jakarta, Beijing, Shanghai, Kolkata, Delhi, Mumbai et Bangkok. Huit monstres que le voyageur apprivoise en marchant, en se perdant, en fréquentant les cafés pour y écrire au jour le jour et arracher du texte au béton. Rien de touristique ici, rien de facile. Ces carnets sont d'abord et avant tout œuvre littéraire, écrite par un Nicolas Bouvier du XXIe siècle.",
            en: "In these very beautiful travel notebooks, Mahigan Lepage explores eight megacities of Asia: Manila, Jakarta, Beijing, Shanghai, Kolkata, Delhi, Mumbai, and Bangkok. Eight monsters the traveler tames by walking, by getting lost, by frequenting cafes to write day by day and tear text from the concrete. Nothing touristic here, nothing easy. These notebooks are first and foremost a literary work, written by a Nicolas Bouvier of the 21st century."
        },
        excerpt: {
            fr: "Il m'a d'abord fallu aller. Il n'y a vraiment que la marche.\n\nAprès, on s'en remet à la sensation. Les visions, et la colère ou la peur qu'elles suscitent. Sous un échangeur, dans un girlie bar, ou devant un corps nu étendu sur le béton, c'est le besoin de hurler le monde qui nous pousse à écrire.",
            en: "First I had to go. There is truly only the walking.\n\nAfter, one relies on sensation. The visions, and the anger or the fear they arouse. Under an interchange, in a girlie bar, or before a naked body stretched out on the concrete, it is the need to howl the world that pushes us to write."
        },
        cover: "assets/book-covers/big-bang-city.png"
    },

    fleuvecolere: {
        title: "le fleuve colère",
        titleEn: "Anger River",
        year: "2017",
        publisher: "Éditions du Noroît",
        pages: "176",
        isbnPaper: "978-2-89766-071-0",
        buyLink: "https://www.leslibraires.ca/livres/le-fleuve-colere-mahigan-lepage-9782897660710.html",
        epigraph: {
            fr: "il charriait les animaux malades\ndéfenseurs du monde tel qu'il est\nsur un mauvais quart de mille",
            en: "it swept the sick animals\ndefenders of the world as it is\nover a bad quarter mile"
        },
        summary: {
            fr: "C'est une fable. L'histoire d'un fleuve, le fleuve colère, à travers les seiches et les crues, les chutes et les torrents. De la campagne à la ville, des plaines aux rocheuses, il va ses méandres. Capturé par un autre fleuve, il mettra des années à recouvrer sa liberté. Dans des cascades de rire noir, le fleuve colère supplicie les animaux, défenseurs du monde tel qu'il est.",
            en: "It is a fable. The story of a river, the anger river, through the seiches and the floods, the falls and the torrents. From the country to the city, from the plains to the rocks, it goes its meanders. Captured by another river, it will take years to recover its freedom. In cascades of black laughter, the anger river tortures the animals, defenders of the world as it is."
        },
        excerpt: {
            fr: "tu ruisselais\ntu cascadais\ntu découvrais les villes\nqui t'illuminaient de mille feux\n\ntu aimais, approchant les cités\nentendre grossir la rumeur colère\ndes moteurs et des klaxons\n\ntu goûtais :\nles gaz d'échappement\nles cheminées des usines\nle smog qui brouillait la ville\ntoutes fumées enivrantes",
            en: "you streamed\nyou cascaded\nyou discovered the cities\nthat illuminated you with a thousand fires\n\nyou loved, approaching the cities\nto hear the swelling angry rumor\nof engines and horns\n\nyou tasted:\nthe exhaust gases\nthe factory chimneys\nthe smog that blurred the city\nall intoxicating smokes"
        },
        cover: "assets/book-covers/fleuve-colere.jpg"
    },

    fuitesmineures: {
        title: "Fuites mineures",
        titleEn: "Minor Fugues",
        year: "2014",
        publisher: "Éditions Mémoire d'encrier",
        pages: "202",
        isbnPaper: "978-2-89712-254-6",
        isbnEbook: "978-2-89712-255-3",
        buyLink: "https://www.leslibraires.ca/livres/fuites-mineures-mahigan-lepage-9782897122546.html",
        epigraph: {
            fr: "On a 13, 15, 17 ans, et une immense soif d'espace.",
            en: "We are 13, 15, 17, and have an immense thirst for space."
        },
        summary: {
            fr: "Des jeunes se lancent sur la route, fuyant le monde dessiné pour eux. Ils se perdent dans les bois, inondent les rues et les partys. Ils courent leur révolte, crient leur camaraderie. Fuites mineures est un chant sauvage qui éclate frontières et horizons. Une aventure rythmique où priment le corps, l'oral et l'instant.",
            en: "Youths launch themselves onto the road, fleeing the world drawn for them. They lose themselves in the woods, flood the streets and the parties. They run their revolt, scream their camaraderie. Fuites mineures is a wild song that bursts frontiers and horizons. A rhythmic adventure where the body, the oral, and the instant take precedence."
        },
        excerpt: {
            fr: "Et j'avais beau aller à Montréal et j'avais beau frencher et j'avais beau faire plus, et prendre encore du mush des fois et faire des voyages et aller dans des nouvelles villes, et essayer de me perdre par toutes les façons j'avais beau j'avais beau, il y avait plus autant l'excès et plus autant la fougue et plus autant la vitesse, je l'ai jamais retrouvée l'intensité la grande grande intensité l'immense puissance mineure, comme quand on tripait dans un show et qu'on disait C'est puissant et qu'on disait C'est violent et qu'on disait Ça arrache, je l'ai jamais retrouvée cette jouissance-là à part des fois en écrivant et c'est pourquoi ces fuites.",
            en: "And in vain I went to Montreal and in vain I frenched and in vain I did more, and took mush again sometimes and took trips and went to new cities, and tried to lose myself in every way in vain in vain, there was no longer as much excess and no longer as much ardor and no longer as much speed, I never found it again the intensity the great great intensity the immense minor power, like when we tripped at a show and we said It's powerful and we said It's violent and we said It rips, I never found that bliss again except sometimes in writing and that is why these fugues."
        },
        cover: "assets/book-covers/fuites-mineures.jpg"
    },

    coulees: {
        title: "Coulées",
        titleEn: "Gullies",
        year: "2012",
        publisher: "Éditions Mémoire d'encrier",
        pages: "100",
        isbnPaper: "978-2-923713-70-0",
        isbnEbook: "978-2-89712-028-3",
        buyLink: "https://www.leslibraires.ca/livres/coulees-mahigan-lepage-9782923713700.html",
        epigraph: {
            fr: "Que dans plus grand et plus fort, plus fluide, tout cela soit emporté et noyé enfin.",
            en: "That in greater and stronger, more fluid, all this be carried away and drowned at last."
        },
        summary: {
            fr: "Coulées : la Patapédia, l'Outaouais et le Bas-Saint-Laurent. Trois récits, trois lieux, trois traversées. Dans l'enchevêtrement des rangs, des villages et des villes, se font et se défont les rêves jusqu'à l'éclatement du territoire. Écriture de la voix. Écriture de la route. Une prose portée par l'amitié et la force des paysages.",
            en: "Coulées: the Patapédia, the Outaouais, and the Lower Saint-Lawrence. Three narratives, three places, three crossings. In the tangle of ranges, villages, and cities, dreams are made and unmade until the shattering of the territory. Writing of the voice. Writing of the road. A prose carried by friendship and the force of landscapes."
        },
        excerpt: {
            fr: "Je garderais, de toutes ces années d'entraves et d'isolement, une soif insatiable de déplacement et de vitesse, de villes et de voyages, un besoin inextinguible de mobilité, de courant, une pulsion de fuite en avant. Jusqu'au jour où je n'ai plus eu le choix, pour continuer d'avancer, que de retourner amont et d'entreprendre ces coulées, par lesquelles j'allais avoir à remuer des fonds d'inavouable, à déplacer des masses de temps inerte, qui encore me retenaient et me tiraient arrière. Que dans plus grand et plus fort, plus fluide, tout cela soit emporté et noyé – et ne demeurent finalement empreints, pour chaque territoire retraversé, que la couleur et le mouvement vifs d'une rivière.",
            en: "I would keep, from all those years of fetters and isolation, an insatiable thirst for displacement and speed, for cities and voyages, an inextinguishable need for mobility, for current, an impulse of headlong flight. Until the day I no longer had the choice, to continue advancing, but to return upstream and undertake these gullies, through which I would have to stir up depths of the unavowable, to displace masses of inert time, which still held me and pulled me backward. That in greater and stronger, more fluid, all this be carried away and drowned—and finally remain imprinted, for each territory recrossed, only the color and the vivid movement of a river."
        },
        cover: "assets/book-covers/coulees.jpg"
    },

    relief: {
        title: "Relief",
        year: "2011",
        publisher: "Éditions du Noroît",
        pages: "112",
        isbnPaper: "978-2-89018-725-2",
        buyLink: "https://www.leslibraires.ca/livres/relief-mahigan-lepage-9782890187252.html",
        paperOnly: true,
        award: {
            fr: "Prix Émile-Nelligan 2012",
            en: "Émile-Nelligan Prize 2012"
        },
        epigraph: {
            fr: "je parle du lieu où la parole est cri – et vrombissement des moteurs et hurlement des freins",
            en: "I speak from the place where speech is scream—and whirring of engines and screaming of brakes"
        },
        summary: {
            fr: "«La terre est plate aux pères qui fatiguent le sol des plateaux à en oublier les gouffres qui les fendent et qu'on appelle coulées. Mais sourd, du fond d'une coulée, la voix des fils abandonnés – parole de colère jaillissant du repli de la terre pour ébranler les fondations de la patrie au-dessus.» Relief convie à cette confrontation, dans une prose poétique séismique.",
            en: "\"The earth is flat to fathers who tire the soil of the plateaus to the point of forgetting the gulfs that split them and that we call coulées. But wells up, from the bottom of a coulée, the voice of the abandoned sons—word of anger springing from the fold of the earth to shake the foundations of the fatherland above.\" Relief invites to this confrontation, in a seismic poetic prose."
        },
        excerpt: {
            fr: "Ici la platitude des plateaux se défait : surfaces de neige gondolées comme des feuilles de tôle – sillons et saillies balafrant les flancs et les faces de la géographie – gouffres béants plongeant entre les montagnes. Et le gémissement des arbres gelés – et le froissement de la neige tôlée : aux yeux et aux oreilles Romu, le relief.",
            en: "Here the flatness of the plateaus undoes itself: surfaces of snow buckled like sheets of metal—furrows and protrusions slashing the flanks and faces of the geography—gaping gulfs plunging between the mountains. And the groaning of frozen trees—and the crumpling of sheeted snow: to the eyes and ears Romu, the relief."
        },
        cover: "assets/book-covers/relief.png"
    },

    surqualifie: {
        title: "Surqualifié",
        subtitle: {
            fr: "Lettres à des sociétés sans visage",
            en: "Letters to Faceless Corporations"
        },
        originalTitle: "Overqualified",
        author: "Joey Comeau",
        translator: "Mahigan Lepage",
        year: "2017",
        publisher: "Éditions Mémoire d'encrier",
        pages: "126",
        isbnPaper: "978-2-89712-399-4",
        isbnEbook: "978-2-89712-400-7",
        buyLink: "https://www.leslibraires.ca/livres/surqualifie-joey-comeau-9782897123994.html",
        isTranslation: true,
        summary: {
            fr: "Le récit est construit comme une série de lettres de présentation pour des postes dans différentes sociétés. Chaque lettre est à la fois un manifeste contre la multinationale et une entrée de journal intime révélant un aspect de la vie du narrateur, un jeune acadien qui fait le deuil de son petit frère tué par un chauffeur ivre. Surqualifié est un texte inventif, drôle, caustique et subversif.",
            en: "The narrative is constructed as a series of cover letters for positions in different corporations. Each letter is at once a manifesto against the multinational and a diary entry revealing an aspect of the narrator's life, a young Acadian mourning his little brother killed by a drunk driver. Surqualifié is an inventive, funny, caustic, and subversive text."
        },
        cover: "assets/book-covers/surqualifie-lettres.jpg"
    }
};

// ============================================
// GESTION DE LA LANGUE
// ============================================

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('mahigan-lang', lang);

    // Update page title
    if (lang === 'en') {
        document.title = 'Mahigan Lepage | Writer & AI Explorer';
    } else {
        document.title = 'Mahigan Lepage | Écrivain & Explorateur IA';
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('mahigan-lang');
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const initialLang = savedLang || browserLang;
    setLanguage(initialLang);
}

// ============================================
// MODAL DES LIVRES
// ============================================

function openBookModal(bookId) {
    const book = booksData[bookId];
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const content = document.getElementById('bookModalContent');

    const lang = currentLang;
    const getText = (obj) => {
        if (typeof obj === 'string') return obj;
        return obj[lang] || obj.fr || obj.en || '';
    };

    let html = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-1/3 flex-shrink-0">
                <img src="${book.cover}" alt="${book.title}" class="w-full rounded-xl shadow-lg">
            </div>
            <div class="flex-1">
                <h2 class="font-sans font-bold text-2xl text-slate-100 mb-1">${book.title}</h2>
                ${book.subtitle ? `<p class="text-slate-300 mb-2">${getText(book.subtitle)}</p>` : ''}
                ${book.titleEn && lang === 'en' ? `<p class="text-slate-500 text-sm italic mb-2">(${book.titleEn})</p>` : ''}
                ${book.award ? `<span class="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-sans font-medium rounded-full mb-4">${getText(book.award)}</span>` : ''}
                ${book.isTranslation ? `
                    <p class="text-sm text-slate-500 mb-4">
                        <span class="lang-fr">Traduction de <em>${book.originalTitle}</em> de ${book.author}</span>
                        <span class="lang-en" style="display: ${lang === 'en' ? 'inline' : 'none'}">Translation of <em>${book.originalTitle}</em> by ${book.author}</span>
                    </p>
                ` : ''}

                <div class="flex flex-wrap gap-4 text-sm text-slate-300 mb-2">
                    <span>${book.year}</span>
                    <span>&middot;</span>
                    <span>${book.publisher}</span>
                    ${book.collection ? `<span>&middot;</span><span>${book.collection}</span>` : ''}
                    <span>&middot;</span>
                    <span>${book.pages} ${lang === 'fr' ? 'pages' : 'pages'}</span>
                </div>

                <div class="text-sm text-slate-300 mb-6">
                    ${book.isbnPaper ? `<div>${lang === 'fr' ? 'ISBN papier' : 'ISBN paper'}: ${book.isbnPaper}</div>` : ''}
                    ${book.isbnEbook ? `<div>${lang === 'fr' ? 'ISBN ebook' : 'ISBN ebook'}: ${book.isbnEbook}</div>` : ''}
                </div>

                ${book.epigraph ? `
                    <blockquote class="border-l-2 border-indigo-500/50 pl-4 mt-8 italic text-slate-300 whitespace-pre-line">
                        ${getText(book.epigraph)}
                    </blockquote>
                ` : ''}
            </div>
        </div>

        <div class="mt-8 space-y-6">
            ${book.summary ? `
                <div>
                    <h3 class="font-sans font-semibold text-slate-200 mb-3">${lang === 'fr' ? 'Résumé' : 'Summary'}</h3>
                    <p class="text-slate-300 leading-relaxed">${getText(book.summary)}</p>
                </div>
            ` : ''}

            ${book.excerpt ? `
                <div>
                    <h3 class="font-sans font-semibold text-slate-200 mb-3">${lang === 'fr' ? 'Extrait' : 'Excerpt'}</h3>
                    <p class="text-slate-300 leading-relaxed whitespace-pre-line">${getText(book.excerpt)}</p>
                </div>
            ` : ''}

            <div class="pt-4 border-t border-slate-700">
                <div class="flex flex-wrap gap-4 items-center">
                    <a href="${book.buyLink}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-sans font-medium rounded-lg transition-all">
                        ${lang === 'fr' ? 'Acheter ce livre' : 'Buy this book'}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </a>
                    ${book.paperOnly ? `<span class="text-sm text-slate-500 italic">${lang === 'fr' ? 'Disponible en version papier seulement' : 'Available in paper version only'}</span>` : ''}
                </div>
            </div>
        </div>
    `;

    content.innerHTML = html;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    const modal = document.getElementById('bookModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// ============================================
// MENU MOBILE
// ============================================

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL & NAV HIGHLIGHT
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMATIONS ON SCROLL
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Close modal with Escape
        if (e.key === 'Escape') {
            closeBookModal();
        }
    });

    // Close modal when clicking outside
    document.getElementById('bookModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'bookModal') {
            closeBookModal();
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initKeyboardNav();

    // Language switch button
    document.getElementById('langSwitch')?.addEventListener('click', toggleLanguage);
});

// Make functions globally available
window.openBookModal = openBookModal;
window.closeBookModal = closeBookModal;
