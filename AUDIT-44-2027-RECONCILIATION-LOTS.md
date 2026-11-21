# Rapprochement du suivi tarifaire Loire-Atlantique 2027 — 19 novembre 2026

## Résultat

Au 19 novembre, aucun lot 353 n’était ouvert. Le rapprochement du registre montre que les fiches prévues pour ce lot ont déjà été contrôlées : **les 216 lieux distincts ont tous un contrôle antérieur**, daté du 19 novembre et référencé dans les lots 309 à 341.

Le registre contient 219 lignes pour 216 lieux publiés. Les trois lignes liées à ne pas compter comme des lieux supplémentaires sont la zone technique de la Grotte Saint-Jean, l’alias de la Guichardière et l’alias de Clos Mer et Nature.

## Pourquoi le comptage précédent était faux

| État du registre | Lieux distincts |
|---|---:|
| Déjà marqués dans la seconde file tarifaire, lots 342 à 352 | 110 |
| Sans marqueur dans cette seconde file | 106 |
| Total | 216 |

Les 106 lignes sans marqueur de la seconde file ne sont pas des fiches jamais vues : elles ont toutes déjà un `recheckLot` et un constat enregistré. Les présenter comme « restant à examiner » confondait absence de marqueur de file et absence de contrôle. Les lots 342 à 352 constituent donc une seconde passe sur 110 lieux, et non 110 lieux nouvellement examinés.

## État des 106 lignes sans marqueur

Leur classement actuel dans le registre est le suivant. Ces nombres décrivent les statuts enregistrés; ils ne constituent pas de nouveaux contrôles.

| Statut actuel | Nombre |
|---|---:|
| Tarif 2027 non confirmé | 36 |
| Tarif 2027 partiellement confirmé | 26 |
| Information 2027 sans prix | 11 |
| Informations contradictoires | 5 |
| Nuitée ou tarif 2027 à confirmer | 3 |
| Nuitée / conditions à vérifier | 12 |
| Aire de pique-nique, services seuls ou stationnement avec statut déjà décrit | 13 |
| **Total** | **106** |

Les 78 fiches dans les quatre premières catégories ont déjà un constat de tarif ou d’absence de tarif daté du 19 novembre. Trois autres portent un statut combinant nuitée et tarif; elles doivent être classées à partir de leur constat existant avant toute recherche supplémentaire. Les autres fiches concernent principalement des services seuls, des parkings ou des lieux où l’accueil nocturne n’est pas établi; il ne faut pas leur inventer un tarif de nuitée.

## Suite retenue

- Ne pas créer un lot de dix fiches tant qu’il n’existe pas dix lieux dont le constat existant laisse une question tarifaire précise non résolue.
- Reprendre les constats et les champs « prochaine vérification » déjà présents dans le registre.
- Ne consulter une source à nouveau que si elle répond à une question précise encore ouverte ou si une évolution est signalée.
- Aucun lieu, tarif ni autre donnée publiée du site n’a été ajouté ou modifié dans ce rapprochement.


## Addendum — 21 novembre 2026 : classement des trois lignes ambiguës

Les trois lignes sans marqueur de la seconde file qui associaient « nuitée » et « tarif » ont été reclassées selon les constats déjà disponibles, sans refaire les contrôles des lieux :

- **Parking camping-car de Plessé, près de l’église (OSM)** : la commune ne confirme pas ce point comme aire camping-car; la Piardière est un autre lieu. Statut : **nuitée non établie**; ne pas traiter son prix comme celui d’une aire confirmée.
- **Barrière Saint-Pierre, Ancenis** : le parking avec eau et toilettes est décrit officiellement, mais sans tarif, durée maximale ni règle de nuitée. Statut : **nuitée non établie**; une confirmation municipale reste nécessaire.
- **La Sébilière, Mésanger** : la mairie confirme une aire réservée aux camping-cars et une borne eau/vidange, mais ne publie pas de règle de nuitée ni de tarif. Statut : **nuitée non établie**; distinguer séjour et services.

Aucun tarif 2027 n’a été confirmé par ce rapprochement. Aucune donnée du site n’a été modifiée et aucun contact externe n’a été envoyé.


## Addendum — 21 novembre 2026 : ouverture ciblée du lot 353

Après le rapprochement, dix entrées ont été retenues pour une passe groupée parce qu’elles conservent chacune une question tarifaire 2027 concrète : Les Brillas, Port Meleu, La Goëlette, Les Écureuils, Bel Essor, la Baie Dorée, le camping de la Morinière, l’aire municipale de La Chapelle-sur-Erdre, l’Hermitage des Dunes et le Domaine Mon Calme.

Le lot 353 documente les sources accessibles et les vérifications restantes. Les tarifs 2026, les grilles sans millésime et les prix de promotions ou de réservation ne sont pas reconduits en 2027. Aucun tarif de nuitée 2027 complet n’a été confirmé; aucune donnée tarifaire publiée du site n’a été modifiée et aucun contact n’a été envoyé.



## Addendum — 21 novembre 2026 : lot 354

La passe suivante porte sur dix campings pour lesquels aucun prix complet de nuitée camping-car 2027 n’est confirmé : Les Bleuets, l’Eden, le Bugeau, Slow Village Pornic, Capfun L’Ève, Les Chênes Verts, Mirabel La Renaudière, Sandaya Le Fief, La Dune de Jade et la Ferme de Pen-Bé.

Les grilles 2026, les tarifs résidentiels annuels, les promotions portant sur des locations et les catégories d’emplacements différentes restent exclus du prix de passage camping-car 2027. Pour les établissements fermés ou dont la réouverture reste incertaine, le prix et la disponibilité demeurent à confirmer. Le lot 354 est documenté dans AUDIT-44-2027-LOT354.md; aucune donnée tarifaire publiée du site n’a été modifiée et aucun contact n’a été envoyé.



## Addendum — 21 novembre 2026 : lot 355

Dix fiches physiques ont été contrôlées en groupe : Le Soleya, la borne Val Saint-Martin, l’aire du Bourg de Freigné, le Camping de la Baie, Les Chalands Fleuris, le Domaine de Léveno, La Riviera, La Roseraie, Les Flots Bleus et le Briord. Le Briord apparaît deux fois dans le registre; les deux lignes ont été reliées à un seul contrôle et ne comptent qu’une fois.

Le prix opérateur du Soleya est désormais confirmé pour 2027 : 12,22 €/24 h + taxe 1,32 €/24 h = 13,54 €/24 h. Le champ season2027 a été structuré dans aires-loire-atlantique.json; le produit 5 h reste séparé. Les neuf autres fiches gardent des questions de prix, de service ou de nuitée documentées dans AUDIT-44-2027-LOT355.md.


## Addendum — 21 novembre 2026 : lot 356

Dix fiches existantes ont été contrôlées ensemble : Le Mindin, Le Véridet, le Pont de Clin, l’ANAS aux Moutiers-en-Retz, l’aire du Port à La Haie-Fouassière, le parking de la Nouvelle Imprimerie, les services Hyper U La Colleraye, Choisel, le Musée du Vignoble Nantais et Port Mulon.

Aucun tarif complet de nuitée 2027 n’a été confirmé. Les montants disponibles concernent des grilles 2026, des services (jetons, eau, vidange), ou des prix parking sans confirmation officielle 2027; ils restent séparés. Les conditions de nuitée non publiées demeurent à vérifier. Détails et sources dans AUDIT-44-2027-LOT356.md. Aucun lieu ni tarif public n’a été ajouté ou modifié et aucun contact n’a été envoyé.

## Addendum — 21 novembre 2026 : lot 357

Dix fiches existantes ont été contrôlées ensemble : l’aire du Stade à Donges, l’allée du Brivet à Pontchâteau, Fédrun, le Domaine du Grand Poirier, le parking du centre des Pins à Saint-Brevin, CAMPING-CAR PARK Bouaye, Le Ranch, le Vieux Château, l’Étang du Pays Blanc et Le Petit Bois.

Le tarif opérateur de Bouaye est confirmé du 01/01 au 31/12/2027 : 13,74 €/24 h + taxe 1,32 €/24 h = 15,06 €/24 h; la fiche publique a été mise à jour et le forfait 5 h demeure distinct. Pour les neuf autres fiches, les montants publiés restent datés 2026, conditionnels, à carte ou séjour, non millésimés, ou la disponibilité/règle de nuitée demeure à vérifier. Aucun autre tarif de nuitée 2027 n’a été ajouté. Détails : AUDIT-44-2027-LOT357.md. Aucun contact n’a été envoyé.

## Addendum — 21 novembre 2026 : lot 358

Dix fiches ont été contrôlées en groupe : l’aire du Bouffay, la Ferme de l’Arfaut, le Parking de la Loire à Oudon, le port de la Maison Verte à Corsept, O’Pré d’Vous à La Marne, l’aire du plan d’eau de Teillé, l’aire de jour de Saint-Lyphard, le camping municipal de Saint-Hilaire-de-Chaléons, le parc de la Lande à Mesquer et le Bois-Joalland à Saint-Nazaire.

Aucun nouveau tarif complet de nuitée 2027 n’a été confirmé. Les conditions publiées vont du stationnement gratuit limité à 48 h, aux services à contribution libre, aux forfaits de Teillé sans année ni bascule saisonnière précise, et à des tarifs de camping exclusivement 2026. Les services et règles nocturnes restent distincts du coût de stationnement. Détails : AUDIT-44-2027-LOT358.md. Aucun tarif public n’a été modifié et aucun contact n’a été envoyé.

## Addendum — 21 novembre 2026 : lot 359

Dix fiches CAMPING-CAR PARK déjà publiées ont été contrôlées en groupe : Guérande avenue de la Brière, Biochon, Clos Mora, Brambell, Château de la Touche, Nantes Petit Port, l’Écodomaine de la Goguillais, l’École de Guérande, Blain et Pornic Bienvenue au siège.

Neuf tarifs d’étape 2027 sont confirmés avec base, taxe et total : Guérande 14,82 €, Biochon 10,89 €, Clos Mora 15,27 €, Brambell 12,11 €, Château de la Touche 12,22 €, Nantes Petit Port 16,32 €, Goguillais 14,10 €, l’École 12 €, Pornic Bienvenue au siège 14,05 € par 24 h. Ces montants ont été structurés dans les données publiques, avec distinction des produits 5 h. Pour Blain, seule la base 12,73 €/24 h jusqu’au 31/12/2027 reste indexée; la page CCP référencée est inaccessible, la taxe 2027 est absente et le total dynamique est contradictoire. Le total de Blain reste non confirmé. Détails et sources : AUDIT-44-2027-LOT359.md. Aucun lieu ajouté et aucun contact envoyé.


## Lot tarifaire 360 — 21 novembre 2026

Dix fiches de camping contrôlées ensemble : La Boutinardière, le Vieux Château, la Baie, les Chalands Fleuris, le Domaine de Léveno, l’Étang du Pays Blanc, le Petit Bois, La Falaise, Au Soir d’Été et La Riviera. Un tarif opérateur camping-car 2027 complet a été confirmé pour Au Soir d’Été (22/31/43 €/nuit selon période, avant taxe de 0,66 €/adulte/nuit). Neuf autres fiches restent sans tarif opérateur complet ou n’ont qu’un indice secondaire, une saison d’ouverture ou un total de séjour. Aucun prix public n’a été modifié. Détails et sources : [AUDIT-44-2027-LOT360.md](AUDIT-44-2027-LOT360.md).
