const PromiseUtils = require('./PromiseUtils');

function test(name, fn) {
    try {
        fn();
        console.log(`${name} passed`);
    } catch (error) {
        console.error(`${name} failed`);
        console.error(error.message);
    }
}

test("promiseAll resolves all promises", async () => {
    const input = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];

    const result = await PromiseUtils.promiseAll(input);
    if (JSON.stringify(result) !== JSON.stringify([1, 2, 3])) {
        throw new Error(`Expected [1, 2, 3], got ${JSON.stringify(result)}`);
    }
});

test("promiseAllSettled", async () => {
    const input = [
        Promise.resolve("OK"),
        Promise.reject("FAIL"),
        Promise.resolve("DONE")
    ];

    const result = await PromiseUtils.promiseAllSettled(input);

    const expected = [
        { status: 'fulfilled', value: 'OK' },
        { status: 'rejected', reason: 'FAIL' },
        { status: 'fulfilled', value: 'DONE' }
    ];

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
    }
});

test("chainPromises", async () => {
    const asyncFunction1 = () => Promise.resolve("First");
    const asyncFunction2 = (data) => Promise.resolve(data + " -> Second");
    const asyncFunction3 = (data) => Promise.resolve(data + " -> Third");

    const result = await PromiseUtils.chainPromises([
        asyncFunction1,
        asyncFunction2,
        asyncFunction3
    ]);

    const expected = "First -> Second -> Third";

    if (result !== expected) {
        throw new Error(`Expected "${expected}", got "${result}"`);
    }
});

test("promisify", async () => {
    function callbackStyleFunction(value, callback) {
        setTimeout(() => {
            if (value > 0) {
                callback(null, value * 2);
            } else {
                callback("Invalid value", null);
            }
        }, 100);
    }

    const promisedFunction = PromiseUtils.promisify(callbackStyleFunction);

    const result = await promisedFunction(3);
    if (result !== 6) {
        throw new Error(`Expected 6, got ${result}`);
    }
});