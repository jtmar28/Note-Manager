const form = document.querySelector('#add');
const list = document.querySelector('#list');
const input = document.querySelector('#add-input');

loadAllEventListners();

function loadAllEventListners(){
    form.addEventListener('submit', addNoteToList);
    list.addEventListener('click', deleteNoteFromList);
    list.addEventListener('click', editNoteFromList);
}

function addNoteToList(e){
    if(input.value === ""){
        alert('please Enter value');
    }else{
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${input.value}</p>
        <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
        <input class="edit-note" type="text">
        `;
        list.appendChild(li);
        clearInput();
    }
    e.preventDefault();
}

function deleteNoteFromList(e){
    if(e.target.classList.contains('fa-times')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearInput(){
    input.value = '';
}





















