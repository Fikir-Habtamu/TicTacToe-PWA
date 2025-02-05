const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const checkWinner = () => {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            alert(`${boardState[a]} Wins!`);
            return;
        }
    }

    if (!boardState.includes("") && gameActive) {
        alert("It's a Draw!");
        gameActive = false;
    }
};

const handleClick = (e) => {
    const index = e.target.dataset.index;
    if (!boardState[index] && gameActive) {
        boardState[index] = currentPlayer;
        e.target.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
};

const restartGame = () => {
    boardState.fill("");
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.innerText = "");
};

cells.forEach(cell => cell.addEventListener("click", handleClick));
restartBtn.addEventListener("click", restartGame);
