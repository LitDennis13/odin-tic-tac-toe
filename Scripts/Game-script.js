const gameSqauresArray = [];

for (let i = 1; i <= 9;i++) {
    gameSqauresArray.push(document.querySelector(`#sq${i}`));
}

const resetButton = document.querySelector("#resetButton");

const gameBoard = document.querySelector("#gameBoard");

const playerTurnDisplay = document.querySelector("#turnIndicator");

let playerTurn = true;
// true == playerone
// false == playertwo

let playerOne = playerOnePageDisplay;
let playerTwo = playerTwoPageDisplay;

let TTT = TTTFactory();
TTT.updateTurn();

gameBoard.addEventListener("click",TTT.onSquareClick);

resetButton.addEventListener("click", TTT.resetGame);