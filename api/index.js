require('dotenv').config();

const express = require('express');

app.listen(3000)

const app = express();
const cors = require("cors");
const router = require('./app/routers');

app.use(cors());

app.use(express.json());

app.use('/api/v1',router);

const port = process.env.PORT || 3600;
const DATABASE_URL = process.env.BASE_URL;

app.listen(port, (_) =>{
  console.log(`http://localhost:${port}`)
});