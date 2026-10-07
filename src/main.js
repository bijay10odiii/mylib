/**
 * @file main.js
 * Simple main program that imports mylib and runs each of its functions.
 * Run it with: npm start
 */
import { add, subtract, multiply, divide } from './mylib.js';

console.log('add(7, 3)       =', add(7, 3));
console.log('subtract(7, 3)  =', subtract(7, 3));
console.log('multiply(7, 3)  =', multiply(7, 3));
console.log('divide(7, 2)    =', divide(7, 2));

// Division by zero throws an error, so it is handled with try/catch.
try {
  divide(7, 0);
} catch (error) {
  console.log('divide(7, 0)    -> Error:', error.message);
}
