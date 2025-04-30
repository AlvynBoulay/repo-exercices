/* // Ce que j'ai fait :

let prenom = prompt("Quel est ton prénom ?");
let nombreBurgers = parseInt(prompt("Combien de burger(s) veux-tu ?"));
let veutMenu = prompt("Veux-tu un menu ? (oui/non)").toLowerCase();
const prixBurgers = 5;
const supplementMenu = 3;

isNaN(veutMenu) {alert("réponse invalide pour le menu.")}


if (veutMenu = true){
    let prixTotal = prixBurgers + supplementMenu * nombreBurgers;
} else if (veutMenu = false){
    prixTotal = prixBurgers * nombreBurgers
}

alert("Merci " + prenom + " ta commande de " + nombreBurgers + " burger(s) coûte " + prixTotal + "€");

if (nombreBurgers <= 0) {
    alert("Commande invalide : Tu doit commander au moins 1 burger !");
}



//// CORRECTION :

let prenom = prompt("Quel est ton prénom ?");
let nombreBurgers = parseInt(prompt("Combien de burgers veux-tu commander ?"));
let veutMenuText = prompt("Veux-tu un menu avec boisson et frites ? (oui/non)").toLowerCase();
let prixTotal; 
const prixBurger = 5; 
const supplementMenu = 3;

if (isNaN(nombreBurgers) || nombreBurgers <= 0) {

  alert("Commande invalide : tu dois commander au moins 1 burger !");

} else if ((veutMenuText !== "oui") && (veutMenuText !== "non")) {

  alert("Réponse invalide pour le menu.");

} else {

  if (veutMenuText === "oui") {
    prixTotal = nombreBurgers * (prixBurger + supplementMenu);
  } else {
    prixTotal = nombreBurgers * prixBurger;
  }
  console.log("Ton prénom contient " + prenom.length + " lettres.");
  alert("Merci " + prenom + " ! Ta commande de " + nombreBurgers + " burgers coûte " + prixTotal + " €.");
}
 */