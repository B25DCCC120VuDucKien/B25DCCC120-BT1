
let display = document.getElementById("display");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (display.innerText == "0") {
            display.innerText = button.innerText;
        } 
        else {
            display.innerText = display.innerText + button.innerText;
        }
    });
});
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        display.innerText = display.innerText + button.innerText;
    });
});
equalButton.addEventListener("click", function() {
    let expression = display.innerText;
    let result = eval(expression);
    display.innerText = result;
});
clearButton.addEventListener("click", function() {
    display.innerText = "0";
});