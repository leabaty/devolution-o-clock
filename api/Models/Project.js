const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Project extends Model {}
Project.init({
    name:DataTypes.STRING,
    project_status:DataTypes.BOOLEAN,
    project_description:DataTypes.STRING,
    need_of_the_project:DataTypes.STRING,
    beggining_date:DataTypes.DATE,
    icon:DataTypes.STRING
},{
    sequelize,
    tableName: "project"
  });

module.export=Project;