// Select the theme toggle button
const themeToggle = document.querySelector('#theme-toggle')

// Function to apply selected theme
function setTheme(theme) {
  if (theme === 'dark') {
    // Add dark mode class to body
    document.body.classList.add('dark')
    // Change button icon to sun (light mode symbol)
    themeToggle.textContent = '☀️'
  } else {
    // Remove dark mode class from body
    document.body.classList.remove('dark')
    // Change button icon to moon (dark mode symbol)
    themeToggle.textContent = '🌙'
  }
  // Save current theme in localStorage
  localStorage.setItem('theme', theme)
}

// Check if user has a saved theme in localStorage
let savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  setTheme(savedTheme) // Apply saved theme
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark')
  if (isDark) {
    setTheme('light') // Switch to light mode
  } else {
    setTheme('dark') // Switch to dark mode
  }
})
