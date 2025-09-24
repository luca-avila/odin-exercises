// Storage object to manage localStorage data
const storage = {
    view: 'library',
    books: []
};

// Initialize storage from localStorage
function initializeStorage() {
    const savedData = localStorage.getItem('libraryData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            storage.view = parsedData.view || 'library';
            storage.books = parsedData.books || [];
        } catch (error) {
            console.error('Error parsing saved library data:', error);
            storage.view = 'library';
            storage.books = [];
        }
    }
}

// Save current storage state to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('libraryData', JSON.stringify(storage));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function addBook(book) {
    // Convert Book object to plain object for localStorage
    const bookData = {
        id: book.getId(),
        name: book.getName(),
        author: book.getAuthor(),
        pages: book.getPages(),
        read: book.getRead()
    };
    
    storage.books.push(bookData);
    saveToLocalStorage();
}

function removeBook(bookId) {
    storage.books = storage.books.filter(b => b.id !== bookId);
    saveToLocalStorage();
}

function toggleRead(bookId) {
    const book = findBook(bookId);
    if (book) {
        book.read = !book.read;
        saveToLocalStorage();
    }
}

function getBooks() {
    return storage.books;
}

function findBook(bookId) {
    return storage.books.find(b => b.id === bookId);
}

// Initialize storage on module load
initializeStorage();

export { addBook, removeBook, getBooks, findBook, toggleRead, storage };