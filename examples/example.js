import { ssid, ssidWithAffixes, ssidWithTimestamp } from '../index.js';

const testShortIds = (length, alphabet) => {
    let i = 1;
    while (i--) {
        const shortID = ssid(length, alphabet);
        console.log(`Short ID: ${shortID}`);
    }
};

const testShortIdWithAffix = (length, prefix, suffix) => {
    let i = 1;
    while (i--) {
        const shortID = ssidWithAffixes(length, prefix, suffix);
        console.log(`Short ID: ${shortID}`);
    }
};

const testShortIdWithTimestamp = (length, alphabet) => {
    let i = 1;
    while (i--) {
        const shortID = ssidWithTimestamp(length, alphabet);
        console.log(`Short ID: ${shortID}`);
    }
};

// Example 1
console.log('Testing with defaults:');
testShortIds();

// Example 2
console.log('Testing with custom length and alphabet:');
testShortIds(18, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()');

// Example 3
console.log('Testing with custom length and alphabet:');
testShortIdWithAffix(18, "ssid-", "2025");
testShortIdWithAffix(11, "ssid-", "");

// Example 4
console.log('Testing with timestamp:');
testShortIdWithTimestamp();
testShortIdWithTimestamp(18, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
