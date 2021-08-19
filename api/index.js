require('dotenv').config();

const express = require('express');

const app = express();

const routeur = require('./Router/router');
app.use(routeur);


const port = process.env.PORT || 3600;
const DATABASE_URL = process.env.BASE_URL;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.listen(port, (_) =>{
  console.log(`http://localhost:${port}`)
});