const btn = document.querySelector('.Generate-button')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const memsAuthor = document.querySelector('.author')

btn.addEventListener('click', () => {
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
        const {title, url, author} = data
        memeImage.src = url
        memeTitle.textContent = title
        memsAuthor.textContent = `Meme by: ${author}`
    } ).catch((error) => {
      console.error("Error fetching meme:", error);
      memeTitle.textContent = "Failed to load meme";
      memeImage.src = "";
      memsAuthor.textContent = "";
    });
})
