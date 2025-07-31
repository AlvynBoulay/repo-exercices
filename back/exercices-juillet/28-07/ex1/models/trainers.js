const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: {type: String, required: true },
    pokemons: [{type: String}],
    badges: [{type: String}],
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;