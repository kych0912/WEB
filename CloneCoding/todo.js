const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteList(evenet){
    const li = evenet.target.parentElement;
    li.remove();

}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    saveToDos();

    button.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    
    toDos.push(newTodo);
    paintTodo(newTodo);
    toDoInput.value = "";

}

function sayHello(item){
    console.log("hello");
}

 

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null){
    console.log("null");
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;

    parseToDos.forEach(element => {
        paintTodo(element);
    });

    parseToDos.forEach(sayHello);
}

