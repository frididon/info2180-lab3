document.addEventListener("DOMContentLoaded", function() {
    // Selecting the element
    var square = document.querySelectorAll("#board div");

    for (let i = 0; i < square.length; i++) {
        square[i].classList.add('square');
    }
});

/*
We store our game status element here to allow us to more easily 
use it later on 
*/
const statusDisplay = document.querySelector('.game--status');
/*
Here we declare some variables that we will use to track the 
game state throught the game. 
*/
/*
We will use gameActive to pause the game in case of an end scenario
*/
let gameActive = true;
/*
We will store our current player here, so we know whos turn 
*/
let currentPlayer = "X";
/*
We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played squares and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
We set the inital message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();

function handlesquarePlayed() {

}

function handlePlayerChange() {

}

function handleResultValidation() {

}

function handlesquareClick() {

}

function handleRestartGame() {

}
/*
And finally we add our event listeners to the actual game squares, as well as our 
restart button
*/
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handlesquareClick));
document.querySelector('.game--restart').addE

function handlesquareClick(clickedsquareEvent) {
    /*
    We will save the clicked html element in a variable for easier further use
    */
    const clickedsquare = clickedsquareEvent.target;
    /*
    Here we will grab the 'data-square-index' attribute from the clicked square to identify where that square is in our grid. 
    Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
    integer(number)
    */
    const clickedsquareIndex = parseInt(
        clickedsquare.getAttribute('data-square-index')
    );
    /* 
    Next up we need to check whether the call has already been played, 
    or if the game is paused. If either of those is true we will simply ignore the click.
    */
    if (gameState[clickedsquareIndex] !== "" || !gameActive) {
        return;
    }
    /* 
    If everything if in order we will proceed with the game flow
    */
    handlesquarePlayed(clickedsquare, clickedsquareIndex);
    handleResultValidation();
}

function handlesquarePlayed(clickedsquare, clickedsquareIndex) {
    /*
    We update our internal game state to reflect the played move, 
    as well as update the user interface to reflect the played move
    */
    gameState[clickedsquareIndex] = currentPlayer;
    clickedsquare.innerHTML = currentPlayer;
}

//window.onload = function() {
//  var board = document.getElementById("board");
//var btn = document.getElementById("btn");

//button.onclick = function() {
//  if (board.className == "open") {
//    board.className = "";
/// btn.innerHTML = "New Game"

//  } else {
//    board.className = "open"
//  btn.innerHTML = "Restart"
//}
//}
//}