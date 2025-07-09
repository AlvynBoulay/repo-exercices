# TP - Gestionnaire de Taches

## 📁 Structure du projet

```bash
/atelier-async/
├── api.js        # Fonctions asynchrones simulées (déjà fournies)
└── main.js       # À compléter par l'élève avec des appels à api.js

```

---

## 🚀 Lancer l’atelier

1. Ouvre le fichier `index.html` dans ton navigateur 
2. Ouvre la console développeur (`F12` ou clic droit > Inspecter > Console)
3. Observe les résultats au fur et à mesure de ton développement

---


## 📦 api.js (fourni)

Ce fichier contient des **fonctions asynchrones simulant des appels API** :

```js
export async function fetchTaches() { ... }

export async function ajouterTache(titre) { ... }

export async function marquerCommeFaite(id) { ... }
```

---



## 👉 Etapes à réaliser

###  Étape 1
Créer une fonction `afficherTaches()` qui :

- utilise fetchTaches()
- affiche les tâches avec console.table

###  Étape 2
Créer une fonction `ajouterEtAfficher()` qui :

- utilise ajouterTache("Nouvelle tâche")
- puis ré-appelle afficherTaches()

### Étape 3
Créer une fonction `validerTache(id)` qui :

- utilise marquerCommeFaite(id)
- affiche un message de succès ou d’erreur avec try/catch

### Étape 4
Créer une fonction `main()` qui :

- appelle afficherTaches()
- ajoute une nouvelle tâche
- marque une tâche comme faite
- puis affiche à nouveau les tâches

## À utiliser dans le TP

| Notion            | À pratiquer                          |
| ----------------- | ------------------------------------ |
| `async / await`   | sur toutes les fonctions principales |
| `try / catch`     | pour la gestion des erreurs          |
| `console.table`   | pour afficher les tâches             |
| Fonctions nommées | pour structurer le TP                |


## 🧪 Bonus (optionnel)

- créer une nouvelle fonction dans api.js `marquerCommeUrgent` qui prend un id en paramètre et renvoie un paramètre `urgent : true` 
- Proposer à l’utilisateur un prompt pour entrer une tâche à ajouter (fonction `prompt`)
- Gérer l’affichage d’un message si aucune tâche n’est présente
- Regrouper les fonctions dans un objet App pour structurer le code