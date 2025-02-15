# SSID (Secure Short ID) Generator [![shortid](https://img.shields.io/npm/dm/ssid.svg)](https://www.npmjs.org/package/ssid)

SSID Generator is a Node.js module that provides a secure and efficient way to generate short IDs, suitable for various use cases such as unique identifiers in databases, session IDs, URL shorteners, etc.

## Features

- Generates short IDs using a secure algorithm.
- Customizable length for generated IDs.
- Supports a wide range of characters, making IDs URL-friendly.
- **Generate short IDs with prefix and suffix**
- **Generate short IDs with timestamps**
- Ensures uniqueness of generated IDs, even in high-demand scenarios.
- Suitable for applications where security and uniqueness are critical.
- Optionally includes or excludes symbols based on your requirements.

## Benchmark

![Benchmark Graph](assets/benchmark.png)

## Installation

You can install the Secure Short ID Generator module via npm:

```bash
npm install ssid
```

## Usage

### Basic Usage

```javascript
const { ssid } = require("ssid");

const shortId = ssid();

console.log("Short ID", shortId);
// Generate a short ID with default length (8 characters)
```

### Advance Usage with affixes and timestamps

```javascript
const { ssid, ssidWithAffixes, ssidWithTimestamp } = require("ssid");

// Generate a short ID with default length (8 characters) with these custom alphabets
const customAlphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
const shortId = ssid(8, customAlphabet);
console.log("Short ID:", shortId);

// Generate a short ID with a prefix, resulting in a total length of 11 characters
const shortId = ssidWithAffixes(11, "ssid-");
console.log("Short ID", shortId);

// Generate a short ID with default length (8 characters) with affixes and with custom alphabet
const customAlphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
const shortId = ssidWithAffixes(8, "2025", "", customAlphabet);
console.log("Short ID:", shortId);

// Generate a short ID with timestamp, resulting in a total length of 11 characters
const shortId = ssidWithTimestamp(11);
console.log("Short ID", shortId);

// Generate a short ID with a default length of 8 characters, including a timestamp. The total length will be 14 characters for the timestamp plus 8 characters for the short ID, resulting in 22 characters in total.  
const customAlphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
const shortId = ssidWithTimestamp(8, customAlphabet);
console.log("Short ID:", shortId);
```

## Parameters

### `ssid(length = DEFAULT_LENGTH(8), customAlphabet = DEFAULT_ALPHABET(a-zA-Z0-9_-))`

| Parameter        | Type   | Default              | Description                                              |
| ---------------- | ------ | -------------------- | -------------------------------------------------------- |
| `length`         | Number | `DEFAULT_LENGTH`     | The length of the generated ID. Minimum length is 4.     |
| `customAlphabet` | String | `DEFAULT_ALPHABET`   | A custom set of characters to use for generating the ID. |

### `ssidWithAffixes(length = DEFAULT_LENGTH(8), prefix, suffix, customAlphabet = DEFAULT_ALPHABET(a-zA-Z0-9_-))`

| Parameter        | Type   | Default              | Description                                                                        |
| ---------------- | ------ | -------------------- | ---------------------------------------------------------------------------------- |
| `length`         | Number | `DEFAULT_LENGTH`     | The length of the generated ID (prefix+suffix). Minimum length is 4.               |
| `prefix`         | String |                      | A string to prepend to the generated ID. Either prefix or suffix must be provided. |
| `suffix`         | String |                      | A string to append to the generated ID. Either prefix or suffix must be provided.  |
| `customAlphabet` | String | `DEFAULT_ALPHABET`   | A custom set of characters to use for generating the ID.                           |

### `ssidWithTimestamp(length = DEFAULT_LENGTH(8), customAlphabet = DEFAULT_ALPHABET(a-zA-Z0-9_-))`

| Parameter        | Type   | Default              | Description                                                                        |
| ---------------- | ------ | -------------------- | ---------------------------------------------------------------------------------- |
| `length`         | Number | `DEFAULT_LENGTH`     | The length of the short ID other than timestamp. Minimum length is 4.              |
| `customAlphabet` | String | `DEFAULT_ALPHABET`   | A custom set of characters to use for generating the ID.                           |

## License

This project is licensed under the [MIT License](LICENSE).
