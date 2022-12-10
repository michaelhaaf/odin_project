const sketchBoard = document.querySelector("#sketchBoard");
const selectedColor = document.querySelector("#selectedColor");
const colorModeBtn = document.querySelector("#colorModeBtn");
const randomModeBtn = document.querySelector("#randomModeBtn");
const eraserModeBtn = document.querySelector("#eraserModeBtn");
const resetBoardBtn = document.querySelector("#resetBoardBtn");
const sizeRange = document.querySelector("#sizeRange");
const sizeValue = document.querySelector("#sizeValue");
const opacityRange = document.querySelector("#opacityRange");
const opacityValue = document.querySelector("#opacityValue");

const DEFAULT_COLOR = "#000000";
const DEFAULT_ERASER = "#FFFFFF";

// JS Pattern: events are "short-lived"; to combine events, decide on state
let mouseDown = false;
let activeModeBtn = colorModeBtn;

function generateRandomColorHex() {
  return `#${Math.floor(Math.random() * 256 ** 3).toString(16)}`;
}

function updatePixelColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (activeModeBtn === randomModeBtn) {
    selectedColor.value = generateRandomColorHex();
  }
  this.style.backgroundColor = selectedColor.value;
}

function resetBoard() {
  sketchBoard.innerHTML = "";
  setupSketchBoard(sizeRange.value);
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

function updateOpacity(e) {
  const percentage = ((100 * this.value) / 255).toFixed(2);
  opacityValue.textContent = `${percentage}%`;
}

function updateSize(e) {
  sizeValue.textContent = `${this.value} x ${this.value}`;
}

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
  selectedColor.value = newColor;
}

sketchBoard.addEventListener("mousedown", () => (mouseDown = true));
sketchBoard.addEventListener("mouseup", () => (mouseDown = false));
sizeRange.addEventListener("input", updateSize);
opacityRange.addEventListener("input", updateOpacity);

colorModeBtn.addEventListener("click", selectMode);
randomModeBtn.addEventListener("click", selectMode);
eraserModeBtn.addEventListener("click", selectMode);
resetBoardBtn.addEventListener("click", resetBoard);

window.onload = () => {
  setupSketchBoard(sizeRange.value);
  selectedColor.value = DEFAULT_COLOR;
};
