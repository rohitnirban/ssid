import generate from "./generate.js";

const generateWithTimestamp = (length, customAlphabet) => {
    
    const timestamp = Date.now();
    
    const shortId = generate(length, customAlphabet);

    return `${timestamp}-${shortId}`;
};

export default generateWithTimestamp;