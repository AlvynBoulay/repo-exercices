const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    trainer1: { type: String, required: true },
    trainer2: {type: String, required: true },
    winner: {type: String, required: true },
    location: {type: String, required: true },
});

const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;