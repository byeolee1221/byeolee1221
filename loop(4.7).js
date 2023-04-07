for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Mun', 'Choi', 'Park'];

for (const user of users) {
    console.log(user);
}

const userLoggedIn = {
    name: 'Ayeong',
    age: 22,
    signInCheck: true
}

for (loggedIn in userLoggedIn) {
    console.log(loggedIn);
    console.log(userLoggedIn[loggedIn]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('종료하시겠습니까?');
}

console.log('종료되었습니다.');