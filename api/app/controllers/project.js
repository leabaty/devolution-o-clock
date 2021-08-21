const { Project} = require("../models");
const { Op } = require("sequelize");
const {errorMessage} = require('../constants/error');
const { search } = require("../routers");

module.exports = {

    getAll: async (request, response, next) => {
        try {
          const projects = await Project.findAll();
          response.json(projects);
        } catch (error) {
            console.log(error)
        }
    },

    getOne: async (request, response) => {
      console.log('je suis avant le try')
        try {
            const project = await Project.findByPk(request.params.id);
            console.log(project);
            if(!project){
              return response.status(404).json({
              "message":"Project Not Found !"
              });
            }
           
            return response.json({project})
        } catch (error) {
          console.error(error);
          return res.status(500).send({
              message: "Internal server error. Please retry later",
          });
        }
        
    },
    //fonctionne insensible a la casse , mais pas de ILike %vol% , à voir.
    search : async (request, response) => {
        try {
          const search = request.params.search;
          console.log(search)
          const project = await Project.findAll({ where: { name: {
            [Op.iLike]: search
          }
     }});
          response.json(project);   
        } catch (error) {
            console.log(error)
        }
    },
    create : async (request, response) => {  

       try {
        const newProject = await Project.create({ 
        name:request.body.name,
        is_available:request.body.is_available,
        description:request.body.description,
        need_of_the_project:request.body.need_of_the_project,
        beginning_date:request.body.beginning_date,
        icon:request.body.icon,
        owner_id:request.body.owner_id
        });
        
        console.log(newProject);
        if (newProject) {
          return response.json({"message": "Votre projet a été créer!"});
        }
        } catch (error) {
            console.log(error) 
        }
    },
    updateOne : async (req, res, next) => {
        try {
          const projectToUpdate = await Project.findByPk(req.params.id);
          console.log(projectToUpdate)
          if (!projectToUpdate) {
              return res.status(404).json({
                  message: "project not found",
              });
          }
  
          await projectToUpdate.update({
              ...req.body,
          });
  
          return res.status(200).json({
              message: "Informations updated",
          });
      } catch (error) {
          console.error(error);
          return res.status(500).send({
              message: "Internal server error. Please retry later",
          });
      }
        next()
      },

      teamInProject: async (request, response) => {
        try {
          const user = request.params.id;
          const participatedAt = await Project.findAll({
            include:['participants'],
            where : { id : user }
          });
            response.json({participatedAt})
        } catch (error) {
            console.log(error);
            response.status(500).json({errorMessage:UNAUTHORIZED})
        }
    },

    deleteOne : async (request, response, next) => {
        try {
            const projectToDelete = await Project.findByPk(request.params.id);
            console.log(projectToDelete);
            if(!projectToDelete){
              return response.status(404).json({
              "message":"Project Not Found !"
              });
            }
            await projectToDelete.destroy()
            return response.json({"message":"Your project is deleted"})
        } catch (error) {
          console.error(error);
          return res.status(500).send({
              message: "Internal server error. Please retry later",
          });
        }
        
    },

    deleteTeamUser : async (request, response, next) => {
        try {
            
        } catch (error) {
            
        }
    }
    

}


