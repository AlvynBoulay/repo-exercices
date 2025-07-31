const express = require('express');
/* const { ObjectId } = require('mongodb') */
const { getDb } = require('../connectionDb')
const router = express.Router();
const mongoose = require('mongoose');

const Battle = require('../models/battles');
const Pokemon = require('../models/pokemons');
const Trainer = require('../models/trainers');

// GET /pokemons
router.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Erreur lors de la récupération des pokemons'});
    }
});
/* router.get('/', async (req, res) => {
    try {
        const pokemons = await getDb().collection('pokemons').find().toArray();
        res.json(pokemons);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Erreur lors de la récupération des pokemons'});
    }
});
 */

// GET /pokemons/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await Pokemon.findById(id);
        if (!pokemon) return res.status(404).json({ error : 'Pokemon introuvable' });
        res.json(pokemon)
    } catch (err) {
        res.status(400).json({ error: 'ID Invalide' });
    }
});
/* router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await getDb().collection('pokemons').findOne({_id: new ObjectId(id) });
        if (!pokemon) return res.status(404).json({ error : 'Pokemon introuvable' });
        res.json(pokemon)
    } catch (err) {
        res.status(400).json({ error: 'ID Invalide' });
    }
}); */

// POST /pokemons
router.post('/', async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        const savedPokemon = await newPokemon.save();
        res.status(201).json({ insertedId: savedPokemon._id });
    } catch (error) {
        console.error('Erreur en sauvegardant le Pokemon', error);
        res.status(400).json({ error: 'Erreur lors de l’ajout du pokémon', details: error.message });
    }
});
/* router.post('/', async (req, res) => {
    const newPokemon = req.body;
    try {
        const result = await getDb().collection('pokemons').insertOne(newPokemon);
        res.status(201).json({ insertedId: result.insertedId });
    } catch (error) {
        console.error('Erreur en sauvegardant le Pokemon', error);
        res.status(400).json({ error: 'Erreur lors de l’ajout du pokémon', details: error.message  });
    }
}); */

// PATCH /pokemons/:id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const result = await Pokemon.findByIdAndUpdate(id, updates);
        if (!result) return res.status(404).json({ error : 'Pokemon introuvable' });
        res.json({ message: 'Pokemon modifié' });
    } catch (err) {
        res.status(400).json({ error: 'ID Invalide' });
    }
});
/* router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const result = await getDb().collection('pokemons').updateOne(
            {_id: new ObjectId(id) },
            { $set: updates }
        );
        if (result.matchedCount === 0) return res.status(404).json({ error : 'Pokemon introuvable' });
        res.json({ message: 'Pokemon modifié' });
    } catch (err) {
        res.status(400).json({ error: 'ID Invalide' });
    }
}); */



// DELETE /pokemons/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Pokemon.findByIdAndDelete(id);
        if (!result) return res.status(404).json({ error: 'Pokemon introuvable' });
        res.json({ message: 'Pokemon supprimé' });
    } catch (err) {
        res.status(400).json({ error: 'ID invalide', details: err.message });
    }
});
/* router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getDb().collection('pokemons').deleteOne({_id: new ObjectId(id) });
        if (result.deletedCount === 0) return res.status(404).json({ error : 'Pokemon introuvable' });
        res.json({ message: 'Pokemon Supprimé'});
    } catch (err) {
        res.status(400).json({ error: 'ID Invalide' });
    }
});
 */
module.exports = router;