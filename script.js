
// Model

let todos;

const savedTodos = JSON.parse(localStorage.getItem('todos'));

if(Array.isArray(savedTodos)){
        todos = savedTodos;
} else {
    todos =[{
            title: 'Make a list',
            dueDate: '2020-10-10',
            id: 'id1'
        }, {
            title: 'Make a list',
            dueDate: '2020-10-10',
            id: 'id2'
        }, {
            title: 'Make a list',
            dueDate: '2020-10-10',
            id: 'id3'
    }]

}
 
render();
function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {

const title = document.getElementById('textbox');
let titleText = title.value;

const date = document.getElementById('date');
const dueDate = date.value;
createTodo(titleText, dueDate);
}

function deleteTodo(event) {

const deleteButton = event.currentTarget;
const idToDelete = deleteButton.id;
removeTodo(idToDelete);
render();
}








//Controller
function createTodo(titleText, dueDate) {
const id = ' ' + new Date().getTime();

todos.push({ title: titleText, dueDate: dueDate, id: id });
render();
saveTodos();
}

function removeTodo(idToDelete){
todos = todos.filter(function (todo) {
    if (todo.id==idToDelete) {
        return false;
    } else {
        return true;
    }
})
saveTodos();
}








// View 
function render() {

document.getElementById('todo-list').innerHTML = '';

todos.forEach(function(todos) {
    //Fetches an element from HTML to JS and stores it in a variable called element to use it further.
    const element = document.createElement('div');
    element.innerText = todos.title + '' + todos.dueDate;
    element.className = 'todos';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.style = 'margin-left:15px'
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todos.id;
    element.appendChild(deleteButton);

    // Stores the parent div in a variable so that we can access it to add the newly made div 
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);


})
}



