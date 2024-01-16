function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function TTTFactory() {
    let playing = true;
    let winner = "none";
    let gameBoardJs = [];
    let possibleWins = [
        ["A","A","A","","","","","",""],
        ["","","","A","A","A","","",""],
        ["","","","","","","A","A","A"],
        ["A","","","","A","","","","A"],
        ["","","A","","A","","A","",""],
        ["A","","","A","","","A","",""],
        ["","A","","","A","","","A",""],
        ["","","A","","","A","","","A"]
    ]
    const updateTurn = function() {
        playerTurnDisplay.textContent = `${playerTurn ? playerOne.textContent : playerTwo.textContent}(${currentMarker(playerTurn)}) Turn`;
    }

    const currentMarker = function(turn) {
        return turn ? "X" : "O";
    }

    const addXO = function (event) {
        let target = event.target;
    
        if (target.classList.contains("gameBoardSquare") && target.textContent==="") {
            target.textContent = currentMarker(playerTurn);
            playerTurn = !playerTurn;
        }
        
    }

    const resetGame = function() {
        let completeReset = true;
        for (const square of document.querySelectorAll(".gameBoardSquare")) {
            if (square.textContent !== ""){
                completeReset = false;
            }
            square.textContent = "";
        }
        if (completeReset) {
            location.reload();
        }
        playing = true;
        playerTurn = true;
        updateTurn();
    }
    const updateGameBoardJS = function() {
        gameBoardJs = [];
        for (let i = 1; i <= 9;i++) {
            gameBoardJs.push(document.querySelector(`#sq${i}`).textContent);
        }

    }

    const checkingWinner = function() {
        updateGameBoardJS();
        let checkBoardJsX = gameBoardJs.map((square) => {
            if (square === "X") {
                return "A";
            }
            else return "";
        });
        let checkBoardJsO = gameBoardJs.map((square) => {
            if (square === "O") {
                return "A";
            }
            else return "";
        });

        for (const possibility of possibleWins) {
            if (arrayEquals(checkBoardJsX,possibility)) {
                return "X";
            };
        }
        for (const possibility of possibleWins) {
            if (arrayEquals(checkBoardJsO,possibility)) {
                return "O";
            }
        }
        return "none";
    }

    const updatePlayerWins = function() {
        playerOneWinsDisplay.textContent = `Wins: ${playerOneWins}`;
        playerTwoWinsDisplay.textContent = `Wins: ${playerTwoWins}`;
    }

    const updateWinnerTitle = function() {
        if (winner === "X") {
            playerTurnDisplay.textContent = `${playerOne.textContent} Wins`;
        }
        else if (winner === "O") {
            playerTurnDisplay.textContent = `${playerTwo.textContent} Wins`;
        }
    }
    const checkWinner = function() {
        if (winner === "X") {
            updateWinnerTitle();
            playing = false;
            playerOneWins++;
        }
        else if (winner === "O") {
            updateWinnerTitle();
            playing = false;
            playerTwoWins++;
        }
        updatePlayerWins();
    }
    
        
    
    const gameUpdate = function() {
        winner = checkingWinner();
        if (winner !== "none") {
            checkWinner();
            return;
        }
        else {
            updateTurn();
        }
        updateGameBoardJS();
    }    

    const onSquareClick = function(event) {
        if (playing === true) {
            addXO(event);
            gameUpdate();
        }
        
    }

    return{
        gameBoardJs,
        onSquareClick,
        addXO,
        currentMarker,
        gameUpdate,
        updateTurn,
        resetGame,
        updateWinnerTitle,
    }
}
