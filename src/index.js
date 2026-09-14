import './css/style.css';
import Project from './model/Project.js';
import './model/Todo.js';
import Render from './dom/Render.js';

const projects = [
    new Project({ title: 'Work' }),
    new Project({ title: 'Personal' }),
    new Project({ title: 'Shopping' }),
];
console.log(projects);
const renderer = new Render;
renderer.renderProjects(projects);
