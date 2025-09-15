const library = [];

function addBook(book) {
    library.push(book);
}

function removeBook(book) {
    library = library.filter(b => b.id !== book.id);
}

function getBooks() {
    return library;
}

function findBook(id) {
    return library.find(b => b.id === id);
}

export { addBook, removeBook, getBooks, findBook };