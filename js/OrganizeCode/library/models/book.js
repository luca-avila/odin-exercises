export function Book (name, author, pages, read = false) {

    if (!new.target) {
        throw new Error('Use the new keyword to create a new Book instance');
    }
    if (typeof name !== 'string' || typeof author !== 'string') {
        throw new Error('Name and author must be strings');
    }
    if (pages && typeof pages !== 'number') {
        throw new Error('Pages must be a number');
    }
    if (typeof read !== 'boolean') {
        throw new Error('Read must be a boolean');
    }

    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}