let library = [];

export function addBook(book) {
    library.push(book);
}

export function removeBook(book) {
    library = library.filter(b => b.id !== book.id);
}

export function getBooks() {
    return library;
}

export function findBook(id) {
    return library.find(b => b.id === id);
}

export { addBook, removeBook, getBooks, findBook };