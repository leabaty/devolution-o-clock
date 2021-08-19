const { User} = require("../Models")
const bcrypt = require('bcrypt');

const userController={

    login : async (request, response) => {
      console.log(request.body)
        try {
          const user = await User.findOne({
            where: {
              email:request.query.email,
              // password:request.query.password,
            }
          });
          console.log(user.pseudo+'commentaire')
          if (!user) {
            return response.json({"error": "Cet email n'existe pas."});
          } if(user){
            response.json({"message":"vous etes bien "+ user.pseudo})
          }

      //     const validPwd = await bcrypt.compare(request.query.password, user.password);
      // if (!validPwd) {
      //   return response.json({"error": "Ce n'est pas le bon mot de passe."
      //   });
      // }
        } catch (error) {
          console.log(error)
          response.status(500).json({"message" : "Veuillez tentez de vous reconnecter, créer un compte si vous n'en avez pas"})
        }
    },

    signUp : async (request, response, next) => {  
       try {
        const user = await User.build({ name:"newUserBySequelize",
        password:"wokey",
        pseudo:request.query.pseudo,
         
        });console.log(req.body);
        if (!user) {
          return response.json({"error": "Cet email n'existe pas."});
        }
        } catch (error) {
            
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
