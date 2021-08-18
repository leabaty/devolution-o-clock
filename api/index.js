const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

<<<<<<< Updated upstream
app.listen(3000)
=======
const app = express();

const port = process.env.PORT || 3500;

app.listen(port, _ => { console.log(`http://localhost:port`) });
>>>>>>> Stashed changes
