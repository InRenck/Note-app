const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNote() {
    // Create a wrapper div for each note
    let noteWrapper = document.createElement("div");

    // Create the editable paragraph
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // Create the trash icon
    let trashIcon = document.createElement("i");
    trashIcon.className = "uil uil-trash";

    // Append the paragraph and the trash icon to the wrapper
    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(trashIcon);

    // Append the wrapper to the notes container
    notesContainer.appendChild(noteWrapper);

    updateStorage();
}

function removeNote(target) {
    // Remove the entire wrapper element
    notesContainer.removeChild(target.parentElement);
    updateStorage();
}

function handleKeyup() {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup = function () {
            updateStorage();
        };
    });
}

showNotes();

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("uil-trash")) {
        removeNote(event.target);
    } else if (event.target.tagName === "P") {
        handleKeyup();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage();
    }
});
