const ArrayUtils = require('./ArrayUtils.js');

function test(name, fn) {
    try {
        fn();
        console.log(`${name} passed`);
    } catch (error) {
        console.error(`${name} failed`);
        console.error(error.message);
    }
}

//Task 1: Advanced Array Filtering
test('customFilterUnique', () => {
    const data = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 1, name: 'A' },
    ];
    const result = ArrayUtils.customFilterUnique(data, item => item.id);
    const expected = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
    ];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), 'customFilterUnique failed');
});

//Task 2: Array Chunking
test('chunkArray', () => {
    const result = ArrayUtils.chunkArray([1, 2, 3, 4], 2);
    const expected = [[1, 2], [3, 4]];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), 'chunkArray failed');
});

//Task 3: Array Shuffling
test('customShuffle', () => {
    const arr = [1, 2, 3];
    const shuffled = ArrayUtils.customShuffle(arr);
    const sameItems = arr.sort().toString() === shuffled.sort().toString();
    console.assert(sameItems, 'customShuffle failed');
});

//Task 4: Array Intersection and Union
test('getArrayIntersection', () => {
    const result = ArrayUtils.getArrayIntersection([1, 2, 3], [2, 3, 4]);
    const expected = [2, 3];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), 'getArrayIntersection failed');
});

test('getArrayUnion', () => {
    const result = ArrayUtils.getArrayUnion([1, 2], [2, 3]);
    const expected = [1, 2, 3];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), 'getArrayUnion failed');
});

//Task 5: Array Performance Analysis
test('measureArrayPerformance', () => {
    const time = ArrayUtils.measureArrayPerformance(arr => arr.map(x => x * 2), [1, 2, 3]);
    console.assert(typeof time === 'string' && time.includes('ms'), 'measureArrayPerformance failed');
});

test('measureArrayPerformance comparison map', () => {
    const input = Array.from({ length: 100000 }, (_, i) => i);

    const builtInTime = ArrayUtils.measureArrayPerformance(arr => arr.map(x => x * 2), input);
    const manualTime = ArrayUtils.measureArrayPerformance(arr => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * 2);
        }
        return result;
    }, input);

    console.log(`Built-in map: ${builtInTime}`);
    console.log(`Manual map: ${manualTime}`);
});

test('measureArrayPerformance comparison filter', () => {
    const input = Array.from({ length: 100000 }, (_, i) => i);

    const builtInTime = ArrayUtils.measureArrayPerformance(arr => arr.filter(x => x % 2 === 0), input);
    const manualTime = ArrayUtils.measureArrayPerformance(arr => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) result.push(arr[i]);
        }
        return result;
    }, input);

    console.log(`Built-in filter: ${builtInTime}`);
    console.log(`Manual filter: ${manualTime}`);
});

test('measureArrayPerformance comparison reduce', () => {
    const input = Array.from({ length: 100000 }, (_, i) => i);

    const builtInTime = ArrayUtils.measureArrayPerformance(arr => arr.reduce((sum, x) => sum + x, 0), input);
    const manualTime = ArrayUtils.measureArrayPerformance(arr => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }, input);

    console.log(`Built-in reduce: ${builtInTime}`);
    console.log(`Manual reduce: ${manualTime}`);
});