/* Boucle for classique */
let prenom = "Alvyn";
for (let i = 0; i < 5; i++) {
    console.log('Itération numéro', i);
    console.log(prenom.charAt(i));
}

/* Boucle while */
let j = 0;
while (j < 5) {
    console.log('Itération numéro:', j);
    j++;
}

/* Boucle do...while */
let k = 0;
do {
    console.log('Itération numéro:', k)
    k++;
} while (k < 5);

/* Boucle for...of */
let fruits = ["Pomme", 'Banane', "Orange"];
for (let fruit of fruits) {
    console.log('Fruit:', fruit)
}

/* Boucle for...in */
let personne = {
    nom: 'Patrick',
    age: 47,
    ville: "Soustons",
};
for (let cle in personne) {
    console.log(cle + ':', personne[cle]);
}