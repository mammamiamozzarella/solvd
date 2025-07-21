class User {
    static userCounter = 1;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.userId = User.userCounter++;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    getInfo() {
        return `User #${this.userId}: ${this.name} (${this.email})`;
    }
}

module.exports = User;