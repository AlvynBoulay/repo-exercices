/* 1 : Sauvegarder le prénom de l'utilisateur */
let champ = document.getElementById("champ-prenom");
let bouton = document.getElementById("btn-sauvegarder");
let message = document.getElementById("message-accueil");
// Si un prénom est déja enregistré, on le récupere
let nomEnregistre = localStorage.getItem("prenom");
if (nomEnregistre) {
    message.textContent = "Bonjour " + nomEnregistre + " 👋";
}
// Quand on clique sur "sauvegarder"
bouton.addEventListener("click", function () {
    let prenom = champ.value.trim();
    if (prenom !== "") {
        localStorage.setItem("prenom", prenom);
        message.textContent = "Bonjour " + prenom + " 👋 (enregistré)";
        champ.value = "";
    }
});



/* 2 : Gérer une liste d'élèves */
let bouton2 = document.getElementById("btn-eleves");
let ul = document.getElementById("liste-eleves");
bouton2.addEventListener("click", function () {
    let eleves = ["guillaume", "angélique", "alan", "alvyn"]; // Liste des éléves a enregistré
    localStorage.setItem("eleves", JSON.stringify(eleves)); // Enregistrer dans localStorage
    let liste = JSON.parse(localStorage.getItem("eleves")); // récupérer la liste
    // Afficher dans la page :
    ul.innerHTML = ""; // on vide d'abord
    for (let i = 0; i < liste.length; i++) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = liste[i];
        ul.appendChild(li);
    }
});



/* 3 : Mini-application de gestion d'inscriptions */
let bouton3 = document.getElementById("btn-gestion-eleves");
let ul2 = document.getElementById("liste-eleves2");
bouton3.addEventListener("click", function () {
    // Liste de base :
    let eleves2 = ["jean-francois", "ilona", "guillaume"];
    localStorage.setItem("eleves2", JSON.stringify(eleves2));
    // Ajouter "nuno" :
    let liste2 = JSON.parse(localStorage.getItem("eleves2"));
    liste2.push("nuno");
    localStorage.setItem("eleves2", JSON.stringify(liste2));
    // Supprimer "ilona" :
    liste2 = liste2.filter(function(prenom) {
        return prenom !== "ilona";
    });
    localStorage.setItem("eleves2", JSON.stringify(liste2));
    // Modifier "dax" en "daxter" :
    liste2 = liste2.map(function(prenom) {
        return prenom === "dax" ? "daxter" : prenom;
    });
    localStorage.setItem("eleves2", JSON.stringify(liste2));
    // Affichage final : 
    let listeFinale = JSON.parse(localStorage.getItem("eleves2"));
    // Afficher une liste HTML
    ul.innerHTML = "";
    for (let o = 0; o < listeFinale.length; o++) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = listeFinale[o];
        ul2.appendChild(li);
    }
});



/* 4 : Sauvegarder l'état d'une alerte dans la session */
let bouton4 = document.getElementById("btn-alerte");
let message2 = document.getElementById("message-alerte");
bouton4.addEventListener("click", function () {
    let alerteVue = sessionStorage.getItem("alerteDejaVue");
    if (!alerteVue) {
        message2.textContent = "pense à push ton travail !";
        sessionStorage.setItem("alerteDejaVue", "true");
    } else {
        message2.textContent = "Alerte déjà afficher dans cette session.";
    }
});