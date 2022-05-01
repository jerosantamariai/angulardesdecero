const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();


// Crear un nuevo Usuario
router.post( '/register', [
    check('name', 'El nombre es obligatorio!').not().isEmpty(),
    check('email', 'El email es obligatorio!').isEmail(),
    check('password', 'El password es obligatorio!').isLength({ min:6 }),
    validarCampos
],crearUsuario );


// Login Usuario
router.post( '/login', [
    check('email', 'El email es obligatorio!').isEmail(),
    check('password', 'El password es obligatorio!').isLength({ min:6 }),
    validarCampos
], loginUsuario );


// Validar y Revalidar Token
router.get( '/renew', revalidarToken );




module.exports = router;