require('dotenv').config();
const {User,Project , Skill ,Role} = require('./app/models');

// (async ()=>{
//   const users = await User.findAll()
//   console.log(users)
// })()

(async ()=>{

  const projects = await Role.findAll({
    include: { all: true },
  });
  console.log(projects);
})()

