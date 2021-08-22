const { jwt } = require("../utils");
const { errorMessage } = require('../constants')

//le token est a mettre dans le header/BEARER lors d'une requete

module.exports={

  authenticate : (request, response,next) => {
    console.log(errorMessage)
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (token === "undefined" || !token) {
        return response.status(401).send({
            message: errorMessage.MISSING_TOKEN
        });
    }

    jwt.verifyAccessToken(token, (err, user) => {
        if (err) {
            return response.status(401).send({
                message: errorMessage.TOKEN_AUTH_FAILED,
            });
        }
        request.user = user;
        next();
    });
  }

}
