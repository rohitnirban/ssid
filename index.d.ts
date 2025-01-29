// Default length for the generated ID
export const DEFAULT_LENGTH: number;

// Default alphabet (set of characters) used for generating the ID
export const DEFAULT_ALPHABET: string;

/**
 * Generates a unique ID with a specified length and custom alphabet.
 * 
 * @param length (optional) - The length of the generated ID. Defaults to `DEFAULT_LENGTH` (8).
 * @param customAlphabet (optional) - A custom set of characters to use for generating the ID. Defaults to `DEFAULT_ALPHABET`.
 * @returns The generated ID as a string.
 */
export function generateId(
    length?: number,
    customAlphabet?: string
): string;

/**
 * Generates a unique ID with optional prefix and suffix, and a specified length and custom alphabet.
 * 
 * @param length (optional) - The length of the generated ID. Defaults to `DEFAULT_LENGTH` (8).
 * @param prefix (optional) - A string to prepend to the generated ID.
 * @param suffix (optional) - A string to append to the generated ID.
 * @param customAlphabet (optional) - A custom set of characters to use for generating the ID. Defaults to `DEFAULT_ALPHABET`.
 * @returns The generated ID with affixes as a string.
 * 
 * @throws Error - Throws an error if neither `prefix` nor `suffix` is provided.
 */
export function generateIdWithAffixes(
    length?: number,
    prefix?: string,
    suffix?: string,
    customAlphabet?: string
): string;
