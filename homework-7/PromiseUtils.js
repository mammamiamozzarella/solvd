class PromiseUtils {
    static promiseAll(promises) {
        return new Promise((resolve, reject) => {
            const results = [];
            let resolvedCount = 0;

            if (promises.length === 0) {
                return resolve([]);
            }

            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                    .then(value => {
                        results[index] = value;
                        resolvedCount++;

                        if (resolvedCount === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);
            });
        });
    }

    static promiseAllSettled(promises) {
        return new Promise(resolve => {
            const results = [];
            let settledCount = 0;

            if (promises.length === 0) {
                return resolve([]);
            }

            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                    .then(value => {
                        results[index] = { status: 'fulfilled', value };
                    })
                    .catch(reason => {
                        results[index] = { status: 'rejected', reason };
                    })
                    .finally(() => {
                        settledCount++;
                        if (settledCount === promises.length) {
                            resolve(results);
                        }
                    });
            });
        });
    }

    static chainPromises(promises) {
        return promises.reduce((prevPromise, currentFn, index) => {
            return prevPromise.then(result => {
                if (index === 0) {
                    return currentFn();
                } else {
                    return currentFn(result);
                }
            });
        }, Promise.resolve());
    }

    static promisify(fn) {
        return (...args) => {
            return new Promise((resolve, reject) => {
                fn(...args, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        };
    }
}

module.exports = PromiseUtils;