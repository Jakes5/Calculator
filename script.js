
const delay = ms => new Promise(res => setTimeout(res, ms));
const keyPress = async (keyCode) => {
    await delay(100);
    document.querySelector(`#${keyCode}`).classList.remove('active');
    console.log("Waited 2s");
  
    // await delay(5000);
    // console.log("Waited an additional 5s");
  };


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
6
// variables to update your display later
let firstNumber;
let secondNumber;
let operator;


console.log(operate(1,2,add));

document.addEventListener('keydown', (e)=>{
    // let numpadRegex = new RegExp(/(Numpad)/);
    // const num = document.querySelector('#num7');
    let keyCode;
    if(e.code.startsWith("Numpad") || e.code.startsWith("Back")){
        keyCode = e.code;
        console.log(keyCode);
        document.querySelector(`#${keyCode}`).classList.add('active');
        // num7.classList.add('active');
        keyPress(keyCode);
    }
    console.log(e);
    // console.log(num7);
    
    
})