const overlay = document.querySelector('aside');
const backdrop = document.getElementById('backdrop');

const overlayCancelBtn = document.getElementById('cancel_btn');

const editPlayer1Btn = document.querySelector('#edit_player1');
const editPlayer2Btn = document.querySelector('#edit_player2');

editPlayer1Btn.addEventListener('click', playerNameEditOverlay);
editPlayer2Btn.addEventListener('click', playerNameEditOverlay);

overlayCancelBtn.addEventListener('click', overlayCancel);
backdrop.addEventListener('click', overlayCancel);