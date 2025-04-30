/* 1 - Création et accès au tableaux */
let animaux = ["chien", "chat", "lapin"];
animaux[0] = 'hamster';
console.log(animaux)
let couleurs = ["rouge", "vert", "bleu"];
console.log(couleurs[2])

/* 2 - Afficher les éléments d'un tableau */
animaux[3] = 'perroquet';
animaux.splice(0);
console.log(animaux.includes(1));
console.log(animaux.join(" "));

/* 3 - Taille d'un Tableau */
let tbnombre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(tbnombre,length);

/* 4 -  Supprimer les doublons*/
let valeursDouble = ["1", "2", "2", "3", "4", "4", "5"];
function suppValeursDouble(valeursDouble) {
let unique = {};
valeursDouble.forEach(function(i) {
    if(!unique[i]) {
        unique[i] = true;
    }
});
return Object.keys(unique);
}
uniqueValeur = suppValeursDouble(valeursDouble)
console.log(uniqueValeur)

/* 5 - Afficher un tableau sous forme de chaîne */
function displayArray(){
    let mots = ['Pomme', 'Banane', 'Abricot', 'Cerise'];
    return mots.join(' ');
}
console.log(displayArray());

/* 6 - Afficher avec "et" avant le dernier élément */
function displayArray2(array2) {
    if (array2.length === 0) return '';
    if (array2.length === 1) return array2[0];
    return array2.slice(0, -1).join(', ') + ' et ' + array2[array2.length - 1];
}
console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise']));

/* 7 - Affichage conditionnel avec booléen*/
let motArray = ['Pomme', 'Banane', 'Abricot', 'Cerise'];
function displayArray3(motArray, useAnd){
    if (motArray.length === 0) {
        return '';
    } 
    if (motArray.length === 1) {
        return motArray[0];
    }
    if (useAnd) {
        let debut = motArray.slice(0, motArray.length - 1);
        let fin = motArray[motArray.length - 1];
        return debut.join(', ') + ' et ' + fin;
    } else {
        return motArray.join(', ');
    }
}
console.log(displayArray3(motArray, true));
console.log(displayArray3(motArray, false));

/* 8 - Trier les mots d'une chaîne */
let motsepare = "je suis en train d'apprendre le JavaScript";
function sortWordsInString(motsepare, desc = false) {
    let mots = motsepare.split(' ');
    mots.sort(function(a, b) { 
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
if (desc) {
    mots.reverse();
}
return mots.join(' '); 
}
let seprare = sortWordsInString(motsepare);
console.log(seprare);

/* 9 - Filtrer et multiplier les nombres pairs */
let nombres = [1, 2, 3, 4, 5, 6];
let resultat = nombres.filter(nombre => nombre % 2 === 0) 
.map(nombre => nombre * 2);
console.log(resultat);

/* 10 - Arrondir les nombres vers le bas */
function arrondir(bas) {
    return bas.map(nbs => Math.floor(nbs));
}
let nbs = [3.7, 8.4, 2.1, 5.9];
let resultat2 = arrondir(nbs);
console.log(resultat2);

/* 11 - Somme des arrondis */
function sumOfArray(somme) {
    return somme.map(valeur => Math.floor(valeur))
    .reduce((total, currentvalue) => total + currentvalue, 0);
}
let valeurs = [3.7, 8.4, 2.1, 5.9];
let resultat3 = sumOfArray(valeurs);
console.log(resultat3);

/* 12 - Moyenne des arrondis */
function averageOfArray(valeur2) {
let totalArrondis = valeur2.map(decimal => Math.floor(decimal))
.reduce ((sommeTotale, decimalActuel) => sommeTotale + decimalActuel, 0);
return totalArrondis / valeur2.length;
}
let finalValeur = [3.7, 8.4, 2.1, 5.9];
let moyenne = averageOfArray(finalValeur);
console.log(moyenne);