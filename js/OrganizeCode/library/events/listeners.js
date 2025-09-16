import { addBook, removeBook, toggleRead } from "../data/library.js";
import { Book } from "../models/book.js";


function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;

    const name = form.querySelector('#book-name').value;
    const author = form.querySelector('#book-author').value;
    const pages = form.querySelector('#book-pages').value;
    const read = form.querySelector('#book-read').checked;


    // Validate required fields
    if (!name || !author) {
        throw new Error('Name and author are required!');
    }
    
    // Validate pages if provided
    if (pages && isNaN(parseInt(pages))) {
        throw new Error('Pages must be a valid number!');
    }
    
    const pagesNumber = pages ? parseInt(pages) : undefined;

    const newBook = new Book(name, author, pagesNumber, read);

    addBook(newBook);
}

function handleBookButton(event) {
    const btnType = event.target.textContent;
    let bookId;
    if (!btnType) return;

    try {
        bookId = event.target.closest('.book').dataset.id;
    } catch {
        return;
    }
 

    if (btnType === 'Remove') {
        removeBook(bookId);
    } else if (btnType === 'Toggle Read'){
        toggleRead(bookId);
    }
}

export { handleFormSubmit, handleBookButton };