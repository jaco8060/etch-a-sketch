const slider = document.getElementById("myRange");
const output = document.getElementById("slider-value");
output.innerHTML = `${slider.value}x${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${slider.value}x${slider.value}`;
};

slider.addEventListener("mouseup", changeContainer);

function changeContainer(e) {
  const squareContainer = document.querySelector(".container");
  squareContainer.innerHTML = ""; //reset container

  for (let i = 0; i < e.target.value; i++) {
    for (let j = 0; j < e.target.value; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      squareContainer.appendChild(div);
    }
  }
  squareContainer.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
  squareContainer.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`;
  const squares = document.querySelectorAll(".square");
  let isMouseDown = false;

  squares.forEach((square) => {
    square.addEventListener("mousedown", onMouseDown);

    square.addEventListener("mouseup", onMouseUp);

    square.addEventListener("mousemove", onMouseMove);
  });
  const resetBtn = document.querySelector(".resetBtn");
  resetBtn.addEventListener("click", resetSquares);
}
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
//by default
const squares = document.querySelectorAll(".square");
let isMouseDown = false;

squares.forEach((square) => {
  square.addEventListener("mousedown", onMouseDown);

  square.addEventListener("mouseup", onMouseUp);

  square.addEventListener("mousemove", onMouseMove);
});

function resetSquares(e) {
  const squaresReset = document.querySelectorAll(".square");

  squaresReset.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetSquares);
