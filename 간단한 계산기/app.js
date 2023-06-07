let userNum = 0;
let resultNum = 0;
let resultNumArray = [];

function userInputFunc (event) {
    userNum = event.target.value;
}

function resultArray (result) {
    result = resultNum;
    resultNumArray.push(resultNum);
    console.log(resultNumArray);
}

function addFunc (num1) {
    num1 = +userNum;
    
    if (num1 === 0 || num1 === '') {
        return;
    }
    
    const addUserNum = resultNum + num1;
    
    resultProcess.textContent = `${resultNum} + ${num1}`;
    result.textContent = addUserNum;
    resultNum = addUserNum;
    userInput.value = '';
    resultArray();
}

function subFunc (num1) {
    num1 = +userNum;
    
    if (num1 === 0 || num1 === '') {
        return;
    } 

    const subUserNum = resultNum - num1;

    resultProcess.textContent = `${resultNum} - ${num1}`;
    result.textContent = subUserNum;
    resultNum = subUserNum;
    userInput.value = '';
    resultArray();
}

function multiplyFunc (num1) {
    num1 = +userNum;

    if (num1 === 0 || num1 === '') {
        return;
    }

    const multiplyUserNum = resultNum * num1;

    resultProcess.textContent = `${resultNum} * ${num1}`;
    result.textContent = multiplyUserNum;
    resultNum = multiplyUserNum;
    userInput.value = '';
    resultArray();
}

function divideFunc (num1) {
    num1 = +userNum;

    if (num1 === 0 || num1 === '') {
        return;
    }

    const divideUserNum = resultNum / num1;

    resultProcess.textContent = `${resultNum} / ${num1}`;
    result.textContent = divideUserNum;
    resultNum = divideUserNum;
    userInput.value = '';
    resultArray();
}

userInput.addEventListener('input', userInputFunc);
addBtn.addEventListener('click', addFunc);
subBtn.addEventListener('click', subFunc);
mulBtn.addEventListener('click', multiplyFunc);
divBtn.addEventListener('click', divideFunc);