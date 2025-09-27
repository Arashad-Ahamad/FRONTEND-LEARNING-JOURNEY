const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())   // JSON convert
    .then((json) => {                      // data handle
      console.log(json);                 
      img.src = json.message;             
    })

});
