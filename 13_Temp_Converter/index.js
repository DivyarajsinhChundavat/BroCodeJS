const textBox = document.getElementById("textBox");

const toFar = document.getElementById("toFar");

const toCel = document.getElementById("toCel");

const result = document.getElementById("result");

let temp;

function convert() {
    if (toFar.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " *F";
    }
    else if (toCel.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " *C";
    }
    else {
        result.textContent = `Select a unit`
    }
}