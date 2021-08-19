const { Op } = require("sequelize");


const mainController = {
  homePage : (req, res) => {
    res.json({"Project": "Dévolution",
    "version":"0.1",
    "Product Owner" : "Léa-B",
    "Lead-Dev Front" : "Mickael-B",
    "Git Master" : "Jonathan-D ",
    "Lead-Dev Back" : "Badara-S"})  
  },

  searchProject :async (req, res) => {

    // console.log(req.params.query +'.query');  
    try {
        const inputSearchParam = await req.params.query;
        const inputSearchQuery = await req.query;
        console.log(inputSearchQuery)
        res.json({"message":"vous avez tapé "+ inputSearchParam})

        // const search = await Project.findAll({
        //   where : {
        //     [Op.or]:{
        //       value : {
        //         [Op.iLike]: name
        //       }
        //     }
        //   }
        // })
      } catch (error) {
        console.log(error)
      }
      
    }


};

module.exports=mainController
