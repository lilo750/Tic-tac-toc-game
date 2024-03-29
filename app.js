const squares = document.querySelectorAll(".square");
const resetButton = document.getElementById("reset-button");

let isTrue = true; //to keep adapt the x and o turn
let move = 0; //to keep tracking the game for the draw functionality

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

squares.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (isTrue) {
        box.innerText = "X";
        isTrue = !isTrue;
      } else {
        box.innerText = "O";
        isTrue = !isTrue;
      }
      move++;
    }

    const winner = checkWinner();
    if (winner != null) {
      alert(`Player ${winner} wins!`);
      resetGame();
    } else if (move === squares.length) {
      alert(`It's a draw! Good job!`);
      resetGame();
    }
  });
});

function resetGame() {
  squares.forEach((box) => {
    box.innerText = "";
  });
  isTrue = true;
  move = 0;
}

function checkWinner() {
  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];
    if (
      squares[a].innerText !== "" &&
      squares[a].innerText === squares[b].innerText &&
      squares[a].innerText === squares[c].innerText
    ) {
      return squares[a].innerText;
    }
  }
  return null;
}

resetButton.addEventListener("click", resetGame);
