function addCheckbox(li) {
  let inputCheckbox = document.createElement('input');
  inputCheckbox.setAttribute('type', 'checkbox');
  li.appendChild(inputCheckbox);

  inputCheckbox.addEventListener('change', function(event) {
    if (inputCheckbox.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = '';
    }
  })
}

function addDeleteButton(li) {
  let inputDelete = document.createElement('input');
  inputDelete.setAttribute('type', 'submit');
  inputDelete.value = 'Удалить';
  li.appendChild(inputDelete);
  inputDelete.classList.add('remove');

  inputDelete.addEventListener('click', function(event){
    li.remove();
  })
}

function createLi(text) {
  let li = document.createElement('li');
  li.textContent = text;
  li.classList.add('li');
  return li;
}

function addLi(text) {
  let ul = document.querySelector('ul');
  let li = createLi(text);
  ul.appendChild(li);

  addCheckbox(li);
  addDeleteButton(li);
}

let textInput = document.querySelector('input');
let form = document.querySelector('form');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addLi(textInput.value);
  textInput.value = '';
})


function markAll() {
    let li = document.querySelectorAll('li');
    for(let i = 0; i < li.length; i++) {
        let checkbox = li[i].querySelector('input');
        console.log(checkbox);
        checkbox.checked = true;
        li[i].style.textDecoration = 'line-through';
    } 
}

let button = document.querySelector('.all');
button.addEventListener('click', markAll);


function deleteAll() {
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i++) {
    li[i].remove();
  }
}

let buttonDelete = document.querySelector('.remove');
buttonDelete.addEventListener('click', deleteAll);


