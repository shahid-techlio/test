'use strict';

class Todo {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        const todo = new Todo(title);
        this.todos.push(todo);
        this.render();
    }
    toggleComplete(index) {
        if (this.todos[index]) {
            this.todos[index].completed = !this.todos[index].completed;
            this.render();
        }
    }
    render() {
        const todoListEl = document.getElementById('todoList');
        todoListEl.innerHTML = '';
        this.todos.forEach((todo, index) => {
            const todoEl = document.createElement('li');
            todoEl.textContent = todo.title;
            todoEl.style.textDecoration = todo.completed ? 'line-through' : 'none';
            todoEl.addEventListener('click', () => this.toggleComplete(index));
            todoListEl.appendChild(todoEl);
        });
    }
}

const todoList = new TodoList();

document.getElementById('addTodoButton').addEventListener('click', () => {
    const todoTitle = document.getElementById('todoInput').value;
    if (todoTitle) {
        todoList.addTodo(todoTitle);
        document.getElementById('todoInput').value = '';
    }
});
