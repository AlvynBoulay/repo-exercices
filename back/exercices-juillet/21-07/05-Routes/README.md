# 🎬 CineClub API – Partie 3 : Structuration & sécurisation des routes

## 🎯 Objectifs

- Organiser les routes avec `express.Router()`
- Déplacer la logique films dans un fichier dédié
- Appliquer un middleware de validation d’ID
- Intégrer ce routeur dans l’application principale

---

## 🛠️ Étape 1 : Créer le routeur

1. Crée un dossier `router/`
2. Crée un fichier `router/films.js`

---

## ✍️ Étape 2 : Créer le routeur Express

À l'intérieur de `films.js` :

- Importe `express`, `fs`, et `path`
- Initialise un `Router()` avec `express.Router()`
- Charge le fichier JSON des films (avec `require` ou `fs.readFileSync`)
- Prépare un middleware **local** pour valider `req.params.id`

*(Pas besoin d’écrire tout de suite le code complet — commence par la structure.)*

---

## 🔄 Étape 3 : Implémenter les routes

Dans `films.js`, ajoute :

- `GET /` pour renvoyer la liste complète des films
- `GET /:id` en utilisant ta validation d’ID
- `POST /` pour ajouter un nouveau film (vérifie `id` et `titre`)
- `PATCH /:id` pour modifier le titre d’un film
- `DELETE /:id` pour supprimer un film

👉 Astuce : utilise `fs.writeFileSync()` pour persister les changements.

---

## 🔗 Étape 4 : Connecter le routeur

Dans `index.js` :

1. Importe ton routeur depuis `./router/films`
2. Monte-le avec `app.use('/films', filmsRouter)`
3. Supprime ou commente les anciennes routes `/films`
4. Vérifie que `/realisateurs`, middleware d’erreurs et 404 restent actifs

---

## ✅ Étape 5 : Tester et valider

- Teste toutes les routes (`GET`, `POST`, `PATCH`, `DELETE`) avec Thunderclient
- Vérifie que :
  - Les IDs invalides renvoient une **erreur 400**
  - Un film introuvable renvoie **404**
  - Les modifications sont bien sauvegardées dans le fichier `.json`

---

## 💡 Bonus

- Crée un middleware pour **valider le corps de la requête** (par exemple pour `POST`)
- Ajoute un middleware **de journalisation** (`app.use` global)
- Prépare le projet pour la suite : middleware JWT, routes `admin`, etc.

---

## 📝 Reste organisé

1. Crée une branche `feat_router`
2. Ajoute le dossier `router` et implémente petit à petit
3. Teste chaque route avant de passer à la suivante
4. Fais des commits fréquents pour chaque étape

---

Bonne organisation ! 🚀  
Si tu bloques, prépare des journaux de requête ou des logs, et examine les fichiers JSON générés 🙂
