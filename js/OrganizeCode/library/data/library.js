let state =  {
    view: 'library',
    books: []
}

function addBook(book) {
    state.books.push(book);
}

function removeBook(bookId) {
    state.books = state.books.filter(b => b.id !== bookId);
}

function toggleRead(bookId) {
    const book = findBook(bookId);
    book.toggleRead(book);
}

function getBooks() {
    return state.books;
}

function findBook(bookId) {
    return state.books.find(b => b.id === bookId);
}

export { addBook, removeBook, getBooks, findBook, toggleRead, state };