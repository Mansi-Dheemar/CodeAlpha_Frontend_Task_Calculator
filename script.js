let display = document.getElementById("display");
function appendValue(value) {
    display.value = display.value + value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || key === ".") {
        appendValue(key);
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    if (key === "Enter" || key === "=") {
        calculateResult();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});