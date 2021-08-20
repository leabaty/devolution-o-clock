const { User} = require("../models")
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
const errorMessage = require('../constants/error');

const userController={

    login : async (request, response) => {
        try {
          const { login, password } = request.body;

          if (!login || !password) {
            return response.status(400).json({
              message: errorMessage.MISSING_CREDENTIALS,
            });
          }
          const user = await User.findOne({
                  where: {
                    [Op.or]: {
                      pseudo: {
                        [Op.iLike]: login,
                      },
                      email: {
                        [Op.iLike]: login,
                      },
                    },
                  },
                });
                if (!user) {
                  return res.status(404).json({
                    message: errorMessage.EMAIL_NOT_FOUND,
                  });
                };
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                  return response.status(400).json({
                    message: errorMessage.PASSWORD_NOT_MATCH,
                    login,
                  });
                }
                return response.json(user)
      // si tout va bien, on met l'utilisateur en session...
      // req.session.user = user;
      // //... mais on supprime son mdp !
      // delete req.session.user.password;
        } catch (error) {
          console.log(error)
          response.status(500).json({"message" : "Veuillez tentez de vous reconnecter, créer un compte si vous n'en avez pas"})
        }
    },

    signUp : async (request, response) => {  

      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(request.body.password, salt);
       try {
        const newUser = await User.create({ 
        email:request.body.email,
        password:encryptedPassword,
        pseudo:request.body.pseudo,
        lastname:request.body.lastname,
        firstname:request.body.firstname,
        });
        
        console.log(newUser);
        if (newUser) {
          return response.json({"message": "Votre compte a été créer!"});
        }
        } catch (error) {
            console.log(error) 
        }
    },

    logout : async (request, response) => {
       try {
            
        } catch (error) {
            
        }
    },

    getOneUser : async (request, response, next) => {
        try {

        } catch (error) {
            
        }
    },

    updateOneUser : async (request, response, next) => {
        try {
            
        } catch (error) {
            
        }
    },

    deleteOneUser : async (request, response, next) => {
        try {
            
        } catch (error) {
            
        }
    },

    getMyParticipatedProject: async (request, response, next) => {
        try {
            
        } catch (error) {
            
        }
    },

    getMyCreatedProject : async (request, response, next) => {
        try {
            
        } catch (error) {
            
        }
    },


}

module.exports = userController
