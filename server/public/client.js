console.log('js is happening');
$(document).ready(onReady);

// XX link click listeners: one for initial click, 
// others to listen to clicks that appear on the "body"
function onReady(){
  console.log('jq represent');
  $('.equalsButton').on('click', equalsResult);
  $(document).on('click', '.clearButton', clearInputs);
  $('.operatorButton').on('click', assignOperator);
}


let globalOperator;

function assignOperator() {
  globalOperator = $(this).text();
  console.log(globalOperator);
}

// initial click should create a new object with num1, num2, and operator
function equalsResult(){
  let newCalculation = {    
      numOne: $('.num1Input').val(),
      numTwo: $('.num2Input').val(),
      operator: globalOperator
  }
  // console.log('in equalsResult');
  
  console.log(newCalculation);
}

// "Renewal" C button clears the inputs 
function clearInputs() {
  // console.log('in clearInputs');
  $('.num1Input').val('');
  $('.num2Input').val('');
  $('.recentResult').val('');
}
