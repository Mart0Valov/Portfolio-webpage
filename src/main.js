import getGreeting from "./greeting.js";
import loadRepos from "./createListElement.js";

// display greeting
document.querySelector('#greeting').textContent = getGreeting();
// populate projects list
loadRepos();
