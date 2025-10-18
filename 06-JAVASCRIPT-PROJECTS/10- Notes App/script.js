const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main')

// Add note button event
addBtn.addEventListener('click', () => {
  addNote()
})

// Save notes to localStorage
const saveNotes = () => {
  const notes = document.querySelectorAll('.note textarea')
  const data = []
  notes.forEach((note) => {
    data.push(note.value)
  })

  if (data.length === 0) {
    localStorage.removeItem('notes')
  } else {
    localStorage.setItem('notes', JSON.stringify(data))
  }
}

// Add new note
const addNote = (text = '') => {
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = ` 
    <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
    `

  // Delete note
  note.querySelector('.trash').addEventListener('click', () => {
    note.remove()
    saveNotes()
  })

  // Save note
  note.querySelector('.save').addEventListener('click', () => {
    saveNotes()
  })

  // Auto-save
  note.querySelector('textarea').addEventListener('input', () => {
    saveNotes()
  })

  main.appendChild(note)
  saveNotes()
}

// Load notes on page load
;(function () {
  const lsNotes = JSON.parse(localStorage.getItem('notes'))
  if (lsNotes === null) {
    addNote()
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote)
    })
  }
})()
