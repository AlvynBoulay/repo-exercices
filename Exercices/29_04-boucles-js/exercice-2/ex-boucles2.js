/* Nombre pairs de 0 à 20 */
let i = 0;
while (i <= 20) {
    if (i % 2 === 0){
        console.log(i)
    }
    i++;
}

/* Table de multiplication */
function multiplication(nombre) {
    for (let m = 0; m <= 10; m++) {
        console.log(nombre + " x " + m + " = " + (nombre * m));
    }
}
multiplication(9);

/* FizzBuzz */
for (let p = 0; p <=20; p++){
    if (p % 3 === 0 && p % 5 === 0) {
        console.log("FizzBuzz")
} else if (p % 3 === 0) {
    console.log("Fizz")
}  else if (p % 5 === 0) {
    console.log("Buzz")
} else {
    console.log(p)
}
}

/* Compter les voyelles */
function compterVoyelle(phrase) {
    let voyelles = "aeiouyAEIOUY";
    let compteur = 0;
    for (let lettre of phrase){
        if (voyelles.includes(lettre)) {
            compteur++
        }

    }
    console.log("Il y a " + compteur + " voyelles")
}
compterVoyelle("Bonjour tout le monde !");

/* Pyramide d'étoiles */
function pyramid(size) {
    for (let o = 1; o < size; o++) {
        let espaces = " ".repeat(size - o);
        let etoiles = "*".repeat(o * 2 - 1);
        console.log(espaces + etoiles);
    }  
}
pyramid(10);

/* Jeu de devinettes */
function devinette() {
    let secret = Math.floor(Math.random() * 100) + 1;
    let tentative = 0
    while (tentative !== secret) {
tentative = parseInt(prompt("Devine le nombre entre 1 et 100"));
alert("Tu a choisis " + tentative);
}
}
devinette();