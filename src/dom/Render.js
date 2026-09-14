import dom from './Dom.js';
class Render {
    renderProjects(projects) {
        dom.projectTab.innerHTML = '';
        for (const project of projects) {
            const projEle = document.createElement('div');
            projEle.textContent = project.title;
            projEle.addEventListener('click', () => {
                console.log(`selected ${project.id}`);
            });
            dom.projectTab.appendChild(projEle);
        }
    }
}
export default Render;
