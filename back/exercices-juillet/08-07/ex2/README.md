# TP Node.js – Message de Bienvenue en ASCII Art 🎨

Dans ce mini-TP, tu vas créer un petit programme en Node.js qui affiche un message de bienvenue stylisé grâce à l’ASCII Art. Ce sera l'occasion de découvrir comment utiliser `npm` et importer des packages tiers.

## 🧑‍💻 Objectifs

- Initialiser un projet Node.js
- Installer et utiliser un module externe (`figlet`)
- Créer un script qui affiche un message en ASCII Art
- (Bonus) Ajouter de la couleur avec le module `chalk`
- (Bonus 2) Transformer le tout en fonction réutilisable

---

## 📦 Étapes

### 1. Initialiser ton projet Node.js

Dans ton terminal, place-toi dans ton dossier de travail et initialise un nouveau projet Node.js :

```bash
npm init -y
```

### 2. Installer le module `figlet`

Ce module permet de transformer du texte en art ASCII :

```bash
npm install figlet
```

### 3. Créer le fichier `bienvenue.js`

Dans ce fichier, tu vas :

- Importer le module `figlet`
- Créer une variable contenant ton message de bienvenue
- Générer et afficher l’ASCII Art dans le terminal

💡 Astuce : pense à consulter la [doc de figlet sur npm](https://www.npmjs.com/package/figlet)

### 4. Lancer ton programme

Tu peux maintenant lancer ton script avec :

```bash
node bienvenue.js
```

Tu devrais voir ton message en ASCII s’afficher 🎉

---

## ✨ Bonus

### 🎨 Ajouter des couleurs

Pour pimper ton message, installe le module `chalk` :

```bash
npm install chalk
```

Puis utilise-le pour afficher ton message coloré :

```js
const chalk = require("chalk");
console.log(chalk.cyan(data));
```

### 🔁 Créer une fonction réutilisable

Transforme ton code en une fonction qui prend un message en paramètre et l’affiche en ASCII Art :

```js
function afficherAscii(message) {
  figlet(message, (err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
}
```

Tu peux ensuite appeler :

```js
afficherAscii("My ASCII Art");
```

## 🧪 Exemple de rendu

```
  ____  _                 _
 |  _ \| |               | |
 | |_) | | ___   ___   __| | ___
 |  _ <| |/ _ \ / _ \ / _` |/ _ \
 | |_) | | (_) | (_) | (_| |  __/
 |____/|_|\___/ \___/ \__,_|\___|
```

---

## 🚀 Bonus lancer tout ça sur un serveur HTTP

Tu vas combiner :

- Le module natif `http`
- La logique de serveur Node.js
- Ton art en ASCII

### 1. Créer un nouveau fichier `server.js`

C’est lui qui contiendra le code de ton serveur.

### 2. Importer le module http

```js
const http = require("http");
```

### 3. Stocker ton ASCII Art dans une variable

Tu peux copier-coller ton ASCII art dans une chaîne de caractères multilignes :

```js
const asciiArt = `
      /\\_/\\  
     ( o.o ) 
      > ^ < 
`;
```

### 4. Créer le serveur et envoyer l'ASCII Art

```js
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(asciiArt);
});
```

### 3. Lancer le serveur sur le port 3000

```js
server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
```

Lance ensuite ton serveur avec ta commande

```bash
node serveur.js
```

Puis ouvre http://localhost:3000 dans ton navigateur pour voir ton chef-d'œuvre 🎨

---

Happy Coding! 😎
