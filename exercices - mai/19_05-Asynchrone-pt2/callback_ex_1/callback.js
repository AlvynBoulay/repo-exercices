function saluer() {
    console.log("Bonjour tout le monde");
}

function executerFonction(fonction) {
    fonction();
}

executerFonction(saluer);

function direBonjour(nom) {
    console.log(`Bonjour ${nom}`);
}

function direAurevoir(nom) {
    console.log(`Au revoir ${nom}`);
}

function accueillir(nom, action) {
    action(nom);
}

/* Exemple d'utilisation */
accueillir("Alvyn", direBonjour);
accueillir("Roger", direAurevoir);


function poserQuestion(question, ouiCallback, nonCallback) {
    if (confirm(question)) {
        ouiCallback();
    } else {
        nonCallback();
    }
}

function reponseoui() {
    alert("Super choix !");
}

function reponsenon() {
    alert("Dommage...");
}

/* Exemple d'utilisation */
poserQuestion("Veux tu apprendre le javascript ?", reponseoui, reponsenon);

function animerMots(mots, callback) {
    let index = 0;

    function afficherMot() {
        if (index < mots.length) {
            console.log(mots[index]);
            index++;
            setTimeout(afficherMot, 1000);
        } else {
            callback();
        }
    }

    afficherMot();
}

/* Exemple dutilisation */
animerMots(["Bonjour", "tout", "le", "monde"], () => {
    console.log("Animation terminée !")
});