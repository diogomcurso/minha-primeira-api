require('dotenv').config({ path:'variaveis.env'});

const express = require('express');

const bodyParser = require ('body-parser');
const router = require('./route');
const server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json())


server.use('/api', router);

server.listen(process.env.PORT, ()=>{
console.log(`servidor rodando em: htpp://localhost:${process.env.PORT}`);
})