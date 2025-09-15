function createBookForm() {
    const form = document.createElement('form');
    form.id = 'book-form';

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'book-name';
    nameLabel.textContent = 'Name';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'book-name';
    nameInput.placeholder = 'Name';
    form.appendChild(nameInput);

    const authorLabel = document.createElement('label');
    authorLabel.htmlFor = 'book-author';
    authorLabel.textContent = 'Author';
    form.appendChild(authorLabel);

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.id = 'book-author';
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);

    const pagesLabel = document.createElement('label');
    pagesLabel.htmlFor = 'book-pages';
    pagesLabel.textContent = 'Pages';
    form.appendChild(pagesLabel);

    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.id = 'book-pages';
    pagesInput.placeholder = 'Pages';
    form.appendChild(pagesInput);

    const readLabel = document.createElement('label');
    readLabel.htmlFor = 'book-read';
    readLabel.textContent = 'Read';
    form.appendChild(readLabel);

    const readInput = document.createElement('input');
    readInput.type = 'checkbox';
    readInput.id = 'book-read';
    readInput.placeholder = 'Read';
    form.appendChild(readInput);

    const submitButton = document.createElement('button');
    submitButton.id = 'book-submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    return form;
}

export { createBookForm };