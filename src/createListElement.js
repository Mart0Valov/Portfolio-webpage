import getRepos from "./getRepos.js";

function createListElement(repo) {
    const liEl = document.createElement('li');
    liEl.innerHTML = 
        `<div class="project-tile">
            <h5 class="project-title">${repo.full_name}</h5>
            <a href="${repo.html_url}" target="_blank">Open in GitHub</a>
        </div>`;
    
    
    return liEl;
}

async function loadRepos() {
    const list = document.querySelector('#projects-list');
    const repos = await getRepos();
    repos.forEach((repo) => list.appendChild(createListElement(repo)));
}

export default loadRepos;