# Loire-Atlantique (44) — contrôle des fiches au 20 octobre 2026

## Situation
- Source régionale e-SPRIT : 158 fiches, dont 2 doublons internes nouvellement identifiés et conservés en base.
- Source complémentaire : 35 fiches brutes, dont 26 écartées par le filtre de dédoublonnage transversal existant.
- Lieux affichés attendus avec le filtre intégré dans app.js : 165 (156 fiches régionales et 9 complémentaires). Ce total est un calcul statique, à confirmer sur le site après déploiement.
- Fiches régionales dont le champ `price` vaut exactement `Non confirmé` : 52, sans compter les autres tarifs partiels ou assortis de réserves.

## Lot du 20 octobre — 7 fiches régionales enrichies
- La Guichardière : deux identifiants pour le même camping, fiche canonique `ACCAMACCAMPDL044000047` ; borne eau + vidange 6 € selon la FAQ de l'exploitant (pas le tarif de nuitée).
- Clos Mer et Nature : deux identifiants, fiche canonique `ACCAMPDL044V5002ZN`, prix des emplacements restant non confirmé.
- Fleur de Brière : borne dans le camping avec au moins une nuit requise, distincte de la borne municipale extérieure ouverte seulement en journée.
- Le Soleya : emplacements du camping distincts du parking CAMPING-CAR PARK (même adresse).
- Domaine du Grand Poirier : 2 emplacements gratuits, 2 nuits au maximum, selon le département.

## Lot complémentaire du 20 octobre — 4 fiches vérifiées
- Grotte Saint-Jean, Corcoué-sur-Logne : tarif officiel du stationnement gratuit, quatre places ; coût de la borne CB non confirmé.
- Les Sorinières : services gratuits (eau et vidange) vérifiés sur le site de la mairie ; nuitée non confirmée.
- Ancenis Barrière Saint-Pierre : eau et sanitaires confirmés par le réseau touristique e-SPRIT ; prix et autorisation de nuitée non précisés.
- Corcoué-sur-Logne OSM : point à ~300 m de la Grotte Saint-Jean, simple `potentialDuplicateOfSourceId` sans fusion.
- Champs `price` strictement égaux à `Non confirmé` après ce lot : 52 en région, 3 en complémentaire (mais davantage de tarifs partiellement incertains).

## Priorités suivantes
- Vérifier les 52 tarifs exactement `Non confirmé` encore présents en région, en priorisant les aires communales et les sites ouverts à l'année.
- Distinguer dans le rapport les prix de nuitée, les prix de service et les campings privés à tarification saisonnière.
- Étudier sans fusion automatique les proches voisins Guérande / Nouvelle Imprimerie, Préfailles, Le Croisic et Derval.
- Vérifier l'ouverture, la nature et les tarifs des quatre fiches complémentaires OSM toujours marquées `Non confirmé`.
- Contrôler les actions GitHub et confirmer le compteur réel dans le navigateur après déploiement.

## Sources consultées
- https://www.camping-laguichardiere.net/camping-la-plaine-sur-mer/faq/
- https://rando.loire-atlantique.fr/service/184066-Flower-Camping-La-Guichardiere
- https://www.camping-clos-mer-nature.fr/
- https://rando.loire-atlantique.fr/service/184069-Clos-Mer-et-Nature
- https://www.campingfrance.com/recherchez-votre-camping/pays-de-la-loire/loire-atlantique/saint-lyphard/fleur-de-briere
- https://www.campinglesoleya.com/tarifs-camping-tharon-plage.html
- https://rando.loire-atlantique.fr/service/3129-AIRE-PRIVEE-DU-DOMAINE-DU-GRAND-POIRIER

Sources du lot complémentaire :
- https://www.sudretzatlantique-tourisme.fr/offres/grotte-saint-jean-corcoue-sur-logne-fr-3121178/
- https://www.ville-sorinieres.fr/contacts/aire-de-camping-car/
- https://www.cirkwi.com/fr/point-interet/441669-aire-de-stationnement-barriere-st-pierre-ancenis

## Lot complémentaire 3 — 20 octobre 2026

Six fiches régionales actualisées sans supprimer d'emplacements :
- Donges, rue du Stade : parking et vidanges gratuits ; jetons 2026 à 3,50 € pour 100 L d'eau ou 1 h d'électricité selon délibération municipale.
- Port de la Maison Verte, Corsept : stationnement gratuit, commune corrigée de Paimbœuf vers Corsept.
- Guérande, La Nouvelle Imprimerie : 12 places payantes via EasyPark, sans services, distinctes de CAMPING-CAR PARK au n°39 ; prix communautaire indicatif 5 €/5h, 10 €/24h non certifié officiellement.
- Le Deffay, Sainte-Reine-de-Bretagne : camping privé saisonnier, tarif 2026 à partir de 25 €/nuit (électricité), 30 €/nuit (eau + électricité) en basse saison.
- Saint-Julien-de-Concelles, Le Chêne : aire extérieure sécurisée de 21 places, accès distinct du camping ; prix donné par Park4night conservé comme non confirmé officiellement.
- Les Flots Bleus, Piriac-sur-Mer : reclassement en camping privé sans prétendre que ses équipements sont des bornes publiques.

Après ce lot : 158 fiches régionales brutes, 156 visibles après 2 doublons internes ; 46 `price` encore strictement égaux à `Non confirmé` (d'autres tarifs comportent encore des réserves). Le compteur public 165 a été confirmé par l'utilisateur avant ce lot ; aucune fiche supprimée ou ajoutée.

Sources :
- https://www.loireavelo.fr/tsft/aire-du-stade-donges/
- https://ville-donges.fr/wp-content/uploads/2025/12/DELIB4_TARIFS_2026.pdf
- https://rando.loire-atlantique.fr/service/186398-AIRE-DE-STATIONNEMENT-CORSEPT
- https://rando.loire-atlantique.fr/service/186395-Aire-camping-cars-La-Nouvelle-Imprimerie
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-camping-cars-la-nouvelle-imprimerie
- https://park4night.com/fr/place/439548
- https://rando.loire-atlantique.fr/service/180220-Camping-Le-Deffay
- https://rando.loire-atlantique.fr/service/187566-Aire-de-camping-car-du-camping-du-Chene
- https://rando.loire-atlantique.fr/service/183589-Les-Flots-Bleus

## Lot complémentaire 4 — 20 octobre 2026

- **10 fiches revues** : Ferme d’Isson, Domaine de l’Aiguillette, Pen-Bé, Le Briord, Bourg de Freigné, Le Grand Fay, La Pindière, La Cale Sauvage, Pont de Clin Saint-Molf, Ferme des Cochons d’Antan.
- **7 tarifs ou indisponibilités clarifiés** (6 barèmes/places gratuit(e)s et fermeture complète Pen-Bé 2026) ; sources directes ou institutionnelles dans `sourceOfficial`/`priceSource`.
- **Fermetures saisonnières confirmées au 20 octobre 2026** : Pen-Bé (toute saison 2026), Ferme d’Isson (saison terminée 15 septembre), Le Briord (saison terminée 15 septembre), Le Grand Fay (emplacements fermés depuis 4 octobre).
- **Tarif officiel** : Ferme d’Isson 15,20 €/nuit forfait camping-car, 3 nuits minimum ; gratuité de l’Aiguillette (3 places, 2 nuits max.) et Freigné (10 places) ; Camping Le Briord à partir de 14 € ; Grand Fay de 16 à 26 € ; La Pindière : barème camping distinct de la vidange.
- **Prix toujours exactement `Non confirmé` dans la source 44 : 39**, dont 2 fiches régionales masquées comme doublons. Le compteur attendu reste 165 aires/lieux affichés, à vérifier après déploiement.
- Pas de suppression/ajout de fiche, ni fusion sur simple proximité GPS.

Sources du lot :
- https://www.camping-lafermedisson.com/
- https://domainedelaiguillette.fr/oenotourisme/
- https://campingdepenbe.fr/
- https://www.enpaysdelaloire.com/hebergements/campings/aire-de-camping-le-briord
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-service-du-bourg-freigne
- https://www.enpaysdelaloire.com/hebergements/campings/le-grand-fay
- https://www.enpaysdelaloire.com/hebergements/campings/camping-la-pindiere
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-service-camping-la-pindiere
- https://www.enpaysdelaloire.com/hebergements/campings/la-cale-sauvage
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-camping-cars-de-saint-molf
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/la-ferme-des-cochons-d-antan

## Lot complémentaire 5 — 20 octobre 2026

**12 fiches mises à jour, sans ajout ni retrait d'emplacement.** Six champs tarifaires régionaux auparavant exactement « Non confirmé » ont été précisés à partir de sources institutionnelles ou de la grille officielle du camping. État : **33 fiches régionales brutes marquées exactement « Non confirmé », dont 2 masquées par dédoublonnage ; 31 parmi les fiches régionales visibles**.

- Le Soleya : grille officielle 2026 camping standard 18–45 €/nuit, électricité et taxe en supplément, ouverture emplacements 29 mai–14 septembre ; bien distinct du PARK voisin.
- Dune de Jade : prix 2026 pour deux adultes, emplacement, voiture 25,60–45,20 € (Tourisme Bretagne).
- Le Pas du Gû : 12,80–19,50 € forfait emplacement camping 2026, saison terminée le 15 septembre.
- Malabrit, Pont-Saint-Martin : dix places gratuites ouvertes jour/nuit, eau et WC, sans vidange.
- Mirabel La Renaudière : 21–48 €/nuit pour forfait emplacement en 2026, électricité et taxe en plus.
- Slow Village Pornic : forfait emplacement dès 24 € en 2026, taxe en plus.
- Les Mouettes, Le Relais des Garennes, Sandaya Le Fief, ferme du Biau Chemin France Passion, camping de l'Hermitage et Le Bel Air : classement et conditions d'accueil précisés ; **tarif non confirmé conservé**.

Le total théorique reste **165 lieux** : 156 fiches régionales (158 moins 2 doublons internes) et 9 fiches complémentaires visibles. Le compteur a été confirmé par l'utilisateur après le lot précédent.

### Sources du lot 5
- https://www.campinglesoleya.com/pdf/tarifs_emplacements.pdf
- https://www.tourismebretagne.com/preparer-mon-sejour/ou-dormir/tous-les-hebergements/camping-la-dune-de-jade-saint-brevin-les-pins-fr-2033332/
- https://www.enpaysdelaloire.com/hebergements/campings/le-pas-du-gu
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-privee-de-malabrit
- https://www.enpaysdelaloire.com/hebergements/campings/mirabel-la-renaudiere
- https://www.enpaysdelaloire.com/hebergements/campings/camping-slow-village-pornic
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/sandaya-le-fief
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/les-mouettes-2
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-du-camping-rural-le-relais-des-garennes
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-camping-car-camping-de-l-hermitage
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-stationnement-france-passion
- https://www.enpaysdelaloire.com/hebergements/campings/le-bel-air

## Lot complémentaire 6 — 20 octobre 2026

- **14 fiches régionales vérifiées** et enrichies, sans changer les emplacements ni leur identifiant.
- **Quatre tarifs de séjour 2026 ajoutés** : L’Albatros (étape camping-car 14 €, camping standard 13,50–20,50 €), Le Port Chéri (26,50 €/jour), Les Rochelets (15,80–37,50 €/nuit), Mindin (23,20–37,10 €/nuit). Électricité et taxes différenciées selon les cas.
- **Dix autres fiches documentées** (capacité, conditions d’accès, saison, nature camping ou aire) : Capfun de l’Ève, Le Ranch, Rives de Grand Lieu, Eden Villages La Pointe, Les Chênes Verts (44), L’Estuaire Paimbœuf, La Rabine, Ferme de l’Arfaut, Centre ANAS, Fleur de Brière.
- **Tarifs encore exactement `Non confirmé`** : 29 fiches régionales brutes, dont 2 doublons masqués (27 visibles dans les 156 régionales). Le site doit conserver 165 lieux, dont 9 issus des fichiers complémentaires.
- Risque de chevauchement d’inventaire des 49 places « La Pointe » à Préfailles : à vérifier, sans fusion automatique.
- Sept aires de pique-nique restent à qualifier : aucune nuitée camping-car confirmée sur leur seule dénomination.

### Sources du lot 6
- https://www.pornic.com/camping-l-albatros.html
- https://www.campingfrance.com/recherchez-votre-camping/pays-de-la-loire/loire-atlantique/pornic/le-port-cheri
- https://www.enpaysdelaloire.com/hebergements/campings/les-rochelets
- https://www.enpaysdelaloire.com/hebergements/campings/mindin
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/camping-capfun-de-l-eve
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/yelloh-village-le-ranch
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-du-village-des-rives-de-grand-lieu
- https://www.enpaysdelaloire.com/hebergements/campings/camping-eden-villages-la-pointe-saint-gildas
- https://www.leschenesverts.info/hebergement/emplacement/
- https://www.enpaysdelaloire.com/hebergements/campings/camping-ushuaia-villages-l-estuaire
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/camping-la-rabine
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-campings-cars-de-la-ferme-de-l-arfaut
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/centre-anas-1
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/camping-fleur-de-briere
