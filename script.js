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

function gridRows(rowAmount) {
    for (let i = 0; i < rowAmount; i++ ) {
        let grid = document.createElement("div");
        grid.classList.add("row");
        gridParent.appendChild(grid);

    }
}
function gridColumn(columnAmount) {
    for (let i = 0; i < columnAmount; i++ ) {
        let grid = document.createElement("div");
        grid.classList.add("column");
        gridParent.appendChild(grid);
    }
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
gridRows(3);
gridColumn(4);