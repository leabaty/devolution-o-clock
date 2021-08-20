const express = require('express');

const router = express.Router();


const {mainController,userController, projectController} = require('../controllers');



//User
router.get('/',mainController.homePage);
router.get('/login',userController.login);
router.post('/login',userController.login);
router.put('/user/:id',userController.updateOne);
router.post('/user/create' ,userController.signUp);
router.get('/users' ,userController.getAll);
router.get('/user/:id' ,userController.getOne);
router.delete('/user/:id' ,userController.deleteOne);

//Projects
router.get('/projects',projectController.getAll);
router.post('/project/create', projectController.create)
router.get('/project/:id' ,projectController.getOne);
router.put('/project/:id',projectController.updateOne);
router.delete('/project/:id' ,projectController.deleteOne);


router.get('/search/:query',mainController.searchProject);
router.post('/projects/:search',projectController.search);








module.exports=router


