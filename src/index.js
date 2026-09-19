import './css/style.css';
import Project from './model/Project.js';
import App from './model/App.js';
import ProjectView from './dom/ProjectView.js';
import TodoView from './dom/TodoView.js';
import Todo from './model/Todo.js';

const work = new Project({ title: 'Work' });
const personal = new Project({ title: 'Personal' });
const shopping = new Project({ title: 'Shopping' });

const task1 = new Todo({ title: 't1' });
const task2 = new Todo({ title: 't2' });
const task3 = new Todo({ title: 't3' });

work.addTodo(task1);
work.addTodo(task2);
work.addTodo(task3);

const app = new App();
app.addProject(work);
app.addProject(personal);
app.addProject(shopping);

const projectViewer = new ProjectView();
const todoViewer = new TodoView();

todoViewer.onToggleTodo = (todoId) => {
    const proj = app.getSelectedProject();
    const todo = proj.getTodo(todoId);
    if (!todo) {
        throw new Error("there is no todo defined yet");
    }
    todo.toggle();
    todoViewer.render(proj);
};

projectViewer.onSelectedProject = (projectId) => {
    app.selectProject(projectId);
    todoViewer.render(app.getSelectedProject());
    console.log(`${projectId}`);
};
projectViewer.render(app.projects);

console.log(app.projects);
