import test from 'ava';
import { ssid, ssidWithAffixes } from '../index.js';

test('generates a short ID with default length', (t) => {
    const shortId = ssid();
    t.is(shortId.length, 8);
});

test('generates a short ID with custom length', (t) => {
    const shortId = ssid(15);
    t.is(shortId.length, 15);
});

test('should generate a unique short ID with custom length and alphabet', (t) => {
    const id = ssid(10, 'abcdef');
    t.is(id.length, 10);
    t.regex(id, /^[abcdef]+$/);
});

test('should generate a unique short ID with prefix and suffix', (t) => {
    const id = ssidWithAffixes(20, 'prefix-', '-suffix');
    t.regex(id, /^prefix-[a-zA-Z0-9]{6}-suffix$/);
});

test('generates unique short IDs', (t) => {
    const shortIds = new Set();
    const numberOfIdToGenerate = 100000;

    for (let i = 0; i < numberOfIdToGenerate; i++) {
        shortIds.add(ssid());
    }

    t.is(shortIds.size, numberOfIdToGenerate);
});

test('ensures low repetition rate', (t) => {
    const shortIds = new Set();
    let repetitions = 0;
    const numberOfIdToGenerate = 100000;

    for (let i = 0; i < numberOfIdToGenerate; i++) {
        const id = ssid();
        if (shortIds.has(id)) {
            repetitions++;
        }
        shortIds.add(id);
    }

    const repetitionRate = repetitions / numberOfIdToGenerate;
    t.true(repetitionRate <= 0.00000001);
});
