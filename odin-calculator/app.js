const CONSTANT = "";

const currentDisplayDiv = document.querySelector(".current-display");
const previousDisplayDiv = document.querySelector(".previous-display");

let currentDisplay = 0;
let previousDisplay = "";

// calculator.addEventListener("mousedown", () => (mouseDown = true));

/*
 * Window load event and methods
 */
function setLabelDefaults() {

  // sizeRange.value = DEFAULT_SIZE;
  // sizeLabel.textContent = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;
  // opacityRange.value = DEFAULT_OPACITY;
  // opacityLabel.textContent = DEFAULT_OPACITY;
  
}

window.onload = () => {

  // setLabelDefaults();
  // setupSketchBoard(sizeRange.value);
  // updateSelectedColor(DEFAULT_COLOR);
  //
};

/* 
 * Functions
 */

const add = function(x, y) {
  return x+y;
}

const subtract = function(x, y) {
  return x-y;
}

const divide = function(x, y) {
  return x\y;
}

const multiply = function(x, y) {
  return x*y;
}

const operate = function(operation, x, y) {
  return operation(x, y);
}
