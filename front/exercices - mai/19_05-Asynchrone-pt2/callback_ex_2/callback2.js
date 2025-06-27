let secondes = 0;
let intervalID = null;

const affichage = document.getElementById("affichage");
const btnDemarrer = document.getElementById("demarrer");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

function mettreAJourAffichage() {
    let texte = (secondes === 1) ? "1 seconde" : secondes + " secondes";
    affichage.textContent = "Temps : " + texte;
}

btnDemarrer.addEventListener("click", function () {
    if (intervalID === null) {
        intervalID = setInterval(function () {
            secondes++;
            mettreAJourAffichage();
        }, 1000);
    }
});

btnPause.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null;
});

btnReset.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null;
    secondes = 0;
    mettreAJourAffichage();
});