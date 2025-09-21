class Book {
    #id;
    #name;
    #author;
    #pages;
    #read;

    constructor (name, author, pages, read = false){

        this.generateId();
        this.setName(name);
        this.setAuthor(author);
        this.setPages(pages);
        this.setRead(read);
    }

    generateId() {
        this.#id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 11);
    }

    getName() {return this.#name;}
    setName(name) {
        if (typeof name !== 'string') {
            throw new Error('Name and author must be strings');
        }
        this.#name = name;
    }

    getAuthor() {return this.#author;}
    setAuthor(author) {
        if (typeof author !== 'string') {
            throw new Error('Author must be a string');
        }
        this.#author = author;
    }

    getPages() {return this.#pages;}
    setPages(pages) {
        if (pages && typeof pages !== 'number') {
            throw new Error('Pages must be a number');
        }
        this.#pages = pages;
    }

    getRead() {return this.#read;}
    setRead(read) {
        if (typeof read !== 'boolean') {
            throw new Error('Read must be a boolean');
        }
        this.#read = read;
    }

    getId() {return this.#id;}

    toggleRead() {
        this.#read = !this.#read;
    }
    
}

export { Book };