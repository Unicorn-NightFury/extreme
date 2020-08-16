const jwt = require('jsonwebtoken'),
      expressJwt = require('express-jwt')

const SECRECT = '404wefound_uni',
      EXPIRES_IN = 60 * 60

const createToken = (username, password) => {
    const token = jwt.sign({
        username, password
    },
    SECRECT,
    {
        expiresIn: EXPIRES_IN
    });

    return token;
}

const ejwt = expressJwt({
    secret: SECRECT,
    algorithms: ["HS256"],
    credentialsRequired: false
}).unless({
    path: ['/', '/api/login', '/login', '/api/sign']
})


module.exports = {
    createToken,
    ejwt
}