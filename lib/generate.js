import nodeCrypto from 'crypto';

let POOL_SIZE = 512;
let randomPool = null;
let poolOffset = 0;

const getRandomValues = (size) => {
  if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.getRandomValues === 'function') {
    const array = new Uint8Array(size);
    window.crypto.getRandomValues(array);
    return array;
  } else if (nodeCrypto && typeof nodeCrypto.randomBytes === 'function') {
    return nodeCrypto.randomBytes(size);
  } else {
    throw new Error('No secure random number generator available.');
  }
};

function fillRandomPool() {
  if (!randomPool || poolOffset >= randomPool.length) {
    POOL_SIZE += 256;
    randomPool = getRandomValues(POOL_SIZE);
    poolOffset = 0;
  }
}

const generateShortId = (length, alphabet) => {
  fillRandomPool();

  let id = '';
  const alphabetLength = alphabet.length;
  
  for (let i = 0; i < length; i++) {
    id += alphabet[randomPool[poolOffset++] % alphabetLength];
    if (poolOffset >= randomPool.length) {
      fillRandomPool();
    }
  }

  return id;
};

export default generateShortId;
