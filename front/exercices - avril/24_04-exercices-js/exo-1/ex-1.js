// Déclaration avec `let`
let nom = 'Alice';
console.log('Nom (let):', nom);

// Déclaration avec `const`
let PI = 3.14;
console.log('PI (const):', PI);

// Modifications autorisées
let age = 30;
nom = 'Bob';
console.log('Nouvel âge:', age);
console.log('Nouveau nom:', nom);

let firstName = 'Alice';
let lastName = 'Smith';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

let greeting = 'Hello';
let message = greeting.concat(', ', fullName, '!');
console.log(message);

age = 30;
let bio = `My name is ${fullName} and I am ${age} years old.`;
console.log(bio);

// PI = 3.14159; // ❌ Erreur si décommenté

let nombreUtilisateurs = 100;
const TAUX_IMPOSITION = 0.15;

console.log("Nombre d'utilisateurs:", nombreUtilisateurs);
console.log("Taux d'imposition:", TAUX_IMPOSITION);

let prenom = 'Alice';
age = 25;
PI = 3.14;
let estMajeur = age >= 18;

console.log('Bonjour, ' + prenom);
console.log('Âge : ' + age);
console.log('Est majeur ? ' + estMajeur);
console.log("Le double de l'âge est : " + age * 2);
console.log('Pi est égal à ' + PI);

// Variable globale
let messageGlobal = 'Je suis accessible partout';

function maFonction() {
let messageLocal = 'Je suis dans la fonction';
console.log('Message global:', messageGlobal);
console.log('Message local:', messageLocal);
}

maFonction();

console.log('Global dehors:', messageGlobal);
// console.log(messageLocal); // ❌ Erreur

if (true) {
let ville = 'Paris';
const pays = 'France';
console.log('Ville:', ville);
console.log('Pays:', pays);
}

// console.log(ville); // ❌ Erreur
// console.log(pays); // ❌ Erreur

let num = 10;
console.log(typeof num); // "number"

let name = 'Alice';
console.log(typeof name); // "string"

let isActive = true;
console.log(typeof isActive); // "boolean"

let arr = [1, 2, 3];
console.log(typeof arr); // "object"

let func = function () {};
console.log(typeof func); // "function"

let notAssigned;
console.log(typeof notAssigned); // "undefined"

function checkInput(input) {
	if (typeof input === 'string') {
		console.log("C'est une chaîne");
	} else if (typeof input === 'number') {
		console.log("C'est un nombre");
	} else if (typeof input === 'boolean') {
		console.log("C'est un booléen");
	} else {
		console.log("Type inconnu");
	}
}

checkInput('Hello');
checkInput(42);
checkInput(true);

let nombre = 42;
let texte = 'Bonjour tout le monde';
let estValide = true;
let utilisateur = { nom: 'Alice', age: 30 };
let fruits = ['pomme', 'banane', 'cerise'];

console.log('Nombre:', nombre);
console.log('Texte:', texte);
console.log('Est valide:', estValide);
console.log('Utilisateur:', utilisateur);
console.log('Fruits:', fruits);


function exo1() {
	alert('test');
}
// exo1()