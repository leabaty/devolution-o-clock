
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres@localhost:5432/devolution');

const User = require('./User');
const Project = require ('./Project');
const Role = require ('./Role');
const Skill = require('./Skill');

//revoir les tables de liaisons et les clés étrangéres !!!! 

// User.hasMany(Project,{
//   foreignKey: "user_id",
//   as : "projects"
// });

// User.belongsTo(Role, {
//     foreignKey : "role_id",
//     as :"role"
// });

// Role.hasMany(User,{
//     foreignKey:"role_id",
//     as :"users"
// });

// Project.belongsToMany(User,{
//     as : "participant_id",
//     through: 'user_participate_project',
//     foreignKey: 'project_id',
//     otherKey: 'user_id'
// });


// Skill.belongsToMany(User,{
//     as:"users_skills",
//     through :"user_know_skill",
//     foreignKey:'skill_id',
//     otherKey:'user_id'
// });

// User.belongsToMany(Skill,{
//   as:"users_skills",
//   through :"user_know_skill",
//   foreignKey:'user_id',
//   otherKey:'skill_id'
// });


module.exports = {User,Skill,Project,Role}
