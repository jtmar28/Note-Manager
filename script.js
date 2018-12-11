const form = document.querySelector('#add');
const list = document.querySelector('#list');
const input = document.querySelector('#add-input');

loadAllEventListners();

function loadAllEventListners(){
    form.addEventListener('submit', addNoteToList);
}

function addNoteToList(e){
    const li = document.createElement('li');
    li.innerHTML = `
    <p>${input.value}</p>
    <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
    <input class="edit-note" type="text">
    `;
    list.appendChild(li);
    clearInput();
    e.preventDefault();
}

function clearInput(){
    input.value = '';
}





















