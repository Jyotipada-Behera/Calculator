const ans = document.getElementById("ans");
const ques = document.getElementById("ques");

let currentValue = "";
let storedValue = null;
let operator = null;
let shouldResetDisplay = false;

function render() {
    ans.textContent = currentValue || "0";
}

function updateHistory() {
    if (storedValue === null) {
        ques.textContent = "";
        return;
    }

    const operatorSymbol = operator ? getOperatorSymbol(operator) : "";
    ques.textContent = `${storedValue}${operatorSymbol ? ` ${operatorSymbol}` : ""}`;
}

function getOperatorSymbol(symbol) {
    switch (symbol) {
        case "+": return "+";
        case "-": return "-";
        case "*": return "×";
        case "/": return "÷";
        case "%": return "%";
        default: return symbol;
    }
}

function appendDigit(digit) {
    if (shouldResetDisplay) {
        currentValue = "";
        shouldResetDisplay = false;
    }

    if (digit === "." && currentValue.includes(".")) {
        return;
    }

    if (currentValue === "" && digit === ".") {
        currentValue = "0.";
    } else if (currentValue === "0" && digit !== ".") {
        currentValue = digit;
    } else {
        currentValue += digit;
    }

    render();
}

function one() { appendDigit("1"); }
function zero() { appendDigit("0"); }
function two() { appendDigit("2"); }
function three() { appendDigit("3"); }
function four() { appendDigit("4"); }
function five() { appendDigit("5"); }
function six() { appendDigit("6"); }
function seven() { appendDigit("7"); }
function eight() { appendDigit("8"); }
function nine() { appendDigit("9"); }
function decimal() { appendDigit("."); }

function allclear() {
    currentValue = "";
    storedValue = null;
    operator = null;
    shouldResetDisplay = false;
    render();
    ques.textContent = "";
}

function calculateResult(first, second, selectedOperator) {
    switch (selectedOperator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return second === 0 ? "Error" : first / second;
        case "%":
            return second === 0 ? "Error" : `${(first / second) * 100}%`;
        default:
            return second;
    }
}

function setOperator(nextOperator) {
    if (currentValue === "" && storedValue === null) {
        return;
    }

    const inputValue = Number(currentValue || storedValue);

    if (storedValue !== null && operator && !shouldResetDisplay) {
        storedValue = calculateResult(storedValue, inputValue, operator);
    } else if (storedValue === null) {
        storedValue = inputValue;
    }

    operator = nextOperator;
    currentValue = "";
    shouldResetDisplay = true;
    updateHistory();
}

function sum() { setOperator("+"); }
function subtract() { setOperator("-"); }
function multiply() { setOperator("*"); }
function devide() { setOperator("/"); }
function percent() { setOperator("%"); }

function equal() {
    if (storedValue === null || operator === null || currentValue === "") {
        return;
    }

    const firstValue = storedValue;
    const secondValue = Number(currentValue);
    const result = calculateResult(firstValue, secondValue, operator);

    currentValue = String(result);
    ques.textContent = `${firstValue} ${getOperatorSymbol(operator)} ${secondValue} =`;
    storedValue = null;
    operator = null;
    shouldResetDisplay = true;
    render();
}

function back() {
    if (shouldResetDisplay) {
        currentValue = "";
        shouldResetDisplay = false;
        render();
        return;
    }

    currentValue = currentValue.slice(0, -1);
    if (currentValue === "") {
        currentValue = "";
    }

    render();
}

function bracket() {
    if (currentValue === "") {
        currentValue = "(";
    } else if (!currentValue.includes("(")) {
        currentValue = `(${currentValue}`;
    } else if (!currentValue.includes(")")) {
        currentValue = `${currentValue})`;
    } else {
        currentValue = "(";
    }

    render();
}

function handleKeyboardInput(event) {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        appendDigit(key);
    } else if (key === ".") {
        appendDigit(".");
    } else if (key === "+") {
        setOperator("+");
    } else if (key === "-") {
        setOperator("-");
    } else if (key === "*") {
        setOperator("*");
    } else if (key === "/") {
        setOperator("/");
    } else if (key === "%") {
        setOperator("%");
    } else if (key === "Enter" || key === "=") {
        equal();
    } else if (key === "Backspace") {
        back();
    } else if (key === "Escape") {
        allclear();
    }
}

document.addEventListener("keydown", handleKeyboardInput);

const toggle = document.getElementById("themeToggle");
const main = document.querySelector(".main");
const buttons = document.querySelector(".buttons");
const ans_ = document.getElementById("ans");
const ques_ = document.getElementById("ques");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-theme", toggle.checked);
    main.classList.toggle("dark", !toggle.checked);
    buttons.classList.toggle("dark", !toggle.checked);
    ans_.classList.toggle("dark", !toggle.checked);
    ques_.classList.toggle("dark", !toggle.checked);
});

render();

