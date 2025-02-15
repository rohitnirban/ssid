import { DEFAULT_LENGTH, DEFAULT_ALPHABET } from './defaultConfig.js';
import generate from './generate.js';
import generateWithAffixes from './generateWithAffixes.js';
import generateWithTimestamp from './generateWithTimestamp.js';

const generateId = (length = DEFAULT_LENGTH, customAlphabet = DEFAULT_ALPHABET) => {
    if (length < 4) {
        throw new Error('Length must be at least 4');
    }
    return generate(length, customAlphabet);
}

const generateIdWithAffixes = (length = DEFAULT_LENGTH, prefix, suffix, customAlphabet = DEFAULT_ALPHABET) => {
    if (length < 4) {
        throw new Error('Length must be at least 4');
    }
    if (!prefix && !suffix) {
        throw new Error('Either prefix or suffix must be provided');
    }
    return generateWithAffixes(length, prefix, suffix, customAlphabet);
};

const generateIdWithTimestamp = (length = DEFAULT_LENGTH, customAlphabet = DEFAULT_ALPHABET) => {
    if (length < 4) {
        throw new Error('Length must be at least 4');
    }
    return generateWithTimestamp(length, customAlphabet);
}

export { generateId, generateIdWithAffixes, generateIdWithTimestamp };
