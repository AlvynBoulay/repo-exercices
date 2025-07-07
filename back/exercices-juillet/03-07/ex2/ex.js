// Exercice 1 : Fonction simple
function direBonjour(prenom) {
  return "Bonjour " + prenom;
}
console.log(direBonjour("Alice"));


// Exercice 2 : Somme de deux nombres
function addition(a, b) {
  return a + b;
}

console.log(addition(3, 7));


// Exercice 3 : Paramètre par défaut
function saluer(prenom = "invité") {
  return "Salut " + prenom;
}

console.log(saluer());        
console.log(saluer("Bob"));   


// Exercice 4 : Trouver si un nombre est pair
function isPair(n) {
  return n % 2 === 0;
}

console.log(isPair(4)); 
console.log(isPair(5)); 


// Exercice 5 : Utiliser console.table
function afficherUtilisateurs(utilisateurs) {
  console.table(utilisateurs);
}

const users = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 28 }
];

afficherUtilisateurs(users);


// 🐞 Exercice 6 : Utiliser debugger
function calculePrixTTC(prixHT, tauxTVA) {
  const tva = prixHT * tauxTVA;
  const total = prixHT + tva;
/*   debugger; */
  return total;
}

console.log(calculePrixTTC(100, 0.2)); 


// 📘 Exercice 7 : Arrow function
const doubler = function(n) {
  return n * 2;
};

const doublerArrow = (n) => n * 2;

console.log(doublerArrow(6)); 