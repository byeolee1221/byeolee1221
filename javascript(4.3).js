document.body.children[0];

console.dir(document.body.children[0]);

document.body.firstChild;

console.dir(document.body.firstChild);

document.body.firstElementChild;

console.dir(document.body.firstElementChild);

document.body.childNodes;

console.dir(document.body.childNodes);

let anchorElement = document.getElementById('DOM');

anchorElement.href = 'https://www.google.com';

anchorElement = document.querySelectorAll('a');

console.dir(anchorElement);

anchorElement.href = 'https://www.naver.com';

anchorElement = document.getElementsByTagName('div');

console.dir(anchorElement);

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://naver.com';
newAnchorElement.textContent = 'NAVER';

let parent = document.querySelector('.link');

parent.append(newAnchorElement);
