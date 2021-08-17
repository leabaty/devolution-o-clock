require('dotenv').config();

const express = require('express');

const { 
    mainController, 
    userController, 
    projectController, 
} = require('./controllers');

const app = express();

const router = express.Router();

router.get ('/' , mainController.homePage)

