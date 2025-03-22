let num1 = null;
let num2 = null;
let operator = "";

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1,num2);
    }
    else {
        return "Please enter in +,-,*, or /"
    }
}

function buildGrid(squareAmount) {
    let finalGrid = [];
    for (let i = 1; i <= squareAmount; i++ ) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        gridParent.appendChild(grid);
        finalGrid[i] = grid;
    }
    console.log(finalGrid)
    finalGrid[1].textContent = 1;
    finalGrid[2].textContent = 2;
    finalGrid[3].textContent = 3;
    finalGrid[4].textContent = "";
    finalGrid[5].textContent = 4;
    finalGrid[6].textContent = 5;
    finalGrid[7].textContent = 6;
    finalGrid[8].textContent = "";
    finalGrid[9].textContent = 7;
    finalGrid[10].textContent = 8;
    finalGrid[11].textContent = 9;
    finalGrid[12].textContent = "";
    // add divs to right three buttons
    //adding two divs to add/subtract button to split them up
    //subtract button
    const addButton = document.createElement("div");
    addButton.id = "addButton";
    finalGrid[4].appendChild(addButton);
    addButton.textContent = "+"
    //add button
    const subtractButton = document.createElement("div");
    subtractButton.id = "subtractButton";
    finalGrid[4].appendChild(subtractButton);
    subtractButton.textContent = "-"
    
    //adding two divs to multiply/divide button to split them up
    //multiply button
    const multiplyButton = document.createElement("div");
    multiplyButton.id = "multiplyButton";
    finalGrid[8].appendChild(multiplyButton);
    multiplyButton.textContent = "*"
    //divide button
    const divideButton = document.createElement("div");
    divideButton.id = "divideButton";
    finalGrid[8].appendChild(divideButton);
    divideButton.textContent = "/"

     //adding two divs to equal/clear button to split them up
     //equal button
     const equalButton = document.createElement("div");
     equalButton.id = "equalButton";
    finalGrid[12].appendChild(equalButton);
    equalButton.textContent = "="

    //clear button
    const clearButton = document.createElement("div");
    clearButton.id = "clearButton";
    finalGrid[12].appendChild(clearButton);
    clearButton.textContent = "Clear"
}

//Created my parent div "container" in the html file
const container = document.querySelector("#container");
//Div for the display screen
const screenDiv = document.createElement("div");
screenDiv.id = "screenDiv";
screenDiv.textContent = "Display Screen";
container.appendChild(screenDiv);
//Parent container for the 4x4 grid, siblings with the screen div
const gridParent = document.createElement("div");
container.appendChild(gridParent);
gridParent.id = "gridParent"
buildGrid(12);