const Book = require('./Book');

class NonFictionBook extends Book {
    constructor(title, author, isbn, price, subject, available = true) {
        super(title, author, isbn, price, available);
        this.subject = subject;
    }

    getDetails() {
        return `${super.getDetails()} - Subject: ${this.subject}`;
    }
}

module.exports = NonFictionBook;