
function makeHttpReuest(method, url, callback) {
const xhr = new XMLHttpRequest()
xhr.open(method, url)
xhr.responseType = 'json'
xhr.addEventListener('load', ()=> {
// console.log(xhr.response);
callback(xhr.response)
})
xhr.send()
}

makeHttpReuest('GET', 'https://dummyjson.com/users', (data)=> {
    console.log(data.users[0]);
    
})
