// 1 - Créer et lire un objet simple
let animal = {
    espece: "chat",
    age: 3,
    couleur: "gris"
};
console.log(animal.espece);
console.log(animal.age);
console.log(animal.couleur);

// 2 - Modifier et ajouter des propriétés
animal.age = 4;
animal.nom = "Bertrand";
console.log(animal); 

// 3 - Utiliser un objet dans une fonction
function decrireAnimal(animal) {
    console.log("C'est un " + animal.espece + " de couleur " + animal.couleur + ", âgé de " + animal.age + " ans.");
}
decrireAnimal(animal);

// 4 - Tableau d'objets + boucle
let animaux = [
    { espece: "chat", age: 3 },
    { espece: "Chien", age: 5 },
    { espece:"Lapin", age: 2 }
];

for (let i = 0; i < animaux.length; i++) {
    console.log(animaux[i].espece + " - " + animaux[i].age + " ans");
};

// 5 - Rechercher un objet selon une propriété
let animaux2 = [
{ espece: "chat", age: 3 },
{ espece: "Chien", age: 5 },
{ espece: "Lapin", age: 2 },
];

function trouverAnimal(nomRecherche) {
    for (let a = 0; a < animaux2.length; a++) {
if (animaux2[a].espece === nomRecherche) {
    console.log("Animal trouvé : " + animaux2[a].espece + " (" + animaux2[a].age + " ans)");
    return;
}
    }
    console.log("Animal non trouvé !");
}
trouverAnimal("Chien");
trouverAnimal("Tigre");