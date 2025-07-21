const Book = require('./Book');

class FictionBook extends Book {
    constructor(title, author, isbn, price, genre, available = true) {
        super(title, author, isbn, price, available);
        this.genre = genre;
    }

    getDetails() {
        return `${super.getDetails()} - Genre: ${this.genre}`;
    }
}

module.exports = FictionBook;