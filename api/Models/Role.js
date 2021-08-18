const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres@localhost:5432/devolution');

class Role extends Sequelize.Model {}
Role.init({
    label:DataTypes.STRING
},{
    sequelize,
    tableName: "user"
  });

module.export=Role;
