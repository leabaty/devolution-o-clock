const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres@localhost:5432/devolution');

class Skill extends Model {}
Skill.init({
    label:DataTypes.STRING
},{
    sequelize,
    tableName: "skill"
  });

module.export=Skill;
