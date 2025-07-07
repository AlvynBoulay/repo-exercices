/* VARIABLES & TYPES */
// ex 1 :
let prenom = "Alice";
let age = 30;
console.log(`Bonjour, je m'appelle ${prenom} et j'ai ${age} ans.`);

// ex 2 : 
const ville = "Paris";
console.log(ville);
/* ville = "Lyon";  : Erreur : Assignment to constant variable */


/* CONDITIONS */
// ex 3 :
let age2 = 70;
if (age2 < 18) {
    console.log("Mineur");
} else if (age2 < 65) {
    console.log("Majeur")
} else {
    console.log("Seinor")
}

// ex 4 : 
let nombre = 12;
if (nombre % 2 === 0 && nombre % 3 ===0) {
    console.log("Divisible par 2 et 3");
} else if (nombre % 2 === 0) {
    console.log("Divisible par 2");
} else if (nombre % 3 == 0) {
    console.log("Divisible par 3");
} else {
    console.log("Pas divisible par 2 ni par 3");
}

// ex 5 :
let mois = "Août";
if (typeof mois === "number") {
    mois = mois.toString();
}

mois = mois.toLowerCase();

switch (mois) {

    case "décembre":
    case "janvier":
    case "février":
    case "12":
    case "1":
    case "2":
        console.log("C'est l'hiver");
        break;

    case "mars":
    case "avril":
    case "mai":
    case "3":
    case "4":
    case "5":
        console.log("C'est le printemps");
        break;

    case "juin":
    case "juillet":
    case "août":
    case "6":
    case "7":
    case "8":
        console.log("C'est l'été");
        break;

    case "septembre":
    case "octobre":
    case "novembre":
    case "9":
    case "10":
    case "11":
        console.log("C'est l'automne");
        break;

    default:
        console.log("Mois inconnu");
}


/* BOUCLES */
// ex 6 :
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// ex 7 :
let somme = 0;
for (let i = 1; i <= 100; i += 2) {  
  somme += i;
}
console.log("La somme des nombres impairs entre 0 et 100 est :", somme);

// ex 8 :
let valeur = 1;
while (valeur <= 1000) {
    console.log(valeur);
    valeur = valeur * 2; 
}


/* TABLEAU */
const fruits = ["pomme", "banane", "kiwi", "fraise"];
// ex 9 :
fruits.forEach((fruit, index) => {
    console.log(`${index} : ${fruits}`);
});

// ex 10 :
const fruitsMaj = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsMaj);

// ex 11 :
const nombres = [10, 20, 30, 40, 50];
function moyenne(arr) {
    let somme = 0;
    for (let o = 0; o < arr.length; o++) {
        somme += arr[o];
    }
    return somme / arr.length;
}
console.log(moyenne(nombres));


/* OBJETS */
const personne = {
  nom: "Jean",
  age: 35,
  ville: "Toulouse"
};
// ex 12 :
for (let propriete in personne) {
    console.log(`${propriete} : ${personne[propriete]}`);
}

// ex 13 : 
const personnes = [
  { nom: "Jean", age: 35, ville: "Toulouse" },
  { nom: "Marie", age: 28, ville: "Paris" },
  { nom: "Paul", age: 40, ville: "Lyon" },
  { nom: "Lucie", age: 22, ville: "Nice" }
];

personnes.forEach(perso => {
    if (perso.age > 30) {
        console.log(perso.nom);
    }
});


/* MAP & SET */
// ex 14 : 
const maMap = new Map();
maMap.set("cléString", "valeur1");
maMap.set(42, "valeur2");
maMap.set(true, "valeur3");
maMap.set({ id: 1 }, "valeur4");
for (const [cle, valeur] of maMap) {
    console.log(`Clé :`, cle, `=> Valeur :`, valeur);
}

// ex 15 : 
const noms = ["Alice", "Bob", "Alice", "Marie", "Bob", "Jean", "Marie", "Paul"];
const nomsVus = new Set();
const doublons = new Set();
for (const nom of noms) {
    if (nomsVus.has(nom)) {
        doublons.add(nom);
    } else {
        nomsVus.add(nom);
    }
}
console.log("Noms répétés :", Array.from(doublons));


/* GESTION D'ERREURS */
// ex 16 : 
function diviser(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible !");
    }
    return a / b;
}
try {
    console.log(diviser(10, 2)); // 5
    console.log(diviser(10, 0)); // erreur
} catch (error) {
    console.error("Erreur attrapée :", error.message);
}

// ex 17 : 
function getProperty(obj, prop) {
    if (!(prop in obj)) {
        throw new Error(`Propriété "${prop}" inexistante dans l'objet.`);
    }
    return obj[prop];
}
const personne2 = { nom: "Alice", age: 25 };
try {
    console.log(getProperty(personne2, "nom")); // Alice
    console.log(getProperty(personne2, "ville")); // erreur
} catch (error) {
    console.error("Erreur attrapé :", error.message);
}


/* COMBINÉS (Challenge) */
// ex 18 :
const etudiants = [
  { nom: "Alice", note: 18 },
  { nom: "Bob", note: 20 },
  { nom: "Claire", note: 15 },
  { nom: "David", note: 20 },
  { nom: "Emma", note: 17 }
];

const meilleurNote = Math.max(...etudiants.map(e => e.note));
const meilleurEtudiants = etudiants.filter(e => e.note === meilleurNote);
console.log("Etudiants avec la meilleure note :", meilleurEtudiants.map(e => e.nom));

// ex 19 : 
function trierParLongueurDecroissante(tab) {
    return tab.sort((a, b) => b.length - a.length);
}
const mots = ["banane", "kiwi", "fraise", "pomme"];
console.log(trierParLongueurDecroissante(mots));

// ex 20 :
function analyseText(phrase) {
    const mots = phrase.toLowerCase().match(/\b\w+\b/g);
    const compteur = new Map();
    for (const mot of mots) {
        compteur.set(mot, (compteur.get(mot) || 0) + 1);
    }
    return compteur;
}
const phrase = "Se soir je suis presque en weekend. Les autres aussi seront presque en weekend";
const resultat = analyseText(phrase);
for (const [mot, count] of resultat) {
    console.log(`${mot} : ${count}`)
}