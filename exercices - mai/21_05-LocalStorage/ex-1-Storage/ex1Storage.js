/* Initialisation des éléments */
let champPrenom = document.getElementById("prenom");
let btnAjouter = document.getElementById("btn-ajouter");
let btnSupprimer = document.getElementById("btn-supprimer");
let listeUl = document.getElementById("liste");

let listeEleves = JSON.parse(localStorage.getItem("listeEleves")) || [];

/* Fonction pour afficher la liste */
function afficherListe() {
    listeUl.innerHTML = "";
    listeEleves.forEach(function(prenom) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = prenom;
        listeUl.appendChild(li);
    });
}

/* Ajouter un prénom */
btnAjouter.addEventListener("click", function () {
    let prenom = champPrenom.value.trim();
    if (prenom !== '' && !listeEleves.includes(prenom)) {
        listeEleves.push(prenom);
        localStorage.setItem("listeEleves", JSON.stringify(listeEleves));
        afficherListe();
    }
    champPrenom.value = "";
});

afficherListe();

/* Supprimer un prénom */
btnSupprimer.addEventListener("click", function () {
    let prenom = champPrenom.value.trim();
    if (prenom !== '' && listeEleves.includes(prenom)) {
        listeEleves = listeEleves.filter(p => p !== prenom);
        localStorage.setItem("listeEleves", JSON.stringify(listeEleves));
        afficherListe();
    }
    champPrenom.value = "";
});