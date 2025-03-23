let num1 = "";
let num2 = "";
let operator = "";


function add(num1, num2) {
    let result = parseFloat(num1) + parseFloat(num2);
    return result;
}

function subtract(num1, num2) {
    let result = parseFloat(num2) - parseFloat(num1);
    return result;
}

function multiply(num1, num2) {
    let result = parseFloat(num1) * parseFloat(num2);
    return result;
}

function divide(num1, num2) {
    let result = parseFloat(num2) / parseFloat(num1);
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
    //console.log(finalGrid)
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
    addButton.id = "add-button";
    finalGrid[3].appendChild(addButton);
    addButton.textContent = "+"
    //add button
    const subtractButton = document.createElement("div");
    subtractButton.id = "subtract-button";
    finalGrid[3].appendChild(subtractButton);
    subtractButton.textContent = "-"
    
    //adding two divs to multiply/divide button to split them up
    //multiply button
    const multiplyButton = document.createElement("div");
    multiplyButton.id = "multiply-button";
    finalGrid[7].appendChild(multiplyButton);
    multiplyButton.textContent = "*"
    //divide button
    const divideButton = document.createElement("div");
    divideButton.id = "divide-button";
    finalGrid[7].appendChild(divideButton);
    divideButton.textContent = "/"

     //adding two divs to equal/clear button to split them up
     //equal button
     const equalButton = document.createElement("div");
     equalButton.id = "equal-button";
    finalGrid[11].appendChild(equalButton);
    equalButton.textContent = "="

    //clear button
    const clearButton = document.createElement("div");
    clearButton.id = "clear-button";
    finalGrid[11].appendChild(clearButton);
    clearButton.textContent = "Clear"


    //functions that populate display when digit buttons are clicked
    // make it a loop?
    //console.log(finalGrid)
    for (let a = 0; a < finalGrid.length; a++) {
    if (![3, 7, 11].includes(a)) {
        // Add event listener for parent divs that aren't 3, 7, or 11
        finalGrid[a].addEventListener("click", () => {
            num1 += finalGrid[a].textContent;
            screenDiv.textContent = num1;
            
            // console.log(display);
        });
    } else if ([3, 7].includes(a)) { 
        // Target child divs for parent divs 3 and 7
        const childDivs = finalGrid[a].querySelectorAll("div");
        childDivs.forEach(child => {
            child.addEventListener("click", () => {
                num2 = num1;
                operator = child.textContent;
                num1 = ""; // Reset num1 for next input
                screenDiv.textContent = child.textContent;
                
                // console.log(display);
            });
        });
    } else if (a === 11) {
        const equalButton = finalGrid[11].querySelector("#equal-button");
        //FIX ME: Need to change all ids to have dashes instead of camel case
        const clearButton = finalGrid[11].querySelector("#clear-button");
    
        // Add event listener to the "equal" button
        equalButton.addEventListener("click", () => {
            // Perform the calculation based on stored `num1`, `num2`, and `operator`
            const result = operate(num1, operator, num2);
            screenDiv.textContent = result;
    
            // Reset inputs for the next calculation
            num1 = result.toString();
            num2 = "";
            operator = null;
        });
    
        // Add event listener to the "clear" button
        clearButton.addEventListener("click", () => {
            // Clear all inputs and reset the display
            num1 = "";
            num2 = "";
            operator = null;
            screenDiv.textContent = "0";
        });
    }

}
}

//Created my parent div "container" in the html file
const container = document.querySelector("#container");
//Div for the display screen
const screenDiv = document.createElement("div");
screenDiv.id = "screen-div";
screenDiv.textContent = "Display Screen";
container.appendChild(screenDiv);
//Parent container for the 4x4 grid, siblings with the screen div
const gridParent = document.createElement("div");
container.appendChild(gridParent);
gridParent.id = "grid-parent"
buildGrid(12);

