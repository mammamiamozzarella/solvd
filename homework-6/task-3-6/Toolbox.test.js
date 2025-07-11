const Toolbox = require('./Toolbox');

function test(name, fn) {
    try {
        fn();
        console.log(`${name} passed`);
    } catch (error) {
        console.error(`${name} failed`);
        console.error(error.message);
    }
}

function assertEqual(actual, expected) {
    if (actual !== expected) {
        throw new Error(`Expected:\n${expected}\nReceived:\n${actual}`);
    }
}

test("Task 3 multiline adds line numbers correctly", () => {
    const code = Toolbox.multiline`
function add(a, b) {
  return a + b;
}`;
    const expected = `1 function add(a, b) {\n2   return a + b;\n3 }`;
    assertEqual(code, expected);
});

test("Task 4 debounce calls function once after delay", (done) => {
    let callCount = 0;
    const debouncedFn = Toolbox.debounce(() => {
        callCount++;
        try {
            assertEqual(callCount, 1);
            console.log("Task 4 function executed after delay");
            done?.();
        } catch (err) {
            console.error("debounce test failed");
            console.error(err.message);
        }
    }, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    setTimeout(() => {
        if (callCount !== 1) {
            console.error("Function should be called once");
        }
    }, 150);
});

test("Task 5 throttle limits function calls to 1 per interval", (done) => {
    let callCount = 0;
    const throttledFn = Toolbox.throttle(() => {
        callCount++;
    }, 100);

    throttledFn();
    setTimeout(throttledFn, 30);
    setTimeout(throttledFn, 60);
    setTimeout(throttledFn, 120);//this call should pass
    setTimeout(throttledFn, 130);
    setTimeout(() => {
        try {
            assertEqual(callCount, 2);
            done?.();
        } catch (e) {
            console.error(e.message);
        }
    }, 200);
});

test("Task 6 curry handles multiple steps of argument application", () => {
    function multiply(a, b, c) {
        return a * b * c;
    }

    const curriedMultiply = Toolbox.curry(multiply, 3);

    const step1 = curriedMultiply(2);
    const step2 = step1(3);
    const result = step2(4);

    assertEqual(result, 24);
});
