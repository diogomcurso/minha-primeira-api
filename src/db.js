require('dotenv').config({ path:'variaveis.env' });

const mysql = require('mysql2');

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if (error) throw error;
    console.log(`conectado ao banco de dados: ${process.env.DB_NAME}`)
});

module.exports = connection;