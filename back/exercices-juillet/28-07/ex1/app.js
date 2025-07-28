console.log("App.js démarré")
const express = require('express');
const app = express();
require('dotenv').config();
const { connect } = require('./connectionDb');
const pokemonRoutes = require('./routes/pokemons');


app.use(express.json());
app.use('/pokemons', pokemonRoutes);

connect().then(() => {
    app.listen(3000, () => {
        console.log('Serveur lancé sur http://localhost:3000')
    });
});