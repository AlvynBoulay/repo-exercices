const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

module.exports = pool.promise();
