const hamburger = document.querySelector('.hamburger')
const navLink = document.querySelector('.nav-links')
const hamburgerFirstChild = document.querySelector('.fa-solid')
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hamActive')

  if (navLink.classList.contains('hamActive')) {
    hamburgerFirstChild.classList.replace('fa-bars', 'fa-xmark')
  } else {
    hamburgerFirstChild.classList.replace('fa-xmark', 'fa-bars')
  }
})
