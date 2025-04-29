/* Le Distributeur de bonbons */
let argent = Number(prompt("Combien d'argent voulez-vous insérez ?"));
let bonbons = 0;
if (isNaN(argent)) {
    alert("Merci de rentrer un nombre valide.");
  }
while (argent >= 2) {
    console.log("Bonbon distribué !");
    argent -= 2;
    bonbons++;
    console.log("Il reste " + argent + " euros.");
  if (argent < 2) {
    console.log("Crédits insuffisants. Opération terminée.");
  }
}
console.log("Nombre de bonbons achetés : " + bonbons);