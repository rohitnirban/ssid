const shortId = require('..');
const isValid = require('../lib/valid');

const testShortIds = (length, withSymbols) => {
    let i = 10;
    while (i--) {
        const shortID = shortId(length, withSymbols);
        console.log(`Short ID: ${shortID}`);
        console.log(`Valid: ${isValid(shortID, withSymbols) ? 'Yes' : 'No'}`);
        console.log();
    }
};

// Test with symbols
console.log('Testing with symbols:');
testShortIds(18, true);

// Test without symbols
console.log('Testing without symbols:');
testShortIds(18, false);
