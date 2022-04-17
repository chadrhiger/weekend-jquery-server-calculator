console.log('js is happening');
$(document).ready(onReady);

// link click listeners: one for initial click, 
// others to listen to clicks that appear on the "body"
function onReady(){
  console.log('jq represent');
  $('.equalsButton').on('click', equalsClick);
  $(document).on('click', '.clearButton', clearInputs);
  $('.operatorButton').on('click', assignOperator);
  $(document).on('click', readCalculation);
}


let globalOperator;

function assignOperator() {
  globalOperator = $(this).text();
  console.log(globalOperator);
}

// initial click should create a new object with num1, num2, and operator
function equalsClick(){
  let newCalculation = {    
      numOne: $('.num1Input').val(),
      numTwo: $('.num2Input').val(),
      operator: globalOperator
  }
  createCalculation(newCalculation);
}



// "Renewal" C button clears the inputs 
function clearInputs() {
  // console.log('in clearInputs');
  $('.num1Input').val('');
  $('.num2Input').val('');

}

// WHATS THAT DO?
function readCalculation() {
  $.ajax({
    method: 'GET',
    url: '/calculations'
  })
    .then(function (response) {
      console.log('the server sent me something!');
      console.log(response);
      $('.recentResult').empty();
      $('.prevCalculations').empty();
      for (let lastCalc of response) {
        $('.prevCalculations').append(`        
          <li>${lastCalc.numOne} ${lastCalc.operator} ${lastCalc.numTwo} = ${lastCalc.answer}</li>
        `);
        $('.recentResult').empty();
        $('.recentResult').append(`        
        <h2>${lastCalc.answer}</h2>
      `);        
      }
    });
} 

// WHATS THAT DO?
function createCalculation(calculation){
  $.ajax({
    method: 'POST',
    url: '/calculations',
    data: calculation
  })
  .then(function (response){
    console.log('response of the post is:');
    console.log(response);
    readCalculation();
  })
}

// WHATS THAT DO?
// function appendResult(){
//   let calcResult = Number(numOne, operator, numTwo, answer).append(`
//     <p>${'.recentResult'}</p>
//   `)

// }
