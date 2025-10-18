const hamburger = document.querySelector('.hamburger')
const navLink = document.querySelector('.nav-links')
const hamburgerFirstChild = document.querySelector('.fa-solid')
const allNavLinks = document.querySelectorAll('.nav-links a')

hamburger.addEventListener('click', (e) => {
  e.stopPropagation()
  navLink.classList.toggle('hamActive')

  if (navLink.classList.contains('hamActive')) {
    hamburgerFirstChild.classList.replace('fa-bars', 'fa-xmark')
  } else {
    hamburgerFirstChild.classList.replace('fa-xmark', 'fa-bars')
  }
})

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove('hamActive')
    hamburgerFirstChild.classList.replace('fa-xmark', 'fa-bars')
  }
})

allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLink.classList.remove('hamActive')
    hamburgerFirstChild.classList.replace('fa-xmark', 'fa-bars')
  })
})
