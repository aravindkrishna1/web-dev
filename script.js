// script.js
const chessboard = document.getElementById('chessboard');

function createChessboard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            chessboard.appendChild(square);
        }
    }
}

createChessboard();
