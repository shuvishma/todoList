const input = document.querySelector('.inputField input') ;
const addButton = document.querySelector('.inputField button') ;
const todolist = document.querySelector('.todolist') ;
const deleteAll = document.querySelector('.footer button') ;

input.onkeyup = () => {
    let userInput = input.value ;
    if(userInput.trim() != 0) {
        addButton.classList.add('active') ;
    }
    else {
        addButton.classList.remove('active') ;
    }
}

showTasks() ;

addButton.onclick = () => {
    let userInput = input.value ;
    let getData = localStorage.getItem('New') ;
    if(getData == null) {
        listArray = [] ;
    }
    else {
        listArray = JSON.parse(getData) ;
    }
    listArray.push(userInput) ;
    localStorage.setItem('New', JSON.stringify(listArray)) ;
    showTasks() ;
    addButton.classList.remove('active') ;
}

function showTasks() {
    let getData = localStorage.getItem('New') ;
    if(getData == null) {
        listArray = [] ;
    }
    else {
        listArray = JSON.parse(getData) ;
    }
    const pendingTask = document.querySelector('.pendingTasks') ;
    pendingTask.textContent = listArray.length ;
    if(listArray.length > 0) {
        deleteAll.classList.add('active') ;
    }
    else {
        deleteAll.classList.remove('active') ;
    }
    let newTask = "" ;
    listArray.forEach((element,index) => {
        newTask += `<li>${element}
        <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
        </li>` ;
    });
    todolist.innerHTML = newTask ;
    input.value = "" ;
}

function deleteTask(index) {
    let getData = localStorage.getItem("New") ;
    listArray = JSON.parse(getData) ;
    listArray.splice(index, 1) ;
    localStorage.setItem('New', JSON.stringify(listArray)) ;
    showTasks() ;
}

deleteAll.onclick = () => {
    listArray = [] ;
    localStorage.setItem('New', JSON.stringify(listArray)) ;
    showTasks() ;
}


