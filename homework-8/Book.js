class Book {
    constructor(title, author, isbn, price, available = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.available = available;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

module.exports = Book;