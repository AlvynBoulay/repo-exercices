/* Code synchrone classique */
console.log("début du script");
console.log("Etape 1 terminée");
console.log("Etape 2 terminé");
console.log("fin du script");

/* Introduire un setTimeout simple */
console.log("début du script");
setTimeout(function() {
}, 2000);
console.log("Fin du script");

/* Plusieurs setTimeout différents */
console.log("début du script");
setTimeout(function() {
    console.log("Action A (attente 1000 ms)");
}, 1000);
setTimeout(function() {
    console.log("Action B (attente 500 ms)");
}, 500);
console.log("Fin du script");

/* Exemple concret avec bouton et attente simulée */
document.getElementById("btnCharger").addEventListener("click", function() {
    document.getElementById("contenu").textContent = "Chargement en cours...";
    setTimeout(function() {
        document.getElementById("contenu").textContent = "Contenu chargé avec succès";
    }, 2000);
});

/* Callback simple, passer une fonction en argument */
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}
function executerCallBack(callback) {
    const nom = "Alvyn";
    callback(nom)
}
executerCallBack(direBonjour); /* Affiche : Bonjour Alvyn */

/* Callback asynchrone avec setTimeout */
function attendreEtDireBonjour(nom, callback) {
    setTimeout(function() {
        callback(nom);
    }, 2000);
}
attendreEtDireBonjour("Robert", function(prenom) {
    console.log("Bonjour après 2s ", + prenom);
});