'use strict';

const { customAlphabet: nanoidCustomAlphabet } = require('nanoid');

const customAlphabet = (alphabet, size) => {
    const nanoidGenerator = nanoidCustomAlphabet(alphabet, size);
    console.log(nanoidCustomAlphabet);
    return nanoidGenerator();
};

module.exports = customAlphabet;
