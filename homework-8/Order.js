const User = require('./User');
const Cart = require('./Cart');

class Order {
    static orderCounter = 1;

    constructor(user, cart) {
        if (!(user instanceof User)) {
            throw new Error("Invalid user object");
        }
        if (!(cart instanceof Cart)) {
            throw new Error("Invalid cart object");
        }
        if (cart.getBooks().length === 0) {
            throw new Error("Cart is empty");
        }
        if (cart.getUser() !== user) {
            throw new Error("Cart user does not match order user");
        }
        this.user = user;
        this.cart = cart;
        this.orderId = Order.orderCounter++;
    }

    getOrderDetails() {
        return {
            orderId: this.orderId,
            user: this.user.getInfo(),
            books: this.cart.getBooks().map(book => book.getDetails()),
            total: this.cart.getTotal()
        };
    }
}

module.exports = Order;