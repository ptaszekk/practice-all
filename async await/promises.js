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


// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post);
//         callback()
//     }, 2000)
// }


function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve()
            } else{
                reject('error dupsko')
            }
        }, 2000)
    })   
}

// createPost({title: 'post three', body: 'hthis is post 3'})
//     .then(getPosts)
//     .catch(console.log('error'))

//promise.all

const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = Promise.resolve((resolve, reject) =>
setTimeout(resolve, 2000, 'goodbye') 
);

// async function init(){
//     await createPost({title: 'post three', body: 'hthis is post 3'});
//     getPosts();
// }
// init();

(async function fetchUsers(){
    const resolution = await fetch('https://jsonplaceholder.typicode.com/posts')
              const data = await resolution.json();
        console.log(data);
})()



const promise4 = fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(data => {
                    let output = '<h2>albums</h2>'
                    data.forEach(album => {
                        output +=
                        `   <div>
                            <h3>${album.id} </h3>
                            <p>${album.title} </p>
                            </div>
                            `
                    });
                    document.getElementById('output').innerHTML = output;
                })




//    function getPosts(){
//                     fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then(response => response.json())
//                     .then(data => {
//                         let output = '<h2>Posts</h2>'
//                         data.forEach(user => {
//                             output += `
//                             <div>
//                             <h3>${user.title} </h3>
//                             <p>${user.body} </p>
//                             `
//                         });
//                 document.getElementById('output3').innerHTML = output;
//                     })
//                 }             

// Promise.all([promise1, promise2, promise3, promise4])
// .then((values) => console.log(values));

