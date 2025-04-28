// Définir et appeler une fonction simple
function direBjr() {
    console.log("Bonjour tout le monde !");
}
direBjr();

// Fonction avec un paramètre
function direbjrA(prenom) {
    console.log("Bonjour " + prenom + " !");
}
direbjrA("Patrick")
direbjrA("Sylvain")


// Fonction avec plusieurs paramètres
function addition(a, b) {
    console.log("Résultat :", a + b);
}
addition(25, 31);
addition(45, 12);

// Fonction qui retourne une valeur
function doubler(nombre) {
    return nombre * 2;  
}
let resultat = doubler(75);
console.log("Le double de 75 est :", resultat);

// Fonctions anonymes stockées dans une variable
const saluer = function() {
    console.log("Salut !");
};
saluer();

// Fonctions fléchées (Arrow Functions)
const direSalut = () => {
    console.log("Salut à tous !");
};
const tripler = (nombre) => {
    return nombre * 24;
};
direSalut();
console.log("Le Triple de 24 est :", tripler(4));

// Fonctions avec une condition
function estPair(nombre) {
    if (nombre % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}
console.log(estPair(4)); 
console.log(estPair(7)); 

// Fonction qui manipule un tableau
function afficherElements (tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log("Element :", tab[i]);
    }
}
let fruits = ["Pomme", "Banane", "Orange"];
afficherElements(fruits);