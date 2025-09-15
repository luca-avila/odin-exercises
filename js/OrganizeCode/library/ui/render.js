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
        pages.textContent = book.pages;
        pages.classList.add('pages');
        bookElement.appendChild(pages);

        const read = document.createElement('p');
        read.textContent = book.read;
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

export { displayBooks };
