const DEFAULT_COLOR = "#000000";
const DEFAULT_ERASER = "#FFFFFF";
const DEFAULT_OPACITY = 1.0;
const DEFAULT_SIZE = 16;

const sketchBoard = document.querySelector("#sketchBoard");
const selectedColor = document.querySelector("#selectedColor");
const colorModeBtn = document.querySelector("#colorModeBtn");
const randomModeBtn = document.querySelector("#randomModeBtn");
const eraserModeBtn = document.querySelector("#eraserModeBtn");
const resetBoardBtn = document.querySelector("#resetBoardBtn");
const sizeRange = document.querySelector("#sizeRange");
const sizeLabel = document.querySelector("#sizeLabel");
const opacityRange = document.querySelector("#opacityRange");
const opacityLabel = document.querySelector("#opacityLabel");

let mouseDown = false;
let activeModeBtn = colorModeBtn;

sketchBoard.addEventListener("mousedown", () => (mouseDown = true));
sketchBoard.addEventListener("mouseup", () => (mouseDown = false));
sizeRange.addEventListener("input", updateSizeLabel);
opacityRange.addEventListener("input", updateOpacity);
colorModeBtn.addEventListener("click", selectMode);
randomModeBtn.addEventListener("click", selectMode);
eraserModeBtn.addEventListener("click", selectMode);
resetBoardBtn.addEventListener("click", resetBoard);

/*
 * Window load event and methods
 */
function setLabelDefaults() {
  sizeRange.value = DEFAULT_SIZE;
  sizeLabel.textContent = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;
  opacityRange.value = DEFAULT_OPACITY;
  opacityLabel.textContent = DEFAULT_OPACITY;
}

function setupSketchBoard(size) {
  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", updatePixelColor);
    pixel.addEventListener("mousedown", updatePixelColor);
    sketchBoard.appendChild(pixel);
  }
}

function updateSelectedColor(newColorHex) {
  selectedColor.value = newColorHex;
  selectedColor.style.opacity = opacityRange.value;
}

window.onload = () => {
  setLabelDefaults();
  setupSketchBoard(sizeRange.value);
  updateSelectedColor(DEFAULT_COLOR);
};

/*
 * Event Listeners
 */
function selectMode(e) {
  activeModeBtn.classList.remove("active");
  this.classList.add("active");
  activeModeBtn = this;
  let newColor = selectedColor.value;
  if (activeModeBtn === randomModeBtn) {
    newColor = generateRandomColorHex();
  } else if (activeModeBtn === eraserModeBtn) {
    newColor = DEFAULT_ERASER;
  }
  updateSelectedColor(newColor);
}

function updatePixelColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (activeModeBtn === randomModeBtn) {
    updateSelectedColor(generateRandomColorHex());
  }
  this.style.backgroundColor = selectedColor.value;
  this.style.opacity = opacityRange.value;
}

function resetBoard() {
  sketchBoard.innerHTML = "";
  setupSketchBoard(sizeRange.value);
}

function updateSizeLabel(e) {
  sizeLabel.textContent = `${this.value} x ${this.value}`;
}

function updateOpacity(e) {
  opacityLabel.textContent = opacityRange.value;
  updateSelectedColor(selectedColor.value);
}

/*
 * Helper Methods
 */

function generateRandomColorHex() {
  return `#${Math.floor(Math.random() * 256 ** 3).toString(16)}`;
}
