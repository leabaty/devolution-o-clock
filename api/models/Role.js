const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../database')

class Role extends Model {} 
Role.init({
    label:DataTypes.STRING
},{
    sequelize,
    tableName: "role"
  });

module.exports=Role;
