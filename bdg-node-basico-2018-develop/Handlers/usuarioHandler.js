
const Usuario = require ('../Models/Usuario');
const jwt = require('jsonwebtoken');
const token = require('./token');

module.exports.agregarUsuario = async (req, h)=>{
   try{
        const usuarioAgregado = await Usuario.create(req.payload.data);
        //console.log('Usuario agregado', usuarioAgregado);
   }catch(error){

   }
}

module.exports.login = async (req,h)=>{
    try{
        const usuario = await Usuario.findOne({
            user: req.payload.data.user,
            password: req.payload.data.password
        });

        if(usuario === null){
            return{
                error: 'Credenciales incorrectas'
            }
        }

        const newToken = token.tokenSign({user: req.payload.data.user});

        if(newToken.token){
            return{
                data:newToken
            }
        }else{
            return{
                error: newToken
            }
        }
    }catch(error){
        return h.response(error);

    }
}