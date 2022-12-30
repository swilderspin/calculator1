
let resultEl = 0

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
resultEl = document.getElementById("result-el")

function myFunction() {
  var x = document.getElementById("Number1").value;
  document.getElementById("num1-el").innerHTML = x;
  var y = document.getElementById("Number2").value;
  document.getElementById("num2-el").innerHTML = y;
}

function cancel () {
  resultEl.textContent = 0
}

function addNum () {
resultEl.textContent = num1+num2
}

function subtractNum ( ) {
resultEl.textContent= num1-num2

}

function divideNum ()  {
 resultEl.textContent = num1/num2

}

function multiplyNum () {
resultEl.textContent = num1*num2
console.log (resultEl.textContent)
}


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// 

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

addNum ()
subtractNum ()
divideNum ()
multiplyNum ()
