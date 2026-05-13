const inputBox = document.querySelector('#inputBox')
const addBtn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todoList')

let editTodo = null

// Function to add todo
const addTodo = () => {
  const inputText = inputBox.value.trim()
  if (inputText.length <= 0) {
    alert('You must write something in your todo')
    return
  }

  if (addBtn.value === 'Edit') {
    // old text
    let oldText = editTodo.target.previousElementSibling.innerText
    // new text
    let newText = inputText

    // update UI
    editTodo.target.previousElementSibling.innerText = newText
    // update localStorage
    editLocalTodos(oldText, newText)

    addBtn.value = 'Add'
    inputBox.value = ''
  } else {
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = inputText
    li.appendChild(p)
    todoList.appendChild(li)

    // Edit button
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.classList.add('btn', 'editBtn')
    li.appendChild(editBtn)

    // Delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Remove'
    deleteBtn.classList.add('btn', 'deleteBtn')
    li.appendChild(deleteBtn)

    inputBox.value = ''
    saveLocalTodos(inputText)
  }
}

// Function to update (Edit / Delete)
const updateTodo = (e) => {
  if (e.target.innerText === 'Remove') {
    let todoText = e.target.parentElement.children[0].innerText
    todoList.removeChild(e.target.parentElement)
    deleteLocalTodos(todoText)
  }

  if (e.target.innerText === 'Edit') {
    inputBox.value = e.target.previousElementSibling.innerText
    inputBox.focus()
    addBtn.value = 'Edit'
    editTodo = e
  }
}

// Save local todo
const saveLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || []
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Get local todos on page load
const localTodo = () => {
  let todos = JSON.parse(localStorage.getItem('todos')) || []
  todos.forEach((todo) => {
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = todo
    li.appendChild(p)
    todoList.appendChild(li)

    // Edit button
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.classList.add('btn', 'editBtn')
    li.appendChild(editBtn)

    // Delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Remove'
    deleteBtn.classList.add('btn', 'deleteBtn')
    li.appendChild(deleteBtn)
  })
}

// Delete local todo
const deleteLocalTodos = (todoText) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || []
  let todoIndex = todos.indexOf(todoText)
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1)
  }
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Edit local todo
const editLocalTodos = (oldTodo, newTodo) => {
  let todos = JSON.parse(localStorage.getItem('todos')) || []
  let todoIndex = todos.indexOf(oldTodo)
  if (todoIndex !== -1) {
    todos[todoIndex] = newTodo
  }
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Event listeners
document.addEventListener('DOMContentLoaded', localTodo)
addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updateTodo)
