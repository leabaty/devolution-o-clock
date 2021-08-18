const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Skill extends Model {}
User.init({
    label:DataTypes.STRING
},{
    sequelize,
    tableName: "skill"
  });

module.export=Skill;