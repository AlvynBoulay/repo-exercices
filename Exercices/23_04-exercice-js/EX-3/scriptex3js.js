function verifierAdhesion() {
    let nom = prompt("Entrez le nom du chat :").trim();
  
    if (nom === "") {
      alert("Merci d’entrer un nom valide.");
      return;
    }
  
    let age = prompt("Entrez l’âge du chat :");
    let poids = prompt("Entrez le poids du chat (en kg) :");
  
    age = Number(age);
    poids = Number(poids);
  
    if (isNaN(age) || isNaN(poids) || age === 0 || poids === 0) {
      alert("Âge ou poids invalide. Merci de réessayer.");
      return;
    }
  
    let statut = "";
  
    if (age > 15 || poids > 10) {
      statut = "Membre Légendaire";

    } else if (age >= 10 && age <= 15 && poids > 6 && poids <= 10) {
      statut = "Membre d’Honneur";
      
    } else if (age >= 3 && age < 10 && poids >= 3 && poids <= 6) {
      statut = "Membre Approuvé";
    } else {
      statut = "Refusé";
    }
  
    alert(`🐾 ${nom} est classé : ${statut}`);
  }
  
  // Lancer la fonction
  verifierAdhesion();
  