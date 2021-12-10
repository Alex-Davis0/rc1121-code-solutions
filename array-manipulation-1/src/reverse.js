/* exported reverse */

// define a functioin named `reversre` with one parameter `array`
// create an array and assign it to the variable named `a`
// use a method and assign it to the variable `b`
// use a loop that initializes at array.length - 1 with a condition of i >= 0 and updates minus one
// use method to push new value into array named `a`
// return `a`

function reverse(array) {
  var a = [];
  for (var i = array.length - 1; i >= 0; i--) {
    a.push(array[i]);
  }
  return a;
}

// define a function named `reverse` with one parameter `array`
// create a array and assign it to the variable named `a`
// use a loop that initializes ar array.length -1 with a condition of i >= 0 and updates minus one
// use a method to push the new value into the array named `a`
// return `a`
