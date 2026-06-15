/* ══════════════════════════════════════════════════════════
   DONNÉES — 20 établissements Pointe-Noire
   Menus réalistes & avis authentiques — Juin 2026
══════════════════════════════════════════════════════════ */
const restaurants = [
  {
    id: 1,
    nom: "La Paillote",
    adresse: "Bd Dr Jacques Bouiti, Centre-Ville",
    quartier: "Centre-Ville",
    type: "restaurant",
    categorie: "classique",
    tags: ["grillades", "poisson braisé", "viande"],
    statut: "ouvert",
    horaires: "Lun–Dim · 09h–22h",
    telephone: "+242 05 300 00 05",
    note: 4.5,
    avis: 87,
    distance: "0.8 km",
    imageUrl: "IMAGE/PAILLOTE.jpg",
    imageAlt: "La Paillote",
    prix: "3 000 – 30 000 FCFA",
    menu: [
      { plat: "Filet de bœuf grillé + frites maison",      prix: "11 500 FCFA" },
      { plat: "Côte de porc grillée + légumes sautés",      prix: "9 500 FCFA"  },
      { plat: "Tagliatelles carbonara",                      prix: "8 500 FCFA"  },
      { plat: "Penne all'arrabbiata",                        prix: "8 500 FCFA"  },
      { plat: "Salade César poulet grillé",                  prix: "7 500 FCFA"  },
      { plat: "Poisson capitaine braisé + banane plantain",  prix: "10 000 FCFA" },
      { plat: "Tilapia sauce tomate + riz blanc",            prix: "7 000 FCFA"  },
      { plat: "Dessert du chef (fondant chocolat)",          prix: "3 500 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Franck M.",
        note: 5,
        date: "avril 2026",
        texte: "Le filet de bœuf est parfaitement cuit, juteux et bien assaisonné. Le cadre est sympa avec la terrasse couverte. Service rapide, je reviendrai sans hésiter !"
      },
      {
        auteur: "Christelle O.",
        note: 4,
        date: "mars 2026",
        texte: "Très bon restaurant en centre-ville. Les pâtes sont savoureuses. J'ai juste trouvé les prix un peu élevés pour les portions, mais la qualité est au rendez-vous."
      },
      {
        auteur: "Patrick N.",
        note: 4,
        date: "février 2026",
        texte: "Le poisson braisé est excellent, bien cuit avec une bonne sauce piment. L'ambiance est agréable le soir. Quelques minutes d'attente mais ça vaut le coup."
      },
      {
        auteur: "Mireille K.",
        note: 5,
        date: "janvier 2026",
        texte: "Mon restaurant préféré à Pointe-Noire pour les occasions spéciales. Équipe accueillante, plats bien présentés. La salade César est ma commande habituelle !"
      }
    ]
  },

  {
    id: 2,
    nom: "Le Derrick",
    adresse: "Av. Massafi, Lumumba",
    quartier: "Lumumba",
    type: "restaurant",
    categorie: "classique",
    tags: ["viande", "bière locale", "grillades"],
    statut: "ouvert",
    horaires: "12h–00h",
    telephone: "+242 05 715 25 85",
    note: 4.2,
    avis: 63,
    distance: "1.4 km",
    imageUrl: "IMAGE/DERRICK.jpg",
    imageAlt: "Le Derrick",
    prix: "3 000 – 40 000 FCFA",
    menu: [
      { plat: "Entrecôte grillée 300g + frites",        prix: "6 500 FCFA"  },
      { plat: "Côtelettes d'agneau grillées (3 pièces)", prix: "8 000 FCFA"  },
      { plat: "Brochettes de bœuf x6 + riz",            prix: "5 000 FCFA"  },
      { plat: "Poulet rôti entier + légumes",            prix: "9 000 FCFA"  },
      { plat: "Saucisses grillées + moutarde",           prix: "3 500 FCFA"  },
      { plat: "Salade du chef (tomate, concombre, feta)",prix: "2 000 FCFA"  },
      { plat: "Bière Primus 65cl (fraîche)",             prix: "1 000 FCFA"  },
      { plat: "Jus de fruit frais du jour",              prix: "1 500 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Romain D.",
        note: 4,
        date: "mai 2026",
        texte: "Excellente entrecôte, cuite exactement comme demandé (saignant). La bière Primus bien fraîche accompagne très bien. Ambiance conviviale, parfait pour un dîner entre amis."
      },
      {
        auteur: "Adèle B.",
        note: 5,
        date: "avril 2026",
        texte: "Les côtelettes d'agneau sont incroyables ! On n'en trouve pas partout à Pointe-Noire. Personnel sympa et service efficace. Je recommande vivement."
      },
      {
        auteur: "Guy-Joël T.",
        note: 4,
        date: "mars 2026",
        texte: "Bon rapport qualité-prix pour les grillades. Les brochettes sont généreuses et bien assaisonnées. Parking un peu difficile le week-end."
      },
      {
        auteur: "Sandrine M.",
        note: 3,
        date: "janvier 2026",
        texte: "Viande de bonne qualité mais service un peu lent le samedi soir. L'entrecôte était bonne mais légèrement trop salée. À retenter un jour de semaine."
      }
    ]
  },

  {
    id: 3,
    nom: "Le Comptoir",
    adresse: "Rue de la Paix, Centre-Ville",
    quartier: "Centre-Ville",
    type: "restaurant",
    categorie: "gastro",
    tags: ["gastronomie", "fruits de mer", "homard"],
    statut: "bientot",
    horaires: "Mar–Sam · 18h–02h00",
    telephone: "06 443 5609",
    note: 4.8,
    avis: 142,
    distance: "0.3 km",
    imageUrl: "IMAGE/LE COMPTOIRE.jpeg",
    imageAlt: "Le Comptoir",
    prix: "8 000 – 25 000 FCFA",
    menu: [
      { plat: "Homard grillé beurre citron & herbes",       prix: "22 000 FCFA" },
      { plat: "Carpaccio de thon rouge, huile de sésame",   prix: "9 500 FCFA"  },
      { plat: "Risotto crémeux aux crevettes royales",       prix: "11 000 FCFA" },
      { plat: "Saumon confit + écrasé de pomme de terre",   prix: "13 500 FCFA" },
      { plat: "Tartare de daurade, avocat & mangue",        prix: "10 000 FCFA" },
      { plat: "Assiette de dégustation fruits de mer (4 pers.)", prix: "35 000 FCFA" },
      { plat: "Fondant au chocolat noir, glace vanille",    prix: "4 500 FCFA"  },
      { plat: "Cocktail maison (rhum, fruit de la passion)", prix: "4 000 FCFA" },
    ],
    avisListe: [
      {
        auteur: "Véronique A.",
        note: 5,
        date: "mai 2026",
        texte: "La meilleure table gastronomique de Pointe-Noire sans hésitation. Le homard est d'une fraîcheur irréprochable, la sauce beurre citron est divine. On se croirait dans un grand restaurant parisien."
      },
      {
        auteur: "Jean-Baptiste S.",
        note: 5,
        date: "avril 2026",
        texte: "Dîner d'anniversaire exceptionnel. Le carpaccio de thon est fondant, le risotto parfaitement al dente. Le personnel est aux petits soins. Réservation indispensable !"
      },
      {
        auteur: "Isabelle N.",
        note: 5,
        date: "mars 2026",
        texte: "Cadre élégant, cuisine soignée, personnel professionnel. Le tartare de daurade avec mangue est une vraie découverte. Les cocktails sont aussi excellents."
      },
      {
        auteur: "Marc-Aurèle D.",
        note: 4,
        date: "février 2026",
        texte: "Très bon repas, présentation soignée pour chaque plat. Seul bémol : l'attente entre les plats est un peu longue. Mais la qualité justifie la patience."
      }
    ]
  },

  {
    id: 4,
    nom: "Caicos Restaurant",
    adresse: "Côte Sauvage, Digue",
    quartier: "Côte Sauvage",
    type: "restaurant",
    categorie: "gastro",
    tags: ["fruits de mer", "vue mer", "gastronomie"],
    statut: "ouvert",
    horaires: "Mer–Lun · 12h–23h",
    telephone: "+06 832 4264",
    note: 4.7,
    avis: 209,
    distance: "3.2 km",
    imageUrl: "IMAGE/caicos.jpg",
    imageAlt: "Caicos Restaurant",
    prix: "6 000 – 22 000 FCFA",
    menu: [
      { plat: "Plateau de fruits de mer (hom., crev., coq.)", prix: "22 000 FCFA" },
      { plat: "Barracuda grillé entier + plantain frit",      prix: "13 000 FCFA" },
      { plat: "Crevettes sautées à l'ail & piment",           prix: "9 000 FCFA"  },
      { plat: "Thiéboudienne congolaise (poisson + légumes)", prix: "6 500 FCFA"  },
      { plat: "Salade de crevettes, avocat & citron vert",    prix: "7 500 FCFA"  },
      { plat: "Daurade en croûte de sel (2 pers.)",           prix: "16 000 FCFA" },
      { plat: "Cocktail Caicos (rhum, noix de coco, ananas)", prix: "3 000 FCFA"  },
      { plat: "Eau de coco fraîche",                          prix: "1 500 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Lydie P.",
        note: 5,
        date: "mai 2026",
        texte: "Vue imprenable sur l'Atlantique, plateau de fruits de mer frais pêchés le matin même. Le barracuda grillé est un délice. Meilleur rapport qualité-cadre de la Côte Sauvage."
      },
      {
        auteur: "Thierry B.",
        note: 5,
        date: "avril 2026",
        texte: "Incontournable si vous venez à Pointe-Noire. On voit les bateaux de pêche depuis la terrasse. Les crevettes à l'ail sont servies avec générosité, sauce parfaitement dosée."
      },
      {
        auteur: "Aminata C.",
        note: 4,
        date: "mars 2026",
        texte: "Super expérience dans l'ensemble. La thiéboudienne est bien préparée et généreuse. J'ai juste trouvé le parking un peu compliqué le dimanche midi. Je reviens !"
      },
      {
        auteur: "Boris K.",
        note: 5,
        date: "février 2026",
        texte: "J'emmène tous mes clients expatriés ici. La fraîcheur des produits est incomparable. Le personnel parle français et anglais. Cadre parfait pour un déjeuner d'affaires."
      }
    ]
  },

  {
    id: 5,
    nom: "Quick Food",
    adresse: "Tié tié, Pointe-Noire",
    quartier: "Tié-Tié",
    type: "fast-food",
    categorie: "eco",
    tags: ["hamburger", "frites", "sandwich", "fast-food"],
    statut: "ouvert",
    horaires: "Tlj · 8h–22h",
    telephone: "067600415",
    note: 5,
    avis: 44,
    distance: "0.6 km",
    imageUrl: "IMAGE/QUICK FOOD.jpg",
    imageAlt: "Quick Food",
    prix: "1 000 – 3 500 FCFA",
    menu: [
      { plat: "Burger Classic (steak, salade, tomate)",     prix: "2 000 FCFA" },
      { plat: "Burger Double fromage & bacon",              prix: "3 000 FCFA" },
      { plat: "Sandwich poulet mariné + crudités",          prix: "1 800 FCFA" },
      { plat: "Frites maison (portion)",                    prix: "800 FCFA"   },
      { plat: "Nuggets de poulet x6 + sauce ketchup",       prix: "1 500 FCFA" },
      { plat: "Hot-dog + moutarde & cornichon",             prix: "1 200 FCFA" },
      { plat: "Soda 33cl (Coca, Fanta, Sprite)",            prix: "500 FCFA"   },
      { plat: "Jus de goyave en bouteille",                 prix: "700 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Junior M.",
        note: 4,
        date: "mai 2026",
        texte: "Le meilleur burger du quartier Lumumba ! Pain moelleux, steak bien cuit, les frites sont croustillantes. Service rapide, idéal pour manger sur le pouce."
      },
      {
        auteur: "Céleste N.",
        note: 4,
        date: "avril 2026",
        texte: "Bon rapport qualité-prix, c'est propre et le personnel est aimable. Le burger double fromage est vraiment généreux. Je viens souvent après le travail."
      },
      {
        auteur: "Alain F.",
        note: 3,
        date: "mars 2026",
        texte: "Correct pour un fast-food de quartier. Les nuggets pourraient être plus chauds. L'endroit est un peu bruyant aux heures de pointe mais ça reste acceptable."
      },
      {
        auteur: "Nadia B.",
        note: 4,
        date: "janvier 2026",
        texte: "Je commande régulièrement le sandwich poulet, toujours bien garni et bien assaisonné. Pratique car ouvert tôt le matin."
      }
    ]
  },

  {
    id: 6,
    nom: "BEST-FOOD",
    adresse: "6V23+7QP, Av. Mâ Loango Moé Poaty, Pointe-Noire",
    quartier: "Cenre Ville",
    type: "Fast-food",
    categorie: "eco",
    tags: ["hamburger", "frites", "sandwich", "fast-food"],
    statut: "ouvert",
    horaires: "24h/24 · 7j/7",
    telephone: "061272702",
    note: 4.4,
    avis: 175,
    distance: "2.1 km",
    imageUrl: "IMAGE/BEST FOOD.jpg",
    imageAlt: "BEST-FOOD",
    prix: "500 – 2 500 FCFA",
    menu: [
      { plat: "Burger Best-Food (steak, salade, tomate)", prix: "2 000 FCFA" },
      { plat: "Sandwich thon-mayonnaise & salade",     prix: "1 000 FCFA" },
      { plat: "Sandwich poulet froid & cornichon",     prix: "1 200 FCFA" },
      { plat: "Omelette baguette (3 œufs + fromage)", prix: "900 FCFA"   },
      { plat: "Pain beurre & confiture",               prix: "400 FCFA"   },
      { plat: "Café noir ou café au lait",             prix: "300 FCFA"   },
      { plat: "Beignets de haricot (accras) x4",       prix: "500 FCFA"   },
      { plat: "Jus de fruit en brique 20cl",           prix: "400 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Rosalie M.",
        note: 5,
        date: "avril 2026",
        texte: "Je viens ici depuis 5 ans. Toujours la même qualité, toujours le même accueil chaleureux de Maman Céleste. Le poisson braisé est inratable. Meilleur maquis de Tié-Tié sans discussion."
      },
      {
        auteur: "Éric S.",
        note: 4,
        date: "mars 2026",
        texte: "Excellent pour la cuisine locale authentique. Le poulet braisé est bien relevé et la banane plantain bien caramélisée. Le cadre est simple mais l'ambiance est familiale."
      },
      {
        auteur: "Laure-Anne P.",
        note: 4,
        date: "février 2026",
        texte: "En tant qu'expatriée, c'est mon endroit favori pour découvrir la vraie cuisine congolaise. Les prix sont très accessibles. Seul bémol : il faut arriver tôt car les plats partent vite !"
      }
    ]
  },

  {
    id: 7,
    nom: "L'Escale Marine",
    adresse: "Côte Sauvage, Plage des Rochers",
    quartier: "Côte Sauvage",
    type: "restaurant",
    categorie: "classique",
    tags: ["fruits de mer", "vue mer", "grillades"],
    statut: "ferme",
    horaires: "Jeu–Mar · 11h–22h",
    telephone: "053976866",
    note: 4.1,
    avis: 58,
    distance: "4.0 km",
    imageUrl: "IMAGE/W.png",
    imageAlt: "L'Escale Marine",
    prix: "4 000 – 15 000 FCFA",
    menu: [
      { plat: "Bar de mer grillé entier (env. 500g)",      prix: "10 000 FCFA" },
      { plat: "Crevettes braisées à la braise + citron",   prix: "7 500 FCFA"  },
      { plat: "Sole meunière + frites de plantain",         prix: "9 000 FCFA"  },
      { plat: "Soupe de poisson maison",                    prix: "3 000 FCFA"  },
      { plat: "Calamar grillé à l'ail",                     prix: "6 000 FCFA"  },
      { plat: "Frites de plantain (portion)",               prix: "1 000 FCFA"  },
      { plat: "Eau de coco ou jus de tamarin",              prix: "1 000 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Henri-Claude B.",
        note: 4,
        date: "mars 2026",
        texte: "Cadre extraordinaire avec la plage juste en dessous. Le bar grillé est frais et bien cuit. Dommage que le restaurant soit fermé le mercredi. Très bien pour un déjeuner en famille."
      },
      {
        auteur: "Nadège F.",
        note: 4,
        date: "février 2026",
        texte: "Les crevettes braisées sont excellentes, généreuses et bien assaisonnées. Vue sur les rochers magnifique au coucher du soleil. Un peu difficile d'accès mais l'effort vaut la peine."
      },
      {
        auteur: "Stéphane O.",
        note: 4,
        date: "janvier 2026",
        texte: "Le calamar à l'ail est ma découverte de l'année ! Texture parfaite, pas caoutchouteuse. Les frites de plantain changent des frites classiques. Bonne adresse à connaître."
      },
      {
        auteur: "Carole M.",
        note: 4,
        date: "décembre 2025",
        texte: "Jolie adresse sur la Côte Sauvage. La soupe de poisson est très parfumée et réconfortante. Service attentionné. Je regrette juste la fermeture le mercredi."
      }
    ]
  },

  {
    id: 8,
    nom: "Snack Nour",
    adresse: "mpaka, Pointe-Noire",
    quartier: "Mpaka",
    type: "fast-food",
    categorie: "eco",
    tags: ["sandwich", "omelette", "fast-food"],
    statut: "ouvert",
    horaires: "Lun–Sam · 7h–20h",
    telephone: "066777555",
    note: 3.7,
    avis: 29,
    distance: "5.5 km",
    imageUrl: "IMAGE/Snack.jpg",
    imageAlt: "Snack Nour",
    prix: "500 – 2 000 FCFA",
    menu: [
      { plat: "Sandwich thon-mayonnaise & salade",     prix: "1 000 FCFA" },
      { plat: "Sandwich poulet froid & cornichon",     prix: "1 200 FCFA" },
      { plat: "Omelette baguette (3 œufs + fromage)", prix: "900 FCFA"   },
      { plat: "Pain beurre & confiture",               prix: "400 FCFA"   },
      { plat: "Café noir ou café au lait",             prix: "300 FCFA"   },
      { plat: "Beignets de haricot (accras) x4",       prix: "500 FCFA"   },
      { plat: "Jus de fruit en brique 20cl",           prix: "400 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Yvette T.",
        note: 4,
        date: "avril 2026",
        texte: "Le petit snack idéal pour le petit-déjeuner avant d'aller au boulot. L'omelette baguette est bien garnie et le café est fort comme j'aime. Propre et rapide."
      },
      {
        auteur: "Brice K.",
        note: 3,
        date: "mars 2026",
        texte: "Correct pour un snack de quartier. Le sandwich thon est honnête mais un peu sec. Les beignets de haricot sont bons quand ils sortent du feu. À éviter aux heures de pointe."
      },
      {
        auteur: "Joëlle N.",
        note: 4,
        date: "février 2026",
        texte: "Pratique et accessible pour le quartier Mpaka. Toujours ouvert à l'heure. Le pain est frais le matin. Prix très abordables pour tous les budgets."
      },
      {
        auteur: "Aristide M.",
        note: 3,
        date: "janvier 2026",
        texte: "Service rapide, c'est l'essentiel. La carte est simple mais suffisante pour un snack express. J'aimerais qu'ils proposent plus de plats chauds le midi."
      }
    ]
  },

  {
    id: 9,
    nom: "La Brasserie De La Mer",
    adresse: "Av. Ngueli Ngueli, Pointe-Noire",
    quartier: "Centre-Ville",
    type: "restaurant",
    categorie: "classique",
    tags: ["cuisine française", "viande", "grillades"],
    statut: "ouvert",
    horaires: "Mar–Dim · 11h–23h",
    telephone: "064194848",
    note: 4.3,
    avis: 93,
    distance: "1.0 km",
    imageUrl: "IMAGE/BRASSERIE.jpg",
    imageAlt: "La Brasserie De La Mer",
    prix: "5 000 – 18 000 FCFA",
    menu: [
      { plat: "Magret de canard, sauce aux fruits rouges",      prix: "14 000 FCFA" },
      { plat: "Steak frites (entrecôte 250g)",                  prix: "8 500 FCFA"  },
      { plat: "Suprême de poulet à la crème & champignons",     prix: "9 000 FCFA"  },
      { plat: "Côte d'agneau rôtie au romarin",                 prix: "13 000 FCFA" },
      { plat: "Salade niçoise (thon, œuf, olive, haricots)",   prix: "5 000 FCFA"  },
      { plat: "Soupe à l'oignon gratinée",                      prix: "3 500 FCFA"  },
      { plat: "Crème brûlée à la vanille",                      prix: "2 500 FCFA"  },
      { plat: "Mousse au chocolat maison",                      prix: "2 000 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Philippe G.",
        note: 5,
        date: "mai 2020",
        texte: "Situé en bord de mer, Jamais déçu de cet endroit toute fois que jy vais. Un cadre frais aérer. des services très rapides et de très bonne qualités.  Des cocktails splendides avec des barmans très expérimentés. J adore, je conseil vivement. un séjour a pointe noire sans passer par ici c'est un séjour rater a pnr.."
      },
      {
        auteur: "Marie-Claire D.",
        note: 4,
        date: "avril 2023",
        texte: "Belle cuisine française, bien exécutée. Le steak frites est classique mais de qualité. La crème brûlée est excellente. Cadre élégant avec vue sur la corniche."
      },
      {
        auteur: "Arnaud T.",
        note: 4,
        date: "mars 2026",
        texte: "Très bon restaurant pour une cuisine française authentique à Pointe-Noire. Le suprême de poulet est fondant. Les portions sont généreuses. Une valeur sûre."
      },
      {
        auteur: "Claudine B.",
        note: 4,
        date: "février 2026",
        texte: "J'y viens régulièrement pour les repas d'affaires. Cuisine constante et service professionnel. La soupe à l'oignon est réconfortante. Un classique de la ville."
      }
    ]
  },

 {
  id: 10,
  nom: "La Voile Blanche",
  adresse: "Avenue de l’Indépendance",
  quartier: "centre-ville",
  type: "restaurant",
  categorie: "haut-gamme",
  tags: ["restaurant", "fruits de mer", "gastronomie", "terrasse"],
  statut: "ouvert",
  horaires: "Tlj · 11h–23h",
  telephone: "053666868",
  note: 4.8,
  avis: 528,
  distance: "2.1 km",
  imageUrl: "IMAGE/voile.jpg",
  imageAlt: "La Voile Blanche",
  prix: "8 000 – 25 000 FCFA",
  menu: [
    { plat: "Plateau de fruits de mer",                    prix: "18 000 FCFA" },
    { plat: "Filet de capitaine sauce citronnée",          prix: "12 000 FCFA" },
    { plat: "Langoustes grillées au beurre",               prix: "22 000 FCFA" },
    { plat: "Pavé de bœuf sauce au poivre",                prix: "14 000 FCFA" },
    { plat: "Risotto aux crevettes",                       prix: "10 000 FCFA" },
    { plat: "Verre de vin blanc sélection",                prix: "4 500 FCFA" },
    { plat: "Cocktail tropical maison",                    prix: "3 500 FCFA" },
    { plat: "Eau minérale premium",                        prix: "1 000 FCFA" }
  ],
  avisListe: [
    {
      auteur: "Patrick L.",
      note: 5,
      date: "mai 2026",
      texte: "L'un des restaurants les plus élégants de Pointe-Noire. Service irréprochable, cadre raffiné et plateau de fruits de mer exceptionnel. Une adresse parfaite pour un dîner en couple."
    },
    {
      auteur: "Nadine B.",
      note: 5,
      date: "avril 2026",
      texte: "La terrasse est magnifique au coucher du soleil. Les langoustes grillées étaient parfaitement préparées et les cocktails excellents. Expérience haut de gamme du début à la fin."
    },
    {
      auteur: "Christian M.",
      note: 4,
      date: "mars 2026",
      texte: "Cuisine de qualité avec des produits frais. Le filet de capitaine est remarquable. Les prix sont élevés mais cohérents avec le standing de l'établissement."
    },
    {
      auteur: "Mireille K.",
      note: 5,
      date: "février 2026",
      texte: "Restaurant idéal pour célébrer une occasion spéciale. L'ambiance est calme et chic, le personnel très attentionné et les desserts sont délicieux."
    }
  ]
},

 {
  id: 11,
  nom: "FOOD FACTORY",
  adresse: "Av. Dg charle de gaule, Centre-Ville",
  quartier: "Centre-Ville",
  type: "fast-food",
  categorie: "eco",
  tags: ["BURGER", "FRITES", "TACOS", "FAST-FOOD"],
  statut: "Ouvert",
  horaires: "24h/24 · 7j/7",
  telephone: "053666868",
  note: 4.3,
  avis: 187,
  distance: "4.3 km",
  imageUrl: "IMAGE/FOOD FACTORY.jpg",
  imageAlt: "FOOD FACTORY",
  prix: "500 – 5 000 FCFA",

  menu: [
    { plat: "Burger Classic", prix: "2 500 FCFA" },
    { plat: "Cheese Burger", prix: "3 000 FCFA" },
    { plat: "Double Burger", prix: "4 000 FCFA" },
    { plat: "Tacos Poulet", prix: "3 500 FCFA" },
    { plat: "Panini Jambon Fromage", prix: "2 500 FCFA" },
    { plat: "Sandwich Poulet", prix: "2 000 FCFA" },
    { plat: "Nuggets x6", prix: "1 500 FCFA" },
    { plat: "Frites Portion", prix: "800 FCFA" },
    { plat: "Milkshake Vanille", prix: "1 500 FCFA" },
    { plat: "Soda 33cl", prix: "500 FCFA" }
  ],

  avisListe: [
    {
      auteur: "Patrick M.",
      note: 5,
      date: "juin 2026",
      texte: "Très bon burger, bien servi et pas trop cher."
    },
    {
      auteur: "Vanessa K.",
      note: 4,
      date: "mai 2026",
      texte: "Service rapide. Les frites étaient chaudes et croustillantes."
    },
    {
      auteur: "Arnaud B.",
      note: 5,
      date: "mai 2026",
      texte: "Je commande souvent ici après le travail. Toujours satisfait."
    },
    {
      auteur: "Mireille T.",
      note: 4,
      date: "avril 2026",
      texte: "Le tacos était bon mais il manquait un peu de sauce."
    },
    {
      auteur: "Junior N.",
      note: 5,
      date: "avril 2026",
      texte: "Très bon rapport qualité prix."
    },
    {
      auteur: "Sonia P.",
      note: 3,
      date: "mars 2026",
      texte: "Le repas était correct mais il y avait un peu d'attente."
    },
    {
      auteur: "Rodrigue L.",
      note: 5,
      date: "mars 2026",
      texte: "Ouvert toute la nuit, pratique quand on sort tard."
    },
    {
      auteur: "Claudine D.",
      note: 4,
      date: "février 2026",
      texte: "Personnel accueillant et lieu propre."
    },
    {
      auteur: "Alain S.",
      note: 5,
      date: "janvier 2026",
      texte: "Le double burger est excellent. Je recommande."
    },
    {
      auteur: "Brice M.",
      note: 4,
      date: "janvier 2026",
      texte: "Bonne adresse pour un repas rapide entre amis."
    }
  ]
},
 {
  id: 12,
  nom: "L'Arbalète",
  adresse: "Centre-Ville, Pointe-Noire",
  quartier: "Centre-Ville",
  type: "restaurant",
  categorie: "classique",
  tags: ["cuisine française", "fruits de mer", "viande", "terrasse"],
  statut: "Fermer",
  horaires: "Lun–Sam ·18h/23h",
  telephone: "055573826",
  note: 4.5,
  avis: 128,
  distance: "1.3 km",
  imageUrl: "IMAGE/l'abre.jpg",
  imageAlt: "L'Arbalète",
  prix: "4 000 – 18 000 FCFA",

  menu: [
    { plat: "Filet de capitaine sauce citron", prix: "9 500 FCFA" },
    { plat: "Entrecôte grillée et pommes sautées", prix: "11 500 FCFA" },
    { plat: "Magret de canard sauce au poivre", prix: "13 000 FCFA" },
    { plat: "Crevettes flambées à l'ail", prix: "8 500 FCFA" },
    { plat: "Salade gourmande de la maison", prix: "5 500 FCFA" },
    { plat: "Tarte Tatin maison", prix: "3 500 FCFA" },
    { plat: "Mousse au chocolat", prix: "3 000 FCFA" },
    { plat: "Verre de vin rouge", prix: "2 500 FCFA" }
  ],

  avisListe: [
    {
      auteur: "Jean-Marc B.",
      note: 5,
      date: "mai 2019",
      texte: "Très belle découverte. Les fruits de mer sont frais et parfaitement cuisinés. Le service est professionnel et l'ambiance très agréable."
    },
    {
      auteur: "Aline K.",
      note: 4,
      date: "avril 2017",
      texte: "Cadre élégant et calme. L'entrecôte était excellente et les portions généreuses. Je reviendrai avec plaisir."
    },
    {
      auteur: "Patrick M.",
      note: 5,
      date: "mars 2020",
      texte: "L'un des meilleurs restaurants de Pointe-Noire. Cuisine raffinée et personnel accueillant. Mention spéciale pour le filet de capitaine."
    },
    {
      auteur: "Sarah N.",
      note: 4,
      date: "février 2026",
      texte: "Très bonne adresse pour un repas en famille ou un dîner d'affaires. Les desserts sont particulièrement réussis."
    }
  ]
},

 {
  id: 13,
  nom: "Carnivore Pizza Pasta And More",
  adresse: "Centre-Ville, Pointe-Noire",
  quartier: "Centre-Ville",
  type: "restaurant",
  categorie: "classique",
  tags: ["pizza", "pâtes", "italien", "grillades"],
  statut: "ouvert",
  horaires: "Lun–Dim · 11h30–23h00",
  telephone: "05 747 4704",
  note: 4.4,
  avis: 187,
  distance: "0.9 km",
  imageUrl: "IMAGE/carnivore.jpg",
  imageAlt: "Carnivore Pizza Pasta And More",
  prix: "2 500 – 15 000 FCFA",

  menu: [
    { plat: "Pizza Carnivore (viandes mixtes)", prix: "8 500 FCFA" },
    { plat: "Pizza Margherita", prix: "5 000 FCFA" },
    { plat: "Pizza Fruits de Mer", prix: "9 500 FCFA" },
    { plat: "Spaghetti Bolognaise", prix: "6 500 FCFA" },
    { plat: "Tagliatelles Carbonara", prix: "7 000 FCFA" },
    { plat: "Lasagnes Maison", prix: "7 500 FCFA" },
    { plat: "Escalope de poulet grillée", prix: "8 000 FCFA" },
    { plat: "Tiramisu", prix: "3 500 FCFA" },
    { plat: "Milkshake Vanille", prix: "2 000 FCFA" }
  ],

  avisListe: [
    {
      auteur: "Christophe M.",
      note: 5,
      date: "mai 2026",
      texte: "Excellentes pizzas avec une pâte croustillante et bien garnie. Le service est rapide même lorsque le restaurant est plein."
    },
    {
      auteur: "Linda B.",
      note: 4,
      date: "avril 2026",
      texte: "Très bonnes pâtes et portions généreuses. L'ambiance est conviviale et idéale pour sortir entre amis ou en famille."
    },
    {
      auteur: "Kevin N.",
      note: 5,
      date: "mars 2026",
      texte: "La Pizza Carnivore est incroyable. Beaucoup de garniture, cuisson parfaite et ingrédients de qualité."
    },
    {
      auteur: "Sandrine T.",
      note: 4,
      date: "février 2026",
      texte: "Restaurant propre et agréable. Les lasagnes sont délicieuses et le tiramisu est l'un des meilleurs que j'ai goûtés à Pointe-Noire."
    }
  ]
},

  {
    id: 14,
    nom: "La Symbiose Lounge bar",
    adresse: "Tié-Tié, derrière le lycée",
    quartier: "Tié-Tié",
    type: "maquis",
    categorie: "eco",
    tags: ["maquis", "poulet", "grillades", "bière"],
    statut: "ferme",
    horaires: "Lun–Sam · 12h–20h",
    telephone: "065677876",
    note: 3.8,
    avis: 36,
    distance: "2.7 km",
    imageUrl: "IMAGE/G.jpg",
    imageAlt: "Maquis Les Cocotiers",
    prix: "800 – 2 500 FCFA",
    menu: [
      { plat: "Poulet braisé ½ + plantain frit",           prix: "2 000 FCFA" },
      { plat: "Poulet entier braisé + riz",                 prix: "3 500 FCFA" },
      { plat: "Poisson fumé + feuilles de manioc",         prix: "1 200 FCFA" },
      { plat: "Brochettes de mouton x4 + oignons",         prix: "1 500 FCFA" },
      { plat: "Makemba frit (portion)",                     prix: "500 FCFA"   },
      { plat: "Vin de palme (le verre)",                   prix: "500 FCFA"   },
      { plat: "Bière Primus 50cl",                         prix: "800 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Germain F.",
        note: 4,
        date: "avril 2026",
        texte: "Bon maquis de quartier, simple et sans chichi. Le poulet braisé est bien cuit et pas cher. L'ambiance sous les cocotiers est agréable le midi. Je regrette qu'il ferme tôt."
      },
      {
        auteur: "Lucie T.",
        note: 3,
        date: "mars 2026",
        texte: "Endroit sympa mais la qualité est inégale. Parfois le poulet est excellent, parfois moins bien. Les brochettes de mouton sont bonnes quand c'est frais. À retenter."
      },
      {
        auteur: "Didier K.",
        note: 4,
        date: "février 2026",
        texte: "Le vin de palme servi frais, c'est rare ! Endroit authentique et décontracté. Le poisson fumé aux feuilles de manioc est préparé simplement mais avec goût."
      },
      {
        auteur: "Marthe O.",
        note: 4,
        date: "décembre 2025",
        texte: "Maquis familial agréable pour déjeuner. Prix très abordables. Les portions sont honnêtes. Dommage que ce soit fermé le dimanche pour les familles qui voudraient venir le week-end."
      }
    ]
  },

  {
    id: 15,
    nom: "La PYRAMIDE",
    adresse: "Av. Alphonse Massamba-Débat, Centre-Ville",
    quartier: "Centre-Ville",
    type: "restaurant",
    categorie: "gastro",
    tags: ["gastronomie", "cuisine fusion", "cocktails"],
    statut: "ouvert",
    horaires: "Mar–Sam · 19h–00h",
    telephone: "05 533 8959",
    note: 4.9,
    avis: 88,
    distance: "1.2 km",
    imageUrl: "IMAGE/PYRAMIDE.jpg",
    imageAlt: "La PYRAMIDE",
    prix: "10 000 – 30 000 FCFA",
    menu: [
      { plat: "Foie gras mi-cuit, chutney de mangue",          prix: "12 000 FCFA" },
      { plat: "Filet de crocodile, sauce poivre vert & manioc",prix: "18 000 FCFA" },
      { plat: "Homard bleu rôti, beurre de coriandre",         prix: "24 000 FCFA" },
      { plat: "Côte de bœuf Wagyu 300g, jus truffe",           prix: "22 000 FCFA" },
      { plat: "Menu dégustation 5 services (accord mets)",     prix: "28 000 FCFA" },
      { plat: "Velouté de petits pois, espuma de coco",        prix: "6 000 FCFA"  },
      { plat: "Soufflé au citron vert, sorbet hibiscus",       prix: "5 500 FCFA"  },
      { plat: "Cocktail signature « Pointe-Noire »",           prix: "4 500 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Aurélie F.",
        note: 5,
        date: "mai 2026",
        texte: "Une expérience gastronomique d'exception à Pointe-Noire. Le filet de crocodile est une vraie découverte : fondant, goût délicat, sauce impeccable. Le chef réinvente la cuisine locale avec une créativité remarquable."
      },
      {
        auteur: "Nicolas P.",
        note: 5,
        date: "avril 2026",
        texte: "Le meilleur repas de ma vie en Afrique centrale. Le menu dégustation 5 services est une aventure gustative. Chaque plat est une œuvre d'art. Le sommelier conseille parfaitement les accords. Inoubliable."
      },
      {
        auteur: "Christine M.",
        note: 5,
        date: "mars 2026",
        texte: "Le foie gras mi-cuit avec le chutney de mangue locale est un mariage parfait entre gastronomie française et saveurs africaines. Cadre intime et raffiné. Service aux petits soins. Une adresse unique au Congo."
      },
      {
        auteur: "David B.",
        note: 5,
        date: "février 2026",
        texte: "Le soufflé au citron vert est aérien, le sorbet hibiscus apporte une touche locale sublimissime. Le cocktail signature est équilibré et rafraîchissant. Je recommande absolument pour une occasion spéciale."
      }
    ]
  },

  {
    id: 16,
    nom: "Sandwicherie du Marché",
    adresse: "Marché de Tié-Tié",
    quartier: "Tié-Tié",
    type: "fast-food",
    categorie: "eco",
    tags: ["sandwich", "fast-food", "beignet"],
    statut: "ouvert",
    horaires: "Lun–Sam · 6h–14h",
    telephone: "+242 05 xxx xx xx",
    note: 4.0,
    avis: 61,
    distance: "2.4 km",
    imageUrl: "IMAGE/images.jpg",
    imageAlt: "Sandwicherie du Marché",
    prix: "300 – 1 000 FCFA",
    menu: [
      { plat: "Sandwich bœuf haché + légumes sautés",       prix: "700 FCFA"  },
      { plat: "Sandwich sardines à l'huile + tomate",       prix: "500 FCFA"  },
      { plat: "Sandwich œuf dur + mayonnaise & salade",     prix: "500 FCFA"  },
      { plat: "Beignets de haricot (accras) x5",            prix: "300 FCFA"  },
      { plat: "Beignets de poisson x3",                     prix: "500 FCFA"  },
      { plat: "Thé au lait sucré (thermos)",                prix: "200 FCFA"  },
      { plat: "Café noir fort (tasse)",                     prix: "150 FCFA"  },
      { plat: "Bouillie de maïs sucrée (bol)",              prix: "300 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Joséphine K.",
        note: 4,
        date: "mai 2026",
        texte: "On est là à 6h30 et c'est déjà ouvert ! Les beignets de haricot sont chauds et croustillants à cette heure-là. Le thé au lait est bien sucré et chaud. Parfait pour bien commencer la journée."
      },
      {
        auteur: "Emmanuel R.",
        note: 4,
        date: "avril 2026",
        texte: "Meilleure sandwicherie au marché de Tié-Tié. Les beignets de poisson sont croustillants dehors et moelleux dedans. Prix très accessibles. La dame qui gère est toujours souriante."
      },
      {
        auteur: "Priscille D.",
        note: 4,
        date: "mars 2026",
        texte: "J'achète mes beignets ici chaque matin avant d'aller au travail. Toujours chauds, jamais décevants. Le sandwich bœuf est copieux pour le prix. Bravo pour la constance !"
      },
      {
        auteur: "Olivier M.",
        note: 4,
        date: "janvier 2026",
        texte: "Adresse incontournable du marché. La bouillie de maïs le matin est réconfortante et énergisante. Très prisée par les commerçants du marché, ce qui est gage de qualité."
      }
    ]
  },

  {
    id: 17,
    nom: "Mokaby Garden Lounge",
    adresse: "Avenue Charles François, Pointe-Noire",
    quartier: "Côte Sauvage",
    type: "restaurant",
    categorie: "gastro",
    tags: ["fruits de mer", "gastronomie", "vue mer"],
    statut: "ouvert",
    horaires: "Mer–Dim · 12h–23h",
    telephone: "065471248",
    note: 4.6,
    avis: 134,
    distance: "3.5 km",
    imageUrl: "IMAGE/ABC.jpg",
    imageAlt: "Aqua Restaurant",
    prix: "7 000 – 24 000 FCFA",
    menu: [
      { plat: "Salade de langouste tiède, vinaigrette agrumes",prix: "15 000 FCFA" },
      { plat: "Dorade royale grillée entière + légumes",       prix: "10 000 FCFA" },
      { plat: "Moules marinières à la crème & vin blanc",      prix: "8 000 FCFA"  },
      { plat: "Brochette de langouste grillée, sauce corail",  prix: "18 000 FCFA" },
      { plat: "Tataki de thon rouge, émulsion soja & sésame",  prix: "11 000 FCFA" },
      { plat: "Riz pilaf aux fruits de mer",                   prix: "9 500 FCFA"  },
      { plat: "Panna cotta coco, coulis de mangue locale",     prix: "3 500 FCFA"  },
      { plat: "Vin blanc d'Afrique du Sud (verre)",            prix: "5 000 FCFA"  },
    ],
    avisListe: [
      {
        auteur: "Hélène D.",
        note: 5,
        date: "mai 2026",
        texte: "La salade de langouste avec la vinaigrette aux agrumes est une merveille ! Fraîcheur irréprochable, présentation soignée. Vue directe sur l'Atlantique depuis la terrasse. Une adresse d'exception sur la Côte Sauvage."
      },
      {
        auteur: "Pierre-Yves M.",
        note: 5,
        date: "avril 2026",
        texte: "Les moules marinières sont servies avec une sauce crémeuse parfumée. Le tataki de thon est d'un niveau gastronomique remarquable pour Pointe-Noire. Chef talentueux, carte renouvelée selon la pêche du jour."
      },
      {
        auteur: "Fanny B.",
        note: 4,
        date: "mars 2026",
        texte: "Très bonne expérience dans l'ensemble. La dorade royale était fraîche et bien grillée. La panna cotta coco-mangue est le dessert parfait pour finir en beauté. Je reviens pour la brochette de langouste !"
      },
      {
        auteur: "Cédric N.",
        note: 5,
        date: "février 2026",
        texte: "J'y suis allé pour un anniversaire. L'équipe a préparé une attention surprise très touchante. Le menu est raffiné, les fruits de mer toujours frais. Vin blanc sud-africain bien sélectionné pour accompagner."
      }
    ]
  },

  {
    id: 18,
    nom: "La Taverne De Mpaka",
    adresse: "5WQ3+FF9, Unnamed Road, Pointe-Noire",
    quartier: "Mpaka",
    type: "fast-food",
    categorie: "eco",
    tags: ["hamburger", "chicken", "fast-food", "livraison"],
    statut: "bientot",
    horaires: "Tlj · 10h–22h",
    telephone: "068734634",
    note: 4.1,
    avis: 73,
    distance: "5.1 km",
    imageUrl: "IMAGE/Z.jpg",
    imageAlt: "La Taverne De Mpaka",
    prix: "1 500 – 4 500 FCFA",
    menu: [
      { plat: "Burger Spécial Kévin (double steak, sauce secrète)", prix: "3 500 FCFA" },
      { plat: "Burger Classic avocat & bacon",                       prix: "2 800 FCFA" },
      { plat: "Chicken Wrap épicé & salade",                        prix: "2 500 FCFA" },
      { plat: "Nuggets de poulet x6 + sauce barbecue",              prix: "2 000 FCFA" },
      { plat: "Cheese Burger simple",                               prix: "2 000 FCFA" },
      { plat: "Frites croustillantes (portion)",                    prix: "800 FCFA"   },
      { plat: "Milkshake mangue ou fraise",                         prix: "1 500 FCFA" },
      { plat: "Soda 33cl (Coca, Fanta, Sprite)",                    prix: "500 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Axel D.",
        note: 4,
        date: "mai 2026",
        texte: "Le Burger Spécial Kévin mérite son nom ! La sauce secrète est vraiment bonne, les steaks sont juteux. Livraison rapide dans le quartier Mpaka. Le milkshake mangue est rafraîchissant."
      },
      {
        auteur: "Christophe N.",
        note: 4,
        date: "avril 2026",
        texte: "Meilleur burger du quartier Mpaka sans hésiter. Le chicken wrap épicé est bien garni et savoureux. Bon service, commande prête rapidement. Les frites sont bien croustillantes."
      },
      {
        auteur: "Vanessa M.",
        note: 4,
        date: "mars 2026",
        texte: "J'ai commandé en livraison plusieurs fois, toujours arrivé chaud et bien emballé. Le burger avocat-bacon est délicieux. Kévin gère vraiment bien son établissement."
      },
      {
        auteur: "Rodrigue F.",
        note: 4,
        date: "janvier 2026",
        texte: "Bon burger, prix raisonnables pour le quartier. Les nuggets sont bien croustillants. Je recommande de commander le Spécial Kévin au moins une fois, vous ne serez pas déçus !"
      }
    ]
  },

  {
    id: 19,
    nom: "La Terrasse Tie Tie",
    adresse: "Quartier Duo Tié Tié Rue,Pointe-Noire",
    quartier: "Fond Tié-Tié",
    type: "restaurant",
    categorie: "classique",
    tags: ["grillades", "cuisine congolaise", "vue ville"],
    statut: "ouvert",
    horaires: "Mer–Lun · 12h–22h",
    telephone: "068295236",
    note: 3.9,
    avis: 99,
    distance: "4.8 km",
    imageUrl: "IMAGE/T.jpg",
    imageAlt: "Restaurant Panorama",
    prix: "3 000 – 9 000 FCFA",
    menu: [
      { plat: "Ntaba (chèvre) braisée au four + makemba",       prix: "6 000 FCFA" },
      { plat: "Poulet braisé entier sauce moussa",              prix: "8 000 FCFA" },
      { plat: "Riz congolais aux légumes + sauce arachide",     prix: "2 500 FCFA" },
      { plat: "Mbika en sauce tomate & huile de palme",         prix: "3 000 FCFA" },
      { plat: "Capitaine frit + frites de manioc",              prix: "5 500 FCFA" },
      { plat: "Saka-saka bœuf + riz blanc",                    prix: "3 500 FCFA" },
      { plat: "Jus de tamarin maison (grand verre)",            prix: "600 FCFA"   },
      { plat: "Vin rouge importé (verre)",                      prix: "2 500 FCFA" },
    ],
    avisListe: [
      {
        auteur: "Bénilde M.",
        note: 5,
        date: "mai 2016",
        texte: "La vue sur Pointe-Noire depuis la colline est à couper le souffle, surtout au coucher du soleil. La ntaba braisée est fondante et bien relevée. Restaurant familial qui valorise la cuisine congolaise traditionnelle."
      },
      {
        auteur: "Théodore N.",
        note: 4,
        date: "avril 2026",
        texte: "La mbika en sauce est excellente, bien préparée avec de l'huile de palme de qualité. Le cadre panoramique est le vrai plus de cet endroit. On vient autant pour la vue que pour manger."
      },
      {
        auteur: "Alice D.",
        note: 4,
        date: "mars 2020",
        texte: "Très bon restaurant pour découvrir la gastronomie congolaise dans un cadre agréable. Le capitaine frit avec les frites de manioc est copieux. Personnel accueillant et attentionné."
      },
      {
        auteur: "Michel B.",
        note: 4,
        date: "février 2016",
        texte: "J'emmène tous mes collègues étrangers ici pour leur faire découvrir la cuisine locale dans un beau cadre. La sauce arachide est onctueuse et parfumée. Le jus de tamarin maison est unique !"
      }
    ]
  },

  {
    id: 20,
    nom: "Maquis Chez Brice",
    adresse: "Fond Tié-Tié, près de la paroisse",
    quartier: "Fond Tié-Tié",
    type: "maquis",
    categorie: "eco",
    tags: ["maquis", "grillades", "poulet", "ambiance"],
    statut: "ouvert",
    horaires: "Tlj · 17h–00h",
    telephone: "065143532",
    note: 4.7,
    avis: 284,
    distance: "5.0 km",
    imageUrl: "IMAGE/maquis.jpeg",
    imageAlt: "Maquis Chez Brice",
    prix: "1 000 – 3 500 FCFA",
    menu: [
      { plat: "Poulet braisé entier au feu de bois",       prix: "3 500 FCFA" },
      { plat: "Poulet braisé ½ + makemba frit",            prix: "2 000 FCFA" },
      { plat: "Brochettes mixtes (bœuf, mouton) x6",       prix: "2 500 FCFA" },
      { plat: "Tilapia braisé + banane plantain",           prix: "2 000 FCFA" },
      { plat: "Plantain frit (portion)",                   prix: "600 FCFA"   },
      { plat: "Sauce piment maison (spéciale Brice)",      prix: "200 FCFA"   },
      { plat: "Bière Ngok 65cl (bien fraîche)",            prix: "900 FCFA"   },
      { plat: "Jus de gingembre citron (maison)",          prix: "500 FCFA"   },
    ],
    avisListe: [
      {
        auteur: "Serge-Loïc B.",
        note: 5,
        date: "mai 2026",
        texte: "Chez Brice, c'est le maquis de référence à Fond Tié-Tié ! Le poulet braisé entier au feu de bois a un fumet incomparable. La sauce piment maison est une addiction. Ambiance festive chaque soir avec de la musique congolaise."
      },
      {
        auteur: "Annick M.",
        note: 5,
        date: "avril 2026",
        texte: "Je recommande Chez Brice les yeux fermés. Les brochettes mixtes sont généreuses et bien marinées. Brice est toujours là à surveiller le feu lui-même. La qualité reste constante depuis des années."
      },
      {
        auteur: "Franck O.",
        note: 5,
        date: "mars 2026",
        texte: "Le meilleur poulet braisé de Pointe-Noire, point final. La peau est croustillante, la chair juteuse. Le jus de gingembre maison est parfaitement dosé. Une adresse incontournable de la ville."
      },
      {
        auteur: "Régine T.",
        note: 4,
        date: "janvier 2026",
        texte: "Ambiance de fête tous les soirs, musique locale, bonne humeur et bonne grillades. Le tilapia braisé est tout aussi bon que le poulet. Seul bémol : ça peut être bondé le vendredi soir."
      }
    ]
  },
];

/* ══════════════════════════════════════════════════════════
   ÉTAT GLOBAL
══════════════════════════════════════════════════════════ */
let activeQuartier = '';
let activeType     = '';
let favorites      = JSON.parse(localStorage.getItem('pr_favs') || '[]');
let selectedNote   = 0;

/* ══════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════ */
function cardImage(r) {
  if (r.imageUrl) {
    return `<img
      class="card-img-photo"
      src="${r.imageUrl}"
      alt="${r.imageAlt || r.nom}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
    /><div class="card-img-placeholder" style="display:none">${initiales(r.nom)}</div>`;
  }
  return `<div class="card-img-placeholder">${initiales(r.nom)}</div>`;
}

function initiales(nom) {
  return nom.split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || nom[0].toUpperCase();
}

function statutBadge(statut) {
  if (statut === 'ouvert')  return '<span class="badge badge-ouvert">● Ouvert</span>';
  if (statut === 'ferme')   return '<span class="badge badge-ferme">● Fermé</span>';
  return '<span class="badge badge-bientot">● Ferme bientôt</span>';
}

function typeBadge(cat) {
  if (cat === 'gastro')    return '<span class="badge badge-gastro">★ Gastronomie</span>';
  if (cat === 'classique') return '<span class="badge badge-classique">Restaurant</span>';
  return '<span class="badge badge-eco">Fast-Food / Maquis</span>';
}

function stars(n) {
  const full = Math.floor(n);
  const half = n % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

/* ══════════════════════════════════════════════════════════
   CSS INJECTÉ — styles image de carte + avis
══════════════════════════════════════════════════════════ */
(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .card-img {
      position: relative;
      width: 100%;
      height: 160px;
      overflow: hidden;
      border-radius: var(--radius, 12px) var(--radius, 12px) 0 0;
      background: #f0f0f0;
    }
    .card-img-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform .3s ease;
    }
    .card:hover .card-img-photo { transform: scale(1.04); }
    .card-img-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: .05em;
      color: #fff;
      background: linear-gradient(135deg, #c0392b 0%, #e67e22 100%);
      user-select: none;
    }
    .card:nth-child(4n+1) .card-img-placeholder { background: linear-gradient(135deg,#1a6b3c,#27ae60); }
    .card:nth-child(4n+2) .card-img-placeholder { background: linear-gradient(135deg,#1a3a6b,#2980b9); }
    .card:nth-child(4n+3) .card-img-placeholder { background: linear-gradient(135deg,#6b1a4a,#9b59b6); }
    .card:nth-child(4n+0) .card-img-placeholder { background: linear-gradient(135deg,#6b3a1a,#e67e22); }

    /* Avis dans la modale */
    .avis-card {
      background: #f8f8f6;
      border-radius: 8px;
      padding: .75rem 1rem;
      margin-bottom: .6rem;
    }
    .avis-card-header {
      display: flex;
      align-items: center;
      gap: .5rem;
      margin-bottom: .35rem;
    }
    .avis-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c0392b, #e67e22);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .75rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .avis-auteur { font-weight: 600; font-size: .88rem; }
    .avis-date   { font-size: .78rem; color: #888; margin-left: auto; }
    .avis-stars  { color: #f0a500; font-size: .85rem; letter-spacing: 1px; }
    .avis-texte  { font-size: .85rem; color: #444; line-height: 1.5; }
  `;
  document.head.appendChild(style);
})();

/* ══════════════════════════════════════════════════════════
   RENDU DES CARTES
══════════════════════════════════════════════════════════ */
function renderCards(list) {
  const grid  = document.getElementById('cardsGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultCount');

  count.textContent = list.length + ' résultat' + (list.length > 1 ? 's' : '');

  if (!list.length) {
    grid.innerHTML = '';
    noRes.classList.add('visible');
    return;
  }
  noRes.classList.remove('visible');

  grid.innerHTML = list.map(r => {
    const isFav = favorites.includes(r.id);
    return `
    <div class="card" onclick="openModal(${r.id})">
      <div class="card-img">
        ${cardImage(r)}
      </div>
      <button class="card-fav" onclick="toggleFav(event, ${r.id})" title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
        ${isFav ? '🚩' : '🏳'}
      </button>
      <div class="card-body">
        <div class="card-badges">
          ${statutBadge(r.statut)}
          ${typeBadge(r.categorie)}
        </div>
        <div class="card-name">${r.nom}</div>
        <div class="card-meta">
          <span>📍 ${r.quartier}</span>
          <span class="dot">·</span>
          <span>${r.prix}</span>
        </div>
      </div>
      <div class="card-footer">
        <div>
          <span class="stars">${stars(r.note)}</span>
          <span class="note">${r.note}</span>
          <span class="avis-count">(${r.avis} avis)</span>
        </div>
        <div class="distance">📍 ${r.distance}</div>
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════
   FILTRES
══════════════════════════════════════════════════════════ */
function getFiltered() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  return restaurants.filter(r => {
    const matchQ = !activeQuartier || r.quartier === activeQuartier;
    const matchT = !activeType || r.type === activeType || r.tags.includes(activeType);
    const matchS = !q
      || r.nom.toLowerCase().includes(q)
      || r.tags.some(t => t.toLowerCase().includes(q))
      || r.adresse.toLowerCase().includes(q)
      || (r.menu && r.menu.some(m => m.plat.toLowerCase().includes(q)));
    return matchQ && matchT && matchS;
  });
}

function filterRestaurants() { renderCards(getFiltered()); }

function selectQuartier(el, val) {
  document.querySelectorAll('#quartierChips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeQuartier = val;
  filterRestaurants();
}

function selectType(el, val) {
  document.querySelectorAll('#typeFilters .filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  activeType = val;
  filterRestaurants();
}

/* ══════════════════════════════════════════════════════════
   FAVORIS
══════════════════════════════════════════════════════════ */
function toggleFav(e, id) {
  e.stopPropagation();
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    showToast('🚩 Ajouté aux favoris');
  } else {
    favorites.splice(idx, 1);
    showToast('Retiré des favoris');
  }
  localStorage.setItem('pr_favs', JSON.stringify(favorites));
  renderCards(getFiltered());
  renderFavs();
}

function renderFavs() {
  const banner = document.getElementById('favsBanner');
  const list   = document.getElementById('favsList');
  if (!favorites.length) { banner.classList.remove('visible'); return; }
  banner.classList.add('visible');
  list.innerHTML = favorites.map(id => {
    const r = restaurants.find(x => x.id === id);
    if (!r) return '';
    return `<div class="fav-item">
      <span>${r.nom}</span>
      <span>${r.quartier} · ${r.horaires}</span>
    </div>`;
  }).join('');
}

function toggleFavs() {
  document.getElementById('favsBanner').classList.toggle('visible');
}

/* ══════════════════════════════════════════════════════════
   RENDU DES AVIS (liste dans la modale)
══════════════════════════════════════════════════════════ */
function renderAvisListe(avisListe) {
  if (!avisListe || !avisListe.length) return '';
  return avisListe.map(a => {
    const initAvis = a.auteur.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    return `
    <div class="avis-card">
      <div class="avis-card-header">
        <div class="avis-avatar">${initAvis}</div>
        <div>
          <div class="avis-auteur">${a.auteur}</div>
          <div class="avis-stars">${'★'.repeat(a.note)}${'☆'.repeat(5 - a.note)}</div>
        </div>
        <div class="avis-date">${a.date}</div>
      </div>
      <div class="avis-texte">${a.texte}</div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════
   MODAL FICHE RESTAURANT
══════════════════════════════════════════════════════════ */
function openModal(id, isAvisOnly = false) {
  const overlay = document.getElementById('modalOverlay');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl  = document.getElementById('modalBody');

  if (isAvisOnly) {
    titleEl.textContent = 'Laisser un avis';
    bodyEl.innerHTML = avisFormHTML();
    overlay.classList.add('open');
    initStarPicker();
    return;
  }

  const r = restaurants.find(x => x.id === id);
  if (!r) return;

  titleEl.textContent = r.nom;
  bodyEl.innerHTML = `
    ${r.imageUrl
      ? `<img src="${r.imageUrl}" alt="${r.imageAlt || r.nom}"
             style="width:100%;height:200px;object-fit:cover;border-radius:8px;margin-bottom:.75rem"
             onerror="this.style.display='none'">`
      : ''}
    <div class="card-badges" style="margin-bottom:.75rem">
      ${statutBadge(r.statut)} ${typeBadge(r.categorie)}
    </div>
    <div class="modal-info">📍 ${r.adresse}</div>
    <div class="modal-info">🕐 ${r.horaires}</div>
    <div class="modal-info">📞 ${r.telephone}</div>
    <div class="modal-info">💰 ${r.prix}</div>
    <div class="modal-info">
      <span class="stars" style="color:var(--gold)">${stars(r.note)}</span>
      <strong>${r.note}/5</strong> — ${r.avis} avis
    </div>
    <div class="modal-info">🏷 ${r.tags.map(t => '#' + t).join(' ')}</div>

    <div class="modal-section">
      <h4>Menu</h4>
      ${r.menu.map(m => `
        <div class="menu-item">
          <span>${m.plat}</span>
          <span class="menu-price">${m.prix}</span>
        </div>`).join('')}
    </div>

    ${r.avisListe && r.avisListe.length ? `
    <div class="modal-section">
      <h4>Avis des clients</h4>
      ${renderAvisListe(r.avisListe)}
    </div>` : ''}

    <div class="modal-section">
      <h4>Laisser un avis</h4>
      ${avisFormHTML()}
    </div>
  `;
  overlay.classList.add('open');
  initStarPicker();
}

function avisFormHTML() {
  return `
    <div class="avis-form">
      <textarea rows="3" placeholder="Votre expérience ici…" id="avisText"></textarea>
      <div class="avis-form-footer">
        <div class="star-picker" id="starPicker">
          <span data-val="1">★</span>
          <span data-val="2">★</span>
          <span data-val="3">★</span>
          <span data-val="4">★</span>
          <span data-val="5">★</span>
        </div>
        <button class="btn-submit" onclick="submitAvis()">Publier</button>
      </div>
    </div>`;
}

function initStarPicker() {
  selectedNote = 0;
  document.querySelectorAll('#starPicker span').forEach(star => {
    star.addEventListener('click', () => {
      selectedNote = parseInt(star.dataset.val);
      document.querySelectorAll('#starPicker span').forEach((s, i) => {
        s.classList.toggle('lit', i < selectedNote);
      });
    });
  });
}

function submitAvis() {
  const txt = document.getElementById('avisText').value.trim();
  if (!txt)          { showToast('Merci d\'écrire votre avis !'); return; }
  if (!selectedNote) { showToast('Sélectionnez une note ★');      return; }
  showToast('✅ Avis publié, merci !');
  closeModalDirect();
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
}

/* ══════════════════════════════════════════════════════════
   BOTTOM NAV
══════════════════════════════════════════════════════════ */
function setTab(el) {
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

/* ══════════════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
renderCards(restaurants);
renderFavs();