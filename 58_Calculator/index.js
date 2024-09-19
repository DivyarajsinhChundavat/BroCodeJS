const display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const keys = document.getElementById("keys");

function appendToDisplay(input) {
    // input = Number(input);
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value).toFixed(2);
    }
    catch (error) {
        display.value = "Error";
    }
}