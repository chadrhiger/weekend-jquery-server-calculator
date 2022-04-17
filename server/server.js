const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000

// Start the server, and listen for requests:
app.listen(PORT, function () {
  console.log(`The server is risen! http://localhost:${PORT}.`);
})

let calculationObjects = [];
console.log(calculationObjects);


// take object from array, turn num1 and num2 into numbers Number()
// determine which operator is included using if else if
// empty array
// take result and push it into the array with the other inputs
// if the operator is +, assign the value 

function serverMath(newCalculation) {
  console.log(newCalculation);
  let answer;
  if (newCalculation.operator === '+') {
    answer = Number(newCalculation.numOne) + Number(newCalculation.numTwo);
  }
  else if (newCalculation.operator === '-') {
    answer = Number(newCalculation.numOne) - Number(newCalculation.numTwo);
  }
  else if (newCalculation.operator === '*') {
    answer = Number(newCalculation.numOne) * Number(newCalculation.numTwo);
  }
  else if (newCalculation.operator === '/') {
    answer = Number(newCalculation.numOne) / Number(newCalculation.numTwo);
  }
  let finalCalc = {
    numOne: newCalculation.numOne,
    operator: newCalculation.operator,
    numTwo: newCalculation.numTwo,
    answer: answer
  }
  calculationObjects.push(finalCalc);
  console.log(finalCalc);
}




// define a GET route on server
app.get('/calculations', (req, res) => {
  console.log('GET /calculations');
  res.send(calculationObjects)
})

// define POST route on server
app.post('/calculations', (req, res) => {
  console.log('POST /calculations');
  let newCalculation = req.body;
  serverMath(newCalculation);
  res.sendStatus(200);
})
