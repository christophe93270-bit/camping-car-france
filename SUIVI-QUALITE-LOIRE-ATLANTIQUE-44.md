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

## Lot complémentaire 7 — 20 octobre 2026

Six fiches revues : cinq nouvelles informations tarifaires avec niveau de certitude explicitement marqué, une fiche historique dont le tarif 2026 reste non confirmé. Aucune fiche supprimée, ajoutée ou fusionnée. Le compteur **165 lieux** a été confirmé par l'utilisateur après le lot précédent.

- **Fleur de Brière, Saint-Lyphard** : source touristique officielle 2026, forfait camping-car avec électricité **11 à 14 €**, selon saison. Borne seule non tarifée.
- **Camping La Rabine, Machecoul-Saint-Même** : CampingFrance 2026 : forfait emplacement **19 €/jour**, électricité **4,50 €** en supplément ; borne intérieure et nuit minimum, fermeture le 30 septembre.
- **La Cale Sauvage, Frossay** : CampingFrance 2026 : forfait **22 €/jour**, détail options à confirmer ; site exploitant : **37 emplacements nus**, saison terminée le 4 octobre.
- **Camping de l’Hermitage, Guémené-Penfao** : tarif **dès 16 €/nuit** sur le site de l'exploitant **sans millésime explicite** ; vidange gratuite pour les clients, passage possible sur présentation à l'accueil, frais de passage non publiés.
- **Ushuaïa Villages L’Estuaire, Paimbœuf** : offre datée **140 € pour sept nuits du 12 au 19 septembre 2026** pour aire camping-car et électricité ; montant non généralisable aux autres périodes.
- **Les Mouettes, Saint-Père-en-Retz** : site exploitant affiche **19,50 €/nuit** et électricité **+6,50 €** mais grille PDF datée **2024** ; prix 2026 reste **Non confirmé** pour éviter une fausse actualisation.

**Contrôle tarifs : 24 champs régionaux exactement `Non confirmé`**, dont deux fiches masquées comme doublons, soit 22 fiches régionales visibles sans tarif confirmé. Attention : certaines des 134 autres ont des prix partiellement documentés ou des offres datées, et sept lieux nommés « Aire de pique-nique » ne sont toujours pas des nuitées confirmées. Trois fiches complémentaires restent marquées `Non confirmé`.

Sources de ce lot :
- https://www.labaule-guerande.com/offres/camping-fleur-de-briere-saint-lyphard-fr-6011358/
- https://www.campinglhermitage.com/fr-fr/emplacement-camping-bretagne
- https://www.mairie-guemene-penfao.fr/contacts/camping-de-lhermitage/
- https://www.campingfrance.com/recherchez-votre-camping/pays-de-la-loire/loire-atlantique/machecoul-saint-meme/camping-municipal-la-rabine
- https://www.campingfrance.com/recherchez-votre-camping/pays-de-la-loire/loire-atlantique/frossay/camping-municipal144
- https://www.la-cale-sauvage.com/nos-emplacements/
- https://ushuaia-villages.com/fr-fr/ushuaia-villages-camping-l-estuaire_1511093.html
- https://www.les-mouettes-camping.com/
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf

## Lot complémentaire 8 — 20 octobre 2026

**9 fiches régionales contrôlées, aucun emplacement ajouté, retiré ou fusionné.**

- **Les Rives de Grand Lieu (Saint-Philbert-de-Grand-Lieu)** : camping propriétaire donne 16 € basse saison, 18 € haute saison 2026 pour 1–2 personnes, électricité +4 €/nuit. Ce barème est celui du village campeurs général (120 emplacements) : la tarification spécifique de l'aire touristique de 16 places n'est pas individualisée. Forfait ACSI imprimé avec dates 2024, non revendiqué 2026.
- **Sandaya Le Fief (Saint-Brevin-les-Pins)** : forfait 2 personnes + électricité 35–66 €/nuit selon la fiche actuelle de l'office de tourisme, laquelle présente l'ouverture 2026 mais ne millésime pas isolément les prix. Taxes séparées.
- **Le Bel Air (Pornichet)** : PiNCAMP/ADAC tarif de comparaison couple 2026 : à partir de 34 € en basse saison et 66 € en haute saison, hors taxe et électricité ; ce n'est pas une grille officielle détaillée du camping. Commune et ouverture 2026 recoupées auprès de Pornichet Tourisme.
- **Clos Mer et Nature** : contrat de réservation officiel 2026 confirmant dossier 10 ou 20 € selon la durée, taxe 0,66 €/adulte/nuit et éco-participation 0,30 €/personne/nuit. Le prix **de base** d'une nuitée camping-car reste `Non confirmé`.
- **Quatre aires de pique-nique** à Pierric, Plessé, Avessac et Guémené-Penfao : fiches de l'office de tourisme indiquant l'usage de pique-nique dans chaque commune, sans prouver que les points GPS régionaux sont les mêmes ni qu'une nuitée camping-car est autorisée. Ces champs `price` restent `Non confirmé`.
- **Les Mouettes de Saint-Père-en-Retz** : tarif 2026 encore `Non confirmé`. Ne **pas** utiliser la grille 2026 de camping-les-mouettes.com, qui concerne **Agon-Coutainville (Manche, 50)**. Le PDF 2026 de campingbelair.fr concerne **Saint-Ours-les-Roches (Puy-de-Dôme, 63)**, pas Le Bel Air de Pornichet.

**Total régional** : 158 fiches brutes, 156 affichables après deux doublons. **Prix exactement `Non confirmé` : 21 fiches régionales**, dont 2 doublons masqués (19 visibles) ; 3 complémentaires conservent aussi ce champ. Le compteur attendu du département reste **165 lieux**, déjà confirmé par l'utilisateur.

### Sources lot 8
- https://www.camping-lesrivesdegrandlieu.com/village-campeurs-rives-de-grand-lieu
- https://www.saint-brevin.com/sandaya-le-fief.html
- https://www.pincamp.fr/campings/camping-bel-air-pornichet
- https://www.pornichet.fr/camping-bel-air
- https://www.camping-clos-mer-nature.fr/wp-content/uploads/2026/03/contrat.pdf
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-24/
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-27/
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-2/
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-11/
- https://www.camping-les-mouettes.com/
- https://campingbelair.fr/contacts-acces/

## Lot complémentaire 9 — 20 octobre 2026

**9 fiches vérifiées, aucun ajout, retrait ni fusion de lieux.** Dernier compteur public confirmé par l'utilisateur : 165. Le lot comprend un tarif 2026 directement documenté, un tarif seulement communautaire marqué indicatif, et 7 améliorations de qualité.

- **Relais des Garennes (Montbert)** : Gîtes de France indique dans un descriptif millésimé 2026 **17 € / nuit pour camping-car avec 2 personnes**, électricité **+4 €**, 6 emplacements et saison du 15 juin au 15 septembre. Rectifie l'ancienne plage 1 juin–30 septembre moins précise de la fiche communale.
- **Ferme de l'Arfaut (Herbignac)** : Park4Night affiche **9 €/nuit stationnement** et **12 € eau/électricité**, tandis que des avis 2025 évoquent un forfait tout compris de 12 € ; **prix exact 2026 non confirmé** par le propriétaire. Capacité contradictoire : 4 places recensées par la Région contre 30 par Park4Night. À contrôler.
- **Yelloh Le Ranch (La Plaine-sur-Mer)** : source directe gestionnaire **75 emplacements de camping**, dont 51 nus (6 avec évacuations et 18 sanitaires individuels), sans attribuer 58 places exclusivement camping-car. Saison 2027 publiée sur le site officiel, mais tarif camping-car 2026 non confirmé.
- **France Passion, Legé et Nort-sur-Erdre** : réseau impose adhésion à jour et véhicule autonome, accueil gratuit **24 h maximum** au titre de la formule. Une prolongation n'est pas automatiquement offerte. **Activité de chaque hôte dans le guide 2026 non vérifiée**, les deux champs tarif restent `Non confirmé`.
- **Préfailles La Pointe Saint-Gildas** : opérateur CAMPING-CAR PARK confirme collaboration avec le camping et **49 places** sur l'aire autonome ; chevauchement avec l'offre du camping à contrôler, deux fiches conservées sans suppression.
- **Aires de pique-nique Conquereuil, Fégréac et Saint-Nicolas-de-Redon** : sources touristiques de la commune et usage pique-nique documentés, **identité exacte GPS et nuitée camping-car non démontrées**. Le stationnement de La Digue à Saint-Nicolas-de-Redon est une fiche distincte déjà enregistrée.

**Situation après lot** : 158 régionales en source, 156 visibles (2 doublons masqués), 9 complémentaires visibles, soit **165 lieux attendus**. **19 champs de prix exactement `Non confirmé` en régional, dont 2 doublons masqués, soit 17 parmi les régionales affichées.** Trois compléments restent inconnus. Certains champs non vides comportent des fourchettes, données communautaires, réserves de validation ou tarifs saisonniers : ne pas les considérer comme tous certifiés.

### Sources du lot 9
- https://www.gites-de-france.com/fr/pays-de-la-loire/loire-atlantique/le-relais-des-garennes-h44c011606
- https://www.camping-le-ranch.com/fr
- https://park4night.com/fr/place/116282
- https://www.france-passion.com/camping-caristes/faq-camping-cariste/
- https://pro.campingcarpark.com/temoignages/temoignage-aire-camping-car-prefailles/
- https://tourisme-pays-redon.com/experiences/idees-descapades/pique-niquer-redon/
- https://tourisme-pays-redon.com/visite/la-carriere/
- https://tourisme-pays-redon.com/sorganiser/dormir/aires-de-camping-cars/

## Lot complémentaire 10 — 20 octobre 2026

**7 fiches corrigées** (4 régionales + 3 complémentaires), sans ajout, retrait ni fusion. Contrôle des sources d'accès, de tarification et de localisations.

- **CAPFUN L'Ève** : ATTENTION, établissement nommé explicitement dans les exclusions du PASS CAMPING 15 € 2026. L'Ève ne bénéficie pas du tarif à 15 € : prix propre non confirmé. Saison 11/04–26/09 et 50 places dans les sources officielles.
- **Centre ANAS Les Moutiers** : capacité exploitant 35 places spécifiques camping-car et 40 camping-caravaning, contre 20 dans l'ancien répertoire régional. L'accès standard annoncé réservé aux adhérents ANAS/agents du Ministère, mais un partenariat municipal de La Bernerie (mise à jour avril 2026) propose une formule camping-car via adhésion. Dépliant municipal 14/18 € (11/14 € adhérents), tandis que voyageurs d'août 2026 signalent parfois 21 €/nuit ou 42 €/2 nuits : **pas de tarif 2026 définitif certifié** ; téléphoner ou vérifier sur place.
- **Camping Eden Villages La Pointe Saint-Gildas** : CAMPING-CAR PARK Pro confirme que ses 49 emplacements sont prélevés sur une partie des emplacements du camping ; deux canaux d'accueil pour des emplacements physiques possiblement communs, selon saison. Le compteur 165 exprime un nombre de fiches affichées et pas forcément de terrains physiques distincts. Suppression ou fusion automatique prématurée.
- **Les Mouettes (Saint-Père-en-Retz)** : document du site officiel identifié, mais grille effectivement datée de **2024** (19,50 €/nuit + 6,50 € électricité à titre historique seulement), donc prix 2026 laissé `Non confirmé`.
- **Plessé OSM** : repère OpenStreetMap node/11786823109 près place de l'Église, non assimilé au parking du plan d'eau de Buhel ; aucune source municipale pour tarif, services et nuitée.
- **Corcoué-sur-Logne OSM** : le site touristique Grotte Saint-Jean / rue de la Poste propose 4 places gratuites, recoupé avec Park4Night. Très forte suspicion de doublon avec le way OSM proche, mais différentiel de géolocalisation de ~300 m avec la fiche régionale non levé. Ne pas doubler une gratuité sans preuve.
- **Ancenis Barrière Saint-Pierre** : repère et GPS recoupés avec camping-car.com ; tarif 2026 toujours absent.

**Bilan après lot 10** : 158 fiches régionales brutes, 156 visibles, plus 9 complémentaires visibles = **165 fiches/lieux affichés attendus**. 19 prix régionaux exactement `Non confirmé` dont 2 doublons masqués, 3 prix complémentaires exactement `Non confirmé`. Des tarifs non vides sont parfois indicatifs ; indicateur à ne pas assimiler au nombre de fiches totalement vérifiées.

### Sources lot 10
- https://www.capfun.com/pass-camping.html
- https://www.capfun.com/camping---l_eve-FR.html
- https://www.anas.asso.fr/moutiers-en-retz
- https://mairie-labernerie.fr/votre-commune/vie-economique/annuaire-des-hebergements/
- https://docs.mairie-labernerie.fr/divers/Affiche%20c-car%20-%20La%20Bernerie-Centre%20Anas.pdf
- https://park4night.com/fr/place/317535
- https://pro.campingcarpark.com/temoignages/temoignage-aire-camping-car-prefailles/
- https://www.campingdirect.com/fr/reservation-emplacement-mobil-home/loire-atlantique/camping-prefailles/camping-eden-villages-la-pointe-saint-gildas
- https://mapcarta.com/N11786823109
- https://www.sudretzatlantique-tourisme.fr/offres/grotte-saint-jean-corcoue-sur-logne-fr-3121178/
- https://park4night.com/fr/place/14223
- https://www.camping-car.com/aires/34622-aire-de-stationnement/
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf

## Lot complémentaire 11 — 20 octobre 2026

**5 fiches régionales contrôlées**, aucun changement d'effectif. Des sources directes et annuaires ont permis de préciser les conditions sans surévaluer le degré de certitude des prix :

- **Clos Mer et Nature (Saint-Michel-Chef-Chef)** : FAQ propriétaire, ouvert du 1er avril au 31 octobre, arrivée emplacement dès 14 h / départ avant midi. Contrat 2026 : frais de dossier 10 € (1–3 nuits) ou 20 € au-delà, taxe de séjour 0,66 €/adulte/nuit et écoparticipation 0,30 €/personne/nuit. **Prix de base camping-car toujours inconnu**.
- **Yelloh! Le Ranch (La Plaine-sur-Mer)** : exploitant 75 parcelles camping dont 51 nues (aucune capacité exclusive camping-car prétendue). CampingFrance indique FFCC -10 % sur emplacements du 30/04 au 30/06 et 01/09 au 13/09 en 2026 ; Campercontact donne un prix de référence estival « dès 29 € » non daté précisément. **Pas de barème 2026 du camping certifié**.
- **Eden Villages La Pointe Saint-Gildas** : CampingDirect affiche trois catégories Access, XL, Privilège, avec prix d'appel hebdomadaires non datés (148/176/267 €). Ce ne sont **pas** des forfaits 2026 fermes ; partenariat avec aire CAMPING-CAR PARK sur une partie des 49 places toujours à contrôler.
- **Centre ANAS Moutiers-en-Retz** : source exploitant 35 places camping-car et 40 places camping-caravaning ; séjours du village vacances réservés aux adhérents ANAS et agents du ministère, dispositif communal de stationnement possiblement différent. Park4Night juin 2026 rapporte 42,88 € pour 2 nuits mais **pas un tarif officiel applicable à toutes saisons**.
- **Camping Les Chênes Verts (44)** : 80–100 m², rallonge électrique de 20 m conseillée, location réfrigérateur selon stocks, emplacements fermés depuis le 13 septembre 2026. Forfait 2026 encore inconnu.

**Information utilisateur améliorée sur la page d'accueil** : le compteur représente des **fiches** (dont des campings, aires de services et simples pique-niques), pas nécessairement autant de terrains indépendants ni autorisés pour une nuitée. Cela corrige une ambiguïté constatée au site La Pointe, sans modifier le décompte 165.

**Tarifs exactement `Non confirmé` inchangés : 19 en régional brut, dont 2 doublons masqués, soit 17 fiches régionales visibles** ; 3 fiches complémentaires toujours inconnues. Les 17 fiches régionales visibles concernées se répartissent en catégories exclusives : 7 aires de pique-nique sans nuitée confirmée, 2 étapes France Passion dont la participation 2026 reste à vérifier, et 8 autres lieux (campings ou haltes) sans tarif exact confirmé.

**Prochaines validations demandant contact terrain ou exploitant** : tarifs et conditions de réservation ANAS ; forfaits Camping Le Ranch, Clos Mer et Nature, Chênes Verts et Eden ; autorisations de nuitée et identité GPS des sept aires de pique-nique ; éventuel recouvrement d'emplacements Préfailles et Corcoué.

### Sources lot 11
- https://www.camping-clos-mer-nature.fr/faq/
- https://www.camping-clos-mer-nature.fr/wp-content/uploads/2026/03/contrat.pdf
- https://www.camping-le-ranch.com/fr
- https://www.campingfrance.com/recherchez-votre-camping/pays-de-la-loire/loire-atlantique/la-plaine-sur-mer/le-ranch3
- https://www.campercontact.com/fr/france/pays-de-la-loire/la-plaine-sur-mer/58531/camping-le-ranch
- https://www.campingdirect.com/fr/reservation-emplacement-mobil-home/loire-atlantique/camping-prefailles/camping-eden-villages-la-pointe-saint-gildas
- https://pro.campingcarpark.com/temoignages/temoignage-aire-camping-car-prefailles/
- https://www.anas.asso.fr/moutiers-en-retz
- https://park4night.com/fr/place/317535
- https://www.leschenesverts.info/hebergement/emplacement/

## Lot complémentaire 12 — 20 octobre 2026

**10 fiches du département 44 contrôlées : 7 aires de pique-nique et 3 campings, sans ajout, suppression ou fusion.**

- **Sept aires de pique-nique** (Saint-Nicolas-de-Redon, Pierric, Fégréac, Plessé, Avessac, Conquereuil, Guémené-Penfao) portent maintenant un attribut `overnightStatus = not_established`. Le site affiche un avertissement explicite sur leur carte et dans leur fenêtre géographique : nuitée non établie, consulter la mairie. Absence d'autorisation confirmée ne signifie PAS interdiction certaine.
- **Camping Les Chênes Verts, Bourgneuf-en-Retz** : Pitchup a diffusé un prix d'appel indicatif dès 18,52 € pour 2 adultes sur un emplacement pendant la saison 2026, électricité 6 A +5 € / nuit ou 10 A +8 €. Sa page active est déjà passée aux réservations 2027. On ne peut donc pas présenter 18,52 € comme une grille officielle garantie pour 2026.
- **Eden Villages La Pointe Saint-Gildas, Préfailles** : Campingnavigator indique un forfait de base purement indicatif 15 € basse saison et 24 € haute saison, 2 adultes + voiture hors taxe, non millésimé 2026, et haute saison par semaine ; ce n'est pas le tarif CAMPING-CAR PARK ni une cotation officielle de 2026.
- **Camping Les Mouettes, Saint-Père-en-Retz** : le site accessible sous deux variantes d'URL affiche 15 € et 19,50 € / nuit, sans millésime ; le PDF officiel est daté de 2024 et indique 19,50 €, électricité 6 A +6,50 €. Tarifs divergents : ne pas les classer comme « prix 2026 confirmé ».
- **Amélioration de l'interface du répertoire** : les fiches de pique-nique affichent désormais un avertissement visible « nuitée camping-car non confirmée » et le même avertissement se retrouve dans les popups de la carte ; les offres se chevauchant ou suspectées doublons affichent une réserve sans retrait automatique d'une entrée.

**Bilan : 165 entrées attendues, dont 156 régionales et 9 complémentaires ; 19 prix strictement Non confirmé en régional brut, dont deux doublons masqués (17 visibles), et 3 complémentaires strictement non confirmés.** Aucun prix dont l'année 2026 est incertaine n'a été artificiellement « certifié ». Les sept aires pique-nique ne sont pas validées pour la nuitée.

### Sources lot 12
- https://www.pitchup.com/fr/campsites/france/pays-de-la-loire/loire-atlantique/bourgneuf_en_retz/camping_les_chenes_verts/?type=3
- https://www.leschenesverts.info/hebergement/emplacement/
- https://campingnavigator.com/fr/campings-france/pays-de-la-loire/eden-villages-la-pointe-saint-gildas
- https://les-mouettes-camping.com/
- https://www.les-mouettes-camping.com/
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf


## Lot complémentaire 13 — 20 octobre 2026

- **Contrôle automatique amélioré (qualite-loire-atlantique.yml)** : le précédent indicateur « tarifs non confirmés : 9 » ne portait que sur les 35 compléments OSM et comptait aussi des prix avec réserves. Le rapport distingue maintenant les tarifs strictement égaux à « Non confirmé » en régional brut (19), régional visible (17), compléments bruts (3) et compléments visibles (3) : **20 fiches affichées sans prix exact confirmé**.
- **Vérification du décompte visible** : filtres de dédoublonnage reproduits depuis app.js (références canoniques, cinq alias explicites, proximité GPS, noms normalisés). 158 régionales brutes → 156 visibles, 35 complémentaires brutes → 9 visibles, soit **165 fiches affichables**. Ce nombre ne signifie pas 165 terrains physiques indépendants.
- **Ancenis-Saint-Géréon, Barrière Saint-Pierre (way/1317028497)** : guide local de 2024 évoquant deux emplacements ; Camping-car.com indique 3 places réservées, une place de vidange et 48 h maximum. Sources non concordantes sur la capacité ; chiffres toujours indicatifs en 2026. Tarifs non confirmés, validation municipale recommandée.
- **Nuitées** : 7 fiches régionales de simple pique-nique sont déjà marquées overnightStatus=not_established. Les deux accueils France Passion à Legé et Nort-sur-Erdre restent à confirmer dans le guide actif 2026. Aucun lieu ajouté, retiré ou fusionné.
- **Tarifs campings** : les exploitants Clos Mer et Nature, Le Ranch, Les Chênes Verts, Eden La Pointe et Les Mouettes ne fournissent pas de barème camping-car complet clairement applicable à 2026 dans les pages vérifiées ; réserves conservées. Les deux tarifs officiels CAMPING-CAR PARK de La Turballe concordent avec les fiches existantes.
- Source de l'enrichissement Ancenis : https://www.camping-car.com/aires/34622-aire-de-stationnement/
- Sources complémentaires revérifiées : https://www.les-mouettes-camping.com/ ; https://www.yellohvillage.fr/camping/le_ranch ; https://www.leschenesverts.info/hebergement/emplacement/ ; https://www.campingcarpark.com/fr_FR/camping-car/pays-de-la-loire/loire-atlantique/la-turballe ; https://www.campingcarpark.com/fr_FR/camping-car/pays-de-la-loire/loire-atlantique/la-turballe-grande-falaise

## Lot complémentaire 14 — 20 octobre 2026

**Cinq fiches documentées et avertissements de nuitée améliorés**, sans changement d'effectif prévu. Calcul attendu : 165 fiches, 156 régionales et 9 complémentaires.

- **Ferme des Cochons d’Antan, Legé** : exploitation ouverte en 2026 selon Sud Retz Atlantique Tourisme ; accueil France Passion 2026 non confirmé.
- **Ferme du Biau Chemin, Nort-sur-Erdre** : activité de la ferme et d'accueil pédagogique attestée par annuaire municipal et Accueil Paysan ; inscription France Passion 2026 non démontrée.
- **Pont de Clin, Saint-Molf** : e-SPRIT mise à jour au 09/03/2026 confirme halte et table/poubelle mais pas l'autorisation nocturne ; overnightStatus=not_established.
- **Parking Plessé OSM** : overnightStatus=not_established faute de confirmation municipale de la nuitée.
- **Corcoué rue de la Poste** : les sources décrivent quatre places à proximité du point OSM et une vidange à une autre position ; ne pas supposer deux aires indépendantes sans confirmation cadastrale/communale.
- **Interface** : avertissement différencié pour les simples pique-niques et les autres stationnements à nuitée non confirmée.
- **Audit** : 7 pique-niques, 1 autre halte régionale et 1 complémentaire marqués « nuitée non établie ».
- **Tarifs** : 19 régionaux bruts au prix exactement « Non confirmé », dont 2 masqués ; 3 compléments visibles au même état, soit 20 entrées affichables dont le tarif n'est pas confirmé. Aucun tarif 2026 inventé.

Sources :
https://www.sudretzatlantique-tourisme.fr/offres/la-ferme-des-cochons-dantan-lege-fr-3121272/
https://www.nort-sur-erdre.fr/informations-transversales/annuaires/annuaire-des-structures/ferme-du-biau-chemin-des-landes
https://www.accueil-paysan.com/fr/structure/2003/
https://www.cirkwi.com/fr/point-interet/1157462-aire-de-camping-cars-de-saint-molf
https://park4night.com/fr/place/14223
https://www.stellplatzfuehrer.de/fr/parcs-de-vr/listes/all/17565-corcoue-sur-logne

## Lot complémentaire 15 — 20 octobre 2026

**Sources croisées sur les trois compléments visibles au tarif strictement « Non confirmé » ; quatre fiches de données ajustées, sans suppression, fusion ni ajout.**

- **Corcoué-sur-Logne, Grotte Saint-Jean (source régionale ACCAMPDL044V5006F5)** : stationnement de 4 places gratuit toute l'année 2026 selon l'office de tourisme. WC et vidange recensés, point d'eau par carte bancaire sans montant publié. Prix reformulé pour distinguer clairement gratuité du stationnement et coût de l'eau non confirmé.
- **Corcoué-sur-Logne OSM (way/909611149)** : liste de services auparavant vide, renseignée avec les prestations **du site officiel proche**, sans les attribuer de façon certaine au polygone OSM. L'office de tourisme décrit seulement quatre emplacements pour la Grotte Saint-Jean ; aucun ensemble indépendant de quatre places supplémentaires n'est établi. Suspicion de doublon maintenue, sans fusion automatique.
- **Ancenis-Saint-Géréon, Barrière Saint-Pierre (way/1317028497)** : le guide de la COMPA, édition 2024 (pages imprimées 54–55), confirme avenue des Alliés et deux emplacements face à la halte nautique. Camping-car.com indique trois places et 48 heures sans année récente. Le tarif et la réglementation nocturne 2026 ne sont pas établis : ajout overnightStatus=not_established. Source institutionnelle ancienne désormais prioritaire sur l'annuaire secondaire.
- **Plessé, point OSM (node/11786823109)** : Mapcarta n'est qu'une reprise cartographique, pas une confirmation officielle de l'autorisation nocturne. Suppression du lien secondaire trompeur dans le champ sourceOfficial ; repère OSM original et son attribution conservés.
- **Mise à jour de l'interface** : versions d'URL des fichiers régionaux, complémentaires et du JavaScript actualisées pour forcer le chargement de ce lot lors de la consultation du site.
- **Audit** : rapport enrichi avec le nombre de doublons potentiels explicitement signalés parmi les compléments affichés, sans fusion automatique.
- **Bilan attendu** : 158 régionales brutes, 156 affichables ; 35 compléments bruts, 9 affichables, soit **165 fiches attendues**. 19 prix régionaux strictement « Non confirmé » dont deux masqués, trois prix complémentaires strictement « Non confirmé » ; donc **20 fiches visibles à tarif entièrement non confirmé**. Les sept pique-niques et les haltes douteuses restent signalés.

Sources : https://www.sudretzatlantique-tourisme.fr/offres/grotte-saint-jean-corcoue-sur-logne-fr-3121178/ ; https://www.pays-ancenis.com/fileadmin/user_upload/PA_185x220_AnnuairePros_2024.pdf ; https://www.camping-car.com/aires/34622-aire-de-stationnement/ ; https://park4night.com/fr/place/14223

## Lot complémentaire 16 — 20 octobre 2026

**Six fiches régionales de campings/centres sans barème public certifié 2026 dotées d'un contact vérifiable** :
Capfun L'Ève (Saint-Nazaire), Les Chênes Verts (Villeneuve-en-Retz), Eden Villages La Pointe (Préfailles), Yelloh! Le Ranch (La Plaine-sur-Mer), Clos Mer et Nature (Saint-Michel-Chef-Chef), et centre ANAS (Les Moutiers-en-Retz).
Les champs `contactPhone`, `contactSource`, `priceVerification=confirmation_exploitant_requise`, `priceCheckedAt=2026-10-20` permettent une reprise ciblée sans recherche répétée. Les numéros sont affichés en liens cliquables dans le répertoire. Ils sont publiés sur les sites opérateurs ou office de tourisme ; aucun appel ni devis n'a été réalisé.

- **ANAS** : vérification croisée des avis datés été 2026 sur Park4Night : observations autour de 21 € par tranche de 24 h sur borne d'accès, mais d'autres témoignages affichent 42 € ou 42,88 € sur des séjours. Le gestionnaire confirme 35 places spécifiques camping-car et 40 places camping-caravaning. La formule des hébergements ANAS et ses contraintes d'adhésion ne doivent pas être assimilées automatiquement à l'aire autonome. Tarif officiel 2026 non confirmé, `price` conservé.
- **Les Chênes Verts** : le gestionnaire indique une **tarification dynamique**, qui interdit de déduire un prix général d'une annonce ancienne ou d'un exemple de réservation. Le prix 2026 reste non confirmé malgré les chiffres indicatifs tiers.
- **Autres établissements** : confirmation de l'existence des fiches et de leurs coordonnées officielles sans prétendre à un tarif 2026 nouveau pour Capfun L'Ève, Eden La Pointe, Yelloh Le Ranch ni Clos Mer et Nature.
- **Audit et mise en cache** : décompte des fiches sans prix et munies d'un contact direct ; validation de la syntaxe téléphonique ; nouveau paramètre de version pour les données et le script.
- **Effectifs** : 158 fiches régionales brutes (156 affichables), 35 compléments bruts (9 affichables), soit **165 entrées attendues**. Les prix strictement « Non confirmé » restent à 19 régionaux bruts dont 2 masqués et 3 compléments visibles : **20 fiches visibles**. Les informations communautaires ne sont pas certifiées comme officielles.

Sources :
- https://www.capfun.com/camping---l_eve-FR.html
- https://www.leschenesverts.info/contact-acces-camping-villeneuve-en-retz/
- https://www.leschenesverts.info/camping-pas-cher-villeneuve-en-retz/
- https://www.pornic.com/camping-eden-villages-la-pointe-saint-gildas.html
- https://www.camping-le-ranch.com/fr
- https://www.camping-clos-mer-nature.fr/contact-camping-loire-atlantique/
- https://www.anas.asso.fr/moutiers-en-retz
- https://park4night.com/fr/place/317535

## Lot complémentaire 17 — 20 octobre 2026

**Sept fiches de pique-nique reclassées, sans suppression et sans certification de tarifs de nuitée.**

- **Pierric** (ACCAMPDL044V51HCG7), **Plessé** (ACCAMPDL044V51HCG9), **Avessac** (ACCAMPDL044V51HCFZ) et **Guémené-Penfao** (ACCAMPDL044V51HCG4) : le site officiel du tourisme du Pays de Redon les classe « Aire de pique-nique ». Rien n'y démontre le droit au stationnement nocturne des camping-cars.
- **Saint-Nicolas-de-Redon** (ACCAMPDL044V51HCGD), **Fégréac** (ACCAMPDL044V51HCG2) et **Conquereuil** (ACCAMPDL044V51HCG0) : les données régionales classent les lieux parmi les espaces de pique-nique. Le lieu précis et le droit de nuitée n'ont pas été établis par arrêté ou mairie ; le classement reste prudent.
- Pour les **sept** fiches, `price` passe de « Non confirmé » à « Tarif de nuitée sans objet : aire de pique-nique, accueil nocturne camping-car non établi » ; `priceStatus = not_applicable_for_night_stay` est ajouté. Cela ne certifie PAS que le stationnement de jour est gratuit, ni qu'une nuitée est interdite ou permise. Le marqueur `overnightStatus = not_established` est maintenu.
- **Contrôle tarifaire** : la baisse de **20 à 13** tarifs strictement inconnus parmi les fiches visibles ne résulte **d'aucune enquête de prix réussie** : sept simples haltes de pique-nique sortent à juste titre du périmètre des tarifs camping-car de nuitée. En régional : 12 fiches brutes encore exactement « Non confirmé », dont deux doublons masqués (10 visibles) ; en compléments : 3 visibles, soit 13 au total. Sept autres fiches, à tarif de nuitée sans objet, sont toujours affichées et explicitement signalées.
- **Affichage et audit** : le site distingue le champ « Tarif de nuitée » pour les pique-niques et conserve le message d'alerte ; le contrôle automatique compte distinctement les sept fiches à nuitée non établie.
- **Effectif** : 165 fiches affichables inchangées (156 régionales + 9 complémentaires). Ne pas assimiler ces 165 entrées à 165 aires de stationnement nocturne confirmées.

Sources tourisme :
https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-24/
https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-27/
https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-2/
https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-11/
https://tourisme-pays-redon.com/sorganiser/savourer/aires-de-pique-nique/
https://tourisme-pays-redon.com/visite/la-carriere/
https://tourisme-pays-redon.com/experiences/idees-descapades/pique-niquer-redon/

## Lot complémentaire 18 — 20 octobre 2026

**Sept fiches supplémentaires documentées : quatre régionales et trois complémentaires, pour couvrir les treize prix encore strictement non confirmés avec un contact public.** Aucun appel, aucune modification artificielle des prix, aucune fusion ni ajout d'aire.

- **Legé, ferme des Cochons d'Antan** : contact de l'exploitant `06 63 22 27 70` publié par son propre site et par Sud Retz Atlantique Tourisme. L'annuaire touristique la référence sous « Aire de stationnement », mais ne valide pas son éventuelle inscription au guide France Passion **2026**.
- **Nort-sur-Erdre, ferme du Biau Chemin** : `02 40 29 53 20` et activité d'accueil pédagogique confirmés par le site officiel du réseau Accueil Paysan. Cela ne constitue pas une attestation d'accueil camping-car France Passion 2026.
- **Camping Les Mouettes, Saint-Père-en-Retz** : téléphone direct `09 81 81 11 20`. Le site officiel affiche deux tarifs divergents selon la variante de domaine (15 € sans www, 19,50 € avec www) et son PDF contient une date de 2024 ; ne pas certifier ces montants pour 2026.
- **Saint-Molf, Pont de Clin** : contact officiel de la mairie `02 40 62 50 77`. Nuitée et tarif à confirmer par la commune.
- **Plessé, parking OSM près de l'église** : contact mairie `02 40 79 60 14`; nuitée et prix non validés.
- **Corcoué-sur-Logne, géométrie OSM rue de la Poste** : contact `02 40 05 86 90` figurant sur l'aire officielle voisine Grotte Saint-Jean dans le répertoire de l'office de tourisme ; le contact n'atteste PAS une seconde aire indépendante. Le point de stationnement officiel comprend quatre places gratuites selon le tourisme, mais l'identité exacte du polygone OSM reste à clarifier.
- **Ancenis-Saint-Géréon, Barrière Saint-Pierre** : mairie `02 40 83 87 00` (site municipal actuel). Deux places dans le guide 2024, trois et limite 48 h dans un annuaire sans millésime : aucun nombre actuel certifié.

**Interface et audits** : liens téléphone dans les cartes et marqueurs, avec distinction entre exploitant, ferme, mairie et contact d'un site proche. Champs `contactRole`, `contactSource`, `priceVerification` et `priceCheckedAt` ajoutés. L'audit contrôle aussi les coordonnées des compléments et signale combien de fiches à prix strictement non confirmé possèdent un contact sourcé.

**Bilan attendu** : 165 fiches affichables (156 régionales + 9 compléments) ; 13 tarifs strictement « Non confirmé » parmi les fiches visibles, désormais **13 contacts recensés** : 10 parmi les fiches régionales et 3 parmi les compléments. Les tarifs ne sont pas confirmés, et les sept pique-niques demeurent hors champ des nuitées.

Sources :
- https://lafermedescochonsdantan.fr/mentions-legales/
- https://www.sudretzatlantique-tourisme.fr/sejourner-2/hebergements/aires-de-camping-car/
- https://www.accueil-paysan.com/fr/structure/2003/
- https://www.les-mouettes-camping.com/
- https://les-mouettes-camping.com/
- https://www.mairie-saint-molf.fr/pratique/contact-et-demarches-en-ligne/
- https://www.commune-de-plesse.com/les-services-municipaux
- https://ancenis-saint-gereon.fr/publications/

### Complément du lot 18 — cohérence des contacts

Le nouvel audit des coordonnées publiques requiert un rôle de contact pour les fiches enrichies. Six contacts préexistants du lot 16 avaient bien un téléphone sourcé, mais pas le champ `contactRole`. Les cinq campings sont maintenant étiquetés « camping » et le site ANAS est étiqueté « centre ». Cette correction ne change ni leurs numéros ni leurs tarifs ; elle permet de distinguer « contacter le camping » de « contacter le gestionnaire » et rend la nouvelle règle de contrôle cohérente avec l'historique.

## Lot complémentaire 19 — 20 octobre 2026

- **Camping Les Chênes Verts (Villeneuve-en-Retz)** : la page officielle https://www.leschenesverts.info/location-emplacements-villeneuve-en-retz/ confirme une borne de vidange et le remplissage en eau potable pour les camping-cars. Les services sont enrichis sur cette source officielle. L'accès sans séjour, le prix des services et le prix de nuitée 2026 restent non confirmés.
- **Nouveau filtre de prudence** : « Masquer les lieux dont la nuitée n'est pas établie », décoché par défaut et réinitialisable. Dans le 44, il écarte sept aires de pique-nique, une halte régionale et deux points complémentaires, soit **10 fiches** : **165 avant filtrage, 155 après filtrage**. Cette diminution n'est pas une suppression de lieux.
- **Avertissement** : les 155 autres lieux ne sont pas pour autant tous autorisés pour la nuitée ; seuls les dix lieux avec le champ overnightStatus=not_established sont masqués.
- **Audit** : compte des dix lieux signalés et des 155 fiches attendues avec le filtre actif. Les **13 tarifs strictement non confirmés** restent inchangés, faute d'un forfait camping-car 2026 officiellement prouvé.
- **Traçabilité** : aucun ajout ni fusion d'une aire, compteur par défaut conservé à 165.

Sources : https://www.leschenesverts.info/location-emplacements-villeneuve-en-retz/ ; https://www.anas.asso.fr/moutiers-en-retz ; https://www.capfun.com/camping---l_eve-FR.html ; https://www.les-mouettes-camping.com/

## Lot complémentaire 20 — 20 octobre 2026

**Trois fiches enrichies, dont deux points du même site de Corcoué-sur-Logne, sur recoupement de source touristique officielle 2026 et localisation des services.**

- **Grotte Saint-Jean, Corcoué-sur-Logne** : Sud Retz Atlantique Tourisme mentionne UNE seule aire municipale de quatre places gratuites, ouverte 24h/24 toute l'année 2026. Park4Night y situe le parking près de la rivière autour de 46.9618,-1.5814 ; plusieurs voyageurs de 2024–2026 indiquent que la vidange se trouve à une autre hauteur de la rue de la Poste (vers 46.962929,-1.582165). Le point régional ACCAMPDL044V5006F5 est requalifié en zone de services rattachée aux quatre places, avec GPS régional indicatif ; le point OSM way/909611149 devient explicitement le parking de quatre places, avec tarif gratuit 2026 documenté. Les deux fiches sont reliées réciproquement par sharedSiteWithSourceId. Cela **n'est pas huit emplacements ni deux aires de stationnement autonomes**. Le prix de l'eau reste non publié ; sa mise à disposition nécessite une carte bancaire. Les deux points sont conservés pour permettre la localisation du stationnement et des services.
- **Camping Les Mouettes, Saint-Père-en-Retz** : la page officielle annonce clairement un espace de vidange camping-car ; information ajoutée aux services, mais sans certifier l'accès hors séjour ni un tarif de service. Le prix de nuitée 2026 reste Non confirmé, car les variantes officielles de la page annoncent 15 € et 19,50 € sans millésime fiable et un PDF concerne 2024.
- **Interface et audit** : message de prudence renforcé pour les deux zones d'un site partagé ; audit des références réciproques de Corcoué et du total de points partagés. Le caractère uniquement *potentiel* du doublon OSM Corcoué est remplacé par l'identification vérifiée d'un **ensemble commun** comportant deux fonctions distinctes.
- **Compteurs prévus** : 165 fiches affichables, dont 2 repères de Corcoué correspondant à 1 site physique ; 12 tarifs au champ « Non confirmé » (10 régionaux visibles + 2 compléments OSM), contre 13 auparavant. Cette baisse d'un tarif est due à la confirmation du stationnement GRATUIT de l'aire municipale et non à la vérification du coût de l'eau ; le filtre nuitée conserve 155 fiches. La fiabilité des autres 165 fiches ne s'en déduit pas.

Sources :
- https://www.sudretzatlantique-tourisme.fr/offres/grotte-saint-jean-corcoue-sur-logne-fr-3121178/
- https://park4night.com/fr/place/14223
- https://www.stellplatzfuehrer.de/fr/parcs-de-vr/listes/all/17565-corcoue-sur-logne
- https://www.les-mouettes-camping.com/
- https://les-mouettes-camping.com/

## Lot complémentaire 21 — 20 octobre 2026

**Trois conditions d'accès au premier plan, et trois fiches locales à source plus solide ; aucune modification artificielle du compteur ni des tarifs.**

- **France Passion — La Ferme des Cochons d'Antan à Legé et Le Biau Chemin à Nort-sur-Erdre** : le réseau France Passion indique officiellement que les véhicules doivent être totalement autonomes et le stationnement de 24 heures est gratuit chez les hôtes inscrits, à condition de disposer de l'adhésion/guide valable. La participation **effective des deux fermes au guide 2026 n'a pas été prouvée** et doit être demandée directement. Un champ `accessNote` rend désormais ce prérequis visible sans promettre une nuitée.
- **ANAS Les Moutiers-en-Retz** : l'ANAS confirme l'existence d'une catégorie d'adhésion « bienfaiteur » destinée notamment aux camping-caristes extérieurs au ministère de l'Intérieur. Les séjours dans le village vacances exigent un statut d'adhérent ; ce constat ne démontre ni l'accès libre à une zone de passage camping-car ni un tarif de nuitée 2026. La fiche affiche la distinction et un lien vers les modalités de l'adhésion.
- **La Piardière, Plessé** : l'annuaire de la commune référence directement l'aire privée de camping-car, et fournit le numéro 06 74 65 28 85. La source départementale identifie 4 places avec eau et électricité mais sans vidange. Le tarif reste partiel/non confirmé. Champ contact ajouté.
- **Parking OSM près de l'église de Plessé** : ne pas assimiler l'étiquette OpenStreetMap à une aire municipale reconnue ; la mairie recense l'aire privée distincte à la Piardière, mais ne publie pas d'autorisation de nuitée pour l'objet OSM. L'interdiction de camping au plan d'eau de Buhel concerne un site **distinct** et n'est pas étendue arbitrairement au bourg. Nuitée non établie conservée.
- **Barrière Saint-Pierre, Ancenis-Saint-Géréon** : e-SPRIT confirme WC/eau et tables, La Loire à Vélo répertorie aussi une catégorie « évacuation des eaux usées » dont les modalités 2026 demeurent non établies. La fiche précise cette incertitude et cite en priorité la source e-SPRIT plutôt que de laisser le seul PDF général COMPA 2024. La capacité actuelle, la durée autorisée et le tarif restent à confirmer.
- **Affichage et audit** : section « Conditions d'accès » visible sur les trois fiches concernées, nouvelles assertions automatiques de présence de source et de réserve. Compteurs prévus : **165 fiches** sans filtre, **155** avec le filtre « nuitée non établie », **12** tarifs strictement « Non confirmé » (les 7 pique-niques restent hors de ces prix), aucun tarif 2026 supplémentaire inventé.

Sources :
- https://www.france-passion.com/camping-caristes/faq-camping-cariste/formule-france-passion/
- https://www.france-passion.com/camping-caristes/faq-camping-cariste/
- https://www.anas.asso.fr/adherer
- https://www.anas.asso.fr/moutiers-en-retz
- https://www.commune-de-plesse.com/herbergement
- https://www.commune-de-plesse.com/environnement
- https://rando.loire-atlantique.fr/service/187454-Aire-de-Camping-Car-Ferme-de-la-Piardiere
- https://www.cirkwi.com/fr/point-interet/441669-aire-de-stationnement-barriere-st-pierre-ancenis
- https://www.loire-radweg.org/tsft/aire-de-stationnement-barriere-st-pierre-ancenis-ancenis-de/

## Lot complémentaire 22 — 20 octobre 2026

**Découverte d'un barème ANAS officiellement édité pour 2026, plus une confirmation de services au Ranch. Un tarif strictement inconnu de moins, sans ajout ni suppression de fiche.**

- **ANAS Les Moutiers-en-Retz — forfait camping-car avec branchement électrique** : la brochure `VAC'ANAS 2026`, page imprimée **21**, accessible depuis le site officiel de l'association, indique :
  - **Du 1er janvier au 31 mai : 16 € par nuit (12 € adhérents).**
  - **Du 1er juin au 12 septembre : 21 € par nuit (17 € adhérents).**
  - **Du 13 septembre au 31 décembre : 16 € par nuit (12 € adhérents).**
  - Ne pas confondre la **grille tarifaire diffusée** avec le montant parfois différent affiché par la borne selon le séjour ou l'éligibilité. Les séjours au village vacances ANAS exigent un statut d'adhérent ou un rattachement au ministère de l'Intérieur ; une catégorie « bienfaiteur » peut être souscrite par les camping-caristes, mais le droit de passage direct de toute personne extérieure doit encore être confirmé auprès du centre.
  - La **brochure 2026 recense 42 emplacements camping-car**, contre **35 sur la page actuelle** du centre ANAS : divergence de capacité mentionnée sans choisir arbitrairement. Le tourisme régional référençait 20 places auparavant.
  - Les textes auparavant fondés uniquement sur les témoignages Park4Night sont remplacés dans `price` par cette preuve tarifaire de premier rang. Champs `priceYear`, `priceEvidencePage`, `priceEvidenceDocument`, `priceSourcePublisher` ajoutés. L'interface publie un lien vers le document PDF d'origine relayé par FO Justice.
- **Yelloh! Village Le Ranch, La Plaine-sur-Mer** : la page officielle du type d'emplacement **130 m² et plus** recense explicitement électricité **10 A**, eau et évacuation des eaux usées sur la parcelle. Ces prestations ne sont pas extrapolées aux 75 autres emplacements. Le prix de nuitée 2026 reste inconnu.
- **Audit** : trois sites à conditions particulières conservent leurs avertissements ; seuls les deux accueils France Passion conservent le prix strictement non confirmé. ANAS dispose d'un tarif 2026 documenté, mais accès autonome et tarifs affichés sur borne restent à vérifier.
- **Total attendu inchangé** : 165 fiches affichables (156 régionales + 9 OSM), 155 avec filtre « nuitée non établie », **11 fiches visibles avec `price` exactement `Non confirmé`** (9 régionales + 2 OSM), contre 12 au lot 21. Une baisse justifiée par un document tarifaire daté, pas par un renommage artificiel.

Sources et preuve de lecture :
- Page officielle ANAS : https://www.anas.asso.fr/vacances (lien « VAC'ANAS 2026 », ouvre https://heyzine.com/flip-book/cc72a1bef7.html).
- PDF de la brochure 2026 relayé sur FO Justice : https://fojustice.fr/web/wp-content/uploads/2026/06/VAC-ANAS-2026-FO.pdf (p. 21 imprimée ; 10e page du fichier).
- Page actuelle du centre pour différence 35/42 : https://www.anas.asso.fr/moutiers-en-retz .
- Emplacement Ranch : https://www.camping-le-ranch.com/fr/emplacements/78629 .

## Lot complémentaire 23 — 20 octobre 2026

**Trois fiches régionales et un complément OSM ont bénéficié d'un audit documentaire, sans hausse fictive des tarifs renseignés.**

- **Clos Mer et Nature — Saint-Michel-Chef-Chef :** contrôle visuel du contrat officiel `LOCATIF / EMPLACEMENT 2026` (https://www.camping-clos-mer-nature.fr/wp-content/uploads/2026/03/contrat.pdf), pages 1 et 2 : 10 € de dossier pour 3 nuits au plus, 20 € au-delà ; 0,66 €/adulte/nuit de taxe de séjour ; 0,30 €/personne/nuit d'éco-participation ; option chien 4,50 €/jour. Le **forfait de base camping-car n'y figure pas** : maintien de `price = "Non confirmé"`. **Contradiction horaire vérifiée :** formulaire 2026 arrivée à 15 h, départ 10 h pour séjour emplacement/locatif ; FAQ du camping (https://www.camping-clos-mer-nature.fr/faq/) spécifie 14 h/12 h pour les emplacements. Les deux sources sont signalées pour éviter de promettre des horaires erronés. Champs `fees2026`, `feeEvidenceUrl`, `operationalWarning`.
- **Les Mouettes, La Tansorais, Saint-Père-en-Retz :** confirmation de nuitées en camping-car sur le site du gestionnaire ; avertissement particulier sur la restriction non explicitée « 22 h 30–8 h ». Le site parle de 29 emplacements destinés à tente/caravane/camping-car et de 101 emplacements tous types, sans conclure à 101 places camping-car. Le PDF officiel de grille **2024** confirme 19,50 € pour 2 personnes et +6,50 € pour électricité 6 A ; une autre variante du même site affiche 15 €. **Aucun n'est un barème 2026 confirmé**. Les établissements homonymes du Pouliguen, de Plérin ou d'autres communes sont exclus des sources applicables à Saint-Père-en-Retz. Champ `historicPriceEvidence` distinct de `price`, `operationalWarning` pour les horaires.
- **Capfun L'Ève, Saint-Nazaire :** page officielle de l'exploitant indique 274 emplacements au **total toutes catégories**, alors que la base touristique régionale décrit 50 places camping-car. Les catégories sont maintenues distinctes. Le forfait promotionnel Capfun Pass Camping 15 € ne s'applique pas à cet établissement et aucun prix standard 2026 n'est prouvé.
- **Barrière Saint-Pierre, Ancenis-Saint-Géréon :** une fiche touristique départementale publiée avec une date juillet 2026 recoupe le parking face à la halte nautique et les équipements WC/eau/tables de pique-nique. Elle **ne fournit ni tarif, ni autorisation de nuitée, ni capacité 2026**. La ressource PDF peut ponctuellement renvoyer une erreur HTTP : la source touristique Cirkwi et l'annuaire municipal restent référencés comme points d'accès plus stables.
- **Interface :** affichage explicite des frais 2026 vérifiés et des avertissements d'horaires sur les fiches concernées. Contrôles automatiques supplémentaires empêchant de remplacer un prix de base inconnu par un montant de frais annexes ou par un prix de 2024.

**Bilan : 165 fiches affichables attendues ; 155 si le filtre « nuitée non établie » est activé ; 11 prix strictement « Non confirmé » parmi les fiches visibles (9 régionales, 2 complémentaires).** Les nouvelles validations portent sur les frais/horaire/source, pas sur un nouveau forfait de nuitée certifié.

Références :
- https://www.camping-clos-mer-nature.fr/wp-content/uploads/2026/03/contrat.pdf
- https://www.camping-clos-mer-nature.fr/faq/
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf (grille 2024)
- https://les-mouettes-camping.com/
- https://www.capfun.com/camping---l_eve-FR.html
- https://admin-rando.loire-atlantique.fr/api/fr/touristiccontents/3136/aire-de-stationnement-barriere-st-pierre-ancenis.pdf

## Lot complémentaire 24 — 20 octobre 2026

**Deux positions de camping fiabilisées à partir du site exploitant, plus horaires d'accès des Mouettes explicités. Aucun prix arbitraire ajouté.**

- **Camping Les Mouettes — Saint-Père-en-Retz** : le camping publie lui-même `47.22038, -2.13734` sur https://les-mouettes-camping.com/ . Ancienne géolocalisation de la Région `47.21919, -2.13753`, environ 133 m plus au sud ; l'ancien point est archivé sous `gpsPreviousRegional`. `gpsSourceType=exploitant_coordonnees_publiees`, `gpsVerificationDate` et avertissement sur la précision (camping entier, pas place/borne particulière). La page exploitant signale une réception 9h–12h/14h–18h, sanitaires 24h/24, douches 8h–22h, circulation des véhicules déconseillée/interdite après 22h et une phrase « camping-cars non autorisés entre 22h30 et 8h » dont la portée exacte reste **ambiguë** : contacter le camping pour connaître les modalités d'accès/sortie. L'aire accueille bien des nuits camping-car et n'est pas présentée comme interdite de nuitée. Prix de nuitée **2026 non confirmé**, les montants de 15 € et 19,50 € sans millésime ne sont pas homologués.
- **Camping Capfun L'Ève — Saint-Nazaire** : coordonnées GPS opérateur `47.241931, -2.267936` publiées à https://www.capfun.com/camping---l_eve-FR.html . Ancien point régional `47.24162,-2.26758` archivé, soit quelques dizaines de mètres de différence. Ce repère localise le camping, pas les 50 places camping-car séparément. Aucun tarif 2026 fixe applicable à L'Ève n'a été trouvé : statut inchangé.
- **Interface et audit** : notes précisant l'origine du GPS opérateur et les horaires d'accueil intégrées aux fiches ; assertion sur les deux GPS et leurs sources ; changement des versions de cache GitHub Pages.
- **Bilan prévisionnel inchangé** : 165 fiches affichables pour le 44 (156 régionales+9 complémentaires), 155 avec filtre de nuitée non établie, et **11 tarifs strictement non confirmés** (9 régionales + 2 compléments). Les 165 fiches ne doivent pas être assimilées à 165 aires physiques indépendantes.

Sources opérateurs :
https://les-mouettes-camping.com/
https://www.capfun.com/camping---l_eve-FR.html

## Lot complémentaire 25 — 20 octobre 2026

**Sécurité de l'information : cinq points techniques/diurnes déjà connus étaient détaillés dans le texte, mais non exclus par le filtre de préparation des nuitées.** Ce contrôle est distinct de la recherche des 11 prix encore non confirmés, qu'il ne modifie pas.

- **Saint-Lyphard, aire centre-ville** (`ACCAMEAIREDESAINTLYPHARD`) : parking de jour gratuit 8–20 h, dix places, stationnement nocturne non autorisé explicitement par Pays de la Loire Tourisme. https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-service-et-de-stationnement-du-centre-ville
- **Nort-sur-Erdre, quai Saint-Georges** (`ACCAMPDL044V50Y4UO`) : stationnement interdit de 20 h à 6 h selon Loire-Atlantique Tourisme. https://rando.loire-atlantique.fr/service/183919-AIRE-DE-STATIONNEMENT
- **Mesquer, Kerlagadec** (`ACCAMECCMESQUER`) : remplissage/vidange par CB sans contact mais stationnement interdit selon la Région. https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-service-de-kerlagadec
- **Clisson, devant le camping du Moulin** (`ACCAMPDL044V501OIH`) : service vidange et eau, sans stationnement autorisé devant la borne ; les nuitées relèvent de la capacité intérieure du camping. https://rando.loire-atlantique.fr/service/180257-Aire-de-service-camping-car-de-Clisson
- **Saint-Viaud, rue de la Gare** (`ACCAMACCAMEBORNESERVICESCCPARKSTVIAUD`) : borne CAMPING-CAR PARK de services uniquement (6 €), aucun séjour permis sur la borne ; aire de stationnement distincte à la base de loisirs. https://rando.loire-atlantique.fr/service/186399-BORNE-DE-SERVICES-CAMPING-CAR-PARK

Pour ces cinq fiches, ajout de `overnightStatus="prohibited"`, `overnightReason`, `overnightEvidenceUrl` et `overnightCheckedAt`, sans changement des tarifs ni des emprises GPS. Le libellé précise « Nuitée non autorisée ici » dans la liste et sur la carte. Le filtre est renommé « Masquer les lieux à nuitée interdite ou non établie » et **masque désormais 15 fiches en Loire-Atlantique** : 10 qui n'avaient pas d'autorisation de nuitée prouvée, plus cinq dont la restriction est claire. **Il reste 150 fiches avec filtre, et 165 sans filtre.** Le filtrage ne garantit pas pour autant l'autorisation de nuitée de tous les autres points.

La distinction est importante : ces cinq lieux doivent rester trouvables pour la vidange et/ou le stationnement de jour ; il serait incorrect de les supprimer du répertoire. **11 tarifs strictement inconnus parmi les fiches visibles**, inchangés. Les sources publiques consultées pour les campings Les Mouettes / Les Chênes Verts ne fournissent pas un barème de nuitée 2026 univoque.

## Lot complémentaire 26 — 20 octobre 2026

**Huit courriels publics sourcés pour permettre une confirmation directe des onze tarifs encore inconnus ; aucun tarif non documenté n'est inventé.**

- Régional : Capfun L'Ève (eve@capfun.com), Les Chênes Verts (campingleschenesverts@wanadoo.fr), Clos Mer et Nature (closmernature@orange.fr), Le Ranch (info@yellohvillage-le-ranch.com), le Biau Chemin (lebiauchemin@gmail.com, contact publié pour les activités pédagogiques et non preuve France Passion) et mairie de Saint-Molf (accueil@saintmolf.fr).
- Complément OSM : Plessé (contact@mairie-plesse.fr) et Ancenis-Saint-Géréon (accueil@ancenis-saint-gereon.fr). Chaque courriel a un lien de source publique. L'interface propose un lien « Courriel du contact » dans la fiche et sur le popup de la carte, sans envoyer d'e-mail automatiquement.
- **Le Ranch** : la liste officielle Yelloh! Village mentionne un point de vidange camping-car parmi ses équipements. Tarification et accès pour les camping-cars ne séjournant pas au camping non établis ; le prix de nuitée 2026 reste `Non confirmé`.
- **Bilan invariant** : 165 fiches générales, 150 après filtre sur la nuitée interdite/non établie, 11 tarifs strictement inconnus parmi les lieux visibles. Aucun exploitant ni mairie n'a été contacté.
- Audit de qualité : courriels valides, sources et preuve du point de vidange contrôlés automatiquement.

Sources :
- https://www.capfun.com/camping---l_eve-FR.html
- https://www.leschenesverts.info/hebergement/emplacement/
- https://www.camping-clos-mer-nature.fr/contact-camping-loire-atlantique/
- https://www.camping-le-ranch.com/fr/coordonnees-et-localisation
- https://www.yellohvillage.fr/camping/le_ranch/nos_services
- https://www.accueil-paysan.com/fr/activite-educative/pays-de-la-loire/loire-atlantique/jeudi-matin-a-la-ferme/
- https://www.mairie-saint-molf.fr/pratique/contact-et-demarches-en-ligne/
- https://www.commune-de-plesse.com/demarches
- https://ancenis-saint-gereon.fr/annuaire/services-municipaux/

## Lot complémentaire 27 — 20 octobre 2026

**Trois derniers contacts électroniques complétés : 11 des 11 fiches à tarif strictement non confirmé possèdent désormais une adresse professionnelle ou institutionnelle sourcée.** Ce n'est pas une confirmation des prix.

- **Legé — Ferme des Cochons d’Antan :** `lescochonsdantan@orange.fr`, adresse publiée sur le site actuel de la ferme. La participation France Passion au guide 2026 n'est pas prouvée.
- **Saint-Père-en-Retz — camping Les Mouettes :** `contact@les-mouettes-camping.com`, adresse figurant sur la grille officielle PDF **2024**. L’adresse de contact est sourcée mais non certifiée active en octobre 2026 ; le prix 2026 reste inconnu malgré les variantes 15/19,50 €.
- **Préfailles — camping Eden Villages La Pointe Saint-Gildas :** `directionlapointe@edenvillages.fr`, adresse communiquée par l'annuaire touristique départemental ; tarifs du camping distincts de l'aire CAMPING-CAR PARK.
- **Prudence sur les homonymes :** des pages « Le Ranch » de Naujac-sur-Mer (Gironde) et Le Rozel (Manche) annoncent des prix 2026, qui ne sont pas ceux du Yelloh! Village Le Ranch à La Plaine-sur-Mer. De même, le PDF « Les Mouettes » 2026 d'autres communes ne correspond pas au camping de Saint-Père-en-Retz. Ces montants sont exclus.
- Création de `SUIVI-CONTACTS-LOIRE-ATLANTIQUE-44.md` : 11 demandes avec les interlocuteurs, les justificatifs de contact et les questions exactes, toutes marquées **non envoyées**. Aucun appel ni courriel n'a été effectué.
- **Bilan inchangé : 165 fiches générales, 150 après filtre nocturne, 11 tarifs strictement non confirmés.** Audit renforcé pour exiger le contact par courriel pour chacun des 11 cas, sans le confondre avec une réponse tarifaire.

Sources :
- https://lafermedescochonsdantan.fr/
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf (document 2024)
- https://rando.loire-atlantique.fr/service/182149-Camping-Eden-Villages-La-Pointe-Saint-Gildas

## Lot complémentaire 28 — 20 octobre 2026

**Préparation, sans envoi, de 11 demandes de confirmation individualisées.** Le précédent tableau avait une ambiguïté de navigation : cliquer sur l'adresse e-mail affichée ouvrait la page source et ne préparait pas de message. Désormais les preuves et les liens d'action sont séparés dans `SUIVI-CONTACTS-LOIRE-ATLANTIQUE-44.md` : `[source]` pour contrôler la provenance et `Ouvrir un courriel préparé` pour remplir destinataire, objet et corps du message dans le logiciel de messagerie.

- Les deux accueils France Passion sont questionnés sur l'activité réelle en 2026, et non sur un forfait public présumé.
- Les trois interlocuteurs municipaux (Saint-Molf, Plessé, Ancenis-Saint-Géréon) sont interrogés sur le règlement nocturne, les capacités et tarifs éventuels.
- Les six campings sont interrogés sur le prix de base 2026, les suppléments, l'électricité et les services sans séjour.
- **Aucun courriel ni appel envoyé ; aucun tarif ni droit de nuitée supplémentaire confirmé.** Les documents déjà consultés, y compris un PDF Les Mouettes millésimé 2024, ne sont pas transformés en grille 2026.
- **165 fiches au total, 150 après filtre nocturne, 11 tarifs strictement non confirmés** ; les changements du lot 28 sont internes au suivi administratif et n'altèrent pas les données du site.

## Lot complémentaire 29 — 20 octobre 2026

**Beslé-sur-Vilaine : correction documentaire vérifiée auprès de la municipalité.**

- Camping municipal du Port : **32 emplacements nus** accueillant tentes, caravanes et camping-cars sur **40 emplacements au total**. Les 40 ne sont pas exclusivement des emplacements camping-car. Coordonnées officielles ajoutées : `02 40 87 73 72`, `campingduportdebesle@orange.fr`.
- Les pages municipales divergent sur la saison : avril–septembre sur la présentation du camping, avril–octobre dans l'annuaire de contacts. Les deux indications sont présentées, sans affirmer une ouverture le 20 octobre.
- Aire de pique-nique à **92 m environ** entre les coordonnées GPS de la base régionale : point conservé séparément avec `overnightStatus=not_established`. La proximité n'autorise pas à attribuer à ce parking les possibilités de nuitée du camping.
- L'interface affiche une solution de camping voisin sur la fiche pique-nique avec un lien vers la mairie. Prix de nuitée 2026 toujours à confirmer (ancienne indication touristique 9 € non réutilisée comme grille certifiée).
- Audit automatique ajouté. Compteurs attendus conservés : 165 sans filtre, 150 avec filtre nocturne, 11 tarifs strictement non confirmés.

Sources :
- https://www.mairie-guemene-penfao.fr/camping-municipal/
- https://www.mairie-guemene-penfao.fr/contacts/camping-municipal/
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-11/
- https://tourisme-pays-redon.com/hebergement/aire-camping-car-camping-de-besle/

## Lot complémentaire 30 — 20 octobre 2026

**Sécurité GPS : un repositionnement fondé sur une fiche e-SPRIT géolocalisée en 2026, une seconde coordonnée recoupée et aucune fusion abusive.**

- **Aire de pique-nique de Plessé (place de l'Église)** : la fiche touristique e-SPRIT, reprise sur Cirkwi et mise à jour le **15 juin 2026**, publie `47.54056, -1.88645`. L'ancienne position régionale `47.55694, -1.83597` était éloignée d'environ **4204 m**. Le nouveau GPS de l'espace de pique-nique est repris avec champs `gpsPreviousRegional`, `gpsSourceType`, `gpsEvidenceNote` et `gpsVerificationDate` ; la provenance historique reste conservée. La nuitée reste **non établie**.
- **OSM parking camping-car de Plessé** (`node/11786823109`) : à **203 m** environ du nouveau repère de l'aire de pique-nique. La proximité n'établit ni un doublon exact ni un droit nocturne ; les deux fiches restent visibles et séparées, sans suppression ni addition de capacités.
- **Aire de pique-nique d'Avessac (rue de Sainte-Marie)** : point régional `47.657, -1.98766` confirmé à l'identique par une fiche e-SPRIT du **18 mai 2026**. Le lien de preuve indépendant est ajouté ; la fiche demeure sans nuitée camping-car attestée.
- **Audit automatique** : assertions ajoutées sur coordonnées, coordonnées historiques, référence OSM voisine et maintien de la prudence nocturne. Les totaux attendus restent **165 fiches générales**, **150 avec filtre nocturne** et **11 prix de nuitée strictement non confirmés**.

Sources :
- https://www.cirkwi.com/fr/point-interet/3849222-aire-de-pique-nique (Plessé, coordonnées publiées, 15 juin 2026)
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-27/ (Plessé, place de l'Église)
- https://www.openstreetmap.org/node/11786823109 (repère de parking camping-car distinct)
- https://www.cirkwi.com/fr/point-interet/3849213-aire-de-pique-nique (Avessac, 18 mai 2026)

## Lot complémentaire 31 — 20 octobre 2026

**Contrôle groupé des aires de pique-nique sans modifier les positions ou les droits nocturnes sans preuve.**

- **Saint-Nicolas-de-Redon** (`ACCAMPDL044V51HCGD`) : la fiche e-SPRIT/Cirkwi `3849227` confirme **47.6321, -2.0523**, **rue des Chênes**. Ce point de pique-nique est distinct du stationnement camping-car de **La Digue** ; nuitée toujours non établie.
- **Fégréac, Le Bellion** (`ACCAMPDL044V51HCG2`) : Loire-Atlantique Tourisme identifie expressément une aire de pique-nique au **Bellion**. Le repère GPS régional reste indicatif ; le droit de passer la nuit et les services de camping-car ne sont pas confirmés. Ne pas confondre avec la borne de vidange du Mottais.
- **Pierric, La Chapulais** (`ACCAMPDL044V51HCG7`) : deux **autres** aires de pique-nique e-SPRIT, dont une **rue de Derval**, apparaissent aux coordonnées `47.68707,-1.73423` et `47.68026,-1.73405` (environ **7,7 et 8 km** du GPS régional de La Chapulais). Il s'agit de sites potentiellement distincts, pas d'un motif suffisant de remplacer le GPS La Chapulais ou d'ajouter deux nouvelles « aires de nuitée ».
- **Conquereuil** (`ACCAMPDL044V51HCG0`) : les coordonnées actuelles `47.6247929,-1.750375` apparaissent aussi comme position d'un repère administratif général de la commune. La fiche e-SPRIT d'une activité **rue des Potinières** se situe à environ **480 m**, mais ne désigne pas nécessairement le lieu de pique-nique recherché. Le GPS est marqué **localisation à confirmer**, sans correction arbitraire ni interdiction/nocturne inventée.
- Champs de preuve GPS ajoutés et audit automatique étendu pour conserver les **quatre fiches**, les coordonnées régionales, les prix de nuitée « sans objet » et `overnightStatus=not_established`.
- **Totaux attendus inchangés : 165 fiches, 150 après filtre nocturne, 11 tarifs strictement Non confirmé.**

Sources :
- https://www.cirkwi.com/fr/point-interet/3849227-aire-de-pique-nique
- https://rando.loire-atlantique.fr/service/187459-Aire-de-pique-nique
- https://tourisme-pays-redon.com/hebergement/aire-de-pique-nique-24/
- https://www.cirkwi.com/fr/point-interet/3849220-aire-de-pique-nique
- https://www.cirkwi.com/fr/point-interet/3849219-aire-de-pique-nique
- https://www.cirkwi.com/fr/point-interet/1369604-akwa-nature-canoe-kayak
- https://demarchesadministratives.fr/bureau-de-vote/conquereuil-44290 (indice secondaire ancien, non preuve d'un GPS de pique-nique)

## Lot complémentaire 32 — 20 octobre 2026

**Deux précisions de localisation avec sources distinctes ; zéro modification de GPS ou de droit de nuitée.**

- **Guémené-Penfao, Prairies de la Vilaine :** les portails touristiques du Département et de la Région recensent une aire de pique-nique à cet endroit. Une fiche plus ancienne d'Itinérail (8 mars 2022, « Halte de Langon », 1 Le Port de Beslé) indique des tables, dont une couverte, au point `47.7015887,-1.8661737`, à **37 m** environ du repère régional `47.7012569,-1.8661508`. Ce voisinage est un indice, **pas une preuve d'identité** ; pas de fusion, de déplacement, de tarif de nuitée ou de nouveau service affirmé. Le camping municipal du Port reste une fiche distincte.
- **Conquereuil, Étang de Coisma :** le répertoire départemental référence expressément une aire de pique-nique à cet étang. Cette information s'ajoute aux sites des Potinières ; aucune source ne relie avec certitude le GPS régional générique `47.6247929,-1.750375` à l'un ou l'autre. La localisation reste **à confirmer**, et aucune nuitée camping-car n'est démontrée.
- Audit automatique renforcé : vérification des sources et conservation des positions/réserves pour les deux fiches.
- **Aucun compteur modifié : 165 fiches générales, 150 après filtre nocturne, 11 tarifs strictement non confirmés.**

Sources :
- https://rando.loire-atlantique.fr/service/187461-Aire-de-pique-nique
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-pique-nique-13
- https://www.cirkwi.com/fr/point-interet/1708463-aire-de-pique-nique (itinéraire ancien et provenance secondaire)
- https://rando.loire-atlantique.fr/service/187457-Aire-de-pique-nique

## Lot complémentaire 33 — 20 octobre 2026

**Amélioration du filtre de préparation de nuitée : sept points déjà connus n'avaient aucune preuve claire d'autorisation nocturne mais demeuraient visibles avec le filtre activé.** L'absence de preuve n'établit pas une interdiction ; seuls les champs `overnightStatus=not_established` sont utilisés, pas `prohibited`.

- **Borne du Mottais, Fégréac** : le tourisme départemental confirme une station de vidange ouverte toute l'année, sans aire de nuitée documentée. Ne pas assimiler le parking signalé ailleurs à ce point technique.
- **Station Leclerc, Clisson** : eau/vidange à la station, distincte du camping du Moulin, sans séjour nocturne documenté à la borne.
- **Étangs de Soudan** : parking d'activités de loisirs, sans autorisation de nuitée publiée.
- **Plan d'eau du Clos, Trans-sur-Erdre** : pêche, pique-nique et promenade ; services de camping-car/nuitée non attestés. Courriel municipal documenté ajouté pour une vérification directe.
- **Le Pin, place de l'Église** : la source officielle régionale indique eau, vidange et stationnement de **courte durée**, avec accès aux services 24 h/24 ; cela ne vaut pas autorisation de dormir. La source officielle est désormais liée directement à la fiche.
- **Le Gâvre, parking de l'étang** et **La Chevallerais, rue du Pont** : deux parkings répertoriés pour camping-cars mais sans durée nocturne explicitée dans les fiches de tourisme ; ils demeurent consultables sans filtre et ne sont pas présentés comme interdits la nuit.
- Coordonnées GPS, prix existants et classification du lieu préservés ; avertissement explicite et lien vers la source insérés dans chaque dossier.
- L'audit vérifie les sept identifiants, les sources et la distinction entre **nuitée non établie** et **nuitée interdite**.

**Compteurs de préparation attendus : 165 fiches générales, 143 avec filtre nocturne (contre 150), et toujours 11 tarifs strictement `Non confirmé`.** Il reste cinq lieux explicitement interdits la nuit ; 17 fiches sont marquées nuitée non établie, dont sept aires de pique-nique.

Sources :
- https://rando.loire-atlantique.fr/service/6912-Aire-de-service-a-Fegreac
- https://rando.loire-atlantique.fr/service/186421-AIRE-DE-SERVICE-CAMPING-CAR-STATION-LECLERC
- https://rando.loire-atlantique.fr/service/190195-ETANGS-DE-SOUDAN
- https://rando.loire-atlantique.fr/service/183732-Plan-d-eau-du-Clos
- https://www.enpaysdelaloire.com/hebergements/aires-de-camping-car/aire-de-service-a-cote-de-l-eglise
- https://rando.loire-atlantique.fr/service/180264-AIRE-DE-STATIONNEMENT
- https://rando.loire-atlantique.fr/service/180262-AIRE-DE-STATIONNEMENT

## Lot complémentaire 34 — 20 octobre 2026

**Deux enrichissements tarifaires/pratiques distincts ; aucun tarif opérateur 2026 n'est fabriqué.**

- **Yelloh! Village Le Ranch à La Plaine-sur-Mer** (`ACCAMACCAMPDL044000049`) : CampingFrance publie dans la version anglophone de la fiche exacte, rubrique **2026 rates**, un forfait emplacement de tourisme de **74 €/nuit**, **deux adultes et électricité compris**. Il ne précise pas les dates/saisons exactes du tarif. Ce montant diffère d'une mention communautaire antérieure d'environ **29 €/nuit non millésimée** : aucun rapprochement arbitraire. Le prix de base de la fiche publique reste **`Non confirmé`** tant que l'exploitant n'a pas confirmé la période, le type de parcelle et les suppléments. L'interface affiche ce prix **uniquement dans un encadré textuel secondaire « repère indicatif 2026 (non confirmé par le camping) » avec lien direct vers CampingFrance**, distinct du tarif principal.
- **Camping Les Chênes Verts (Villeneuve-en-Retz)** (`ACCAMACCAMPDL044V50G1TE`) : la FAQ de l'exploitant confirme l'accès à l'emplacement **à partir de 14 h** et sa libération **à 12 h**, plus la fermeture de la saison 2026 le **13 septembre**. Ces horaires et leur source sont affichés dans le champ d'accueil, sans déduire le tarif variable de la nuitée ni les conditions de vidange pour non-résidents.
- Le tableau de contacts conserve les deux demandes prêtes à envoyer sans déclarer un envoi. Un complément y liste la divergence **74 €/nuit (référence CampingFrance 2026)** et **29 €/nuit (estimation communautaire non datée)** à éclaircir par Le Ranch.
- Audit automatique : vérification de la source, de l'année, de la distinction entre tarif indicatif et prix confirmé, et des horaires officiels. **Compteurs : 165 fiches générales, 143 avec filtre nocturne, 11 tarifs strictement non confirmés.**

Sources :
- https://www.campingfrance.com/uk/find-your-campsite/pays-de-la-loire/loire-atlantique/la-plaine-sur-mer/le-ranch3
- https://www.camping-le-ranch.com/fr/emplacements/78629
- https://www.leschenesverts.info/location-emplacements-villeneuve-en-retz/
- https://www.leschenesverts.info/hebergement/emplacement/

## Lot complémentaire 35 — 20 octobre 2026

**Deux campings municipaux ajoutés au Pouliguen et un prix de borne rectifié par arrêté officiel 2026.**

- **Le Cléin**, 22 avenue de Kerdun, 44510 Le Pouliguen. 109 emplacements nus pouvant accueillir les camping-cars (pas 109 places exclusivement camping-car). Ouvert du **28 mars au 9 novembre 2026**. Contact 02 40 42 43 99, leclein@mairie-lepouliguen.fr. GPS e-SPRIT **47.27121, -2.43039**.
- **Les Mouettes au Pouliguen**, 45 boulevard de l'Atlantique, 44510 Le Pouliguen. 200 emplacements nus, ouverts du **28 mars au 3 novembre 2026**. Contact 02 40 42 43 98, lesmouettes@mairie-lepouliguen.fr. GPS e-SPRIT **47.26382, -2.44905**. Ne pas confondre avec le camping Les Mouettes de Saint-Père-en-Retz dont le tarif 2026 reste non confirmé.
- Pour chacun : forfait municipal **2026 camping-car + 2 personnes + véhicule + électricité 6 A** à **18,95 €** en basse saison (28/03–03/05, 28/09 jusqu'à fermeture), **20,70 €** en saison (04/05–28/06, 31/08–27/09) et **27,30 €** en haute saison (29/06–30/08), plus **0,22 €/adulte/nuit** de taxe de séjour. Le Cléin : électricité 10 A en supplément **0,95 €** selon arrêté.
- **Aire de l'avenue de l'Océan, Le Pouliguen**, déjà recensée avec **26 places** : borne d'eau indépendante au 20–22 boulevard de l'Atlantique rectifiée de **4,20 €** à **4,40 € / 100 litres d'eau**, d'après décision municipale. Les forfaits 13,60/15,10/17,40 € de l'aire d'étape sont inchangés.
- Les trois points sont distincts et ne sont pas des doublons. Dates et frais fixés dans la décision municipale du 12 décembre 2025 pour l'exercice 2026 et brochure officielle de mars 2026.
- Audits enrichis. **167 lieux attendus sans filtre ; 145 après filtre nocturne (22 masqués) ; 11 tarifs strictement Non confirmé inchangés.**

Sources :
- https://campings.lepouliguen.fr/les-campings/le-clein/
- https://campings.lepouliguen.fr/les-campings/les-mouettes/
- https://campings.lepouliguen.fr/wp-content/uploads/2026/03/2025_50_SG-Tarifs-campings-aire-de-campings-car.pdf
- https://campings.lepouliguen.fr/wp-content/uploads/2026/03/Depliant_france-2026.pdf
- https://www.cirkwi.com/fr/point-interet/453069-camping-municipal-le-clein
- https://www.cirkwi.com/fr/point-interet/453156-camping-municipal-les-mouettes

## Lot complémentaire 36 — 20 octobre 2026

**Contrôle administratif d'un camping à prix non confirmé, recoupement e-SPRIT d'une halte sans droit de nuitée établi ; zéro nouveau tarif prétendu certain.**

- **Camping Les Mouettes à Saint-Père-en-Retz** (identifiant `ACCAMACCAMPDL044000155`) : l'**Annuaire des entreprises** mis à jour en octobre 2026 classe comme **en activité** la société/établissement LE CAMPING LES MOUETTES, SIRET `84393721000014`, à La Tansorais. La grille tarifaire officielle diffusée **au 1er janvier 2024** et les CGV sans millésime portent un **autre SIRET `38369180500022`**, attribué à une documentation historique. Cette divergence est enregistrée comme point de vigilance documentaire ; **ne prouve ni un changement de gérant ni un prix 2026**.
- Les **CGV du site** annoncent, pour les emplacements de camping, arrivée **à partir de 14 h** et départ **avant 11 h** ; elles restreignent l'accès des **visiteurs** de **22 h à 9 h**. Ces conditions non millésimées ne permettent pas de conclure que l'indication distincte « camping-cars 22 h 30–8 h » vaut interdiction de dormir. Les horaires exacts d'entrée/sortie en 2026 restent à confirmer. Le champ tarif principal reste **`Non confirmé`** (pages à 15 / 19,50 € contradictoires, PDF 2024).
- **Saint-Molf, Pont de Clin** (identifiant `ACCAMEAIREDESTMOLF`) : fiche **e-SPRIT mise à jour le 9 mars 2026** confirmant les coordonnées `47.3834,-2.4303`, les tables/poubelles et l'acceptation des animaux. Les pages municipales de réglementation examinées ne renseignent pas directement le droit de nuitée au Pont de Clin ; **`overnightStatus=not_established` et `price=Non confirmé` inchangés**.
- Audit GitHub renforcé sur les SIRET distincts, les références 2026, les CGV historiques, le GPS et le statut prudent de Saint-Molf ; correction mineure du libellé de compteur dans l'audit.
- **Bilan attendu inchangé : 167 fiches visibles, 145 avec filtre nocturne, 11 tarifs strictement `Non confirmé`.**

Sources :
- https://annuaire-entreprises.data.gouv.fr/etablissement/84393721000014
- https://www.les-mouettes-camping.com/uploads/mouettes/pdf/CAMPING%20LES%20MOUETTES%20-%20tarifs.pdf
- https://www.les-mouettes-camping.com/conditions-generales-de-vente
- https://www.cirkwi.com/fr/point-interet/1157462-aire-de-camping-cars-de-saint-molf
- https://www.mairie-saint-molf.fr/pratique/police-municipale/reglementations/

## Lot complémentaire 37 — 20 octobre 2026

**Deux campings manquants ajoutés au 44 et une information contradictoire d'ouverture rendue visible.**

- **Camping de La Prée**, 2 chemin de la Prée, Préfailles, sourceId `HPAPDL044V507V64`, GPS `47.14379,-2.22827`. Le site annonce **47 emplacements au total** et sa page tarifaire **22 emplacements de camping ombragés** pour tentes, caravanes et camping-cars. Saison 2026 : **27/03–11/10**. Grille 2026 pour deux personnes et un véhicule : **16/20/25/32/20/16 €** selon six périodes ; électricité 10 A facultative **4,90 €**, **deux nuits minimum**, entrée **14 h 30**, sortie **11 h**. Contact **02 40 21 02 64**, `contact@camping-prefailles.fr`. La vidange ouverte aux véhicules extérieurs n'est pas démontrée.
- **Camping Éléovic**, 107 route de la Pointe Saint-Gildas, Préfailles, sourceId `HPAPDL044000113`, GPS `47.1324,-2.23195`. Camping 4 étoiles ouvert en 2026 du **03/04 au 27/09**. L'exploitant indique **27 emplacements vue mer et 20 standards**, accessibles aux caravanes/tentes/camping-cars, électricité 10 A comprise. Tarif tourisme **27 à 115 €/nuit** pour un emplacement deux personnes avec voiture selon période/catégorie, **taxe de séjour 0,66 €/adulte/nuit**. Contact **02 40 21 61 60**, `contact@camping-eleovic.com`. Les chiffres ne constituent pas des places réservées exclusivement aux camping-cars.
- **CAMPING-CAR PARK Préfailles Biochon** : en octobre 2026, la fiche individuelle de l'exploitant affiche **ouverte**, tandis que le circuit officiel « Loire-Atlantique : de l'estuaire à l'océan » signale **temporairement fermée, 0/0 place**. Information **contradictoire** explicitée dans une alerte opérationnelle, sans supprimer l'aire, affirmer sa fermeture définitive ou modifier son tarif.
- Les deux campings de Préfailles sont distincts des 4 autres structures déjà enregistrées dans la commune ; comparaison des coordonnées et adresses. Ouverture de saison terminée au 20 octobre 2026 pour les deux nouveaux campings.
- Audit : comptes et assertions de présence, prix 2026, contacts, capacités non exclusives et avertissement Biochon.
- **Totaux attendus : 169 fiches générales, 147 avec filtre nocturne (22 masquées), 11 tarifs strictement Non confirmé.**

Sources :
- https://camping-prefailles.fr/index.php/fr/
- https://www.camping-prefailles.fr/index.php/fr/hebergements/emplacements
- https://www.cirkwi.com/fr/point-interet/587972-camping-de-la-pree
- https://www.camping-eleovic.com/
- https://www.camping-eleovic.com/emplacements-camping-4-etoiles-prefailles/
- https://www.pornic.com/camping-eleovic.html
- https://www.campingcarpark.com/fr_FR/circuits/loire-atlantique-%3A-de-l%27estuaire-a-l%27ocean
- https://www.campingcarpark.com/fr_FR/camping-car/pays-de-la-loire/loire-atlantique/prefailles-biochon

## Lot complémentaire 38 — 20 octobre 2026

**Correction du filtre de préparation de nuitée : six fiches de bornes ou de parkings commerciaux figuraient encore parmi les lieux non écartés, malgré l'absence de séjour autorisé documenté.**

- **Pornic, Val Saint-Martin** (`ACCAMACCAMEBORNEVALSTMARTIN`) : la fiche CAMPING-CAR PARK est explicitement classée **aire de services**, avec prix de **2 € / service**. Les conditions du réseau pour les aires de services sont explicites : **pas de séjour sur ce type d'aire**. Statut `overnightStatus=prohibited` avec justification de l'absence de droit de séjour **sur la borne technique**, sans qualifier d'interdit l'ensemble du parking du complexe sportif. Le titre « 24 h » d'une grille technique ne prouve pas une nuitée.
- **Super U, Saint-Étienne-de-Montluc** (`ACCAMPDL044V5002C9`), **Hyper U La Colleraye, Savenay** (`ACCAMPDL044V500B9O`), **borne des étangs de la Madeleine, Fay-de-Bretagne** (`ACCAMPDL044V5001HL`), **borne du chemin de la Plage, Saint-Philbert-de-Grand-Lieu** (`ACCAMPDL044V5006FB`), et **Super U Chaumes-en-Retz** (`ACCAMPDL044V5003VR`) : statut `overnightStatus=not_established`. Ces sites servent à l'eau/vidange ou au stationnement commercial sans **autorisation de nuitée démontrée** par les sources consultées ; cela **ne constitue pas une interdiction**.
- Sources de vérification enregistrées individuellement dans les six fiches. Prix, GPS, types de lieux, communes et services existants **inchangés**. Les six sites restent consultables lorsque le filtre nocturne est désactivé.
- Audit renforcé pour vérifier 1 aire de services sans séjour + 5 nuitées non établies, leurs sources et la distinction avec une interdiction générale de stationnement.
- **Compteurs attendus : 169 lieux sans filtre, 141 avec filtre nocturne (28 masqués : 22 sans droit nocturne établi, 6 où le séjour n'est pas permis), 11 tarifs strictement `Non confirmé`.** Le filtre de prudence n'est pas une certification automatique de toutes les autres nuitées.

Sources :
- https://www.campingcarpark.com/fr_FR/camping-car/pays-de-la-loire/loire-atlantique/pornic-flot-bleu?areaType=serviceplatze-wohnmobilstellplatz
- https://www.campingcarpark.com/fr_FR/camping-car/pays-de-la-loire/loire-atlantique/as-st-viaud?areaType=aire-services-camping-car (politique réseau d'aires de services)
- https://rando.loire-atlantique.fr/service/180236-AIRE-DE-SERVICE-CAMPING-CAR-SUPER-U-SAINT-ETIENNE-DE-MONTLUC
- https://rando.loire-atlantique.fr/service/180255-AIRE-DE-SERVICE-HYPER-U-LA-COLLERAYE
- https://www.i-campingcar.fr/aires.php?ville=FAY+DE+BRETAGNE
- https://www.grandlieu-tourisme.fr/ou-manger-ou-dormir/aires-de-camping-car
- https://rando.loire-atlantique.fr/service/5965-Aire-de-service-et-stationnement-de-Chaumes-en-Retz

## Lot complémentaire 39 — 20 octobre 2026

**Trois campings acceptant les camping-cars ont été identifiés absents de la base du 44 puis ajoutés après comparaison des noms, adresses et distances GPS. Aucun des onze tarifs non confirmés précédents n'a été remplacé artificiellement.**

- **Camping La Boutinardière (Pornic)** — `CCF44-PORNIC-BOUTINARDIERE-2026` : 23 rue de la Plage de la Boutinardière, GPS `47.09791,-2.05177`. Source Destination Pornic : 10 emplacements camping-car, étape spécifique 15,50 €/nuit en 2026, emplacement classique 25,50 à 61 € et taxe de séjour de 0,66 €/adulte/nuit ; saison 03/04–28/09. Les forfaits ne doivent pas être mélangés ; séjour actuellement hors saison.
- **Camping Domaine du Collet (Les Moutiers-en-Retz)** — `CCF44-MOUTIERS-DOMAINE-DU-COLLET-2026` : Route Verte, GPS exploitant `47.035149,-1.983359` ; accueil camping-car confirmé sur emplacements de camping, saison 01/04–31/10. Le site de l'exploitant annonce 25 €/nuit en basse saison et 40 € en haute saison sur la formule de base à deux personnes, tandis que la fiche régionale indique 28–40 €. Cette différence est signalée dans la fiche. 81 parcelles de camping traditionnel sur le site et 15 emplacements camping-car dans l'annuaire régional : chiffres non cumulables comme places dédiées.
- **Camping du Vieux Château (Tharon-Plage, Saint-Michel-Chef-Chef)** — `CCF44-THARON-VIEUX-CHATEAU-2026` : 54 avenue d'Anjou, GPS `47.15979,-2.16289` ; Destination Pornic annonce 20–36 €/nuit pour deux personnes et un véhicule en 2026, du 03/04 au 04/10, taxe 0,66 €/adulte/nuit. Proche mais distinct du camping Le Soleya (~400 m). **Attention aux campings homonymes en Gironde : les grilles publiées sur `vieuxchateau.fr` ne concernent pas le 44.**
- Leurs coordonnées, périodes d'ouverture, téléphones, preuves de tarif et sources sont enregistrés dans chaque fiche. Les trois campings sont des lieux de séjour privés (ils ne sont pas assimilés à des parkings gratuits ni à des bornes publiques).
- Audit départemental étendu : contrôle des trois identifiants, millésimes 2026, contacts, sources et nouvelle volumétrie.
- **Compteurs attendus : 172 fiches générales, 144 avec filtre de prudence nocturne (28 masquées), 11 tarifs strictement `Non confirmé`.**

Sources :
- https://www.pornic.com/camping-la-boutinardiere.html
- https://www.domaine-du-collet.com/
- https://www.domaine-du-collet.com/camping-loire-atlantique-moutiers-en-retz
- https://www.domaine-du-collet.com/camping-bord-de-mer-pornic/
- https://www.enpaysdelaloire.com/hebergements/campings/camping-le-domaine-du-collet
- https://www.pornic.com/camping-du-vieux-chateau.html
- https://www.enpaysdelaloire.com/hebergements/campings/camping-du-vieux-chateau

## Lot complémentaire 40 — 20 octobre 2026

**Quatre campings distincts avec emplacements camping-car et grilles 2026 vérifiés dans les fiches de Destination Pornic et intégrés au 44.**

- **Cybèle Vacances Les Brillas, Les Moutiers-en-Retz** — `CCF44-LESBRILLAS-2026`, Le Bois des Tréans, GPS `47.07491,-2.00709`. 10 emplacements camping-car et une aire de services annoncés (sans assimiler les 189 places classées à des camping-cars). Saison 04/04–20/09/2026 ; forfait 2 personnes et 1 voiture **19–29 €/nuit**, taxe de séjour **0,66 €/adulte/nuit**. Terrain distinct de l'aire ANAS voisine à près de 390 m.
- **Camping de Prigny, Les Moutiers-en-Retz** — `CCF44-PRIGNY-2026`, 1 route de Moraudeau, GPS `47.06374,-1.98410`. Séjour camping-car et aire de services attestés ; barème **17–33 €/nuit** pour 2 personnes et 1 voiture, taxe de séjour **0,66 €/adulte/nuit**. Période d'ouverture 04/04–04/10/2026, grille tarifaire publiée seulement jusqu'au 30/09/2026 (écart explicité).
- **Camping du Golf, Pornic** — `CCF44-PORNIC-GOLF-2026`, 40 rue de la Renaissance, GPS `47.11883,-2.12987`. Étape camping-car explicitement référencée, **17–39 €/nuit** du 24/04 au 13/09/2026 ; électricité 6 A **5 €/nuit** en supplément, taxe **0,66 €/adulte/nuit**.
- **Camping Le Port Meleu, Préfailles** — `CCF44-PREFAILLES-PORT-MELEU-2026`, Corniche de Port-Meleu, GPS `47.12547,-2.20339`. Camping accueillant les camping-cars sur ses emplacements, **20–47 €/nuit** pour 2 personnes et 1 voiture du 03/04 au 27/09/2026, taxe **0,66 €/adulte/nuit**. Les 90 emplacements classés ne sont pas des places camping-car réservées exclusivement.
- Les quatre fiches sont distinctes de la base régionale précédente (identifiants, coordonnées, adresses et exploitants recoupés). Les quatre établissements ont des saisons clôturées au 20 octobre 2026 ; aucun n'est présenté comme une aire publique gratuite ou une borne accessible à tous. Les tarifs 2026 ne remplacent aucun des onze prix auparavant non confirmés.
- **Compteurs attendus : 176 sans filtre, 148 avec filtre de prudence nocturne (28 écartés), 11 tarifs strictement `Non confirmé`.** Contrôle automatique enrichi des quatre identifiants, tarifs et contacts.

Sources :
- https://www.pornic.com/camping-cybele-vacances-les-brillas.html
- https://www.pornic.com/camping-de-prigny.html
- https://www.pornic.com/camping-du-golf.html
- https://www.pornic.com/camping-le-port-meleu.html
