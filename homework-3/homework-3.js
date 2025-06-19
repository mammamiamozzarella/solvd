// Task 1: Immutability and Pure Functions
function calculateDiscountedPrice(productsArray, discountPercent) {
    return productsArray.map(product => {
        return {
        ...product,
        price: product.price - (product.price * (discountPercent / 100))
        };
    });
}

function calculateTotalPrice(productsArray) {
    return productsArray.reduce((total, product) => {
        return total + product.price;
    }, 0);
}

// Task 2: Function Composition and Point-Free Style
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

function filterUniqueWords(wordsString) {
    return [...new Set(
        wordsString
            .toLowerCase()
            .match(/\b\w+\b/g) || []
    )].sort();
}

function getAverageGrade(students) {
    return students.map(student => ({
        name: student.name,
        averageGrade:
            student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length || 0
    }));
}

// Task 3: Closures and Higher-Order Functions
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

function repeatFunction(fn, times) {
    if (times < 0) {
        let intervalId;
        const start = () => {
            intervalId = setInterval(fn, 0);
        };
        const stop = () => clearInterval(intervalId);
        return { start, stop };
    }
    return function(...args) {
        for (let i = 0; i < times; i++) {
            fn(...args);
        }
    };
}

// Task 4: Recursion and Tail Call Optimization
function calculateFactorial(n, acc = 1) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed");
    }
    if (n === 0 || n === 1) {
        return acc;
    }
    return calculateFactorial(n - 1, acc * n);
}

function power(base, exponent){
    if (exponent < 0) {
        throw new Error("Negative exponent not allowed");
    }
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Task 5: Lazy Evaluation and Generators
function lazyMap(array, fn) {
    let index = 0;
    return {
        next: function() {
            if (index < array.length) {
                const value = fn(array[index]);
                index++;
                return { value, done: false };
            } else {
                return { done: true };
            }
        }
    };
}

function fibonacciGenerator() {
    let a = 0, b = 1;
    return {
        next: function() {
            const value = a;
            [a, b] = [b, a + b];
            return { value, done: false };
        }
    };
}