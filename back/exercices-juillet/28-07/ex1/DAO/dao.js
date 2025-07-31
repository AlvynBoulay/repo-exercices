const Pokemon = require('../models/pokemons');

async function findAll() {
    return await Pokemon.find();
}

async function findById(id) {
    return await Pokemon.findById(id);
}

async function create(pokemon) {
    const newPokemon = new Pokemon(pokemon);
    return await newPokemon.save();
}

async function update(id, data) {
    return await Pokemon.findByIdAndUpdate(id, data, { new: true });
}

async function remove(id) {
    const result = await Pokemon.findByIdAndDelete(id);
    return result !== null;
}

module.exports = { findAll, findById, create, update, remove };

/* const { getDb } = require('../connectionDb');
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

module.exports = { findAll, findById, create, update, remove}; */