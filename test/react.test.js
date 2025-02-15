import '@testing-library/jest-dom';
import { ssid, ssidWithAffixes, ssidWithTimestamp } from '../index.js';

describe('React ssid package tests', () => {
  test('should generate a unique short ID', () => {
    const id = ssid();
    expect(id).toHaveLength(8);
  });

  test('should generate a unique short ID with custom length and alphabet', () => {
    const id = ssid(10, 'abcdef');
    expect(id).toHaveLength(10);
    expect(id).toMatch(/^[abcdef]+$/);
  });

  test('should generate a unique short ID with prefix and suffix', () => {
    const customAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = ssidWithAffixes(20, 'prefix-', '-suffix', customAlphabet);
    expect(id).toMatch(/^prefix-[a-zA-Z0-9]{6}-suffix$/);
  });

  test('should generate a unique short ID with timestamp', () => {
    const customAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const id = ssidWithTimestamp(20, customAlphabet);
    expect(id).toMatch(/^[a-zA-Z0-9-]{34}$/);
  });
});
