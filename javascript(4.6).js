const userInput = document.querySelector('#user_text');
const userInputCount = document.querySelector('#count');

// console.dir(userInput);

let maxAllowChars = userInput.maxLength;



function inputCount(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainCharacters = maxAllowChars - enteredTextLength;

    userInputCount.textContent = remainCharacters;

    if (remainCharacters <= 10) {
        let inputBackground = userInput.classList.add('bg');
        userInput == inputBackground;
    }
}

userInput.addEventListener('input', inputCount);

// userInputCount.className = 'warning';

userInputCount.classList.add('warning');

// userInputCount.style.color = '#ff5324';

const myName = 'byeolee';

if (myName == 'byeolee') {
    console.log('Hello');
}