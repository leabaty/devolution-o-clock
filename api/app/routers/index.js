<<<<<<< HEAD:api/app/routers/index.js
=======
require('dotenv').config();

>>>>>>> 1353f192ffbe2ca780ca09d4b2678abb6e71df08:api/Router/router.js
const express = require('express');

const router = express.Router();


const {mainController,userController} = require('../controllers');




router.get('/',mainController.homePage);
router.get('/login', userController.login);
router.post('/login', userController.login);
router.post('/create' , userController.signUp);
router.get('/search/:query', mainController.searchProject);

module.exports=router