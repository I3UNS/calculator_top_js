const keysContainer = document.getElementById("keys");
const display = document.getElementById("display");

const keyValue = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0","="
]

const operators = ["÷","x","-","+","="];
const symbols = ["AC", "+/-", "%"];

for(let i = 0; i <= keyValue.length-1; i++){
    let value = keyValue[i];
    let valueButton = document.createElement("button");
    valueButton.textContent = value;
    
    if(value == "0"){
        valueButton.style.gridColumn = "span 2"
    }

    // Horrible way to set ids but this is a working method for now.
    if(operators.includes(value)){
        valueButton.style.backgroundColor = "#f5b725ff";
        valueButton.id = value;
    }
    if(symbols.includes(value)){
        valueButton.style.backgroundColor = "#f5b725ff";
        valueButton.id = value;
    }
    keysContainer.appendChild(valueButton);
}

const acBtn = document.getElementById("AC");
const plusMinusBtn = document.getElementById("+/-");
const percentageBtn = document.getElementById("%");
const equalBtn = document.getElementById("=");

function clearAll(){
    display.value = "";
}

function calculate(){
    
}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}