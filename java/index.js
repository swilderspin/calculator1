var resultEl = document.getElementById("result-el");




function cancel() {
    document.getElementById("Number1").valueAsNumber = 0;
    document.getElementById("Number2").valueAsNumber = 0;
    resultEl.textContent = 0;
}

function addNum() {
    let num1 = document.getElementById("Number1").valueAsNumber;
    let num2 = document.getElementById("Number2").valueAsNumber;
    resultEl.innerText = num1 + num2;
}

function subtractNum() {
    var num1 = document.getElementById("Number1").valueAsNumber;
    var num2 = document.getElementById("Number2").valueAsNumber;
    resultEl.innerText = num1 - num2;
}

function divideNum() {
    var num1 = document.getElementById("Number1").valueAsNumber;
    var num2 = document.getElementById("Number2").valueAsNumber;
    resultEl.innerText = num1 / num2;
}

function multiplyNum() {
    var num1 = document.getElementById("Number1").valueAsNumber;
    var num2 = document.getElementById("Number2").valueAsNumber;
    resultEl.innerText = num1 * num2;
}



console.log(resultEl);
console.log(num1);
console.log(num2);



// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// 

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"