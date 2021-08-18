const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  pseudo:DataTypes.STRING,
  image_url:DataTypes.STRING,
  user_status:DataTypes.ARRAY,
  lastname:DataTypes.STRING,
  firstname:DataTypes.STRING,
  phone:DataTypes.STRING,
  city:DataTypes.STRING,
  links:DataTypes.ARRAY,
  experience:DataTypes.STRING,



},{
    sequelize,
    tableName: "user"
  });

  module.exports=User