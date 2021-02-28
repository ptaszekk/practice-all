document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);


function getText(){
fetch('sample.txt')
.then(response => response.text())
.then(data => 
    document.getElementById('output1').innerHTML = data
    )
.catch(error => console.log(error)
)
}

function getUsers(){
    fetch('users.json')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Users</h2>'
        data.forEach(user => {
            output += `
            <ul>
            <li> ${user.id} </li>
            <li> ${user.name} </li>
            <li> ${user.email} </li>
            </ul>
            `
        });
document.getElementById('output2').innerHTML = output;
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Posts</h2>'
        data.forEach(user => {
            output += `
            <div>
            <h3>${user.title} </h3>
            <p>${user.body} </p>
            `
        });
document.getElementById('output3').innerHTML = output;
    })
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json' 
        },
        body : JSON.stringify({title : title, body: body})
    })
    .then(res => res.json())
    .then(data => console.log(data))
}