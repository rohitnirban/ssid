const isValidShortId = (shortId, withSymbols = true) => {
    // Define a regular expression pattern to match valid short IDs
    const pattern = withSymbols ? /^[A-Za-z0-9_-]+$/ : /^[A-Za-z0-9]+$/;
    // Test the provided string against the pattern and return the result
    return pattern.test(shortId);
};

module.exports = isValidShortId;
