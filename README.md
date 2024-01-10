## Simple Note App

# Overview
This is a simple Note App built with HTML, CSS, and JavaScript. Users can create, edit, and delete notes. The notes are stored locally using localStorage, allowing users to access their notes even after closing or refreshing the page.

# Table of Contents
  - Project Structure
  - Usage
  - CSS Styles
  - JavaScript Logic
  - License

#Project Structure
The project consists of the following files:
  - HTML file (index.html):
    Defines the structure of the Note App, including the container, header, create button, and notes container.
  - JavaScript file (script.js):
    Implements the logic for creating, updating, and deleting notes. It also handles key events for creating line breaks and updates the notes in localStorage.
  - CSS file (style.css):
    Provides styles for the Note App, including the container, header, create button, and individual notes.

# Usage
To use the Note App, follow these steps:
  1. Clone the repository:
     git clone <repository-url>
  2. Open the index.html file in your preferred web browser.
  3. Click the "Create Notes" button to add a new note.
  4. Edit the note content by clicking on the paragraph.
  5. Click the trash icon to delete a note.
  6. Press the "Enter" key for line breaks within a note.
  7. Your notes are saved locally, so you can access them later.

# CSS Styles
The CSS styles are designed to create an aesthetically pleasing and user-friendly interface for the Note App. Key styles include:
  - Container:
    The container has a gradient background and is styled for readability.
  - Header:
    The header includes a notes icon and "Notes" title.
  - Create Button:
    The create button has a gradient background, and its style is consistent with the overall design.
  - Input Box (Note):
    Each note is displayed as an input box with a white background, padding, and a border-radius. The trash icon is positioned at the bottom right.

# JavaScript Logic
The JavaScript logic enables the creation, updating, and deletion of notes. Key features include:
  - Show Notes:
    The showNotes function displays saved notes from localStorage when the page loads.
  - Create Note:
    The createNote function dynamically creates a new note with an editable paragraph and a trash icon.
  - Remove Note:
    The removeNote function deletes a note and updates localStorage.
  - Handle Keyup:
    The handleKeyup function listens for key events within notes, updating localStorage accordingly.
  - Enter Key:
    The script listens for the "Enter" key, inserts a line break, and updates localStorage.

# License
This project is licensed under the MIT License.
