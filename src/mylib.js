/**
 * @file mylib.js
 * A small library of basic arithmetic operations.
 *
 * Every function validates its arguments and throws a TypeError if an
 * argument is not a finite number. divide() additionally throws an Error
 * when the divisor is zero.
 */

/**
 * Checks that a value is a finite number.
 *
 * @param {*} value - The value to check.
 * @param {string} name - Name of the parameter, used in the error message.
 * @throws {TypeError} If the value is not a finite number.
 */
function assertNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

/**
 * Adds two numbers.
 *
 * @param {number} a - First addend.
 * @param {number} b - Second addend.
 * @returns {number} The sum a + b.
 * @throws {TypeError} If a or b is not a finite number.
 */
export function add(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference a - b.
 * @throws {TypeError} If a or b is not a finite number.
 */
export function subtract(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product a * b.
 * @throws {TypeError} If a or b is not a finite number.
 */
export function multiply(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor. Must not be zero.
 * @returns {number} The quotient a / b.
 * @throws {TypeError} If a or b is not a finite number.
 * @throws {Error} If b is zero ("Division by zero is not allowed").
 */
export function divide(a, b) {
  assertNumber(a, 'a');
  assertNumber(b, 'b');
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
