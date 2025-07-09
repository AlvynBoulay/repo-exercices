# 📝 TP JavaScript – Mini Application TODO (en console)

## 🎯 Objectif

Créer une mini-application en **JavaScript** (sans HTML, uniquement en console) permettant de gérer une liste de tâches à faire (**TODO**).

Cet atelier permet de pratiquer les **tableaux**, **objets**, **fonctions**, **structures de contrôle** et la **console**.

---

## ✅ Fonctionnalités à implémenter

1. **Ajouter une tâche**
   - Créer une liste vide `taches`
   - Créer une fonction ajouterTache qui prend en paramètre `titre`
   - Cette fonction créé un objet tache avec une clé `titre` et une clée `terminee`
   - La tâche est ajoutée à notre tableau `taches` sous forme d'objet :  
     `{ titre: "Acheter du pain", terminee: false }`
   - On console.log que la tache a bien été ajoutée

2. **Supprimer une tâche par index**
   - On fournit un index (ex : `1`)
   - La tâche à cet index est retirée du tableau (pensez à splice)

3. **Lister toutes les tâches**
   - Affiche dans la console toutes les tâches avec leur état :
     ```
     0. [ ] Aller à la salle
     1. [x] Faire les courses
     ```

4. **Marquer une tâche comme terminée**
   - On fournit un index
   - Le champ `terminee` passe à `true` et l’affichage change `[x]`

---

## 🧠 Fonctions suggérées

```js
function ajouterTache(titre) {}
function supprimerTache(index) {}
function afficherTaches() {}
function terminerTache(index) {}
```

## 🎁 BONUS – TODO JavaScript Console

Ces exercices bonus permettent de complexifier ton application TODO en console tout en révisant les notions vues en JavaScript. Ils sont à réaliser **après avoir terminé les fonctionnalités de base**.

---

### ✏️ 1. Éditer une tâche

Ajoute une fonction qui permet de modifier le **titre d’une tâche existante**.


- Prendre un index et un nouveau titre en paramètre
- Vérifier que l’index est valide et que le titre n’est pas vide
- Modifier la tâche correspondante

---

### 🔍 2. Rechercher une tâche par mot-clé

Ajoute une fonctionnalité pour **rechercher toutes les tâches contenant un mot ou une expression**.

- Demander un mot-clé à l’utilisateur
- Afficher uniquement les tâches dont le titre contient ce mot (majuscule/minuscule ignorées)

---

### 🧹 3. Filtrer par état (terminée ou non)

Ajoute une option qui permet d’**afficher uniquement les tâches terminées ou uniquement les tâches non terminées**.

- Prendre un paramètre booléen ou une commande utilisateur (ex: "terminées", "en cours")
- Afficher uniquement les tâches correspondantes

---

### 🚦 4. Ajouter une priorité aux tâches

Ajoute une propriété de **priorité** à chaque tâche (par exemple : "basse", "moyenne", "haute").

- Lors de l’ajout d’une tâche, demander aussi la priorité
- Afficher la priorité dans la liste des tâches
- Ajouter une fonction pour trier les tâches par priorité

---

### 🕓 5. Historique des actions

Crée un **journal des actions** effectuées dans l’application.

- Enregistrer à chaque action (ajout, suppression, modification, etc.) :  
  - le type d’action  
  - le titre concerné  
  - la date de l’action
- Créer une commande pour **afficher l’historique complet** sous forme de tableau

---

### 📦 Conseils

- Commence par une fonctionnalité simple
- Réutilise le code déjà existant (pas besoin de tout réécrire)
- Teste chaque fonction individuellement dans la console

Bonne chance 🚀
