// Défi 1 : Mettre une majuscule au début
function mettreMajusculeDebut(texte) {
    let premiereLettre = texte.charAt(0).toUpperCase();
    let resteDuTexte = texte.slice(1);
    return premiereLettre + resteDuTexte;
  }
  console.log(mettreMajusculeDebut("bonjour"));
  
  // Défi 2 : Compter combien de fois un mot apparaît
  function compterMot(texte, mot) {
    let morceaux = texte.split(mot);
    return morceaux.length - 1;
  }
  console.log(compterMot("salut salut salut", "salut"));
  
  // Défi 3 : Raccourcir une phrase trop longue
  function raccourcirPhrase(texte, max) {
    if (texte.length > max) {
      return texte.slice(0, max) + "...";
    } else {
      return texte;
    }
  }
  console.log(raccourcirPhrase("Bonjour c'est une longue phrase", 10));
  
  // Défi 4 : Compter un mot même avec majuscules ou minuscules
  function compterAvecRegex(texte, mot) {
    let regex = new RegExp(mot, "gi");
    let resultat = texte.match(regex);
    return resultat ? resultat.length : 0;
  }
  console.log(compterAvecRegex("Bonjour bonjour bonjour bonjour bonjour BONJOUR", "bonjour"));
  
  // Défi 5 : Prendre un morceau précis d’une phrase
  let phrase = "Le JavaScript est super";
  let extrait = phrase.slice(3, 13);
  console.log(extrait);
  
  // Défi 6 : Longueur d’une phrase
  let maPhrase = "Je suis débutant en JavaScript";
  console.log(maPhrase.length);
  
  // Défi 7 : Enlever les espaces au début et à la fin
  let salutation = "   Salut tout le monde !   ";
  let propre = salutation.trim();
  console.log(propre);
  