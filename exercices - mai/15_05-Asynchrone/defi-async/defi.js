/* Defi 1, afficher un msg aprés 3 sec */
setTimeout(function() {
    console.log("3 secondes sont passées !");
}, 3000);


/* Défi 2, Double message diféré */
console.log("début du script");
setTimeout(function() {
    console.log("Message 1 (1sec)");
}, 1000);
setTimeout(function() {
    console.log("Message 2 (3sec)");
}, 3000);

/* Defi 3, bouton charger */
document.getElementById("btnCharger").addEventListener("click", function() {
    document.getElementById("contenu").textContent = "Chargement en cours...";
    setTimeout(function() {
        document.getElementById("contenu").textContent = "Contenu chargé avec succès";
    }, 2000);
});

/* Défi 4, le chronomètre */
let compteur = 0;
let intervalId = null;
const compteurEl = document.getElementById("compteur");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            compteur++;
            compteurEl.textContent = compteur;
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});