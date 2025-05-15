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