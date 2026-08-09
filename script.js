let display = document.getElementById("display");

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

    try {

        display.innerText = display.innerText.replace(/×/g, "*");
        display.innerText = display.innerText.replace(/÷/g, "/");
        display.innerText = display.innerText.replace(/−/g, "-");

        display.innerText = eval(display.innerText);

    } 
    catch {

        display.innerText = "Error";
    }
}