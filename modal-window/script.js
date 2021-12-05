let button = document.querySelector('.button');
let popup = document.querySelector('.popup');
button.addEventListener('click', (event) => {
    popup.classList.add('visual');
});

let close = document.querySelector('.popup-close');
close.addEventListener('click', (event) => {
    popup.classList.remove('visual');
});

window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.classList.remove('visual');
    }
});