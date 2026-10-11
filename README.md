# Camping-Car France — version 0.1

## Contenu
- `index.html` : page d'accueil, classement, fiches, méthodologie et formulaire d'avis.
- `styles.css` : mise en page responsive pour ordinateur et mobile.
- `app.js` : recherche, tri, calcul des notes, fiches département et formulaire d'avis local.
- `departements.json` : liste initiale des 101 départements.
- `README.md` : ces instructions.

## Important avant publication
Cette version est un prototype fonctionnel côté navigateur. Les notes ne sont pas préremplies : aucune note réelle n'est inventée. Le formulaire d'avis enregistre les contributions uniquement dans le stockage local du navigateur (`localStorage`). Les avis ne sont donc PAS transmis à l'administrateur, partagés entre visiteurs, ni réellement modérés par un serveur.

Pour ouvrir les fichiers localement, certains navigateurs bloquent `fetch()` des fichiers JSON avec `file://`. Utilisez un hébergement web, ou un petit serveur local. Pour un débutant, le plus simple est de déposer les fichiers sur un hébergement statique compatible, ou de tester avec un éditeur local qui propose « Live Server ».

## Installation la plus simple avec GitHub Pages
1. Créez un compte sur https://github.com/ si vous n'en avez pas.
2. Créez un nouveau dépôt public nommé `camping-car-france`.
3. Téléversez les cinq fichiers (`index.html`, `styles.css`, `app.js`, `departements.json`, `README.md`) à la racine du dépôt.
4. Dans le dépôt, ouvrez **Settings → Pages**.
5. Dans « Build and deployment », sélectionnez **Deploy from a branch**, puis `main` et `/ (root)`, et enregistrez.
6. Attendez la publication. GitHub affichera l'adresse du site dans la section Pages.
7. Ouvrez l'adresse sur téléphone et ordinateur et testez la recherche, les fiches et le formulaire.

Le site est public si le dépôt et Pages sont publics. Ne placez aucune donnée personnelle ou secrète dans les fichiers.

## Comment mettre à jour les données
Le fichier `departements.json` contient un objet par département. Les champs `scores` doivent rester `null` tant que les données n'ont pas été vérifiées. Pour une fiche documentée, `scores` doit contenir les huit clés numériques suivantes, chacune de 0 à 100 :
- `welcome` : accueil et qualité des aires (25 %)
- `price` : prix du séjour (20 %)
- `tourism` : tourisme et paysages (20 %)
- `parking` : stationnement et réglementation (10 %)
- `services` : services techniques (10 %)
- `safety` : sécurité et tranquillité (5 %)
- `shops` : commerces et vie pratique (5 %)
- `access` : accessibilité routière (5 %)

Ajouter aussi `verified: true`, `lastChecked: "AAAA-MM-JJ"` et une note qui explique les sources. Ne renseignez pas une note sur la base d'une simple supposition.

## Pour passer du prototype à un vrai site public avec avis
Il faudra ajouter un backend et une base de données (par exemple Supabase), configurer les règles de sécurité, stocker les avis côté serveur avec statut `pending`, et créer un espace d'administration protégé pour les accepter ou les refuser. Ne prétendez pas que le prototype actuel fournit cette fonctionnalité : il ne le fait pas encore.

## Budget
Les fichiers sont gratuits. GitHub Pages propose un hébergement statique pour les dépôts publics éligibles ; vérifiez les conditions actuelles du service avant de lancer un site public durable. Un nom de domaine personnalisé est facultatif et payant. Les avis partagés, comptes et modération serveur nécessiteront une étape technique supplémentaire.
