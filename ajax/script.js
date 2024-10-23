// User Story 5: Prevent form submission
document.getElementById('github-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username from the input field
    const username = document.getElementById('github-username').value;

    // Clear previous repos
    document.getElementById('repo-list').innerHTML = '';

    // User Story 6: Fetch data from GitHub API using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/' + username + '/repos', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const repos = JSON.parse(this.responseText);

            // User Story 7: Display the repos in a list
            const repoList = document.createElement('ul');
            repos.forEach(function(repo) {
                const li = document.createElement('li');
                li.textContent = repo.name;
                li.style.cursor = 'pointer';
                
                // User Story 8: Redirect to repo link when clicked
                li.addEventListener('click', function() {
                    window.open(repo.html_url, '_blank');
                });
                
                repoList.appendChild(li);
            });
            document.getElementById('repo-list').appendChild(repoList);
        } else {
            document.getElementById('repo-list').textContent = 'User not found!';
        }
    };
    xhr.send();
});
