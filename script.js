const form = document.querySelector('#add');
const list = document.querySelector('#list');
const input = document.querySelector('#add-input');
const hideUl = document.querySelector('#hide-list');

loadAllEventListners();

function loadAllEventListners(){
    form.addEventListener('submit', addNoteToList);
    list.addEventListener('click', deleteNoteFromList);
    list.addEventListener('click', editNoteFromList);
    hideUl.addEventListener('click', hideList);
}

//Add note to list
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
//Delete note from list
function deleteNoteFromList(e){
    if(e.target.classList.contains('fa-times')){
        e.target.parentElement.parentElement.remove();
    }
}

function editNoteFromList(e){
    if(e.target.classList.contains('fa-pencil-square-o')){
        //This empties the note
        const parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        //This is the p element containing the note text value
        const note = parentPar.previousElementSibling;
        //This input is initially invisible 
        const input = parentPar.nextElementSibling;
        input.style.display = 'block';
        //The value thats within the p element is equal to the value inside the input
        input.value = note.textContent;
        input.addEventListener('keypress', function(e){ 
            //Key code 13 is the enter key
            if(e.keyCode === 13){
                if(input.value !== ""){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                }else{
                    let li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
    }
}
//Hide notes
function hideList(){
    let label = document.querySelector('label');
    if(e.target.checked){
        label.textContent = 'Unhide notes';
        list.style.display = 'none';
    }else{
        label.textContent.textContent = 'hide notes';
        list.style.display = 'block';
    }
}
function clearInput(){
    input.value = '';
}





















