const PRIORITIES = ['HIGH', 'MEDIUM', 'LOW'];
export default class Todo {
    constructor({ title, desc = '', dueDate = null, priority = 'LOW' }) {
        if (!title.trim()) {
            throw new Error('Title is required');
        }
        if (!PRIORITIES.includes(priority)) {
            throw new Error(`Unknown property ${priority}`);
        }
        this.ID = crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
    toggle() {
        this.completed = !this.completed;
    }
}
