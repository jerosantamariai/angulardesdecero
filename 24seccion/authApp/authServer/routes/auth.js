const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();


// Crear un nuevo Usuario
router.post( '/register', crearUsuario );


// Login Usuario
router.post( '/login', loginUsuario );


// Validar y Revalidar Token
router.get( '/renew', revalidarToken );




module.exports = router;