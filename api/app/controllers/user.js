const { User, Project, Skill} = require("../models")
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
const {jwt}=require('../utils')
const errorMessage = require('../constants/error');
const { UNAUTHORIZED } = require("../constants/error");

const userController={

    login : async (request, response) => {
        try {
          //dans l'objet request.body je veux le login et le password stocker dans une const.
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
                  return response.status(404).json({
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
              
                const userData = user.toJSON();
                const accessToken = jwt.generateAccessToken(userData);
                const refreshToken = jwt.generateRefreshToken(userData);
          

                // const tokenToSave = new Token({
                //   user_id: user.id,
                //   token: refreshToken,
                // });
          
                // await tokenToSave.save();
          
                return response.json({
                  ...userData,
                  accessToken,
                  refreshToken,
                });

        } catch (error) {
          console.log(error)
          response.status(500).json({"message" : "Veuillez tentez de vous reconnecter, cr??er un compte si vous n'en avez pas"})
        }
    },

    signUp : async (request, response) => {  
      try {
        const { email, password, pseudo, lastname, firstname} = request.body;
        
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ 
          email:email,
          password:encryptedPassword,
          pseudo:pseudo,
          lastname:lastname,
          firstname:firstname,
        });
        
        console.log(newUser.id);
        if (newUser) {

          const userData = newUser.toJSON();
          const accessToken = jwt.generateAccessToken(userData);
          const refreshToken = jwt.generateRefreshToken(userData);
        
          // const tokenToSave = new Token({
          //   user_id: user.id,
          //   token: refreshToken,
          // });
          // await tokenToSave.save();
          
            return response.status(200).json({
              ...userData,
              accessToken,
              refreshToken,
              "message": "Votre compte a ??t?? cr??er!"
            });
          }
        } catch (error) {
            console.log(error) 
        }
    },

    logout : (request, response) => {
      return response.status(200).json({token:null});
    },

    profil: async (request, response) => {
      const { user } = request;
      user.password = null;
      console.log(user)
      try {

        return response.status(200).json({
          user,
        });
      
        } catch (error) {
          console.log(error)
          response.status(500).json({"message" : "Veuillez tentez de vous reconnecter, cr??er un compte si vous n'en avez pas"})
        }
      
    },

    getAll: async (request, response, next) => {
      try {
        const users = await User.findAll();
        response.json(users);
      } catch (error) {
          console.log(error)
      }
  },

    getOne : async (request, response) => {
      console.log('je suis avant le try')
        try {
            const user = await User.findByPk(request.params.id);
            console.log(user);
            if(!user){
              return response.status(404).json({
              "message":"user Not Found !"
              });
            }
           
            return response.json({user})
        } catch (error) {
          console.error(error);
          return res.status(500).send({
              message: "Internal server error. Please retry later",
          });
        }
        
    },


    updateOne : async (request, res, next) => {
      console.log('je passe par le updateOne')
      try {
        const userToUpdate = await User.findByPk(request.params.id);
        console.log(userToUpdate)
        if (!userToUpdate) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        await userToUpdate.update({
            ...request.body,
        });
        //const result = {...request.body} cibler le champ qui a ??t?? modifier .
        return res.status(200).json({
            message: `Informations updated `
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Internal server error. Please retry later",
        });
    }
      next()
    },

    deleteOne : async (request, response) => {
      try {
          const userToDelete = await User.findByPk(request.params.id);
          console.log(userToDelete);
          if(!userToDelete){
            return response.status(404).json({
            "message":"user Not Found !"
            });
          }
          await userToDelete.destroy()
          return response.json({"message":"Your user is deleted"})
      } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Internal server error. Please retry later",
        });
      }
      
  },



    getMyCreatedProject : async (request, response, next) => {
        try {
            const owner = request.params.id
            const myProject = await Project.findAll({
              where : { owner_id : owner}
            });
            response.json({"My Created Projects": myProject})
        } catch (error) {
          console.log(error);
          response.status(500).json({errorMessage:UNAUTHORIZED})
        }
    },

    getUserSkills : async (request,response)=>{
      try {
        //ici on r??cupere l'id du user dans l'url si on veut dans un input on passe par request.body
        const user= request.params.id;
        console.log(user)
        const mySkills = await User.findOne({
          include : ['users_skills'],
          where : {id : user}
        });

        response.json({"user skills" : mySkills})

      } catch (error) {
        console.log(error)
      }
    },

}

module.exports = userController
