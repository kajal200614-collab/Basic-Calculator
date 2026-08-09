const display = document.getElementById("display");

function add(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } 
    else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function calculate() {
    let expression = display.innerText;
    let result;

    if (expression.includes("+")) {
        let numbers = expression.split("+");
        result = Number(numbers[0]) + Number(numbers[1]);
    }

    else if (expression.includes("−")) {
    let numbers = expression.split("−");
    result = Number(numbers[0]) - Number(numbers[1]);
}

    else if (expression.includes("x")) {
        let numbers = expression.split("x");
        result = Number(numbers[0]) * Number(numbers[1]);
    }

    else if (expression.includes("÷")) {
        let numbers = expression.split("÷");

        if (Number(numbers[1]) === 0) {
            display.innerText = "Undefined";
            return;
        }

        result = Number(numbers[0]) / Number(numbers[1]);
    }

    else if (expression.includes("%")) {
        let numbers = expression.split("%");
        result = Number(numbers[0]) % Number(numbers[1]);
    }

    display.innerText = result;
}