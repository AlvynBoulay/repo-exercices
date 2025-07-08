const person = {
name : "Alice",
age : 30, 
address: {
city: "Paris",
zip:"75015"
}
};

// faire une copie
const person2 = Object.assign({}, person); 
// copie profonde
const person3 = JSON.parse(JSON.stringify(person));
// modif de la copie
person2.address.city = "Azur";
person3.address.city = "Soustons"; 

// test
console.log("person.adress.city =", person.address.city);
console.log("person2.adress.city =", person2.address.city);
console.log("person3.adresse.city =", person3.address.city);