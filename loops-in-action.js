// Calculator container

const calculateSumBtn = document.querySelector('#calculator button');

function calculateSum() {
    const userInputNum = document.getElementById('user-number');
    const userNum = userInputNum.value;

    let sumUpToNum = 0;

    for (let i = 0; i <= userNum; i++) {
        sumUpToNum = sumUpToNum + i;
    }

    const resultSum = document.getElementById('calculated-sum');

    resultSum.textContent = sumUpToNum;
    resultSum.style.display = 'block';
} 

calculateSumBtn.addEventListener('click', calculateSum);

// Highlight container

const highlightBtn = document.querySelector('#highlight-links button');

const highlightElements = document.querySelectorAll('#highlight-links a');

function highlight() {
    for (const highlightElement of highlightElements) {
        highlightElement.classList.add('highlight');
    }
}

highlightBtn.addEventListener('click', highlight);

// Display user data

const userData = {
    firstName: 'Mun',
    lastName: 'Chang Gi',
    age: 30
};

const displayUserDataBtn = document.querySelector('#user-data button');

function displayUserData() {
    const displayDataParagraph = document.getElementById('output-user-data');

    displayDataParagraph.innerHTML = '';

    for (const key in userData) {
        const newUserDataList = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + userData[key];
        newUserDataList.textContent = outputText;
        displayDataParagraph.append(newUserDataList);
    }
}

displayUserDataBtn.addEventListener('click', displayUserData);

// Statistics

const rollDiceBtn = document.querySelector('#statistics button');

function rollDiceFunc() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNum() {
    const userInputTargetNum = document.getElementById('user-target-number');
    const diceRollsList = document.getElementById('dice-rolls');
    
    const enteredText = userInputTargetNum.value;
    diceRollsList.innerHTML = '';

    let hasRolledTargetNum = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNum) {
        const rolledNum = rollDiceFunc();

        // if (rolledNum == enteredText) {
        //     hasRolledTargetNum = true;
        // }
        numberOfRolls = numberOfRolls + 1;
        const newRollListItem = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNum;
        newRollListItem.textContent = outputText;
        diceRollsList.append(newRollListItem);

        hasRolledTargetNum = rolledNum == enteredText;
    }

    const outputTotalRolls = document.getElementById('output-total-rolls');
    const outputTagetNum = document.getElementById('output-target-number');

    outputTotalRolls.textContent = enteredText;
    outputTagetNum.textContent = numberOfRolls;
}

rollDiceBtn.addEventListener('click', deriveNum);