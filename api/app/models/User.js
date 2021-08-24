const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../database')

class User extends Model{}
User.init({
  email: {
    type :DataTypes.STRING
  },
  password: {
    type :DataTypes.STRING
  },
  pseudo: {
    type :DataTypes.STRING
  },
  image_url: {
    type :DataTypes.STRING
  },
  user_status: {
    type :DataTypes.STRING
  },
  lastname: {
    type :DataTypes.STRING
  },
  firstname: {
    type :DataTypes.STRING
  },
  phone: {
    type :DataTypes.STRING
  },
  city: {
    type :DataTypes.STRING
  },
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
