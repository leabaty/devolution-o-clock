require('dotenv').config();

const express = require('express');


const app = express();
const cors = require("cors");
const router = require('./app/routers');

app.use(cors());

app.use(express.json());

app.use('/api/v1',router);

const port = process.env.PORT || 3600;


app.listen(port, (_) =>{
  console.log(`http://localhost:${port}`)
});

