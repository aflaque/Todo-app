import './css/style.css';
import Todo from './model/Todo.js';
import Project from './model/Project.js';
import App from './model/App.js';

const app = new App();
app.addProject(new Project({ title: 'Work' }));
app.addProject(new Project({ title: 'Personal' }));
app.addProject(new Project({ title: 'Shopping' }));

console.log(app.projects);
