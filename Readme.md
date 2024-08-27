# SSID (Secure Short ID) Generator [![shortid](https://img.shields.io/npm/dm/ssid.svg)](https://www.npmjs.org/package/ssid)

SSID Generator is a Node.js module that provides a secure and efficient way to generate short IDs, suitable for various use cases such as unique identifiers in databases, session IDs, URL shorteners, etc.

## Features

- Generates short IDs using a secure algorithm.
- Customizable length for generated IDs.
- Supports a wide range of characters, making IDs URL-friendly.
- Ensures uniqueness of generated IDs, even in high-demand scenarios.
- Suitable for applications where security and uniqueness are critical.
- Optionally includes or excludes symbols based on your requirements.

## Installation

You can install the Secure Short ID Generator module via npm:

```bash
npm install ssid
```

## Usage

```javascript
const generateShortId = require('ssid');

// Generate a short ID with default length (8 characters) and symbols
const shortIdWithSymbols = generateShortId();
console.log('With Symbols:', shortIdWithSymbols);

// Generate a short ID with default length (8 characters) without symbols
const shortIdWithoutSymbols = generateShortId(8, false);
console.log('Without Symbols:', shortIdWithoutSymbols);

// Generate a short ID with custom length (e.g., 12 characters) and symbols
const customLengthShortIdWithSymbols = generateShortId(12);
console.log('Custom Length with Symbols:', customLengthShortIdWithSymbols);

// Generate a short ID with custom length (e.g., 12 characters) without symbols
const customLengthShortIdWithoutSymbols = generateShortId(12, false);
console.log('Custom Length without Symbols:', customLengthShortIdWithoutSymbols);
```

## API

### `generateShortId([length], [withSymbols])`

Generates a short ID with the specified length and symbol inclusion. If no length is provided, the default length is 8 characters.

- `length` (optional): The length of the generated short ID (default is 8 characters). Minimum length is 4 characters and maximum length is 10,000 characters.

- `withSymbols` (optional): A boolean value indicating whether to include symbols (true by default). If false, the generated ID will only contain alphanumeric characters.

Returns: A string representing the generated short ID.

## License

This project is licensed under the [MIT License](LICENSE).
