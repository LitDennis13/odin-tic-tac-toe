const changeNamesModal = document.querySelector("#changeNamesModal");

const changeNamesPageButton = document.querySelector("#changePlayerNames");

const closeModalButton = document.querySelector("#closeModalButton");

changeNamesPageButton.addEventListener("click",openChangeNamesModal);

closeModalButton.addEventListener("click",closeChangeNamesModal);

function openChangeNamesModal() {
    playerOneEnteredName.value = "";
    playerTwoEnteredName.value = "";
    changeNamesModal.showModal();
}
function closeChangeNamesModal() {
    changeNamesModal.close();
}

const playerOnePageDisplay = document.querySelector("#playerOne > p");

const playerTwoPageDisplay = document.querySelector("#playerTwo > p");

const playerOneEnteredName = document.querySelector("#playerOneName");

const playerTwoEnteredName = document.querySelector("#playerTwoName");

const setNamesModalButton = document.querySelector("#setNamesButton");


setNamesModalButton.addEventListener("click",setPlayerNames);


function setPlayerNames() {
    if (playerOneEnteredName.checkValidity() && playerTwoEnteredName.checkValidity()) {
        playerOnePageDisplay.textContent = playerOneEnteredName.value;
        playerTwoPageDisplay.textContent = playerTwoEnteredName.value;
    }
}



