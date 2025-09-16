import { handleFormSubmit, handleBookButton } from './events/listeners.js';
import { createBookForm } from './ui/form.js';
import { getBooks, addBook } from './data/library.js';
import { displayBooks, refreshDisplay } from './ui/render.js';
import { Book } from './models/book.js';



document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');
    const displayFormButton = document.querySelector('.display-form');

    // Create 5 sample books
    const sampleBooks = [
        new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
        new Book("1984", "George Orwell", 328, true),
        new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
        new Book("Pride and Prejudice", "Jane Austen", 432, true),
        new Book("The Catcher in the Rye", "J.D. Salinger", 277, false)
    ];
    
    // Add books to library
    sampleBooks.forEach(book => addBook(book));
    
    // Display books
    let library = getBooks();
    let libraryElement = displayBooks(library);
    app.appendChild(libraryElement);

    // Setup add book button
});