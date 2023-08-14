// javascript
const notesList = document.querySelector('.notes-list');
const noteContent = document.querySelector('.note-content');

// Sample data
const notes = [
    { id: 1, title: 'Note 1', content: 'This is the content of Note 1.' },
    { id: 2, title: 'Note 2', content: 'This is the content of Note 2.' },
    // Add more notes as needed
];
function deleteNote(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        displayNotes();
        noteContent.innerHTML = ''; // Clear note content if deleted note is being displayed
    }
}


// Display notes in the sidebar
function displayNotes() {
    notesList.innerHTML = '';
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        
          noteCard.innerHTML = `
            <div class="delete-icon" title="Delete Note" onclick="deleteNote(${note.id})">
                <i class="fas fa-trash-alt"></i>
            </div>
            <div class="note-title">${note.title}</div>
        `;
        
  noteCard.addEventListener('click', () => {
            displayNoteContent(note);
             noteCreation.style.display = 'none'; // Show the note creation section
    // Display the creation form fields
    noteContentdiv.style.display = 'block';
        });
        notesList.appendChild(noteCard);
    });
}

// Display note content in the main area
function displayNoteContent(note) {
    noteContent.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.content}</p>
    `;
}

// Initial display
displayNotes();




// ... Previous JavaScript code ...

// Function to save a new note
function saveNote() {
    const title = document.querySelector('.note-title').textContent;
    const content = document.querySelector('.note-text').textContent;
    createNote({ title, content });
    displayNotes();
    resetNoteCreation();
}

// Function to reset note creation fields
function resetNoteCreation() {
    const noteTitle = document.querySelector('.note-title');
    const noteText = document.querySelector('.note-text');
    noteTitle.textContent = '';
    noteText.textContent = '';
}

// ... Previous JavaScript code ...

// Add event listener to the "Save Note" button
const saveNoteBtn = document.querySelector('.save-note-btn');
saveNoteBtn.addEventListener('click', saveNote);

function createNote(note) {
    // Generate a unique ID for the new note
    const newId = Math.max(...notes.map(note => note.id)) + 1;
    const newNote = { id: newId, ...note };
    notes.push(newNote);
}
// ... Previous JavaScript code ...

// Function to display the home view
function displayHomeView() {
    noteContent.innerHTML = '';
}

// ... Previous JavaScript code ...

// Display home view when the home button is clicked
const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', displayHomeView);

// ... Previous JavaScript code ...

const addNoteBtn = document.querySelector('.add-note-btn');
const noteCreation = document.querySelector('.note-creation');
const noteContentdiv = document.querySelector('.note-content')

// Display note creation form when "Add Note" button is clicked
addNoteBtn.addEventListener('click', () => {
    noteCreation.style.display = 'block'; // Show the note creation section
    // Display the creation form fields
    noteContentdiv.style.display = 'none';
});

// ... Previous JavaScript code ...

homeButton.addEventListener('click', () => {
    noteContent.innerHTML = '<p class="home-message">Add your daily notes here</p>';
    noteCreation.style.display = 'none'; // Hide note creation section
});

// Display note creation form when "Add Note" button is clicked
addNoteBtn.addEventListener('click', () => {
    noteContent.innerHTML = ''; // Clear the home message
    noteCreation.style.display = 'block'; // Show the note creation section
 
});