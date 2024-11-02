let tiles = document.querySelectorAll(".tile");
let turnX = true;
let winnerText = document.querySelector("h2");
let resetBtn = document.querySelector("button");
let moves = 0;

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (!tile.classList.contains("tile-disabled")) {
      if (turnX) {
        tile.innerText = "X";
        turnX = false;
      } else {
        tile.innerText = "O";
        turnX = true;
      }
      tile.classList.add("tile-disabled");
      moves++;

      if (moves === 9) {
        winnerText.innerText = "Its a Tie";
        winnerText.style.visibility = "visible";
        console.log("tie");
      }

      checkWinner();
    }
  });
});

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  winPattern.forEach((pattern) => {
    let pt1 = tiles[pattern[0]].innerText;
    let pt2 = tiles[pattern[1]].innerText;
    let pt3 = tiles[pattern[2]].innerText;
    if (pt1 != "" && pt2 != "" && pt3 != "") {
      if (pt1 === pt2 && pt2 === pt3) {
        disableAllButtons();
        winnerText.innerText = `${pt1} Won the Game`;
        winnerText.style.visibility = "visible";
      }
    }
  });
};

const disableAllButtons = () => {
  tiles.forEach((tile) => {
    tile.classList.add("tile-disabled");
  });
};

resetBtn.addEventListener("click", () => {
  tiles.forEach((tile) => {
    tile.innerText = "";
    tile.classList.remove("tile-disabled");
  });
  turnX = true;
  winnerText.style.visibility = "hidden";
  moves = 0;
});
