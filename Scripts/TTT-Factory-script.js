function TTTFactory() {
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
        for (const sqaure of document.querySelectorAll(".gameBoardSquare")) {
            sqaure.textContent = "";
        }
        playerTurn = true;
        updateTurn();
    }
    
    const gameUpdate = function() {
        updateTurn();
    }    

    const onSquareClick = function(event) {
        addXO(event);
        gameUpdate();
    }

    return{
        onSquareClick,
        addXO,
        currentMarker,
        gameUpdate,
        updateTurn,
        resetGame,
    }
}
