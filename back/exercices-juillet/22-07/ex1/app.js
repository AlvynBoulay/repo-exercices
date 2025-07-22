const mysql = require('mysql2');
require('dotenv').config()
const express = require('express');
const app = express()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

connection.query('SELECT * FROM films', (err, results) => {
    if (err) throw err;
    console.log(results);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}}`);
});