const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

// Start the server, and listen for requests:
app.listen(PORT, function() {
  console.log(`The server is risen! http://localhost:${PORT}.`);
})

let calculationObject = [];

// function serverMath(){

// }

// define a GET route on server
app.get('/calculations', (req, res) => {
  console.log('GET /calculations');
  res.send(calculationObject)
})

// define POST route on server
app.post('/calculations', (req, res) => {
  console.log('POST /calculations');
  let newCalculation = req.body;
  calculationObject.push(newCalculation);
  res.sendStatus(200);
})







