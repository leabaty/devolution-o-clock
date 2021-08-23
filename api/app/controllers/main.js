const { Op } = require("sequelize");
const { Project} = require('../models')


const mainController = {

    homePage: async (request, response, next) => {
      try {
        const projects = await Project.findAll({ limit: 2 })
        response.json(projects);
      } catch (error) {
          console.log(error)
      }
  },


   

  searchProject :async (req, res) => {

    //console.log(req.params.query +'.query');  
    try {
        const inputSearchParam = await req.params.query;
        const inputSearchQuery = await req.query;
        console.log(inputSearchQuery)
        res.json({"message":"vous avez tapé "+ inputSearchParam})

        const search = await Project.findAll({
          where : {
            [Op.or]:{
              value : {
                [Op.iLike]: inputSearchParam
              }
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
      
    }


};

module.exports=mainController
