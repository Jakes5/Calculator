

// behaviour of pressed key
const delay = ms => new Promise(res => setTimeout(res, ms));
const keyPress = async (keyCode) => {
    await delay(100);
    document.querySelector(`#${keyCode}`).classList.remove('active');
  };
const calcDisplay = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.buttons');


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
let display = '';


console.log(operate(1,2,add));

document.addEventListener('keydown', (e)=>{
    
    // let numpadRegex = new RegExp(/(Numpad)/);
    // const num = document.querySelector('#num7');
    let keyCode;
    if(e.code.startsWith("Numpad") || e.code.startsWith("Back")){
        keyCode = e.code;
        console.log(keyCode);
        document.querySelector(`#${keyCode}`).classList.add('active');
        keyPress(keyCode);
        //check length of calc space
        if(display.length < 11){
            display += e.key;
            calcDisplay.textContent = display;
        }


    } else if(e.key === 'Escape'){
        display = ''
        calcDisplay.textContent = '0';
    }
    console.log(e);
    // console.log(num7);
    
})

let calcButtons = Array.from(buttons);
// for(btn of calcButtons){
//     console.log(btn);
    
// }
console.log(calcButtons);

buttons.forEach((btn, index, array) =>{
    btn.addEventListener('click', () =>{
    //check length of calc space
        if(display.length < 11){
            let input = btn.textContent
            display += input
            calcDisplay.textContent = display;
        }

    })
    
})

// buttons.addEventListener('click', () =>{
//     let calcButtons = Array.from(buttons);
//     // for(btn of calcButtons){
//     //     console.log(btn);
        
//     // }
//    console.log(calcButtons);
     
// })