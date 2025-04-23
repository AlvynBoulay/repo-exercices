let age = 20;
let motDePasse = "afec";
let motEntreParLeJoueur = prompt("Entrez le mot de passe du donjon :");
let aUnBadgeMagique = true;
let niveauDeForce = 8;

if (motEntreParLeJoueur !== motDePasse) {
  alert("🔴 Mot de passe incorrect.");
} else if (
  age > 18 &&
  motEntreParLeJoueur === motDePasse &&
  aUnBadgeMagique === true &&
  niveauDeForce >= 7
) {
  alert("🟢 Bienvenue dans le donjon, aventurier !");
} else {
  alert("🔴 Accès refusé. Tu ne remplis pas toutes les conditions…");
}