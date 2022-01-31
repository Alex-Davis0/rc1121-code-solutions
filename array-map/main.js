const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = number => {
  return number * 2;
};

const doubled = numbers.map(double);
console.log('Doubled Numbers:', doubled);

const price = number => {
  return Number.parseFloat(number).toFixed(2);
};

const prices = numbers.map(price);
console.log('Prices:', prices);

const upper = language => {
  return language.toUpperCase();
};

const upperCased = languages.map(upper);
console.log('Upper Cased', upperCased);

const first = language => {
  return language[0];
};

const firstLetters = languages.map(first);
console.log('First Letters:', firstLetters);
