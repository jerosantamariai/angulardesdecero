// Importaciones generales
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Creamos el servidor de express
const app = express();

// Conexión BBDD

dbConnection();

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Template
app.use( express.static('public') );

// Rutas
app.use( '/api/auth', require( './routes/auth' ) );








// Escuchar Servidor
app.listen( process.env.PORT , ( ) => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
});