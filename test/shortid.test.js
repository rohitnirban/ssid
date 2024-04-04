'use strict';

const generateShortId = require('../lib/index');

const numberOfIdToGenerate = 10000000;

describe('generateShortId function', () => {
    test('generates a short ID with default length', () => {
        const shortId = generateShortId();
        expect(shortId.length).toBe(8);
    });

    test('generates a short ID with custom length', () => {
        const shortId = generateShortId(15);
        expect(shortId.length).toBe(15);
    });

    test('generates a unique short ID each time', () => {
        const shortIds = new Set();
        let numberOfIdsToGenerate = numberOfIdToGenerate; 
        
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
        expect(uniqueShortIds).toBe(numberOfIdsToGenerate);
    });

    test('checks average repetition rate after generating a large number of short IDs', () => {
        const shortIds = new Set();
        let numberOfIdsToGenerate = numberOfIdToGenerate; 
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

        expect(averageRepetitionRate).toBeLessThanOrEqual(0.0001);
    });
});
