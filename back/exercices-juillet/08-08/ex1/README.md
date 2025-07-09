# 📘 TP Node.js – Journal de bord (Fichiers & Asynchronisme)

## 🎯 Objectif

Créer une petite application en Node.js pour enregistrer des messages dans un journal texte, avec gestion asynchrone des fichiers via le module `fs`.

---

## 🧪 Étapes à suivre

### 1. Importer les modules nécessaires

Importez :

- `fs` pour manipuler les fichiers
- `readline` pour lire les saisies utilisateur
- `path` pour gérer les chemins de manière fiable

---

### 2. Définir le chemin vers le fichier

Créez une variable contenant le **chemin absolu** vers un fichier `journal.txt` (utiliser `__dirname` et `path.join`).

---

### 3. Poser une question à l’utilisateur

Utilisez `readline` pour demander à l’utilisateur un message à enregistrer.  
Stockez la réponse pour l’utiliser ensuite.

💡 Aide d'utilisation du package `readline` :

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Votre message a enregistrer : ", (answer) => {
  console.log("Vous avez écrit :", answer);
  rl.close();
});
```

---

### 4. Ajouter le message au fichier

Ajoutez le message au fichier `journal.txt` :

- en mode **asynchrone**
- sans écraser les précédents messages

Ajoutez un retour visuel dans la console pour confirmer que l’ajout a bien eu lieu.

---

### 5. Lire le journal

Lisez le fichier et affichez tous les messages existants après l'ajout. Utilisez une méthode asynchrone de lecture.

---

### 6. Fermer proprement le programme

Fermez l’interface `readline` à la fin du processus, ou en cas d’erreur.

---

## 💡 Bonus

### 🕒 Bonus 1 : Horodatage

Créez une fonction dédiée pour générer un horodatage automatique à insérer devant chaque message par exemple :
[01/06/2025, 14:15:10] Mon message

Vous pouvez utiliser l'objet date ci dessous :

```js
const now = new Date();
return now.toLocaleString();
```

---

### 🧱 Bonus 2 : Refactorisation en fonctions

Refactorez votre code en plusieurs fonctions bien nommées :

- `askMessage()`
- `appendToJournal()`
- `readJournal()`
- `getTimestamp()`

---

## ✅ Objectifs à vérifier

- [ ] Le message saisi est enregistré dans le fichier
- [ ] Le fichier conserve les anciens messages (pas écrasé)
- [ ] Un horodatage précède chaque message (bonus)
- [ ] Le contenu est lu et affiché à la fin
- [ ] Toutes les opérations utilisent des méthodes asynchrones
- [ ] Le code est structuré proprement en fonctions (bonus)

---

🚀 Bon TP et amusez-vous avec Node.js !
