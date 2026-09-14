import './css/style.css';
import './model/Project.js';
import Project from './model/Project.js';
import './model/Todo.js';

const projects = [
    new Project({ title: 'Work' }),
    new Project({ title: 'Personal' }),
    new Project({ title: 'Shopping' }),
];
console.log(projects);
