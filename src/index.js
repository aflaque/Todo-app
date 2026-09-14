import './css/style.css';
import Todo from './model/Todo.js';
import Project from './model/Project.js';
import App from './model/App.js';
import ProjectView from './dom/ProjectView.js';

const work = new Project({ title: 'Work' })
const personal = new Project({ title: 'Personal' })
const shopping = new Project({ title: 'Shopping' })
const app = new App();
app.addProject(work);
app.addProject(personal);
app.addProject(shopping);

const Viewer = new ProjectView();
Viewer.render(app.projects);

console.log(app.projects);
