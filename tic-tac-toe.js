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

window.addEventListener('DOMContentLoaded', (e) => {
    //Start Up
    let board = document.querySelector('#board');
    let status = document.querySelector('#status');
    let btn = document.querySelector('.btn');
    factO = false
    displaySqaures(board);

    let squares = document.querySelectorAll('.square')

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
        })
    })
});