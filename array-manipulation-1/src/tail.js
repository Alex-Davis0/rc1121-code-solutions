/* exported tail */

// define a function named `tail` with one parameter `array`
// us a method of filter to get the desired index and assign that to a variable
// return new variable

function tail(array) {
  var a = [];
  for (var i = 1; i < array.length; i++) {
    a.push(array[i]);
  }
  return a;
}

// define a function named `tails` with one parameter `array`
// create an array and assign it the variable `a`
// use a loop that initializes at 1 with a condition of i < array.length and updates plus one
// use a method to push a new value into the array named `a`
// return `a`
