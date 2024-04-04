'use strict';

const customAlphabet = require('./custom')
const generateSeed = require('./random/randomSeed');
const generateAlphabet = require('./alphabet');
const DEFAULT_LENGTH = require('./defaultLength');

const generateShortId = (length = DEFAULT_LENGTH) => {

    const alphabet = generateAlphabet();

    const seed = generateSeed();
    
    const combinedSeed = seed + Date.now();
    
    const id = customAlphabet(alphabet, length, combinedSeed);

    return id;
};

module.exports = generateShortId;
