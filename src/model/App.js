class App {
    constructor() {
        this.selectedProjectId = null;
        this.projects = [];
    }
    addProject(project) {
        this.projects.push(project);
    }
    removeProject(projectId) {
        if (this.selectedProjectId === projectId) {
            this.selectedProjectId = null;
        }
        this.projects = this.projects.filter((item) => {
            return item.id !== projectId;
        });
    }
    selectProject(projectId) {
        const currProject = this.projects.find((proj) => {
            return proj.id === projectId;
        });
        if (!currProject) {
            throw new Error(`No project found ${projectId}`);
        }
        this.selectedProjectId = currProject.id;
    }
    getSelectedProject() {
        const selProj = this.projects.find((proj) => {
            return proj.id === this.selectedProjectId;
        });
        return selProj;
    }
}
export default App;
