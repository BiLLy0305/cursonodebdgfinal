const jwt = require('jsonwebtoken');

module.exports.preValidar = (request)=>{  
    try {     
        const {headers} = request;
        let verify = jwt.verify(headers.token, process.env.SECUREJWT);
        if(verify){
            return 1;
        }
        return 'Token incorrecto';   
    } catch (error) {
        return error.message;
    }
}