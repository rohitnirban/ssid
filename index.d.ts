declare module 'ssid' {
    /**
     * Generates a short ID with the specified length and symbol inclusion.
     * 
     * @param length - The length of the generated short ID. Default is 8 characters. Minimum length is 4 and maximum length is 10,000.
     * @param withSymbols - A boolean indicating whether to include symbols. Default is true.
     * @returns A string representing the generated short ID.
     */
    export default function generateShortId(length?: number, withSymbols?: boolean): string;
}
