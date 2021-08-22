const { Op } = require("sequelize");


const mainController = {
  homePage : (req, res) => {
    res.json([{
      id: 1,
      name: 'Recettes magiques',
      status:'ouverte',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos nisi mollitia, minus maxime iusto deserunt ducimus ut consequatur reiciendis pariatur suscipit et voluptatibus odio earum in voluptatem fugit aspernatur.',
      icon: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'John Deuf',
    },
    {
      id: 2,
      name: 'Mécanique',
      status:'fermée',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos nisi mollitia, minus maxime iusto deserunt ducimus ut consequatur reiciendis pariatur suscipit et voluptatibus odio earum in voluptatem fugit aspernatur.',
      icon: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Maude Zarella',
    },
    {
      id: 3,
      name: 'Devolution',
      status:'ouverte',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos nisi mollitia, minus maxime iusto deserunt ducimus ut consequatur reiciendis pariatur suscipit et voluptatibus odio earum in voluptatem fugit aspernatur.',
      icon: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Guy Tare',
    },
    {
      id: 4,
      name: 'Engrainons-nous',
      status:'fermée',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos nisi mollitia, minus maxime iusto deserunt ducimus ut consequatur reiciendis pariatur suscipit et voluptatibus odio earum in voluptatem fugit aspernatur.',
      icon: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Sacha Touille',
    },
    {
      id: 5,
      name: 'Vive le sport',
      status:'ouverte',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos nisi mollitia, minus maxime iusto deserunt ducimus ut consequatur reiciendis pariatur suscipit et voluptatibus odio earum in voluptatem fugit aspernatur.',
      icon: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      author: 'Douglas Alavanille',
    }])  
  },

  searchProject :async (req, res) => {

    //console.log(req.params.query +'.query');  
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
