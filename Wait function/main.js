const todoList = []
const addButton = document.querySelector("#add");
const todo = document.querySelector("#inputField")
const undoButton = document.querySelector("#undo");


const renderTodo = () => {
    var temp = ""
    for (let i = 0; i < todoList.length; i++) {

        temp += `<li >${todoList[i]} </li>`
    }
    document.getElementById('demo').innerHTML = temp
}



const addTodo = () => {
    todoList.push(todo.value)
    todo.value = ""
    renderTodo()
}
addButton.addEventListener("click", addTodo)





const someListener = (e) => {
    var element = e.target;
    if (element.tagName == "LI") {

        undoButton.style.display = "inline"
        removeTodo = setTimeout(() => {
            undoButton.style.display = 'none'
            const indx = todoList.indexOf(element.innerText)
            todoList.splice(indx, 1)
            renderTodo()
        }, 5000)
    }
    else if (element.id == "clear") {
        undoButton.style.display = "none"
        clearTimeout(removeTodo)
    }
}
document.addEventListener("click", someListener);




