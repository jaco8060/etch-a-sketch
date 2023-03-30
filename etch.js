function changeColour(e) {
  e.target.style.backgroundColor = "blue";
}

function onMouseDown() {
  isMouseDown = true;
}

function onMouseUp() {
  isMouseDown = false;
}

function onMouseMove(event) {
  if (isMouseDown) {
    changeColour(event);
  }
}

const squares = document.querySelectorAll(".square");
let isMouseDown = false;

squares.forEach((square) => {
  square.addEventListener("mousedown", onMouseDown);

  square.addEventListener("mouseup", onMouseUp);

  square.addEventListener("mousemove", onMouseMove);
});

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

function resetSquares(e) {
  squares.forEach((square) => {
    square.style.backgroundColor = "bisque";
  });
}

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", resetSquares);
