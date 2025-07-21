const Book = require('./Book');

class Cart {
    constructor(user) {
        this.user = user;
        this.books = [];
    }

    addBook(book) {
        if (!(book instanceof Book)) {
            throw new Error("Invalid book object");
        }
        if (!book.available) {
            throw new Error("Book is not available");
        }
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index > -1) {
        this.items.splice(index, 1);
        }
    }

    getBooks() {
        return this.books;
    }

    clearCart() {
        this.books = [];
    }

    getTotal() {
        return this.books.reduce((total, book) => total + book.price, 0);
    }

    getUser() {
        return this.user;
    }
}

module.exports = Cart;