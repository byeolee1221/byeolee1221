const userInput = document.querySelector('#user_text');
const userInputCount = document.querySelector('#count');

// console.dir(userInput);

let maxAllowChars = userInput.maxLength;

function inputCount(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainCharacters = maxAllowChars - enteredTextLength;

    userInputCount.textContent = remainCharacters;

    if (remainCharacters === 0) {
        userInputCount.classList.add('error');
        let inputBackground = userInput.classList.add('bg_error');
        userInput == inputBackground;
    } else if (remainCharacters <= 10) {
        userInputCount.classList.add('warning');
        let inputBackground2 = userInput.classList.add('bg');
        userInput == inputBackground2;
        userInputCount.classList.remove('error');
        userInput.classList.remove('bg_error');
    } else {
        userInputCount.classList.remove('warning');
        userInput.classList.remove('bg');
    }
}

userInput.addEventListener('input', inputCount);

// userInputCount.className = 'warning';

// userInputCount.style.color = '#ff5324';

const myName = 'byeolee';

if (myName == 'byeolee') {
    console.log('Hello');
}

// let question = prompt('로그인 하셨나요?');

// if (question === '네') {
//     let answer = true;
//     console.log(answer);
// } else {
//     let answer2 = false;
//     console.log(answer2);
// }

