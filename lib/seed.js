'use strict';

const crypto = require('crypto');

const generateSeed = () => {
  const randomBuffer = crypto.randomBytes(16);
  const seed = randomBuffer.toString('hex');
  return seed;
};

module.exports = generateSeed;
