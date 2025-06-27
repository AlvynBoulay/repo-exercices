let a = 10;
let b = 20;

if (a < b) {
  console.log('a est inférieur à b');
} else if (a === b) {
  console.log('a est égal à b');
} else {
  console.log('a est supérieur à b');
}


let age = 25;
if (age >= 18 && age <= 65) {
  console.log("L'âge est compris entre 18 et 65 ans");
} else {
  console.log("L'âge est en dehors de la plage spécifiée");
}

let isMember = true;
let hasCoupon = false;

if (isMember || hasCoupon) {
  console.log("Vous bénéficiez d'une réduction");
} else {
  console.log('Pas de réduction disponible');
}

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log('Veuillez vous connecter pour continuer');
}

let score = 75;
let grade = score >= 90
  ? 'Excellent'
  : score >= 75
  ? 'Très bien'
  : score >= 50
  ? 'Bien'
  : 'À améliorer';

console.log('Votre niveau est:', grade);

let number = 7;
let result = number % 2 === 0 ? 'Le nombre est pair' : 'Le nombre est impair';
console.log(result);

let isDay = true;
let greeting = isDay ? 'Bonjour!' : 'Bonsoir!';
console.log(greeting);

function checkEligibility(age, hasPermit) {
    return age >= 18 && hasPermit
      ? 'Éligible à conduire'
      : 'Non éligible à conduire';
  }
  
  console.log(checkEligibility(20, true));
  console.log(checkEligibility(16, false));