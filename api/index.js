require('dotenv').config();

const express = require('express');

app.listen(3000)

const app = express();

const port = process.env.PORT || 3500;

app.listen(port, _ => {console.log(`http://localhost:port`)});
