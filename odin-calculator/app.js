/*
 * Functions
 */

const updateDisplay = function (displayDiv, output) {
  displayDiv.textContent = output;
};

const add = function (x, y) {
  return x + y;
};

const identity = add;

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
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const equalsButton = document.querySelector("#equals-button");

const operations = new Map();
operations.set(document.querySelector("#add-button"), add);
operations.set(document.querySelector("#subtract-button"), subtract);
operations.set(document.querySelector("#divide-button"), divide);
operations.set(document.querySelector("#multiply-button"), multiply);
const buttons = new Map();
buttons.set(add, document.querySelector("#add-button"));
buttons.set(subtract, document.querySelector("#subtract-button"));
buttons.set(divide, document.querySelector("#divide-button"));
buttons.set(multiply, document.querySelector("#multiply-button"));

let queuedOperation = identity;
let currentOperand = "";
let queuedOperand = "";

operationButtons.map((button) => {
  button.addEventListener("click", () => {
    let result = operate(queuedOperation, +queuedOperand, +currentOperand);
    updateDisplay(currentDisplayDiv, result);

    queuedOperation = operations.get(button);
    queuedOperand = result;
    currentOperand = "";

    updateDisplay(previousDisplayDiv, queuedOperand + " " + button.textContent);
  });
});

numberButtons.map((button) => {
  button.addEventListener("click", () => {
    currentOperand += button.textContent;
    updateDisplay(currentDisplayDiv, currentOperand);
  });
});

clearButton.addEventListener("click", () => {
  queuedOperation = identity;
  currentOperand = "";
  queuedOperand = "";
  updateDisplay(currentDisplayDiv, "0");
  updateDisplay(previousDisplayDiv, "");
});

deleteButton.addEventListener("click", () => {
  currentOperand = currentOperand.substr(0, currentOperand.length - 1);
  updateDisplay(currentDisplayDiv, currentOperand);
});

equalsButton.addEventListener("click", () => {
  let result = operate(queuedOperation, +queuedOperand, +currentOperand);
  updateDisplay(currentDisplayDiv, result);
  updateDisplay(
    previousDisplayDiv,
    [
      queuedOperand,
      buttons.get(queuedOperation).textContent,
      currentOperand,
      " =",
    ].join(" ")
  );

  queuedOperand = result;
  currentOperand = "";
  queuedOperation = identity;
});

/*
 * Window load event and methods
 */

window.onload = () => {
  updateDisplay(currentDisplayDiv, "0");
  updateDisplay(previousDisplayDiv, "");
};
