import crypto from 'crypto';

let POOL_SIZE = 512;
let randomPool = null
let poolOffset = 0;

function fillRandomPool() {
    if (!randomPool || poolOffset >= randomPool.length) {
        POOL_SIZE += 256;
        randomPool = crypto.randomBytes(POOL_SIZE);
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
