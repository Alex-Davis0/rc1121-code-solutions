var number1 = 10;
var number2 = 77;
var number3 = 99;
var maximumValue = Math.max(number1, number2, number3);

console.log('Value of maximumValue:', maximumValue);

var heros = [
  'Deadpool',
  'Venom',
  'Ghost RIder',
  'John Constantine'
];
var randomNumber = Math.random();

function test(randomNumber) {
  var math = randomNumber * heros.length;
  return math;
}

var randomIndex = Math.floor(test(randomNumber));
console.log('Value of randomIndex:', randomIndex);

var randomHero = heros[randomIndex];

console.log('randomHero:', randomHero);

var libary = [
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  },
  {
    title: 'Homeland',
    author: 'R.A.Salvatore'
  },
  {
    title: 'Servent of the Shard',
    author: 'R.A. Salvatore'
  }
];

var lastBook = libary.pop();
console.log('lastBook:', lastBook);

var firstBook = libary.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

libary.push(js);
libary.unshift(css);
libary.splice(1, 1);
console.log('libary:', libary);

var fullName = 'Alexander Davis';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
