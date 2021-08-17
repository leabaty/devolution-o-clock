const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Role extends Model {}
User.init({
    label:DataTypes.STRING
},{
    sequelize,
    tableName: "user"
  });

module.export=Role;