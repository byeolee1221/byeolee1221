let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://naver.com';
newAnchorElement.textContent = 'NAVER';

let parent = document.querySelector('.link');

parent.append(newAnchorElement);

// let removeElement = document.querySelector('.link');

// removeElement.remove();
// removeElement.parentElement.removeChild(removeElement);

let change = document.querySelector('#DOM');

// change.parentElement.append(newAnchorElement);

change.innerHTML = 'Hi, This is <strong>important!</strong>.';
// change.textContent = 'Hi, This is <strong>important!</strong>.';

