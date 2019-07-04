require('dotenv').config();
const Hapi = require('hapi');
const Routes = require('./Routes');
const db = require('./Config/database').db;

const server = Hapi.Server({
    host: 'localhost',
    port: 8000
});


server.ext('onPreResponse', (request,h)=>{
    if(request.response != null && request.response.header != null){
        request.response.header('Access.Control-Allow-Origin','*');
        request.response.header('Access.Control-Allow-Headers','Content-type, token');
        request.response.header('Access.Control-Allow-Methods','GET,POST,PUT,DELETE');
    }
    return h.continue;
});


server.route(Routes);


async function start(){
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
}

start();