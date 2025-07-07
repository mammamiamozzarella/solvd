class ArrayUtils {
    static validateArray(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError('First argument must be an array');
        }
    }

    static validateFunction(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
    }

    //Task 1: Advanced Array Filtering
    static customFilterUnique(arr, callback) {
        this.validateArray(arr);
        this.validateFunction(callback);

        const seen = new Set();
        return arr.filter(item => {
            const key = callback(item);
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
    }

    //Task 2: Array Chunking
    static chunkArray(arr, size) {
        this.validateArray(arr);
        if (typeof size !== 'number' || size <= 0) {
            throw new Error('Size must be a positive number');
        }

        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    //Task 3: Array Shuffling
    static customShuffle(arr) {
        this.validateArray(arr);
        const result = arr.slice();
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    //Task 4: Array Intersection and Union
    static getArrayIntersection(arr1, arr2) {
        this.validateArray(arr1);
        this.validateArray(arr2);
        return arr1.filter(item => arr2.includes(item));
    }

    static getArrayUnion(arr1, arr2) {
        this.validateArray(arr1);
        this.validateArray(arr2);
        return [...new Set([...arr1, ...arr2])];
    }

    //Task 5: Array Performance Analysis
    static measureArrayPerformance(callback, arr) {
        this.validateFunction(callback);
        this.validateArray(arr);

        const start = performance.now();
        callback(arr);
        const end = performance.now();
        return `${(end - start).toFixed(2)} ms`;
    }
}

module.exports = ArrayUtils;
