const gameSquaresArray = [];

for (let i = 1; i <= 9;i++) {
    gameSquaresArray.push(document.querySelector(`#sq${i}`));
}

const resetButton = document.querySelector("#resetButton");

const gameBoard = document.querySelector("#gameBoard");

const playerTurnDisplay = document.querySelector("#turnIndicator");

let playerTurn = true;
// true == playerOne
// false == playerTwo

let playerOne = playerOnePageDisplay;
let playerTwo = playerTwoPageDisplay;

let playerOneWins = 0;
let playerTwoWins = 0;

const playerOneWinsDisplay = document.querySelector("#playerOneWinCount");
const playerTwoWinsDisplay = document.querySelector("#playerTwoWinCount");

let TTT = TTTFactory();

TTT.updateTurn();

gameBoard.addEventListener("click",TTT.onSquareClick);

resetButton.addEventListener("click", TTT.resetGame);