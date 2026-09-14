import Dom from './Dom.js';

class ProjectView {
    constructor({ projectTabs: projectTabs = Dom.projectTabs } = {}) {
        this.projectTabs = projectTabs;
    }
    render(projects) {
        this.projectTabs.innerHTML = '';
        for (const project of projects) {
            const button = document.createElement('button');
            button.textContent = project.title;
            button.dataset.projectId = project.id;
            this.projectTabs.append(button);
        }
    }
}
export default ProjectView;
