'use strict';

const customAlphabet = require('./custom')
const generateSeed = require('./seed');
const generateAlphabet = require('./alphabet');

const DEFAULT_LENGTH = 8;

const generateShortId = (length = DEFAULT_LENGTH) => {

    const alphabet = generateAlphabet();

    const seed = generateSeed();

    const combinedSeed = seed + Date.now();

    return customAlphabet(alphabet, length, combinedSeed);
};

module.exports = generateShortId;
