const { response, request } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async ( req, res = response ) => {

    const { name, email, password } = req.body;

    try {
    // Verificar email
        const usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo, prueba con otro'
            });
        }

    // Crear usuario con el modelo
    const dbUser = new Usuario( req.body );

    // Encriptar password
    const salt = bcrypt.genSaltSync(10);
    dbUser.password = bcrypt.hashSync( password, salt );

    // Generar JWT
    const token = await generarJWT( dbUser.uid, name )

    // Crear Usuario en BD
    await dbUser.save();

    // Generar respuesta
    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name,
        token
    });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Algo salio mal"
        });
    }    
}


const loginUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const dbUser = await Usuario.findOne({ email });

        if ( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'Te equivocaste en algo'
            });
        }

        // Confirmamos Password

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Te equivocaste en algo'
            });
        }

        // Generar el JWT
        const token = await generarJWT( dbUser.uid, dbUser.name );

        // Respuesta Correcta
        return res.json({
            ok: true,
            uid: dbUser.uid,
            name: dbUser.name,
            token
        });

    } catch (error) {
        console.log( error );
        return res.status(500).json({
            ok: false,
            msg: 'Todo mal, envia un correo al admin'
        });
    }

    // return res.json({
    //     ok: true,
    //     msg: "Login de usuario"
    // });

}


const revalidarToken = async( req, res = response ) => {

    const { uid, name } = req;

    const token = await generarJWT( uid, name );


    


    return res.json({
        ok: true,
        uid,
        name,
        token
    });

}







module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}