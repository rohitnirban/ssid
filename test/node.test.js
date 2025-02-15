import test from 'ava';
import { ssid, ssidWithAffixes, ssidWithTimestamp } from '../index.js';

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
    const customAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = ssidWithAffixes(20, 'prefix-', '-suffix', customAlphabet);
    t.regex(id, /^prefix-[a-zA-Z0-9]{6}-suffix$/);
});

test('should generate a unique short ID with timestamp', (t) => {
    const customAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = ssidWithTimestamp(20, customAlphabet);
    t.regex(id, /^[a-zA-Z0-9-]{34}$/);
});


