/* 1 - Créer une promesse simple et l'utiliser */
/* Cibler les éléments de la page */
let bouton = document.getElementById("demarrer");
let message = document.getElementById("message");
/* Quand on clique sur le bouton */
bouton.addEventListener("click", function () { /* On créer une promesse qui réussi toujours */
    let promesse = new Promise(function (resolve, reject) {
        resolve("Tout s'est bien passé !");
    });
    /* Quand la promesse réussi, on affiche le message */
    promesse.then(function (resultat) {
        message.textContent = resultat;
    });
});


/* 2 - Chaînage de promesses */
let bouton2 = document.getElementById("lancer-chainage");
let affichage = document.getElementById("resultat-chainage");
function operation1() {
    return Promise.resolve("Etape 1");
}
function operation2(resultatPrecedent) {
    return Promise.resolve(resultatPrecedent + " > Etape 2");
}
bouton2.addEventListener("click", function () {
    operation1()
    .then(operation2)
    .then(function (resultatFinal) {
        affichage.textContent = resultatFinal;
    });
});


/* 3 - Async/await avec une fonction asynchrone simple */
let bouton3 = document.getElementById("btn-attendre");
let texte = document.getElementById("texte-bonjour");
/* Fonction qui retourne une promesse qui se résout après un temps donné */
function attendre(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}
/* Fonction asynchrone qui utilise await pour attendre */
async function direBonjour() {
    texte.textContent = "Préparation...";
    await attendre(1000); /* on attend 1 seconde */
    texte.textContent = "Bonjour après 1 seconde !";
}
bouton3.addEventListener("click", function () {
    direBonjour();
});


/* 4 - Faire une requête API avec fetch + .then() */
let bouton4 = document.getElementById("btn-api");
let affichage2 = document.getElementById("api-resultat");
bouton4.addEventListener("click", function () {
    /* on lance la requête vers une fausse API */
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (reponse) {
        return reponse.json(); /* Convertir la rep en objet js */
    })
    .then(function (data) {
        /* on affiche le titre de l'article */
        affichage2.textContent = "Titre :" + data.title;
    })
    .catch(function (error) {
        /* En cas d'erreur (ex : pas de connexion) */
        affichage.textContent = "Erreur lors du chargement : " + error;
    });
});


/* 5 - fetch() avec async/await + try/catch */
let bouton5 = document.getElementById("btn-await");
let zoneAffichage = document.getElementById("resultat-await");
async function chargerPost() {
    zoneAffichage.textContent = "Chargement...";
    try {
        /* on attend la réponse du serveur */
        let reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        /* on atttend la conversion en json */
        let data = await reponse.json();
        /* on affiche le résultat*/
        zoneAffichage.textContent = "Titre : " + data.title;
    } catch (erreur) {
        /* en cas d'erreur (wifi, json mal formé, etc) */
        zoneAffichage.textContent = "Erreur : " + erreur.message;
    }
}
/* quand on clique, on déclenche la fonction */
bouton5.addEventListener("click", chargerPost);


/* 6 - Charger un fichier local JSON et afficher les données */
async function chargerAnimaux() {
try {
    const reponse = await fetch("data.json"); /* Attention au chemin */
    const animaux = await reponse.json();
    const zoneResultat = document.getElementById("resultat");
    zoneResultat.innerHTML = ""; /* on vide avant d'ajouter */
    animaux.forEach(animal => {
        const p = document.createElement("p");
        p.textContent = `${animal.nom} est un ${animal.espece}`;
        zoneResultat.appendChild(p);
    });
} catch (erreur) {
    console.error("Oups, une erreur est survenue :", erreur);
}
}
chargerAnimaux();