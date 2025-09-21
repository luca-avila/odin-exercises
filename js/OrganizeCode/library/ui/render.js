import { getBooks } from '../data/library.js';

function getBooksContainer(library) {
    const container = document.createElement('div');
    container.classList.add('library');

    for (const book of library) {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.dataset.id = book.getId();

        const name = document.createElement('h2');
        name.textContent = book.getName();
        name.classList.add('name');

        bookElement.appendChild(name);

        const author = document.createElement('p');
        author.textContent = book.getAuthor();
        author.classList.add('author');
        bookElement.appendChild(author);

        const pages = document.createElement('p');
        if (book.getPages()) {
            pages.textContent = book.getPages();
        } else {
            pages.textContent = 'Unknown';
        }
        pages.classList.add('pages');
        bookElement.appendChild(pages);

        const read = document.createElement('p');
        if (book.getRead()) {    
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

function render(state, form, library, displayFormButton) {
    if (state.view === 'library') {
        form.classList.add('hidden');
        library.classList.remove('hidden');
        displayFormButton.classList.remove('hidden');
    } else {
        form.classList.remove("hidden");
        library.classList.add("hidden");
        displayFormButton.classList.add('hidden');
    }
}

export { getBooksContainer, render };
