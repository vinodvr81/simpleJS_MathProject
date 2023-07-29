// script.js


// Addition function
function add(a, b) {
    document.getElementById("result").innerText = result;
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function division(a, b) {
    return a / b;
}

// JavaScript code to perform the simple math calculations
function mathOperation(operation) {
    const num1 = parseFloat(document.getElementById("number_one").value);
    const num2 = parseFloat(document.getElementById("number_two").value);
    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'division':
            result = division(num1, num2);
            break;    


        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById("result").innerText = result;
}

