const Handlers = require('../Handlers');

const lista = [1,2,3];
module.exports = [
    {
        method: 'POST',
        path: '/carro',
        handler:Handlers.carroHandler.agregarCarrosAsyncAwait,
        config:{
            pre: [
                {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
            ]
        },
    },
    {
        method: 'GET',
        path: '/carro',
        config:{
            pre: [
                {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
            ]
        },
        handler:Handlers.carroHandler.listarCarrosAsyncAwait
    },
    {
        method: 'PUT',
        path: '/carro/{index}',
        handler:Handlers.carroHandler.actualizarCarrosAsyncAwait,
        config:{
            pre: [
                {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
            ]
        },
    },
    {
        method: 'DELETE',
        path: '/carro/{index}',
        handler:Handlers.carroHandler.eliminarCarrosAsyncAwait,
        config:{
            pre: [
                {method: Handlers.preHandler.preValidar, assign: 'preTokenVal'}
            ]
        },
    },
    {
        method: 'POST',
        path: '/token',
        handler: Handlers.token.tokenSign
    },
    {
        method: 'GET',
        path: '/lista/{id}',
        handler: (req, h)=>{
            return {data: lista[req.params.id]};
        }
    },
    {
        method: 'GET',
        path: '/lista',
        handler: (req, h)=>{
            console.log(req.query);
            return {data: lista};
        }
    },
    {
        method: 'POST',
        path: '/lista',
        handler: (req, h)=>{
            lista.push(req.payload.data);
            return {data: lista};
        }
    },
    {
        method: 'PUT',
        path: '/lista/{index}',
        handler: (req, h)=>{
            lista[req.params.index] = req.payload.data;
            return {data: lista};
        }
    },
    {
        method: 'DELETE',
        path: '/lista/{index}',
        handler: (req, h)=>{
            lista.splice(req.params.index, 1);
            return {data: lista};
        }
    },
    {
        method: 'POST',
        path: '/usuario',
        handler: Handlers.usuarioHandler.agregarUsuario
    },
    {
        method: 'POST',
        path: '/login',
        handler: Handlers.usuarioHandler.login
    }
];