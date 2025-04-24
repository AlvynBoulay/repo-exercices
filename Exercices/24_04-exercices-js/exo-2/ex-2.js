let simpleQuote = 'Bonjour tout le monde';
let doubleQuote = "JavaScript est génial";
let templateLiteral = `Il fait ${2 + 2} degrés`;

console.log(simpleQuote);
console.log(doubleQuote);
console.log(templateLiteral);

console.log("Longueur de 'simpleQuote':", simpleQuote.length);

console.log("En majuscules:", simpleQuote.toUpperCase());
console.log("En minuscules:", doubleQuote.toLowerCase());
console.log("Sans espaces:", "   Hello   ".trim());

console.log("Premier caractère de 'JavaScript':", 'JavaScript'.charAt(0));
console.log("Position de 'world':", 'Hello world!'.indexOf('world'));
console.log("Position de 'z' dans 'JavaScript':", 'JavaScript'.indexOf('z'));

let sentence = 'Manipulations de chaînes';
console.log("Avec slice:", sentence.slice(0, 12));
console.log("Avec substring:", sentence.substring(0, 12));

let phrase = 'Bonjour tout le monde';
console.log(phrase.replace('Bonjour', 'Salut'));

let text = 'ToutouMédor est gentil. ToutouMédor est gourmand.';
console.log(text.replace(/ToutouMédor/g, 'Médor'));

let data = 'pomme,banane,cerise';
console.log(data.split(','));
console.log('JavaScript est flexible'.includes('flexible'));

let greeting = 'Bonjour, ' + 'le monde!';
console.log(greeting);

let name = 'Médor';
let welcomeMessage = `Bienvenue à ${name}, notre nouveau toutou!`;
console.log(welcomeMessage);