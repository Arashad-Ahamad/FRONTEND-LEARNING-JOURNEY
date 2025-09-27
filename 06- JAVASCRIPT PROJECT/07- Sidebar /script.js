const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')

// Adding Event Listener to menu btn
menu.addEventListener('click', () => {
  sidebar.classList.add('showSidebar')
})

// Adding Event Listener to document btn
document.addEventListener('pointerup', (e) => {
  if (!sidebar.contains(e.target)) {
    sidebar.classList.remove('showSidebar')
  }
})
