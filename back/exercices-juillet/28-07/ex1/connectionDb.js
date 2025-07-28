const { MongoClient } = require('mongodb');
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