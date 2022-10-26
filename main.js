// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 
let firstNum 
let secondNum 
let operation 

// Write a JavaScript program to convert a number to a string.

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}


const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}


const add = (numA, numB) => {
  const sum = (numA + numB)
  return sum
}

const changeOperation = (chosenOperation) => {
  operation = chosenOperation

  console.log(operation)
}

const putResultInElement = (operationResults) => {
  
  document.getElementById("result").innerHTML = "Results: " + operationResults
}

  const equals = () => {
    switch (operation) {
      case "addition":  putResultInElement(add(firstNum, secondNum)) 
      break;
    }
  }

 

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let testArray = []

let different = NaN
let number = 2
let NotE = undefined
let yes = true
let NValid = null
let anotherString = "word"

const data = (testArray) => {

  if(testArray === 'true' || testArray === 'false'){
    return " Boolean"
  }
  if(testArray === 'null') {
    return " Null"
  }
  if(testArray === 'undefined'){
    return " Undefined"
  }
  if(testArray === 'string' || testArray === ''){
    return "String"
  }
  if(isNaN(parseInt(testArray)) === true){
    return "NaN"
  } else if(isNaN(parseInt(testArray)) === false){
    return "Number"}

}

data()

const datatypes = (testArray) => {
  
  document.getElementById("data").innerHTML = Results
  
}

  
// Write a JavaScript program that adds 2 numbers together.



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

