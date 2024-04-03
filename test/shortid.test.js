'use strict';

const generateShortId = require('../lib/index');

describe('generateShortId function', () => {
    test('generates a short ID with default length', () => {
        const shortId = generateShortId();
        expect(shortId.length).toBe(8); // Adjusted for the new default length
    });

    test('generates a short ID with custom length', () => {
        const shortId = generateShortId(15); // Example custom length
        expect(shortId.length).toBe(15);
    });

    test('generates a unique short ID each time', () => {
        const shortIds = new Set();
        let numberOfIdsToGenerate = 100000; // Generate 10,000,000 short IDs

        // Track number of unique short IDs
        let uniqueShortIds = 0;

        for (let i = 0; i < numberOfIdsToGenerate; i++) {
            const shortId = generateShortId();
            if (!shortIds.has(shortId)) {
                shortIds.add(shortId);
                uniqueShortIds++;
            }
        }

        console.log(`Total number of short IDs generated: ${numberOfIdsToGenerate}`);
        console.log(`Number of unique short IDs: ${uniqueShortIds}`);
        expect(uniqueShortIds).toBe(numberOfIdsToGenerate); // Ensure all IDs are unique
    });

    test('checks average repetition rate after generating a large number of short IDs', () => {
        const shortIds = new Set();
        let numberOfIdsToGenerate = 100000; // Example: Generate 1,000,000 short IDs
        let totalRepetitions = 0;

        for (let i = 0; i < numberOfIdsToGenerate; i++) {
            const shortId = generateShortId();
            if (shortIds.has(shortId)) {
                totalRepetitions++;
            }
            shortIds.add(shortId);
        }

        const averageRepetitionRate = totalRepetitions / numberOfIdsToGenerate;
        console.log(`Average repetition rate: ${averageRepetitionRate}`);
        // Assert that average repetition rate is low (ideally close to 0)
        expect(averageRepetitionRate).toBeLessThanOrEqual(0.01); // Assuming less than 1% repetition rate
    });
});
