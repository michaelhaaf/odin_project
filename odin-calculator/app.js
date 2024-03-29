/*
 * Calculator Functions
 */

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const divide = function (x, y) {
  return y === 0 ? "error" : x / y;
};

const multiply = function (x, y) {
  return x * y;
};

const operate = function (operation, x, y) {
  return operation(x, y);
};

/*
 * Functions
 */

const prettyDisplay = function (content) {
  if (content === "" || isNaN(content)) return content;
  return content.toString().length >= DISPLAY_WIDTH
    ? parseFloat(content).toPrecision(10)
    : content;
};

const updateDisplay = function (displayDiv, content) {
  displayDiv.textContent = content;
};

const resetRegisters = function () {
  return { X: "", Y: "0", O: null };
};

const updateXRegister = function (textContent) {
  registers.X += textContent;
  updateDisplay(currentDisplayDiv, registers.X);
};

const shiftRegisters = function () {
  if (!registers.X) return;
  registers.Y = registers.X;
  registers.X = "";
};

const clearAll = function () {
  registers = resetRegisters();
  updateDisplay(currentDisplayDiv, "0");
  updateDisplay(previousDisplayDiv, "");
};

const deleteEntry = function () {
  registers.X = "";
  updateDisplay(currentDisplayDiv, "0");
};

const calculate = function () {
  if (!registers.O || !registers.X) return;
  let result = operate(registers.O, +registers.Y, +registers.X);
  updateDisplay(currentDisplayDiv, prettyDisplay(result));
  updateDisplay(
    previousDisplayDiv,
    `${prettyDisplay(registers.Y)} ${
      buttons.get(registers.O).textContent
    } ${prettyDisplay(registers.X)} =`
  );
  registers.O = null;
  registers.X = "";
  registers.Y = isNaN(result) ? "0" : result;
};

const updateOperation = function (textContent) {
  registers.O ? calculate() : shiftRegisters();
  registers.O = operations.get(textContent);
  updateDisplay(
    previousDisplayDiv,
    `${prettyDisplay(registers.Y)} ${textContent}`
  );
};

const enterZero = function () {
  if (registers.X != "0") {
    updateXRegister(zeroButton.textContent);
  }
};

const enterDecimal = function () {
  if (registers.X && !registers.X.includes(".")) {
    updateXRegister(decimalButton.textContent);
  }
};

const translateKeyPress = function (e) {
  if (typeof keyPresses.get(e.key) === "function") {
    keyPresses.get(e.key)();
    e.preventDefault();
  } else if (e.key > 0 && e.key <= 9) {
    updateXRegister(e.key);
    e.preventDefault();
  } else if (typeof operations.get(e.key) === "function") {
    updateOperation(e.key);
    e.preventDefault();
  } else if (typeof keyConversions.get(e.key) !== "undefined") {
    updateOperation(keyConversions.get(e.key));
    e.preventDefault();
  }
}


/*
 * Setup
 */

const DISPLAY_WIDTH = 15;
const currentDisplayDiv = document.querySelector(".display-current");
const previousDisplayDiv = document.querySelector(".display-previous");
const operationButtons = Array.from(document.querySelectorAll(".operation"));
const numberButtons = Array.from(document.querySelectorAll(".number"));
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const equalsButton = document.querySelector("#equals-button");
const zeroButton = document.querySelector("#zero-button");
const decimalButton = document.querySelector("#decimal-button");

const operations = new Map();
operations.set("+", add);
operations.set("-", subtract);
operations.set("÷", divide);
operations.set("×", multiply);

const buttons = new Map();
buttons.set(add, document.querySelector("#add-button"));
buttons.set(subtract, document.querySelector("#subtract-button"));
buttons.set(divide, document.querySelector("#divide-button"));
buttons.set(multiply, document.querySelector("#multiply-button"));

const keyPresses = new Map();
keyPresses.set("0", enterZero);
keyPresses.set(".", enterDecimal);
keyPresses.set("=", calculate);
keyPresses.set("Enter", calculate);
keyPresses.set("Backspace", deleteEntry);
keyPresses.set("r", clearAll);

const keyConversions = new Map();
keyConversions.set("/", "÷");
keyConversions.set("*", "×");

let registers = resetRegisters();

operationButtons.map((button) =>
  button.addEventListener("click", () => updateOperation(button.textContent))
);

numberButtons.map((button) =>
  button.addEventListener("click", () => updateXRegister(button.textContent))
);

clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteEntry);
equalsButton.addEventListener("click", calculate);
decimalButton.addEventListener("click", enterDecimal);
zeroButton.addEventListener("click", enterZero);
window.addEventListener("keydown", translateKeyPress);

/*
 * Window load event and methods
 */

window.onload = () => {
  updateDisplay(currentDisplayDiv, "0");
  updateDisplay(previousDisplayDiv, "");
};
