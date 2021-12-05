let open = document.querySelector('.open');
let link = document.querySelectorAll('.link');
let menu = document.querySelector('.menu');
let main = document.querySelector('main');
open.addEventListener('click', (event) => {
    menu.classList.add('opened');
    main.classList.add('major');
    open.classList.add('none');
    menu.classList.add('visual');
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add('visual');
    }
});

let close = document.querySelector('.close');
close.addEventListener('click', (event) => {
    menu.classList.remove('opened');
    menu.classList.remove('visual');
    main.classList.remove('major');
    open.classList.remove('none');
    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('visual');
    }
});