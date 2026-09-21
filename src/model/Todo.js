const PRIORITIES = ['HIGH', 'MEDIUM', 'LOW'];
export default class Todo {
    constructor({ title, desc = '', dueDate = null, priority = 'LOW' }) {
        if (typeof title !== 'string' || !title.trim()) {
            throw new Error('Title is required');
        }
        if (!PRIORITIES.includes(priority)) {
            throw new Error(`Unknown priority ${priority}`);
        }
        this.id = crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }

    changePriority(prio) {
        if (!PRIORITIES.includes(prio)) {
            throw new Error(`Unknown property ${prio}`);
        }
        this.priority = prio;
    }
    edit({
        title = this.title,
        desc = this.desc,
        dueDate = this.dueDate,
        priority = this.priority,
    }) {
        if (typeof title !== 'string' || !title.trim()) {
            throw new Error('Title is required');
        }
        if (!PRIORITIES.includes(priority)) {
            throw new Error(`Unknown priority ${priority}`);
        }
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
