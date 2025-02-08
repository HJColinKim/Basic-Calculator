'use strict';

const buttons = document.querySelectorAll('input[type="button"]');
const validKeys = ["1","2","3","4","5","6","7","8","9","0",".","/","*","-","+"];

function checkIfValid(exp){
    try{
        return !!eval(exp);
    } catch {
        return false;
    }
};

function evaluateExpression(){
    let expression = document.querySelector(`#result`).value;
    if (checkIfValid(expression)){
        document.querySelector(`#result`).value = eval(expression);
    } else {
        document.querySelector(`#result`).value = null;
    }
    
}

//Using the buttons manually to calculate 
for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener
    (`click`, function(){
        if (this.value === `c`){
            document.querySelector(`#result`).value = null;
        } else if (this.value === `=`){
            evaluateExpression();
        } else {  
            document.querySelector(`#result`).value += this.value;
        }
    });
}

//Using the keyboard to calculate 
document.addEventListener(`keydown`, function(key){
    if (validKeys.includes(key.key)){
        document.querySelector(`#result`).value += key.key;
    } else if (key.key === 'Enter'){
        evaluateExpression();
    } else if (key.key === `Backspace`){
        document.querySelector(`#result`).value = null;
    }
})