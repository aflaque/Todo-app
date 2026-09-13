export default class Project {
    constructor({ title }) {
        if (!title.trim()) {
            throw new Error('Title is required');
        }
        this.title = title;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    rmTodo(todo) {
        this.todos = this.todos.filter((item) => {item !== todo;});
    }
}
