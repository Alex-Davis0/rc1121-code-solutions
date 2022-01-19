const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseFloat(process.argv[2]);
const op = process.argv[3];
const y = parseFloat(process.argv[4]);

let answer = null;

if (op === 'plus') {
  answer = add(x, y);
} else if (op === 'minus') {
  answer = subtract(x, y);
} else if (op === 'times') {
  answer = multiply(x, y);
} else if (op === 'over') {
  answer = divide(x, y);
}

console.log('result:', answer);
