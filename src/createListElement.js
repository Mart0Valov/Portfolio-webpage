import getRepos from "./getRepos.js";

function createListElement(repo) {
    const projectLink = document.createElement('a');
    const projectName = repo.full_name.split('/')[1];
    projectLink.classList.add('project-card');
    projectLink.href = repo.html_url;
    projectLink.target = '_blank';
    projectLink.textContent = projectName;
    
    return projectLink;
}

async function loadRepos() {
    const list = document.querySelector('.project-tile');
    const repos = await getRepos();
    repos.forEach((repo) => list.appendChild(createListElement(repo)));
}

export default loadRepos;