function changeColour(e) {
  e.target.style.backgroundColor = "blue";
}

function onMouseDown() {
  isMouseDown = true;
}

function onMouseUp() {
  isMouseDown = false;
}

function onMouseMove(e) {
  if (isMouseDown) {
    changeColour(e);
  }
}

const squares = document.querySelectorAll(".square");
let isMouseDown = false;

squares.forEach((square) => {
  square.addEventListener("mousedown", onMouseDown);

  square.addEventListener("mouseup", onMouseUp);

  square.addEventListener("mousemove", onMouseMove);
});

function resetSquares(e) {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetSquares);

const slider = document.getElementById("myRange");
const output = document.getElementById("slider-value");
output.innerHTML = `${slider.value}x${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${slider.value}x${slider.value}`;
};

slider.addEventListener("mouseup", printValue);

function printValue(e) {
  console.log(e.target.value);
}
