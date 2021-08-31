const express = require('express');

const router = express.Router();


const {mainController,userController, projectController} = require('../controllers');
const {tokenMiddleware}= require('../middlewares')


//User
router.get('/',mainController.homePage);
router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.get('/me', tokenMiddleware.authenticate,userController.profil);
router.put('/user/:id',tokenMiddleware.authenticate ,userController.updateOne);
router.post('/user/create' ,userController.signUp);
router.get('/users' ,tokenMiddleware.authenticate ,userController.getAll);
router.get('/user/:id' ,tokenMiddleware.authenticate ,userController.getOne);
router.get('/user/:id/myprojects',tokenMiddleware.authenticate ,userController.getMyCreatedProject);

router.get('/user/:id/skills',tokenMiddleware.authenticate ,userController.getUserSkills);
router.delete('/user/:id' ,tokenMiddleware.authenticate ,userController.deleteOne);

//Projects
router.get('/projects',projectController.getAll);
router.post('/project/create', tokenMiddleware.authenticate ,projectController.create)
router.get('/project/:id' ,tokenMiddleware.authenticate ,projectController.getOne);
router.put('/project/:id',tokenMiddleware.authenticate ,projectController.updateOne);
router.delete('/project/:id' ,tokenMiddleware.authenticate ,projectController.deleteOne);
//router.get('/project/:id/participated',tokenMiddleware.authenticate ,projectController.teamInProject);
router.get('/project/:id/partipants',)

router.get('/search/:query',tokenMiddleware.authenticate ,mainController.searchProject);
router.post('/projects/:search',tokenMiddleware.authenticate ,projectController.search);

module.exports=router
