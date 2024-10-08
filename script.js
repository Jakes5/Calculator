function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    return operator(num1, num2)
};

// variables to update your display later
let firstNumber;
let secondNumber;
let operator;


console.log(operate(1,2,add));
