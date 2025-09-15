import { getBooks } from '../data/library.js';

function displayBooks(library) {
    const container = document.createElement('div');
    container.classList.add('library');

    for (const book of library) {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.dataset.id = book.id;

        const name = document.createElement('h2');
        name.textContent = book.name;
        name.classList.add('name');

        bookElement.appendChild(name);

        const author = document.createElement('p');
        author.textContent = book.author;
        author.classList.add('author');
        bookElement.appendChild(author);

        const pages = document.createElement('p');
        if (book.pages) {
            pages.textContent = book.pages;
        } else {
            pages.textContent = 'Unknown';
        }
        pages.classList.add('pages');
        bookElement.appendChild(pages);

        const read = document.createElement('p');
        if (book.read) {    
            read.textContent = 'Read';
        } else {
            read.textContent = 'Not Read';
        }
        read.classList.add('read');
        bookElement.appendChild(read);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        bookElement.appendChild(removeButton);

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read';
        toggleReadButton.classList.add('toggle-read');
        bookElement.appendChild(toggleReadButton);

        container.appendChild(bookElement);
    }

    return container;
}

function refreshDisplay() {
    // Remove old books container
    const oldContainer = document.querySelector('.library');
    if (oldContainer) {
        oldContainer.remove();
    }
    
    // Create new books container with updated data
    const library = getBooks();
    const booksContainer = displayBooks(library);
    document.body.append(booksContainer);
}

export { displayBooks, refreshDisplay };
