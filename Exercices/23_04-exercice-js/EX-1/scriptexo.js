// Initialisation des variables
let score = 100;
let energy = 80;
let hasPotion = false;
let inventory = "épée en bois";
let isAlive = true;

// Étape 1 : Le joueur trouve une potion
hasPotion = true;
energy += 20;
console.log("Potion trouvée !");
console.log("hasPotion", hasPotion);
console.log("energy:", energy);

// Étape 2 : Il tombe dans un piège
energy -= 40;
score -= 25;
console.log("Le joueur tombe dans un piège !");
console.log("energy:", energy);
console.log("score:", score);

// Étape 3 : Combat avec un dragon, perte de l'épée
console.log("Combat contre un dragon !");
console.log("Le joueur perd son épée en bois.");

// Étape 4 : Perte de points d'energy et points de score
console.log("Victoire contre le dragon mais perte de points.");
energy -= 40;
score -= 30;
console.log("energy:", energy);
console.log("score:", score);

// Étape 5 : Le joueur trouve un arc
inventory = "arc";
console.log("Un arc trouvé !");
console.log("inventory:", inventory);

// Étape 6 : Il épuise son énergie
energy = 0;
console.log("Le joueur s'épuise...");
console.log("energy:", energy);

// Étape 7 : le joueurs est éliminé
isAlive = false;
console.log("isAlive:", isAlive);
console.log("Le joueur est éliminé.");

// Affichage des variables dans la page HTML
function displayResult(label, value) {
    const h2 = document.createElement('h2');
    h2.textContent = label + ' : ' + value;
    document.body.prepend(h2);
  }

displayResult('Statut', isAlive);
displayResult('Inventaire', inventory);
displayResult('Score', score);
displayResult('Énergie', energy);
displayResult('Potion', hasPotion);