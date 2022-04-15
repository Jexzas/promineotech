let userInput;
let number1;
let number2;
let clickedOp;
let clickedOpVerbose;
let elementClicked = false;



function sum(input1, input2) {
    return input1 + input2;
}
function mult(input1, input2) {
   return input1 * input2;
}
function subt(input1, input2) {
    return input1 - input2;
}
function div(input1, input2) {
    return input1 / input2;
}
// function squirt(input1) {
//     return = Math.sqrt(input1);
// }
function exp(input1, input2) {
    return Math.pow(input1, input2);
}

function calculatorTime() {
    switch(true) {
        case (clickedOp == "+"):
            userInput = sum(number1, number2);
            clickedOpVerbose = "add";
            break;
        case (clickedOp == "-"):
            userInput = subt(number1, number2);
            clickedOpVerbose = "subtract";
            break;
        case (clickedOp == "x" || clickedOp == "*"):
            userInput = mult(number1, number2);
            clickedOpVerbose = "multiply";
            break;
        case (clickedOp == "/"):
            userInput = div(number1, number2);
            clickedOpVerbose = "divide";
            break;
        case (clickedOp == "^"):
            userInput = exp(number1, number2);
            clickedOpVerbose = "exponentiate";
            break;
    }
    console.log(userInput);
    document.getElementById("result").innerHTML = `<h1>If you ${clickedOpVerbose} ${number1} and ${number2}, your result will be ${userInput}.</h1>`;
    document.getElementById("typing").innerHTML = (userInput);
}

function addToCalcBox(keyPress) {
    if (document.getElementById("typing").innerHTML == userInput) {
        document.getElementById("typing").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        number1 = "";
        number2 = "";
        document.getElementById("typing").innerHTML = document.getElementById("typing").innerHTML + keyPress;
    } else {
    document.getElementById("typing").innerHTML = document.getElementById("typing").innerHTML + keyPress;
    }
}

function dataGetter() {
    let clickedInput = event.target.innerHTML;
    addToCalcBox(clickedInput);
}

function operatorPress() {
    if (elementClicked) 
    {
        if (event.target.innerHTML == "+" || event.target.innerHTML == "x" || event.target.innerHTML == "/" || event.target.innerHTML == "-" || event.target.innerHTML == "^" || event.target.innerHTML == "*") {
            clickedOp = event.target.innerHTML;
            console.log(clickedOp);
        }
    }
    if (number1 && !number2) {
        number2 = document.getElementById("typing").innerHTML;
        number2 = parseFloat(number2);
        console.log(number2);
        document.getElementById("typing").innerHTML = "";
    } else if (number1 && number2) { 
        switch(true) {
            case (clickedOp == "+"):
                number1 = sum(number1, number2);

                break;
            case (clickedOp == "-"):
                number1 = subt(number1, number2);

                break;
            case (clickedOp == "x"):
                number1 = mult(number1, number2);

                break;
            case (clickedOp == "/"):
                number1 = div(number1, number2);

                break;
            case (clickedOp == "^"):
                number1 = exp(number1, number2);

                break;

        }
        number2 = "";
        number2 = document.getElementById("typing").innerHTML; 
        
    } else {
        number1 = document.getElementById("typing").innerHTML;
        number1 = parseFloat(number1);
        console.log(number1);
        document.getElementById("typing").innerHTML = "";

    }

}

function reset() {
    document.getElementById("typing").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    number1 = "";
    number2 = "";
    elementClicked = false;
}

function keyboardFunction(x) {
    if (userInput != "" && number1 != "" && number2 != ""){
        reset();
    }
    switch(true) {
        case (x == "0"):
            addToCalcBox("0");
            break;
        case (x == "1"):
            addToCalcBox("1");
            break;
        case (x == "2"):
            addToCalcBox("2");
            break;
        case (x == "3"):
            addToCalcBox("3");
            break;
        case (x == "4"):
            addToCalcBox("4");
            break;
        case (x == "5"):
            addToCalcBox("5");
            break;
        case (x == "6"):
            addToCalcBox("6");
            break;
        case (x == "7"):
            addToCalcBox("7");
            break;
        case (x == "8"):
            addToCalcBox("8");
            break;
        case (x == "9"):
            addToCalcBox("9");
            break;
        case (x == "."):
            addToCalcBox(".");
            break;
        case (x == "Enter" || x == "="):
            operatorPress();
            calculatorTime();
            break;
        case (x == "x" || x == "*"):
            clickedOp = "x";
            console.log(clickedOp);
            operatorPress();
            break;
        case (x == "+"):
            clickedOp = "+";
            operatorPress();
            break;
        case (x == "-"):
            clickedOp = "-";
            operatorPress();
            break;
        case (x == "/"):
            clickedOp = "/";
            operatorPress();
            break;
        case (x == "^"):
            clickedOp = "^";
            operatorPress();
            break;
        }
}


// function equalPress() {
//     number2 = document.getElementById("typing").innerHTML;
//     number2 = parseFloat(number2);
// }