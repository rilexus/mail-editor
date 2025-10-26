/**
 * Converts string representation of a number to Number.
 * @param value {string}
 * @return {number|string}
 */
const toNumber = (value) => (/^\d+$/.test(value) ? Number(value) : value);
