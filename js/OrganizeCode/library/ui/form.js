function createBookForm() {
    const form = document.createElement('form');
    form.id = 'book-form';

    const nameInput = document.createElement('input');
    nameInput.id = 'book-name';
    nameInput.placeholder = 'Name';
    form.appendChild(nameInput);

    const authorInput = document.createElement('input');
    authorInput.id = 'book-author';
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);

    const pagesInput = document.createElement('input');
    pagesInput.id = 'book-pages';
    pagesInput.placeholder = 'Pages';
    form.appendChild(pagesInput);

    const readInput = document.createElement('input');
    readInput.id = 'book-read';
    readInput.placeholder = 'Read';
    form.appendChild(readInput);

    const submitButton = document.createElement('button');
    submitButton.id = 'book-submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    return form;
}