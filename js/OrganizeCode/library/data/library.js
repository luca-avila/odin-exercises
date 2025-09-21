let state =  {
    view: 'library',
    books: []
}

function addBook(book) {
    state.books.push(book);
}

function removeBook(bookId) {
    state.books = state.books.filter(b => b.getId() !== bookId);
}

function toggleRead(bookId) {
    const book = findBook(bookId);
    if (book) {
        book.toggleRead();
    }
}

function getBooks() {
    return state.books;
}

function findBook(bookId) {
    return state.books.find(b => b.getId() === bookId);
}

export { addBook, removeBook, getBooks, findBook, toggleRead, state };