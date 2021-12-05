let open = document.querySelector('.open');
let close = document.querySelector('.close');
let input = document.querySelector('.qwerty');
let submit = document.querySelector('.submit');
let form = document.querySelector('form');
let burgerMenu = document.querySelector('.burger-menu'); 

open.addEventListener('click', (event) => {
    open.classList.add('unvisual');
    close.classList.add('visual');
    burgerMenu.classList.add('visual');
});

close.addEventListener('click', (event) => {
    open.classList.remove('unvisual');
    close.classList.remove('visual');
    burgerMenu.classList.remove('visual');
    input.classList.remove('change-color');
    form.classList.remove('change-color');
    submit.classList.remove('change-color');
});

form.addEventListener('focusin', (event) => {
    form.classList.add('change-color');
    input.classList.add('change-color');
    submit.classList.add('change-color');
});

form.addEventListener('focusout', (event) => {
    form.classList.remove('change-color');
    input.classList.remove('change-color');
    submit.classList.remove('change-color');
})

document.addEventListener ('click', (event) => {
    if (!burgerMenu.contains(event.target) && !open.contains(event.target)) {
        burgerMenu.classList.remove('visual');
        open.classList.remove('unvisual');
        close.classList.remove('visual');
    }
})