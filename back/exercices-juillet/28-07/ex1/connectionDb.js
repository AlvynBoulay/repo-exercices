const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(process.env.CONNECTDB);
        console.log('Connecté a MongoDB avec Mongoose')
    } catch (err) {
        console.error('Erreur connexion MongoDB (mongoose):', err);
    }
}

module.exports = { connect }; 


/* const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.CONNECTDB);
let db;

async function connect() {
    try {
    await client.connect();
    db = client.db('exercicePokemon');
    console.log('Connecté à MongoDB');
    } catch (err) {
        console.log(err);
    }
}

function getDb() {
    return db;
}

module.exports = { connect, getDb }; 
*/
