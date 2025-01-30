const getRandomValues = (size) => {
    const array = new Uint8Array(size);
    window.crypto.getRandomValues(array);
    return array;
};

const generateShortId = (length, alphabet) => {
    let id = '';
    const alphabetLength = alphabet.length;
    const randomValues = getRandomValues(length);

    for (let i = 0; i < length; i++) {
        id += alphabet[randomValues[i] % alphabetLength];
    }

    return id;
};

export default generateShortId;
