// 1 - creation tableau
let grimoire = [
    "bave de crapaud", 
    "plume de phénix", 
    "racine de mandragore"
];

// 2 creation fonction
function ajouterIngredient() {
    let ingredient = prompt("Quel ingrédient voulez-vous ajouter ?");
    if (ingredient) {
        grimoire.push(ingredient);
    afficherGrimoire();
    } else {
        alert("Aucun ingrédient ajouté.");
    }
}

// 3 fonction afficher le grimoire 
function afficherGrimoire(){
    let listeHTML = "<ul>";
    grimoire.forEach(function(ingredient){
listeHTML += "<li>" + ingredient + "</li>";
    });
    listeHTML += "</ul>";
document.getElementById("liste").innerHTML = listeHTML;
}

// 4 fonction analyser le grimoire
function analyserPotion(){
    let nombreIngrédients = grimoire.length;
    let totalLettres = grimoire.map(function(ingredient) {
    return ingredient.length; 
    }).reduce(function(A, B) {
        return A + B;
    }, 0);
    alert("Nombre d'ingrédients: "+  nombreIngrédients + "   Total de lettres: " + totalLettres);
}
