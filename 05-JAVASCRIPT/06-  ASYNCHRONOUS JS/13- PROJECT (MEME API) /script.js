const btn = document.querySelector('.Generate-button')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const memsAuthor = document.querySelector('.author')

btn.addEventListener('click', () => {
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {title, url, author} = data
        memeImage.src = url
        memeTitle.textContent = title
        memsAuthor.textContent = `Meme by: ${author}`
    } )
})
