const userInput = document.querySelector('#user_text');
const userInputCount = document.querySelector('#count');

// console.dir(userInput);

let maxAllowChars = userInput.maxLength;

function inputCount(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainCharacters = maxAllowChars - enteredTextLength;

    userInputCount.textContent = remainCharacters;
}

userInput.addEventListener('input', inputCount);

// userInputCount.className = 'warning';

userInputCount.classList.add('warning');

// userInputCount.style.color = '#ff5324';