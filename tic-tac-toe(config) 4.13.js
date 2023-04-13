function playerNameEditOverlay(event) {
    selectedPlayer = +event.target.dataset.playerid;
    overlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function overlayCancel() {
    overlay.style.display = 'none'
    backdrop.style.display = 'none'
    formElement.firstElementChild.classList.remove('error');
    configErrorElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function saveUserName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('player_name').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        configErrorElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerName = document.getElementById('player-' + selectedPlayer + '-data');
    updatedPlayerName.children[1].textContent = enteredPlayerName;

    // if (selectedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     player[1].name = enteredPlayerName;
    // }
    players[selectedPlayer - 1].name = enteredPlayerName;

    overlayCancel();
}