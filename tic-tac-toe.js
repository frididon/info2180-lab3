function displaySqaures(board) {
    for (let x = 0; x < board.children.length; x++) {
        board.children[x].className = 'square';

    }
}

function Board() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
};

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] &&
            board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner;
};

window.addEventListener('DOMContentLoaded', (e) => {
    //Start Up
    let board = document.querySelector('#board');
    let status = document.querySelector('#status');
    let btn = document.querySelector('.btn');
    factO = false
    displaySqaures(board);

    let squares = document.querySelectorAll('.square')
        // Adds X then O upon clicks 
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (factO && square.textContent == '') {
                square.classList.add('O')
                square.textContent = 'O';
                factO = false

            } else if (!factO && square.textContent == '') {
                square.classList.add('X')
                square.textContent = 'X'
                factO = true
            }
            // Changes square hover style after square has been click 
            square.addEventListener('mouseenter', e => {
                square.classList.add('hover')
            })

            // Removes hover style from the square on mouse leave
            square.addEventListener('mouseleave', e => {
                    square.classList.remove('hover')
                })
                //Reset Game
            btn.addEventListener('click', e => {
                squares.forEach(square => {
                    square.textContent = '';
                    square.classList.remove('X');
                    square.classList.remove('O');
                })
            })
        })
    })
});