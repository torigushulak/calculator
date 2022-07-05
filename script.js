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

function operate(operator, num1, num2){
    if (operator == 'add'){
        add(num1, num2);
    } else if(operator == 'subtract'){
        subtract(num1, num2);
    } else if(operator == 'multiply'){
        multiply(num1, num2);
    } else if(operator == 'divide'){
        divide(num1, num2);
    } return "ERROR";
}

