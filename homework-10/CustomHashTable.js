/**
 * Custom Hash Table Implementation
 * This implementation uses separate chaining for collision resolution.
 * It supports basic operations like insert, get, and delete.
 * On average, these operations run in O(1) time complexity.
 */
class CustomHashTable {
    constructor(size = 16) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    /**
     * Generates a hash value for a given key.
     *
     * @param key
     * @returns {number}
     */
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue = (hashValue * 31 + key.charCodeAt(i)) % this.size;
        }
        return hashValue;
    }

    /**
     * Inserts a key-value pair into the hash table.
     *
     * @param key
     * @param value
     */
    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    /**
     * Retrieves the value associated with a given key.
     *
     * @param key
     * @returns {*|null}
     */
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return null; // Key not found
    }

    /**
     * Deletes a key-value pair from the hash table.
     *
     * @param key
     * @returns {boolean}
     */
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true; // Key deleted
            }
        }

        return false; // Key not found
    }
}

module.exports = CustomHashTable;
