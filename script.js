const num7 = document.querySelector('#num7');
const delay = ms => new Promise(res => setTimeout(res, ms));
const yourFunction = async () => {
    await delay(100);
    num7.classList.remove('active');
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

// variables to update your display later
let firstNumber;
let secondNumber;
let operator;


console.log(operate(1,2,add));

document.addEventListener('keydown', (e)=>{

    if(e.code === "Numpad7"){
        console.log(`up`)
        num7.classList.add('active');
        yourFunction();


    }
    console.log(e);
    console.log(num7);
    
    
})