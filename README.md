# mylib

A small JavaScript library with the four basic arithmetic operations
(`add`, `subtract`, `multiply`, `divide`), a demo program and a Mocha + Chai
test suite.

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
```

## Usage

Run the main program:

```bash
npm start
```

Run the unit tests (without running the main program):

```bash
npm test
```

## Project structure

```text
src/mylib.js           The arithmetic library
src/main.js            Main program that uses the library
tests/mylib.test.js    Mocha + Chai unit tests
.mocharc.json          Mocha configuration
```

`divide(a, b)` throws an `Error` when `b` is zero. All functions throw a
`TypeError` if an argument is not a finite number.
