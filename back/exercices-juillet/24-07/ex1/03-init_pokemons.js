
db = db.getSiblingDB("exercicesCRUD");

db.pokemons.insertMany([
  {
    name: "Eevee",
    type: ["Normal"],
    level: 15,
    attacks: ["Quick Attack", "Bite"]
  },
  {
    name: "Snorlax",
    type: ["Normal"],
    level: 30,
    attacks: ["Body Slam", "Rest"]
  },
  {
    name: "Machop",
    type: ["Fighting"],
    level: 20,
    attacks: ["Karate Chop", "Low Kick"]
  },
  {
    name: "Abra",
    type: ["Psychic"],
    level: 12,
    attacks: ["Teleport"]
  },
  {
    name: "Magikarp",
    type: ["Water"],
    level: 5,
    attacks: ["Splash"]
  },
  {
    name: "Gyarados",
    type: ["Water", "Flying"],
    level: 35,
    attacks: ["Hydro Pump", "Bite"]
  },
  {
    name: "Alakazam",
    type: ["Psychic"],
    level: 42,
    attacks: ["Psychic", "Reflect"]
  },
  {
    name: "Arcanine",
    type: ["Fire"],
    level: 40,
    attacks: ["Flamethrower", "Extreme Speed"]
  }
]);


db.trainers.insertMany([
  {
    name: "Red",
    region: "Kanto",
    pokemons: ["Pikachu", "Snorlax", "Charizard"],
    badges: ["Roche", "Cascade", "Volcano"]
  },
  {
    name: "Blue",
    region: "Kanto",
    pokemons: ["Alakazam", "Gyarados", "Arcanine"],
    badges: ["Roche", "Cascade", "Earth"]
  },
  {
    name: "Misty",
    region: "Kanto",
    pokemons: ["Staryu", "Psyduck", "Magikarp"],
    badges: ["Cascade"]
  },
  {
    name: "Brock",
    region: "Kanto",
    pokemons: ["Onix", "Geodude", "Machop"],
    badges: ["Roche"]
  },
  {
    name: "Gary",
    region: "Kanto",
    pokemons: ["Eevee", "Abra", "Gengar"],
    badges: ["Roche", "Thunder", "Rainbow"]
  }
]);



db.battles.insertMany([
  {
    trainer1: "Red",
    trainer2: "Blue",
    winner: "Red",
    location: "Indigo Plateau"
  },
  {
    trainer1: "Gary",
    trainer2: "Red",
    winner: "Red",
    location: "Pallet Town"
  },
  {
    trainer1: "Misty",
    trainer2: "Brock",
    winner: "Misty",
    location: "Cerulean City"
  },
  {
    trainer1: "Blue",
    trainer2: "Gary",
    winner: "Blue",
    location: "Celadon"
  },
  {
    trainer1: "Red",
    trainer2: "Sacha",
    winner: "Sacha",
    location: "Vermilion City"
  }
]);

