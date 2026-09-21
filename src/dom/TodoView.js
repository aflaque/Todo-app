import Dom from './Dom.js';

class TodoView {
    constructor({ todoTab = Dom.todoList } = {}) {
        this.todoTab = todoTab;
        this.onToggleTodo = null;
        this.onDeleteTodo = null;
        this.onEditTodo = null;
    }
    render(project) {
        Dom.todoListTitle.textContent = project.title;
        this.todoTab.innerHTML = '';
        for (const todo of project.todos) {
            const container = document.createElement('div');

            const checklist = document.createElement('button');
            checklist.textContent = todo.completed ? '✓' : '○';
            checklist.dataset.todoId = todo.id;
            checklist.addEventListener('click', () => {
                if (this.onToggleTodo) {
                    this.onToggleTodo(todo.id);
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            deleteButton.addEventListener('click', () => {
                if (this.onDeleteTodo) {
                    this.onDeleteTodo(todo.id);
                }
            });

            const editButton = document.createElement('button');
            editButton.textContent = 'edit';
            editButton.addEventListener('click', () => {
                if (this.onEditTodo) {
                    this.onEditTodo(todo.id);
                }
            });

            const para = document.createElement('p');
            para.textContent = todo.title;
            container.append(para);

            container.append(checklist);
            container.append(deleteButton);
            container.append(editButton);
            this.todoTab.append(container);
        }
    }
}
export default TodoView;
