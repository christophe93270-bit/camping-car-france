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
