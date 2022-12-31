/*
 * Functions
 */

const updateDisplay = function (displayDiv, output) {
  displayDiv.textContent = output;
};

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const divide = function (x, y) {
  return x / y;
};

const multiply = function (x, y) {
  return x * y;
};

const operate = function (operation, x, y) {
  return operation(x, y);
};

/*
 * Setup
 */

const currentDisplayDiv = document.querySelector(".display-current");
const previousDisplayDiv = document.querySelector(".display-previous");
const operationButtons = Array.from(document.querySelectorAll(".operation"));
const numberButtons = Array.from(document.querySelectorAll(".number"));

const operations = new Map();
operations.set(document.querySelector("#add-button"), add);
operations.set(document.querySelector("#subtract-button"), subtract);
operations.set(document.querySelector("#divide-button"), divide);
operations.set(document.querySelector("#multiply-button"), multiply);

let queuedOperation = add; 
let currentOperand = "";
let queuedOperand = "";

operationButtons.map((button) => {
  button.addEventListener("click", () => {
    let result = operate(queuedOperation, +queuedOperand, +currentOperand);
    updateDisplay(currentDisplayDiv, result)

    queuedOperation = operations.get(button);
    queuedOperand = result;
    currentOperand = "";

    updateDisplay(
      previousDisplayDiv,
      queuedOperand + " " + button.textContent
    );
  });
});

numberButtons.map((button) => {
  button.addEventListener("click", () => {
    currentOperand += button.textContent;
    updateDisplay(currentDisplayDiv, currentOperand);
  });
});

/*
 * Window load event and methods
 */

window.onload = () => {
  updateDisplay(currentDisplayDiv, "0");
  updateDisplay(previousDisplayDiv, "");
};
