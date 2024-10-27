

// behaviour of pressed key
const delay = ms => new Promise(res => setTimeout(res, ms));
const keyPress = async (keyCode) => {
    await delay(100);
    document.querySelector(`#${keyCode}`).classList.remove('active');
  };
const calcDisplay = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.buttons');
const numbers = document.querySelectorAll('.numbers');
const deletions = document.querySelectorAll('.deletions');

const operatorBtn = ['Minus','Equal', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'NumpadAdd', 'NumpadEnter']
const numericalBtn = ['Numpad0','Numpad1','Numpad2','Numpad3','Numpad4','Numpad5','Numpad6','Numpad7','Numpad8','Numpad9','Digit0','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9'];
const decimalsBtn = ['NumpadDecimal', 'Period'];


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

function checkDecimal(){
    
}

// variables to update your display later
let firstNumber;
let secondNumber;
let operator;
let display = '';


// console.log(operate(1,2,add));

deletions.forEach((delBtn, index, array) =>{
    delBtn.addEventListener('click', () =>{
        let input = delBtn.textContent;
        if(input === 'CLR'){
            display = ''
            calcDisplay.textContent = '0';
        } else if (input === 'DEL'){
            if(display[display.length] -2 === '.'){
                display = display.slice(0, display.length - 2);
                calcDisplay.textContent = display;
                //reset to ZERO
            } else if (display.length === 1 || display.length === 0){
                display = ''
                calcDisplay.textContent = '0';
            }else{
                console.log(display.length);
                display = display.slice(0, -1);
                calcDisplay.textContent = display;
            }
        }
    })
})


numbers.forEach((btn, index, array) =>{
    btn.addEventListener('click', () =>{
        let input = btn.textContent;
    //check length of calc space
        if(display.length < 11){
            display += input
            calcDisplay.textContent = display;
            console.log(display); 
        }

    })
    
})

document.addEventListener('keydown', (e)=>{
    let keyCode = e.code.startsWith("Digit") ? e.code.replace("Digit", "Numpad") : e.code;
    //Numerical buttons
    if(numericalBtn.includes(keyCode) && display.length < 11){
        document.querySelector(`#${keyCode}`).classList.add('active');
        keyPress(keyCode);
        display += e.key;
        calcDisplay.textContent = display;
        //check length of calc space
    }   else if(e.key === 'Escape'){
        display = ''
        calcDisplay.textContent = '0';
    }   else if(e.key === 'Backspace'){
        if(display[display.length] -2 === '.'){
            display = display.slice(0, display.length - 2);
            calcDisplay.textContent = display;
            //reset to ZERO
        } else if (display.length === 1 || display.length === 0){
            display = ''
            calcDisplay.textContent = '0';
        }else{
            console.log(display.length);
            display = display.slice(0, -1);
            calcDisplay.textContent = display;
        }
    }
    if(decimalsBtn.includes(keyCode) && !display.includes('.')){
        //make this a function with '!display.includes('.')'
        display += e.key
        calcDisplay.textContent = display;
        console.log(display);   
    }

    if(operatorBtn.includes(keyCode)){
        console.log(display);       
    }

})

let calcButtons = Array.from(buttons);
// for(btn of calcButtons){
//     console.log(btn);
    
// }
console.log(calcButtons);


// buttons.addEventListener('click', () =>{
//     let calcButtons = Array.from(buttons);
//     // for(btn of calcButtons){
//     //     console.log(btn);
        
//     // }
//    console.log(calcButtons);
     
// })