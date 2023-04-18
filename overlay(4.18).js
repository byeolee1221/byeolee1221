const overlayBtn = document.getElementById('overlay_btn');
const overlayBtnFinal = document.getElementById('overlay_btn_final');

const backdropElement = document.getElementById('backdrop');
const asideElement = document.querySelector('.overlay_box');

const overlayCloseBtn = document.getElementById('close_overlay');

function overlay() {
    asideElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function overlayClose() {
    asideElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function overlayFinal() {
    asideElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

overlayBtn.addEventListener('click', overlay);
overlayCloseBtn.addEventListener('click', overlayClose);
overlayBtnFinal.addEventListener('click', overlayFinal);