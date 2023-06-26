var firstDigit = "";
var secondDigit = "";
var operator = "";

const deleteButton = document.querySelector(".deleteButton");
const clearButton = document.querySelector(".clearButton");
const display = document.querySelector(".display")
var displayContent = display.textContent

clearButton.addEventListener("click", ()=>{
    display.textContent = "";
    firstDigit = "";
    secondDigit = ""
    operator = ""
    
});

deleteButton.addEventListener("click", ()=>{
    
    if(secondDigit !== ""){
        secondDigit = secondDigit.slice(0, -1)
        display.textContent = display.textContent.slice(0, -1)
    } else if(operator !== ""){
        operator=""
        display.textContent = display.textContent.slice(0, -1)
    }
    else {
        firstDigit = firstDigit.slice(0, -1)
        display.textContent = display.textContent.slice(0, -1)
        console.log(firstDigit)}
})

function appendDigit(digit){
    if(operator===""){
        firstDigit+=digit.toString();
        display.textContent = firstDigit;
    } else{
        secondDigit+=digit
        display.textContent += digit;
    }
}

function appendSymbol(symbol){
    if(secondDigit!==""){calculate()}
    else if(operator!==""){return}
    operator = symbol;
    display.textContent += symbol
}

function calculate(){
    if (firstDigit===""||operator===""||secondDigit===""){
        return
    }

    var result = 0;
    var num1 = parseInt(firstDigit)
    var num2 = parseInt(secondDigit)

    if(operator==="*"){result = num1*num2}
    else if(operator==="/"){result = num1/num2}
    else if(operator==="+"){result = num1+num2}
    else if(operator==="-"){result = num1-num2}

    secondDigit = ""
    operator = ""
    display.textContent = result
    firstDigit = result.toString()
    
}

























