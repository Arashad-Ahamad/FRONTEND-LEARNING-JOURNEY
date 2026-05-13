const hamburger = document.querySelector('.hamburger')
let hamburgerFirstChlid = document.querySelector('.fa-solid')
const ul = document.querySelector('ul')

hamburger.addEventListener('click', () => {
  ul.classList.toggle('hamActive')

  if (ul.classList.contains('hamActive')) {
    hamburgerFirstChlid.classList.replace('fa-bars', 'fa-xmark')
  } else {
    hamburgerFirstChlid.classList.replace('fa-xmark', 'fa-bars')
  }
})
