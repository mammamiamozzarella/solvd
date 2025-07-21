const Book = require('./Book');
const FictionBook = require('./FictionBook');
const NonFictionBook = require('./NonFictionBook');
const User = require('./User');
const Cart = require('./Cart');
const Order = require('./Order');


// Example usage of the classes
const book1 = new FictionBook("1984", "George Orwell", "1234567890", 15.99, "Dystopian");
const book2 = new FictionBook("To Kill a Mockingbird", "Harper Lee", "0987654321", 10.99, "Classic");
const book3 = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "1122334455", 12.99, "Classic", false); // Not available, will throw an error if added to cart
const book4 = new NonFictionBook("Sapiens", "Yuval Noah Harari", "2233445566", 20.99, "History");

// Create users
const user1 = new User('Anna', 'test-anna@gmail.com');
const user2 = new User('Andrew', 'test-andrew@gmail.com');

// Create carts for users and add books
const cart1 = new Cart(user1);
cart1.addBook(book1);
cart1.addBook(book2);

const cart2 = new Cart(user2);
cart2.addBook(book1);
//cart2.addBook(book3); // This will throw an error because book3 is not available

// Create orders for users
const annaOrder = new Order(user1, cart1);
console.log(annaOrder.getOrderDetails());

//const andrewOrder = new Order(user2, cart1);

// Polimorphism example
console.log(book1.getDetails()); // FictionBook specific details
console.log(book4.getDetails()); // NonFictionBook specific details