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

## Rapprochement du registre

Le registre d'audit contient 219 lignes, dont 217 avec un `sourceId` distinct et deux sans identifiant stable. Les deux lignes sans identifiant — « CAMPING-CAR PARK Blain – La Petite Arche » et « CAMPING-CAR PARK Pornic – Bienvenue au siège » — apparaissent bien chacune comme une fiche sur le site.

Les **trois lignes de différence** sont des fiches liées à un lieu déjà affiché, sans fiche distincte dans le répertoire public :

| Ligne du registre | Lieu canonique affiché | Vérification dans le site |
|---|---|---|
| `ACCAMACCAMPDL044V507FD5` — Aire d'accueil camping-car de la Guichardière | Flower Camping La Guichardière | La recherche « Guichardière » ne renvoie qu'une fiche camping. |
| `ACCAMACCAMPDL044000128` — entrée « Clos Mer et Nature » | `ACCAMPDL044V5002ZN` — Camping Clos Mer et Nature | Une seule fiche apparaît; le registre référence déjà le lien canonique. |
| `way/909625355` — entrée OSM de la Sébilière | `ACCAMPDL044V519MNP` — Aire communale de la Sébilière | La recherche « Sébilière » ne renvoie qu'une fiche; le registre marque le lien comme doublon possible. |

Ainsi, **219 lignes de suivi − 3 entrées non distinctes = 216 fiches affichées**. Les lignes liées restent dans le registre pour conserver les preuves et le suivi, mais elles ne doivent pas être comptées comme des lieux supplémentaires. Aucun changement ni aucune suppression n'a été fait dans les données du site.

## Lots et suite

Le dépôt contient 252 rapports numérotés des lots 90 à 341. Le numéro de lot ne mesure pas le nombre de lieux, et le registre ne garde que le dernier `recheckLot`, pas l'historique complet des passages. La numérotation des lots a donc brouillé l'avancement réel.

Ne pas reprendre les lots comme une file de fiches nouvelles. La suite doit être une **file tarifaire unique** : partir des 216 lieux visibles, laisser de côté les trois lignes non distinctes, puis traiter une fois chaque tarif 2027 non confirmé ou partiel. Garder les vérifications par lots de dix uniquement comme organisation du travail, avec une trace explicite de la fiche déjà traitée dans cette file.

## Sources de suivi

- [Registre d'audit](SUIVI-AUDIT-44-2027.json)
- [Préparation de la saison 2027](PREPARATION-LOIRE-ATLANTIQUE-44-2027.md) — son ancien compteur 215 / 187 est remplacé par le comptage du site publié ci-dessus.
- [Site publié — filtre Loire-Atlantique](https://christophe93270-bit.github.io/camping-car-france/?dep=44)
