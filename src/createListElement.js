import getRepos from "./getRepos.js";

function createListElement(repo) {
    const projectTile = document.createElement('div');
    const projectTitle = document.createElement('h5');
    const projectLink = document.createElement('a');

    projectTile.classList.add('project-tile');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = repo.full_name;
    projectLink.href = repo.full_name;
    projectLink.textContent = 'Open in GitHub';
    
    projectTile.appendChild(projectTitle);
    projectTile.appendChild(projectLink);
    
    return projectTile;
}

async function loadRepos() {
    const list = document.querySelector('#projects-list');
    const repos = await getRepos();
    repos.forEach((repo) => list.appendChild(createListElement(repo)));
}

export default loadRepos;