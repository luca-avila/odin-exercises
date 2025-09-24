import { handleFormSubmit, handleBookButton } from './events/listeners.js';
import { createBookForm } from './ui/form.js';
import { addBook, storage } from './data/library.js';
import { getBooksContainer, render } from './ui/render.js';
import { Book } from './models/book.js';


document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');
    const displayFormButton = document.querySelector('.display-form');
    const form = createBookForm();

    // Create sample books only if localStorage is empty
    if (storage.books.length === 0) {
        const sampleBooks = [
            new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
            new Book("1984", "George Orwell", 328, true),
            new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
            new Book("Pride and Prejudice", "Jane Austen", 432, true),
            new Book("The Catcher in the Rye", "J.D. Salinger", 277, false)
        ];
        
        // Add sample books to library
        sampleBooks.forEach(book => addBook(book));
    }
    
    // Add form to app
    app.appendChild(form);

    // Function to update the library display
    function updateLibraryDisplay() {
        // Remove old library if it exists
        const oldLibrary = app.querySelector('.library');
        if (oldLibrary) {
            oldLibrary.remove();
        }
        
        // Create new library with current state
        const library = getBooksContainer(storage.books);
        app.appendChild(library);
        
        // Render current state
        render(storage, form, library, displayFormButton);
    }

    // Initial display
    updateLibraryDisplay();

    // Add event listeners
    form.addEventListener('submit', (event) => {
        handleFormSubmit(event);
        // Return to library view and update display
        storage.view = 'library';
        updateLibraryDisplay();
    });
    
    displayFormButton.addEventListener('click', () => {
        storage.view = 'form';
        const currentLibrary = app.querySelector('.library');
        render(storage, form, currentLibrary, displayFormButton);
    });

    // Add back button event listener
    const backButton = form.querySelector('#back-to-library');
    backButton.addEventListener('click', () => {
        storage.view = 'library';
        updateLibraryDisplay();
    });

    // Add event delegation for remove/toggle buttons
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove') || event.target.classList.contains('toggle-read')) {
            handleBookButton(event);
            // Update display after removing/toggling
            updateLibraryDisplay();
        }
    });
    
});