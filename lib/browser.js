import { DEFAULT_LENGTH, DEFAULT_ALPHABET } from './defaultConfig.js';
import generateShortId from './generate.browser.js';
import generateWithAffixes from './generateWithAffixes.js';

const generateId = (length = DEFAULT_LENGTH, customAlphabet = DEFAULT_ALPHABET) => {
    return generateShortId(length, customAlphabet);
};

const generateIdWithAffixes = (length = DEFAULT_LENGTH, prefix, suffix, customAlphabet = DEFAULT_ALPHABET) => {
    if (!prefix && !suffix) {
        throw new Error('Either prefix or suffix must be provided');
    }
    return generateWithAffixes(length, prefix, suffix, customAlphabet);
}

export { generateId, generateIdWithAffixes };
