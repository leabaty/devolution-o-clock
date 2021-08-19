require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();


const mainController = require('../controllers/mainController');
const userController=require('../controllers/userController');

// app.use(express.json());

// app.use(cors());


router.get('/',mainController.homePage);
router.get('/login', userController.login);
router.post('/login', userController.login);
router.post('/create' , userController.signUp);

module.exports=router