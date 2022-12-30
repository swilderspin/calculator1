var resultEl = document.getElementById("result-el")
var num1 = document.getElementById("Number1").value;
var num2 = document.getElementById("Number2").value;


function cancel() {
    resultEl.innerText = 0
}

function addNum() {
    resultEl.innerText = num1 + num2
}

function subtractNum() {
    resultEl.innerText = num1 - num2
}

function divideNum() {
    resultEl.innerHTML = num1 / num2
}

function multiplyNum() {
    resultEl.innerText = num1 * num2
}



// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// 

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
