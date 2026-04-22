let firstNumber = "";
let operator = "";
let shouldResetScreen = false;

function buttonClick(val) {
    let screen = document.getElementById("screen");

    if (shouldResetScreen) {
        screen.value = "";
        shouldResetScreen = false;
    }

    if (val === "." && screen.value.includes(".")) {
        return;   /* Prevent multiple decimal points */
    }

    screen.value += val;
}

function clearDisplay() {
    let screen = document.getElementById("screen");

    screen.value = "";

    firstNumber = "";
    operator = "";
    shouldResetScreen = false;
}

function deleteLast() {
    let screen = document.getElementById("screen");

    if (shouldResetScreen) return;

    screen.value = screen.value.slice(0, -1);
}

function setOperator(op) {
    let screen = document.getElementById("screen");

    if (screen.value === "") return;

    if (firstNumber != "") {
        equalClick(); // previous calculation
    }

    firstNumber = screen.value;
    operator = op;
    shouldResetScreen = true;
}

function equalClick() {
    let screen = document.getElementById("screen");
    let secondNumber = screen.value;

    if (secondNumber == "") return;

    let result;

    if (operator == "+")
        result = Number(firstNumber) + Number(secondNumber);
    else if (operator == "-")
        result = Number(firstNumber) - Number(secondNumber);
    else if (operator == "*")
        result = Number(firstNumber) * Number(secondNumber);
    else if (operator == "/") {
        if (Number(secondNumber) === 0) {
            screen.value = "Error";
            return;
        }

        result = Number(firstNumber) / Number(secondNumber);
    }

    screen.value = result;

    firstNumber = result;
    operator = "";
    shouldResetScreen = true;
}