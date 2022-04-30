// Importamos express
const express = require('express');

// Creamos el servidor de express
const app = express();

// Rutas
app.use( '/api/auth', require( './routes/auth' ) );








// Escuchar Servidor
app.listen( 4000, ( ) => {
    console.log(`Servidor corriendo en el puerto ${ 4000 }`)
});