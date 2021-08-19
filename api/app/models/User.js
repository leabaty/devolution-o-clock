<<<<<<< HEAD:api/app/models/User.js
const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../database')
=======
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres@localhost:5432/devolution');
>>>>>>> 1353f192ffbe2ca780ca09d4b2678abb6e71df08:api/Models/User.js

class User extends Model{}
User.init({
  email:DataTypes.STRING,
  password: DataTypes.STRING,
  pseudo:DataTypes.STRING,
  image_url:DataTypes.STRING,
  user_status:DataTypes.TEXT,
  lastname:DataTypes.STRING,
  firstname:DataTypes.STRING,
  phone:DataTypes.STRING,
  city:DataTypes.STRING,
  linkedin: {
    type: DataTypes.TEXT,
  },
  github: {
    type: DataTypes.TEXT,
  },
  twitter: {
    type: DataTypes.TEXT,
  },
  portfolio:{
    type: DataTypes.TEXT,
  },
  facebook: {
    type: DataTypes.TEXT,
  },
  experience:DataTypes.STRING
},{
    sequelize,
    tableName: "user"
  });
module.exports=User