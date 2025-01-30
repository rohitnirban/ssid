import generate from "./generate.js";

const generateWithAffixes = (length, prefix = '', suffix = '', customAlphabet) => {
    if(prefix.length + suffix.length > length){
        throw new Error('Prefix and suffix length should be less than the length')
    }

    const remainingLength = length - prefix.length - suffix.length;

    const shortId = generate(remainingLength, customAlphabet)

    return `${prefix}${shortId}${suffix}`

}

export default generateWithAffixes;