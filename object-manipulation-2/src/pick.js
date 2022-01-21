/* exported pick */

// define a function named `pick` with two parameters `source` and `keys`
// create a new object and assign it to the variable newObject
// use a for loop to iterate through the source object
// use a if statement to see if a key matches in the source and move it
// return newObject

function pick(source, keys) {
  var newObject = {};
  for (var property of keys) {
    if (property in source) {
      newObject[property] = source[property];
    } if (newObject[property] === undefined) {
      delete newObject[property];
    }
  }
  return newObject;
}

// define a function named `pick` with two parameters `source` and `keys`
// create a new object and assign it to the variable newObject
// use a for loop to iterate through the source object
// use a if statement to see if a key matches in the source and move it
// return newObject
