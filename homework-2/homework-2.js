const DataConverter = {
    TRUE_VALUES: ['true', '1', 'yes'],
    FALSE_VALUES: ['false', '0', 'no'],

    addValues(a, b) {
        if ((typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null)) {
            return { ...a, ...b };
        } else if (typeof a === 'string' || typeof b === 'string') {
            return String(a) + String(b);
        } else if (typeof a === 'number' || typeof b === 'number') {
            return Number(a) + Number(b);
        } else {
            throw new Error('Unsupported data types');
        }
    },

    stringifyValue(a) {
        if (a === null || a === undefined) {
            return '';
        }
        switch (typeof a) {
            case 'object':
                return JSON.stringify(a);
            case 'string':
                return a;
            case 'number':
            case 'bigint':
                return a.toString();
            case 'boolean':
                return a ? 'true' : 'false';
            case 'undefined':
                return 'undefined';
            case 'function':
            case 'symbol':
                return a.toString();
            default:
                throw new Error('Unsupported data type for stringification');
        }
    },

    invertBoolean(a) {
        if (typeof a !== 'boolean') {
            throw new Error('Input must be a boolean');
        }
        return !a;
    },

    convertToNumber(a) {
        if (a === null || a === undefined) {
            return 0;
        }
        switch (typeof a) {
            case 'number':
                return a;
            case 'string':
                const num = parseFloat(a.trim());
                if (isNaN(num)) throw new Error('Invalid number string');
                return num;
            case 'bigint':
                return Number(a);
            case 'boolean':
                return a ? 1 : 0;
            case 'object':
                if (Array.isArray(a)) {
                    return Number(a[0]);
                } else {
                    return Number(Object.values(a)[0]);
                }
            default:
                throw new Error('Unsupported data type for conversion to number');
        }
    },

    coerceToType(a, type) {
        switch (type) {
            case 'string':
                return this.stringifyValue(a);
            case 'number':
                return this.convertToNumber(a);
            case 'boolean':
                if (typeof a === 'boolean') {
                    return a;
                } else if (typeof a === 'string' || typeof a === 'number') {
                    return this.parseBoolean(a); //return Boolean(a);
                } else {
                    throw new Error('Cannot coerce to boolean');
                }
            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    },

    parseBoolean(a) {
        if (a === null || a === undefined) {
            return false;
        }
        switch (typeof a) {
            case 'boolean':
                return a;
            case 'string':
                const lowerA = a.toLowerCase();
                if (this.TRUE_VALUES.includes(lowerA)) return true;
                if (this.FALSE_VALUES.includes(lowerA)) return false;
                break;
            case 'number':
                if (a === 1) return true;
                if (a === 0) return false;
                break;
            default:
                throw new Error('Unsupported data type for boolean parsing');
        }
    },

    coerceArray(arr, type) {
        if (!Array.isArray(arr)) {
            throw new Error('Input must be an array');
        }

        return arr.map(item => {
            switch (type) {
                case 'string':
                    return this.stringifyValue(item);
                case 'number':
                    return this.convertToNumber(item);
                case 'boolean':
                    return this.parseBoolean(item);
                default:
                    throw new Error(`Unsupported type: ${type}`);
            }
        });
    },

    isEmpty(a) {
        if (a === null || a === undefined) {
            return true;
        }
        if (typeof a === 'string' || Array.isArray(a)) {
            return a.length === 0;
        }
        if (typeof a === 'object') {
            return Object.keys(a).length === 0;
        }
        return false;
    }
}