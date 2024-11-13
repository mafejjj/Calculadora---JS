let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    if (currentNumber.includes('.') && number === '.') return;
    currentNumber += number;
    updateDisplay(currentNumber);
}

function updateDisplay(value) {
    document.getElementById('display').value = value || '0';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay('0');
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (previousNumber === '' || currentNumber === '') return;

    let result;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Divisão por zero não é permitida!');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
    updateDisplay(currentNumber);
}
