 /* Spammeur de 5 */
let numero = "5";
for (let i = 0; i < 10; i++) {
console.log('5', i);
}

/* La montée de l'escalier */
let escalier = ["1","2","3","4","5","6","7","8","9","10"];
for (let nb of escalier) {
    console.log(nb)
}

/* L'armée des nombres pairs */
for (let e = 0; e <= 20; e++){
    if (e % 2 === 0){
        console.log(e)
}
}

/* Les multiples de 3 en mission */
for (let d = 0; d <= 30; d++) {
    if (d % 3 === 0){
        console.log(d)
    }
}

/* l'oracle de la parité */
function parite() {
    let choix = prompt("Entre un nombre et je te dirai s'il est pair ou impair");
let nombre = parseInt(choix);

if (isNaN(nombre)){
    alert("Ce n'est pas un nombre valide.");
} else if (nombre % 2 === 0) {
    alert("Ton Nombre est Pair !");
} else {
    alert("Ton Nombre est Impair !");
}
}

parite();