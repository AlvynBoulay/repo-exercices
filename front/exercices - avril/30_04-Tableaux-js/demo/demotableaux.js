/* 1 : Création d'un tableau */
let fruits = ["pomme", "poire", "abricot"];
console.log(fruits.length);
console.log(fruits[1]);
fruits[6] = 'mangue';
console.log(fruits);
console.log(fruits[18]);


/* 2 : Boucles sur les tableaux */
let array = [1, 2, 3, 2, 1];
for (let index = 0; index < array.length; index++) {
    console.log("boucle classique", array[index]);
}
for (let index = array.length - 1; index >= 0; index--) {
    console.log('boucle--', array[index]);
}
let estSymetrique = true;
for (let i = 0; i < (array.length - 1) / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]){
        estSymetrique = false;
        break;
    }
}
console.log(estSymetrique ? 'Symétrique' : 'Pas symétrique');


/* 3 : Spread operator */
const numberArray = [1, 23, 38, 3, 89, 8];
const arrCopy = [...numberArray];
arrCopy[1] = 1;
console.log('array de base', numberArray);
console.log('array modifié', arrCopy);


/* 4 : La méthode map() */
function map(arr) {
    const modifiedArr = [];
    arr.forEach((element) => {
        modifiedArr.push(element * 2);
    });
return modifiedArr;;
}
console.log('map result', map(numberArray));
const mappedArray = numberArray.map((element) => {
    return element * 2;
});
console.log('map function', mappedArray);


/* 5 : La méthode filter() */
const filteredArray = numberArray.filter((number) => {
    return number >= 10;
});
const pairArray = numberArray.filter((number) => {
return number % 2 === 0;
});
console.log('mon array filtré >10', filteredArray);
console.log('mon array de pair', pairArray);


/* 6 : la méthode reduce() */
const arrayToReduce = [1, 2, 3, 4];
const arrayReduced = arrayToReduce.reduce((acc, currentValue) => {
return acc + currentValue;
}, 2);
console.log('mon array réduit', arrayReduced);
const fruitsToCount = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];
const compte = fruitsToCount.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc; 
}, {});
console.log(compte);