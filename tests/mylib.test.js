/**
 * @file mylib.test.js
 * Mocha + Chai (expect style) unit tests for the functions in mylib.js.
 * Run them without the main program with: npm test
 */
import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mylib.js';

// Root-level hooks: one runs before the whole suite, one after it.
before(function () {
  console.log('\n  [before] Starting the mylib test suite');
});

after(function () {
  console.log('\n  [after] Finished the mylib test suite');
});

describe('mylib', function () {
  describe('add()', function () {
    it('adds two positive numbers', function () {
      expect(add(2, 3)).to.equal(5);
    });

    it('adds negative numbers', function () {
      expect(add(-2, -3)).to.equal(-5);
    });

    it('adds decimals within floating point tolerance', function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-9);
    });
  });

  describe('subtract()', function () {
    it('subtracts the second number from the first', function () {
      expect(subtract(10, 4)).to.equal(6);
    });

    it('returns a negative result when the second number is larger', function () {
      expect(subtract(4, 10)).to.equal(-6);
    });
  });

  describe('multiply()', function () {
    it('multiplies two numbers', function () {
      expect(multiply(6, 7)).to.equal(42);
    });

    it('returns zero when one factor is zero', function () {
      expect(multiply(5, 0)).to.equal(0);
    });
  });

  describe('divide()', function () {
    it('divides two numbers', function () {
      expect(divide(10, 4)).to.equal(2.5);
    });

    it('throws an error when the divisor is zero', function () {
      expect(() => divide(10, 0)).to.throw(Error, 'Division by zero is not allowed');
    });
  });

  describe('input validation', function () {
    it('throws a TypeError when an argument is not a number', function () {
      expect(() => add('2', 3)).to.throw(TypeError);
      expect(() => divide(4, undefined)).to.throw(TypeError);
    });
  });
});
