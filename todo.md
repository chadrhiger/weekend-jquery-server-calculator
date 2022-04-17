# front end config
## HTML
  -[x] link jq, js, css
  -[x] create title in <h1>
  -[x] create div class "calcApp"
  -[x] create inputs: num1 and num2
  -[x] create operator buttons
  -[x] create equals and clear buttons
  -[x] create table head div to append most resent result
  -[x] create table row div to append calculation history


## JavaScript
  -[x] log js
  -[x] link jq and log
  -[x] create click listener for "=" button that
    -[x] calls the equalsResult function
      -[x] creates an object of inputs (num1, num2, operator) 
      -[x] sends it to the server via a POST route
      -[] calls back the server function that gives us the display
    -[] calls the ?? function to render the display on the DOM
  -[] create a click listener for the clear button that:
    -[x] calls the delete function which clears the inputs:  $('input').val('');
  -[] send a GET request to the server that:
    -[] renders the calculation history and 
    -[] appends latest calculation to the DOM table

## css
  -[]
  

# back end server config
  -[x] build out server:
    -[x] const express
    -[x] const app
    -[x] const bodyParser
    -[x] const PORT = 5000

  -[x] create array to store inputs (num1, num2, operator) from client side
  -[] store answer ??
  -[] POST route should:
    -[] receive calculation in req.body
    -[] do math
    -[] put result into an object containing num1, num2, operator, and result
    -[] push object into  history array
    -[] send back OK (200)

