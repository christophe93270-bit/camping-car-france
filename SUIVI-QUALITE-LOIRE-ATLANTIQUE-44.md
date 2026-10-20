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
