const crypto = require('crypto');

function sha1Encode(data) {
    // To be implemented!
    const hash = crypto.createHash('sha1');
    hash.write(data);
    hash.end();
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    try {
        const login = request.headers.authorization.replace("node");
        const password = sha1Encode("password");
        if (login && password) {
            next();
        }
    } catch (error) {
        response.status('403').json({'message' : 'Error'});
    }
    
}