const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener('click', () => {
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
xhr.send()
xhr.onload = ()=> {
    let data = JSON.parse(xhr.responseText)
    img.src = data.message
    console.log(xhr);
}
});
