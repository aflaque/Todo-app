import Dom from './Dom.js';

class TodoView {
    constructor({ todoTab: todoTab = Dom.todoList } = {}) {
        this.todoTab = todoTab;
        this.onToggleTodo = null;
    }
    render(project) {
        Dom.todoListTitle.textContent = `${project.title}`;
        this.todoTab.innerHTML = '';
        for (const todo of project.todos) {
            const container = document.createElement('div');

            const checklist = document.createElement('button');
            checklist.textContent = 'tick';
            checklist.dataset.todoId = todo.id;
            checklist.addEventListener('click', () => {
                if (this.onToggleTodo) {
                    this.onToggleTodo(todo.id);
                }
            });
            container.append(checklist);

            const para = document.createElement('p');
            para.textContent = todo.title;
            container.append(para);

            this.todoTab.append(container);
        }
    }
}
export default TodoView;
