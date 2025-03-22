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
    for (let i = 0; i < squareAmount; i++ ) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        gridParent.appendChild(grid);
        finalGrid[i] = grid;
    }
    console.log(finalGrid)
    finalGrid[0].textContent = 1;
    finalGrid[1].textContent = 2;
    finalGrid[2].textContent = 3;
    finalGrid[3].textContent = "";
    finalGrid[4].textContent = 4;
    finalGrid[5].textContent = 5;
    finalGrid[6].textContent = 6;
    finalGrid[7].textContent = "";
    finalGrid[8].textContent = 7;
    finalGrid[9].textContent = 8;
    finalGrid[10].textContent = 9;
    finalGrid[11].textContent = "";
    // add divs to right three buttons
    //adding two divs to add/subtract button to split them up
    //subtract button
    const addButton = document.createElement("div");
    addButton.id = "addButton";
    finalGrid[3].appendChild(addButton);
    addButton.textContent = "+"
    //add button
    const subtractButton = document.createElement("div");
    subtractButton.id = "subtractButton";
    finalGrid[3].appendChild(subtractButton);
    subtractButton.textContent = "-"
    
    //adding two divs to multiply/divide button to split them up
    //multiply button
    const multiplyButton = document.createElement("div");
    multiplyButton.id = "multiplyButton";
    finalGrid[7].appendChild(multiplyButton);
    multiplyButton.textContent = "*"
    //divide button
    const divideButton = document.createElement("div");
    divideButton.id = "divideButton";
    finalGrid[7].appendChild(divideButton);
    divideButton.textContent = "/"

     //adding two divs to equal/clear button to split them up
     //equal button
     const equalButton = document.createElement("div");
     equalButton.id = "equalButton";
    finalGrid[11].appendChild(equalButton);
    equalButton.textContent = "="

    //clear button
    const clearButton = document.createElement("div");
    clearButton.id = "clearButton";
    finalGrid[11].appendChild(clearButton);
    clearButton.textContent = "Clear"


    //functions that populate display when digit buttons are clicked
    // make it a loop?
    console.log(finalGrid)
    for (let a = 0; a < finalGrid.length; a++) {
        if (![3, 7, 11].includes(a)) {
        finalGrid[a].addEventListener("click", () => {
        screenDiv.textContent = finalGrid[a].textContent;
        });
        }
        //how can i go into a child div
        else {
            // Get all child divs of the parent div at index a
            const childDivs = finalGrid[a].querySelectorAll("div");
            // Loop through each child div and add event listeners
            childDivs.forEach(child => {
                child.addEventListener("click", () => {
                    screenDiv.textContent = child.textContent; // Use the child div's textContent
                });
            });
        }
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
buildGrid(12);

