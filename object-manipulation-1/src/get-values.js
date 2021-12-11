/* exported getValues */

// define a finction named `getValues` with two parameters `object`
// create a array and assign it to the variable named `a`
// use a for in loop  to look inside the object for the key property
// use a method to push the value into the array named `a`
// return `a`

function getValues(object) {
  var a = [];
  for (var keys in object) {
    a.push(object[keys]);
  }
  return a;
}

// define a finction named `getValues` with two parameters `object`
// create a array and assign it to the variable named `a`
// use a for in loop  to look inside the object for the key property
// use a method to push the value into the array named `a`
// return `a`
