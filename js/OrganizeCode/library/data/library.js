let library = [];

function addBook(book) {
    library.push(book);
}

function removeBook(bookId) {
    library = library.filter(b => b.id !== bookId);
}

function toggleRead(bookId) {
    const book = findBook(bookId);
    book.toggleRead(book);
}

function getBooks() {
    return library;
}

function findBook(bookId) {
    return library.find(b => b.id === bookId);
}

export { addBook, removeBook, getBooks, findBook, toggleRead };