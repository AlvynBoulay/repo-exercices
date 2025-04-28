/* Etape 1 - données utilisateur */
let nomcomplet = prompt("Quel est ton prénom et ton nom ?");
let age = parseInt(prompt("Quel âge as-tu ?"));
let etudiant = prompt("Es-tu étudiant ? (oui/non)").toLowerCase() === "oui";
let nbTickets = parseInt(prompt("Combien de ticket veux-tu acheté ?"));
let reduc = 0;
const prixBase = 12;

// bonus
if (isNaN(age) || age ===""){
    alert("Âge invalide");
} else if (isNaN(nbTickets) || nbTickets <=0){
    alert("Tu dois au moins acheter un ticket !");
} else {

/* Etape 2 - Calcul de la reduction */
if (age < 12) {
    reduc = 50;
} else if (age > 60) {
    reduc = 30;
} else if (etudiant) {
    reduc = 20;
}

/* Etape 3 - Calcul du prix final */
let prixTotal = nbTickets * prixBase;
let prixApresReduc = prixTotal * (1 - reduc / 100);

if (nbTickets > 3) {
    prixApresReduc *= 0.9;
}

if (etudiant) {
    prixApresReduc *= 0.8;
}

prixApresReduc = prixApresReduc.toFixed(2); 

/* Etape 4 - Résumé personnalisé */
let nomSepare = nomcomplet.split(" ");
let prenom = nomSepare[0];
let nom = nomSepare[1] || "";
let deuxpremiereslettres = nom.slice(0, 2).toUpperCase();
let message = "Bonjour " + prenom +" " + nom + ", ton nom commence par " + deuxpremiereslettres + ", tu as " + age + " ans et tu paies " + prixApresReduc + " € pour " + nbTickets + " ticket(s).";
alert(message);

}