/* Bonne réponse */
function bonneReponse() {
    const resultat = document.getElementById("resultat");
    resultat.innerText = "Bonne réponse !";
    resultat.style.color = "green";
}

/* Mauvaise réponse */
function mauvaiseReponse() {
    const resultat = document.getElementById("resultat") ;  
    resultat.innerText = "Mauvaise réponse...";
    resultat.style.color = "red";
}

/* Reinitialisation du contenu du résultat à vide*/
function reset() {
    const resultat = document.getElementById("resultat");
    resultat.innerText = "";
}