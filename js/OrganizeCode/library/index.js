import { handleFormSubmit } from './events/listeners.js';
import { createBookForm } from './ui/form.js';
import { getBooks } from './data/library.js';
import { displayBooks, refreshDisplay } from './ui/render.js';

// simple test
document.addEventListener('DOMContentLoaded', () => {
    // Add form
    const formEl = createBookForm();
    document.body.append(formEl);

    // set up form submission
    const form = document.getElementById('book-form');
    if (form) {
        form.addEventListener('submit', event => {
            handleFormSubmit(event);
            refreshDisplay();
        });
    }

    // Test display with current books
    const library = getBooks(); 
    const booksContainer = displayBooks(library);
    document.body.append(booksContainer);
});