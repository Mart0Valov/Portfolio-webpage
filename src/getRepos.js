async function getRepos() {
    const url = `https://api.github.com/users/Mart0Valov/repos`;
    const response = await fetch(url);
    const repos = await response.json();
    return repos;
}

export default getRepos;