const posts =[{
    title: 'post one',
    body: 'this is post 1',
},{
    title: 'post one',
    body: 'this is post 1',
},
];

function getPosts(){
    setTimeout(() => {
let output = '';
posts.forEach((post, index) => {
    output += `<li>${post.title}</li>`
})
document.body.innerHTML = output;
}, 1000)};

getPosts();

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    }, 2000)
}
createPost({title: 'post three', body: 'hthis is post 3'}, getPosts);