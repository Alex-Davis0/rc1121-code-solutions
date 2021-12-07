function convertMinutesToSeconds(minutes) {
  var converted = (minutes * 60);
  return converted;
}
var convertedMinutesToSeconds = convertMinutesToSeconds(5);
console.log('value of convertMintuesToSeconds:', convertedMinutesToSeconds);

function greet(name) {
  var greeting = ('Hey, ' + name);
  return greeting;
}
var name = 'Beavis';
console.log('value of greet:', greet(name));

function getArea(width, height) {
  var area = (width * height);
  return area;
}

console.log('value of getArea:', getArea(17, 42));

var person = {
  firstName: 'Alexander',
  lastName: 'Davis'
};

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

console.log('value of getFirstName:', getFirstName(person));

var array = [
  'propane',
  'and',
  'propane',
  'accessories'
];

function getLastElement(array) {
  var last = (array.length - 1);
  var lastElement = (array[last]);
  return lastElement;
}
console.log('value of getLastElement:', getLastElement(array));
