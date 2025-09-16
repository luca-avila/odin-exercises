import { handleFormSubmit, handleBookButton } from './events/listeners.js';
import { createBookForm } from './ui/form.js';
import { addBook, state } from './data/library.js';
import { getBooksContainer, render } from './ui/render.js';
import { Book } from './models/book.js';


document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');
    const displayFormButton = document.querySelector('.display-form');
    const form = createBookForm();

    // Create sample books
    const sampleBooks = [
        new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
        new Book("1984", "George Orwell", 328, true),
        new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
        new Book("Pride and Prejudice", "Jane Austen", 432, true),
        new Book("The Catcher in the Rye", "J.D. Salinger", 277, false)
    ];
    
    // Add sample books to library
    sampleBooks.forEach(book => addBook(book));
    
    // Add form and library to app and render initial state
    const library = getBooksContainer(state.books);
    app.appendChild(form);
    app.appendChild(library);
    render(state, form, library, displayFormButton);

    // Add event listeners
    displayFormButton.addEventListener('click', () => {
        state.view = 'form';
        render(state, form, library, displayFormButton);
    });

});