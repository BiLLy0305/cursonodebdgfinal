const jwt = require('jsonwebtoken');
module.exports.tokenSign = (payload)=>{
    let token = jwt.sign(req.payload.data, 
                        process.env.SECUREJWT, 
                        {expiresIn: '5d'});
    return {token};
};