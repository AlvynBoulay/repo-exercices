const { getDb } = require('../connectionDb');
const { ObjectId } = require('mongodb');

const collection = () => getDb().collection('pokemons');

function findAll() {
    return collection().find().toArray();
}

function findById(id) {
    return collection().findOne({ _id: new ObjectId(id) });
}

async function create(pokemon) {
    const result = await collection().insertOne(pokemon);
    return { _id: result.insertedId, ...pokemon };
}

async function update(id, data) {
    await collection().uppdateOn({ _id: new ObjectId(id) },  {$set: data });
    return findById(id); // PAS DE AWAIT
}

async function remove(id) {
    const result = await collection().deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
}

module.exports = { findAll, findById, create, update, remove};