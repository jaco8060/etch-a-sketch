function changeColour(e) {
  e.target.style.backgroundColor = "blue";
  //   console.log(e.target);
}
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.draggable = false;
  square.addEventListener("mouseover", changeColour);
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
