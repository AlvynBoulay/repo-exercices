// 1 : créer le premier objet
let humain1 = {
    prenom: "Patrick",
    age: 45,
    ville: "Tartas"
};
console.log(humain1.prenom);
console.log(humain1.age);
console.log(humain1.ville);

// 2 : Modifier les valeurs d'un objet
humain1.age = 46;
humain1.ville = "Soustons";
console.log(humain1);

// 3 : Ajouter une nouvelle propriété à un objet
humain1.estEtudiant = false;
console.log(humain1.estEtudiant);

// 4 : Créer une fonction qui utilise un objet
function afficherInfos(humain1) {
    console.log("Je m'appelle " + humain1.prenom + " j'ai " + humain1.age + " ans, et j'habite à " + humain1.ville + ".");
}
afficherInfos(humain1);

// 5 : Créer un tableau d'objets
let groupeHumain = [
    { prenom: "Jean", age: 29, ville: "Saubusse"},
    { prenom: "Albert", age: 54, ville: "Dax"},
    { prenom: "Matys", age: 22, ville: "Azur"}
];

for (let p = 0; p < groupeHumain.length; p++) {
    console.log(groupeHumain[p].prenom);
};

// 6 : Gestion d'une bibliothèque
let bibliothèque = [
    { titre: "Le petit Prince", auteur: "Antoine de Saint-Exupéry", anneePublication: 1943, estDisponible: true },
    { titre: "1984", auteur: "George Orwell", anneePublication: 1949, estDisponible: false },
    { titre: "Harry Potter", auteur: "J.K Rowling", anneePublication: 1997, estDisponible: true }
];

for (let o = 0; o < bibliothèque.length; o++) {
if (bibliothèque[o].estDisponible) {
    console.log("Disponible : " + bibliothèque[o].titre);
}
}

function emprunterLivre(titre) {
    for (let u = 0; u < bibliothèque.length; u++) {
        if (bibliothèque[u].titre.toLowerCase() === titre.toLowerCase()) {
          if (bibliothèque [u].estDisponible) {
            bibliothèque[u].estDisponible = false;
            console.log("Livre emprunté avec succès.");
            return;
          }  else {
            console.log("Ce livre n'est pas disponible.");
            return;
          }
        }
    }
    console.log("Livre introuvable.");
}

function rendreLivre(titre) {
    for (let m = 0; m < bibliothèque.length; m++) {
        if (bibliothèque[m].titre.toLowerCase() === titre.toLowerCase()) {
            bibliothèque[m].estDisponible = true;
            console.log("Merci pour le retour du livre.");
            return;
        }
    }
    console.log("Livre introuvable.");
}

emprunterLivre("Harry Potter");
emprunterLivre("Harry Potter");
rendreLivre("Harry Potter");