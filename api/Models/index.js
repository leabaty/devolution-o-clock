const User = require('./User');
const Project = require ('./Project');
const Role = require ('./Role');
const Skill = require('./Skill');

User.hasMany(Skill, {
    foreignKey: "user_id",
    as: "skills"
});

User.hasMany(Project, {
    foreignKey: "user_id",
    as : "projects"
});

User.belongsTo(Role, {
    foreignKey : "role_id",
    as :"role"
});

Role.hasMany(User,{
    foreignKey:"role_id",
    as :"users"

})

Project.belongsToMany(User,{
    as : "participant_id",
    through: 'user_participate_project',
    foreignKey: 'project_id',
    otherKey: 'user_id'
})

Skill.belongsToMany(User,{
    as:"users_skilss",
    through :"user_know_skill",
    foreignKey:'skill_id',
    otherKey:'user_id'
})







