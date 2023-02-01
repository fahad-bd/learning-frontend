// console.log('api js connected');
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));


function loadUsers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function loadPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));
}

function displayUsers(users)
{
    const ul = document.getElementById('users');
    for(const user of users){
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}