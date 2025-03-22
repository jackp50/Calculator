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
    finalGrid[4].textContent = "(+ or -)";
    finalGrid[5].textContent = 4;
    finalGrid[6].textContent = 5;
    finalGrid[7].textContent = 6;
    finalGrid[8].textContent = "(* or /)";
    finalGrid[9].textContent = 7;
    finalGrid[10].textContent = 8;
    finalGrid[11].textContent = 9;
    finalGrid[12].textContent = "(= or clear)";
    // next step: add div to right three buttons
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