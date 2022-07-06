function add(num1, num2){
    let total = num1 + num2;
    return total;
}

function subtract(num1, num2){
        total = num1 - num2;
        return total;
}

function multiply(num1, num2){
    let total = num1 * num2;
    return total;
}

function divide(num1, num2){
    let total = num1 / num2;
    return total;
}


const para = document.getElementById('para')
const num = document.getElementById('num1')

function appendNumber(number) {
    para.insertAdjacentText(`beforeend`,number);
    // append to paragraph here
}

// deletes last input
function deletE (){
    para.textContent.toString();
    let num = para.textContent.slice(0,-1);
    para.textContent = "";
    appendNumber(num);
}


function point(){
    para.textContent.toString();
    para.textContent += ".";
}

// stores a number and add the operator to the number
function storeNum1(operator){
    let num1 = para.textContent;
    
    if(operator == 'divide'){
        num1 += "÷";
    } else if(operator == 'multiply'){
        num1 += "x";
    } else if(operator == 'subtract'){
        num1 += "-";
    } else if(operator == 'add'){
        num1 += "+";
    }
    
    num.textContent = num1;
    para.textContent = "";
}

function operate(num1, operator, num2){
    if(operator == "÷"){
        return divide(num1, num2);
    } else if(operator == "x"){
        return multiply(num1, num2);
    } else if(operator == "-"){
        return subtract(num1, num2);
    } else if(operator == "+"){
        return add(num1, num2);
    } else console.log("ERROR") ;
}

function equals(){
    let num1 = num.textContent;
    let num2 = para.textContent;
    
    let operator = num1.slice(-1);
    let newNum1 = num.textContent.slice(0,-1)

  para.textContent = operate(newNum1, operator, num2);
    num.textContent = '';
}