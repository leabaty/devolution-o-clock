const express = require('express');

const router = express.Router();


const {mainController,userController} = require('../controllers');




router.get('/',mainController.homePage);
router.get('/login', userController.login);
router.post('/login', userController.login);
router.post('/create' , userController.signUp);
router.get('/search/:query', mainController.searchProject);

module.exports=router
