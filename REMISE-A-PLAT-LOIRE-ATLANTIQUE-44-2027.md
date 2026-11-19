# Remise à plat — Loire-Atlantique (44), audit tarifs 2027

État établi le 19 novembre 2026 en contrôlant le site publié, le dépôt GitHub et le registre d'audit. Aucun fichier de données du site n'est modifié ici.

## Compteur réel du site

Le site publié affiche actuellement **216 lieux** dans le 44. Avec le filtre « masquer les lieux à nuitée interdite ou non établie », il en reste **188**. Les précédents nombres de référence, 215 / 187, sont désormais dépassés d'une fiche chacun.

| Type affiché sur le site | Sans filtre nocturne | Avec filtre nocturne |
|---|---:|---:|
| Aires et aires d'étape | 67 | 62 |
| Campings et emplacements | 80 | 80 |
| Parkings et stationnement | 39 | 34 |
| Bornes / points de services | 10 | 0 |
| Accueils à la ferme / chez un hôte | 8 | 8 |
| Aires de pique-nique | 7 | 0 |
| Autres lieux | 5 | 4 |
| **Total** | **216** | **188** |

Il y a donc **147 lieux classés aires ou campings** (67 + 80). Les 69 autres fiches sont des parkings, bornes, accueils, pique-niques ou autres lieux. Le filtre nocturne retire 28 fiches : le site indique 22 lieux où la nuitée n'est pas établie et 6 sans nuitée autorisée.

## Suivi d'audit et lots

| Élément | Nombre | Interprétation |
|---|---:|---|
| Fiches affichées sur le site | 216 | Compteur lu sur le site publié le 19/11/2026. |
| Fiches avec filtre nocturne | 188 | Compteur lu sur le site publié le 19/11/2026. |
| Lignes du registre d'audit | 219 | Registre de contrôle, distinct du répertoire affiché. |
| Identifiants source distincts dans le registre | 217 | Aucun `sourceId` répété ; deux lignes n'ont pas d'identifiant source stable. |
| Rapports de lots dans le dépôt | 252 | Lots numérotés de 90 à 341 inclus. Les numéros de lot ne comptent pas les lieux. |

L'écart actuel entre le registre et le site est de **3 lignes** (219 contre 216). Les deux lignes sans identifiant sont « CAMPING-CAR PARK Blain – La Petite Arche » et « CAMPING-CAR PARK Pornic – Bienvenue au siège ». Il reste à rapprocher le registre des 216 lieux effectivement rendus par le site pour identifier les trois lignes non alignées ; le simple décompte ne permet pas de dire lesquelles sont absentes, doublonnées ou hors périmètre.

Le fichier complémentaire `aires-loire-atlantique.json` contient 35 objets, dont 18 avec un champ explicite `duplicateOfSourceId`. Il est fusionné avec les données régionales et soumis à des règles de dédoublonnage ; il ne faut donc pas additionner les volumes bruts des fichiers.

Le registre stocke le dernier `recheckLot`, pas l'historique complet des passages. On ne peut pas reconstruire exactement combien de fois chaque fiche a été contrôlée. Les 252 rapports montrent que la numérotation des lots a continué bien au-delà d'un passage unique des 216 lieux.

## Suite à donner

**Suspendre l'enchaînement automatique des lots.** Reprendre après rapprochement des 219 lignes de suivi avec les 216 fiches visibles, en conservant la répartition exacte par type ci-dessus. La prochaine série devra sélectionner seulement les fiches jamais contrôlées dans un inventaire unique, et non repartir d'un numéro de lot antérieur.

## Sources de suivi

- [Registre d'audit](SUIVI-AUDIT-44-2027.json)
- [Préparation de la saison 2027](PREPARATION-LOIRE-ATLANTIQUE-44-2027.md) — son ancien compteur 215 / 187 est remplacé par le comptage du site publié ci-dessus.
- [Site publié — filtre Loire-Atlantique](https://christophe93270-bit.github.io/camping-car-france/?dep=44)
