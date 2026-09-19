class Project {
    constructor({ title }) {
        if (typeof title !== 'string' || !title.trim()) {
            throw new Error('Title is required');
        }
        this.title = title;
        this.id = crypto.randomUUID();
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todoId) {
        this.todos = this.todos.filter((item) => {
            return item.id !== todoId;
        });
    }
    getTodo(todoId) {
        return this.todos.find (todo => todo.id === todoId);
    }
}
export default Project;
