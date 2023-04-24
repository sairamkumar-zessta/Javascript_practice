/* Follow the instructions found in the description to complete the JavaScript functionality.*/
const todoItemsContainer = document.getElementById("todoItemsContainer");
const todoUserInput = document.getElementById("todoUserInput");
const addBtn = document.getElementById("addTodoButton");
let todoList = [
  {
    text: "Learn HTML"
  },
  {
    text: "Learn CSS"
  },
  {
    text: "Learn JavaScript"
  }
];
const addAndAppendTodo = (todo)=>{
    const todoListEl = document.createElement('li');
    todoItemsContainer.appendChild(todoListEl);
    todoItemsContainer.style.listStyleType ="none";
    todoListEl.classList.add("d-flex","todo-item-container");
    const checkboxInput = document.createElement('input');
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    todoListEl.appendChild(checkboxInput);
    const labelCont = document.createElement("div");
    labelCont.classList.add("label-container","d-flex");
    todoListEl.appendChild(labelCont);
    const todoTaskLabel = document.createElement("label");
    todoTaskLabel.classList.add("checkbox-label");
    todoTaskLabel.textContent= todo;
    checkboxInput.onclick = ()=>{
        todoTaskLabel.classList.toggle("todo-strike");
    }
    labelCont.appendChild(todoTaskLabel);
    const deleteIcon = document.createElement("i");
    deleteIcon.onclick=()=>{
        todoItemsContainer.removeChild(todoListEl);
    }
    deleteIcon.classList.add("fa-solid","fa-trash","delete-icon-container","delete-icon");
    labelCont.appendChild(deleteIcon);
}
addBtn.onclick=()=>{
    if (todoUserInput.value.length === 0){
        alert("Please enter valid Input");
    }
    else{
        addAndAppendTodo(todoUserInput.value);
    }
}
for (const each of todoList){
    addAndAppendTodo(each.text);
}