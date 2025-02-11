import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ssid, ssidWithAffixes } from '../index.js';

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
});
