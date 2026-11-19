# Remise à plat — Loire-Atlantique (44), audit tarifs 2027

État établi le 19 novembre 2026 à partir du compteur précédemment confirmé sur le site, du dépôt GitHub et du registre d'audit. Aucun fichier de données du site n'est modifié ici.

## Compteurs comparés

| Élément | Nombre | Ce que ce nombre signifie |
|---|---:|---|
| Fiches affichées sur le site | 215 | Dernier total confirmé par le propriétaire du site et repris dans le document de préparation 2027. |
| Fiches avec filtre nocturne | 187 | Dernier total confirmé ; 28 autres ne passent pas ce filtre. |
| Lignes du registre d'audit | 219 | Fiches/cas suivis pour la vérification tarifaire ; ce n'est pas un compteur du site. |
| Identifiants source distincts dans le registre | 217 | Aucun identifiant source répété dans le registre actuel. Deux lignes n'ont pas de `sourceId`. |
| Rapports de lots présents dans le dépôt | 252 | Rapports numérotés des lots 90 à 341 inclus. Le numéro de lot n'est pas un nombre de lieux. |

## Écart à résoudre

Le registre contient 4 lignes de plus que le compteur confirmé du site (219 contre 215). Les deux lignes sans identifiant stable sont « CAMPING-CAR PARK Blain – La Petite Arche » et « CAMPING-CAR PARK Pornic – Bienvenue au siège ». Cela ne suffit pas à expliquer l'écart : les 217 autres fiches doivent être rapprochées du jeu de données réellement affiché, et non supposées toutes visibles.

Le fichier complémentaire `aires-loire-atlantique.json` contient 35 objets, dont 18 avec un champ explicite `duplicateOfSourceId`. Il est fusionné par l'application avec les données régionales et soumis à des règles de dédoublonnage ; il ne faut donc pas additionner les volumes bruts des fichiers.

## Conclusion opérationnelle

Les lots numérotés 90 à 341 ont produit 252 rapports pour un site comptant environ 215 fiches. Le suivi garde le dernier lot de contrôle, pas l'historique complet des passages ; il ne permet donc pas de calculer combien de fois chaque fiche a été revue. La numérotation a servi à réexaminer des fiches et a brouillé l'avancement réel.

**On suspend l'enchaînement automatique des lots.** Avant toute nouvelle série, il faut établir une liste unique rapprochée des fiches visibles, identifier les 4 cas d'écart, puis compter les catégories aire/camping/parking/borne à partir des données affichées. Le prochain passage devra partir des fiches effectivement jamais contrôlées dans cette liste, et non d'un lot antérieur.

## Source de suivi

- [Registre d'audit](SUIVI-AUDIT-44-2027.json)
- [Préparation de la saison 2027 et compteur 215 / 187](PREPARATION-LOIRE-ATLANTIQUE-44-2027.md)
