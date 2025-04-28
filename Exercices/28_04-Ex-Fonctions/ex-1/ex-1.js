// DEFI 1
function saluerUtilisateur(prenom) {
    console.log("Bonjour, " + prenom + " !");
  }

  saluerUtilisateur("Albert");


// DEFI 2
function addition(nombre1, nombre2) {
return nombre1 + nombre2;
}

let resultat = addition(5, 3);
console.log(resultat);

// DEFI 3
function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true;
    } else { 
        return false
    }
}
console.log(estPair(4)); // true
console.log(estPair(7)); // false
console.log(estPair(10)); //true
console.log(estPair(15)); // false
console.log(estPair(25)); // false

// DEFI 4
function CalculerMoyenne(note1, note2, note3) {
    let moyenne = (note1 + note2 + note3) / 3;
    return moyenne;
}
let ResultatMoyenne = CalculerMoyenne(12, 18, 12);
console.log(ResultatMoyenne);

// DEFI 5
function plusGrand(nb1, nb2) {
    if (nb1 > nb2) {
        return nb1;
    } else {
        return nb2;
    }
}

let resultatPlusGrand = plusGrand(7, 18);
console.log(resultatPlusGrand);