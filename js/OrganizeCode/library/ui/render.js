function displayBooks(library) {
    const container = document.createElement('div');
    container.classList.add('library');

    for (const book of library) {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.dataset.id = book.id;

        const name = document.createElement('h2');
        name.textContent = book.name;

        bookElement.appendChild(name);

        const author = document.createElement('p');
        author.textContent = book.author;
        bookElement.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = book.pages;
        bookElement.appendChild(pages);

        const read = document.createElement('p');
        read.textContent = book.read;
        bookElement.appendChild(read);

        container.appendChild(bookElement);
    }

    return container;
}

export { displayBooks };
