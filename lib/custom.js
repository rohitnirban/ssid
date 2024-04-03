'use strict';

const crypto = require('crypto');

const customAlphabet = (alphabet, size) => {
    const bytes = crypto.randomBytes(size);
    let result = '';
    for (let i = 0; i < size; i++) {
        result += alphabet[bytes[i] % alphabet.length];
    }
    return result;
};

module.exports = customAlphabet