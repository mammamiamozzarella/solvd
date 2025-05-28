String.prototype.plus = function (b) {
    let result = '', carry = 0;
    let i = this.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let digitA = i >= 0 ? this.charCodeAt(i--) - 48 : 0;
        let digitB = j >= 0 ? b.charCodeAt(j--) - 48 : 0;
        let sum = digitA + digitB + carry;

        carry = sum >= 10 ? 1 : 0;
        result = (sum % 10) + result;
    }

    return result.replace(/^0+/, '') || '0';
};

String.prototype.minus = function (b) {
    if (this.length !== b.length ? this.length < b.length : this < b) {
        throw new Error('Negative result not supported');
    }

    let result = '', carry = 0;
    let i = this.length - 1, j = b.length - 1;

    while (i >= 0) {
        let digitA = this.charCodeAt(i--) - 48;
        let digitB = j >= 0 ? b.charCodeAt(j--) - 48 : 0;

        digitA -= carry;
        carry = digitA < digitB ? 1 : 0;
        digitA += carry * 10;

        result = (digitA - digitB) + result;
    }

    return result.replace(/^0+/, '') || '0';
}

String.prototype.divide = function (b) {
    if (b === '0') throw new Error('Division by zero');

    const compare = (a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
    };

    let dividend = this.replace(/^0+/, '') || '0';
    let divisor = b.replace(/^0+/, '') || '0';

    if (compare(dividend, divisor) < 0) return '0';

    let result = '', current = '';

    for (let i = 0; i < dividend.length; i++) {
        current += dividend[i];
        current = current.replace(/^0+/, '') || '0';

        let count = 0;
        while (compare(current, divisor) >= 0) {
            current = current.minus(divisor);
            count++;
        }

        result += count;
    }

    return result.replace(/^0+/, '') || '0';
}

String.prototype.multiply = function (b) {
    const a = this;
    if (a === '0' || b === '0') return '0';

    const result = Array(a.length + b.length).fill(0);

    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            let mul = (a.charCodeAt(i) - 48) * (b.charCodeAt(j) - 48);
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    return result.join('').replace(/^0+/, '') || '0';
}