let paragraghElement = document.querySelector('.click');

function changeText() {
    paragraghElement.textContent = 'Clicked!';
    console.log('Paragragh Clicked!');
}

paragraghElement.addEventListener('click', changeText);

let userMessage = document.getElementById('user_message');

function message(events) {
    let enteredText = userMessage.value;
    console.log(enteredText);
    console.log(events);
}

userMessage.addEventListener('input', message);