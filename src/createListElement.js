import getRepos from "./getRepos.js";

function createListElement(repo) {
    const projectLink = document.createElement('a');
    const projectName = repo.full_name.split('/')[1];
    projectLink.href = repo.html_url;
    projectLink.classList.add('project-card');
    projectLink.textContent = projectName;
    
    return projectLink;
}

async function loadRepos() {
    const list = document.querySelector('#project-tile');
    const repos = await getRepos();
    repos.forEach((repo) => list.appendChild(createListElement(repo)));
}

export default loadRepos;