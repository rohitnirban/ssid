import test from 'ava';
import { ssid } from '../index.js';

const numberOfIdToGenerate = 10000000;

test('generates a short ID with default length', t => {
    const shortId = ssid();
    t.is(shortId.length, 8);
});

test('generates a short ID with custom length', t => {
    const shortId = ssid(15);
    t.is(shortId.length, 15);
});

test('generates unique short IDs each time', t => {
    const shortIds = new Set();
    let uniqueShortIds = 0;

    for (let i = 0; i < numberOfIdToGenerate; i++) {
        const shortId = ssid();
        if (!shortIds.has(shortId)) {
            shortIds.add(shortId);
            uniqueShortIds++;
        }
    }

    console.log(`Total number of short IDs generated: ${numberOfIdToGenerate}`);
    console.log(`Number of unique short IDs: ${uniqueShortIds}`);
    t.is(uniqueShortIds, numberOfIdToGenerate);
});

test('checks average repetition rate after generating a large number of short IDs', t => {
    const shortIds = new Set();
    let totalRepetitions = 0;

    for (let i = 0; i < numberOfIdToGenerate; i++) {
        const shortId = ssid();
        if (shortIds.has(shortId)) {
            totalRepetitions++;
        }
        shortIds.add(shortId);
    }

    const averageRepetitionRate = totalRepetitions / numberOfIdToGenerate;
    console.log(`Average repetition rate: ${averageRepetitionRate}`);

    t.true(averageRepetitionRate <= 0.00000001);
});
