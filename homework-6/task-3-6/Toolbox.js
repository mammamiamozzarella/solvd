class Toolbox {
    //Task 3
    static multiline(strings, ...values) {
        const fullString = strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");

        return fullString
            .split('\n')
            .filter((line, i, arr) => {
                if (i === 0 || i === arr.length - 1) {
                    return line.trim().length > 0;
                }
                return true;
            })
            .map((line, i) => `${i + 1} ${line}`)
            .join('\n');
    }

    //Task 4
    static debounce(func, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    //Task 5
    static throttle(func, interval) {
        let lastCall = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastCall >= interval) {
                lastCall = now;
                func(...args);
            }
        };
    }

    //Task 6
    static curry(func, arity) {
        return function curried(...args) {
            if (args.length >= arity) {
                return func(...args);
            } else {
                return (...nextArgs) => curried(...args, ...nextArgs);
            }
        };
    }
}

module.exports = Toolbox;