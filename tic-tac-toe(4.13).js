const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let selectedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O'
    }
];

const overlay = document.querySelector('aside');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const configErrorElement = document.getElementById('config_error');
const gameStartBtnElement = document.getElementById('start_btn');
const gameContainerElement = document.querySelector('.game_container')
const gameBoardElement = document.querySelector('.game_box');
const activePlayerNameElement = document.getElementById('active_player_name');
const winnerBoxElement = document.querySelector('.winner_box');

const overlayCancelBtn = document.getElementById('cancel_btn');

const editPlayer1Btn = document.querySelector('#edit_player1');
const editPlayer2Btn = document.querySelector('#edit_player2');

editPlayer1Btn.addEventListener('click', playerNameEditOverlay);
editPlayer2Btn.addEventListener('click', playerNameEditOverlay);

overlayCancelBtn.addEventListener('click', overlayCancel);
backdrop.addEventListener('click', overlayCancel);

formElement.addEventListener('submit', saveUserName);
gameStartBtnElement.addEventListener('click', startNewGame);

// for (const gameBoardElement of gameBoardElements) {
//     gameBoardElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);