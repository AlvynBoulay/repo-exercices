// Définition d'une fonction : un bloc de code qu'on pourra exécuter plus tard
function verifierAdhesion() {

    // Demande à l'utilisateur d'entrer un nom
    let nom = prompt("Entrez le nom du chat :").trim(); 
    // prompt() affiche une boîte de texte où l'utilisateur peut écrire
    // .trim() enlève les espaces au début et à la fin (ex: "   Félix   " → "Félix")
  
    if (nom === "") { 
      // Si l'utilisateur n'a rien entré (nom vide)...
      alert("Merci d’entrer un nom valide.");
      return; 
      // "return" arrête la fonction ici
    }
  
    // On demande l'âge du chat
    let age = prompt("Entrez l’âge du chat :");
    // On demande le poids du chat
    let poids = prompt("Entrez le poids du chat (en kg) :");
  
    // On transforme les réponses en nombres
    age = Number(age);
    poids = Number(poids);
    // Sans ça, les valeurs restent du "texte" (string), même si l'utilisateur tape un nombre
  
    // Vérifie que l’âge et le poids sont bien des nombres valides
    if (isNaN(age) || isNaN(poids) || age === 0 || poids === 0) {
      // isNaN signifie "est-ce que ce n’est PAS un nombre ?"
      alert("Âge ou poids invalide. Merci de réessayer.");
      return;
    }
  
    // Prépare une variable vide pour stocker le résultat final
    let statut = "";
  
    // Teste différentes conditions pour savoir dans quelle catégorie le chat appartient
    if (age > 15 || poids > 10) {
      statut = "Membre Légendaire";
  
    } else if (age >= 10 && age <= 15 && poids > 6 && poids <= 10) {
      statut = "Membre d’Honneur";
  
    } else if (age >= 3 && age < 10 && poids >= 3 && poids <= 6) {
      statut = "Membre Approuvé";
  
    } else {
      // Si aucune des conditions au-dessus n'est vraie
      statut = "Refusé";
    }
  
    // Affiche un message final avec le nom et le statut du chat
    alert(`🐾 ${nom} est classé : ${statut}`);
  }
  
  // Appel de la fonction pour lancer tout le code ci-dessus
  verifierAdhesion();
  