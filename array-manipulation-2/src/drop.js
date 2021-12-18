/* exported drop */

// define a function named `drop` with two parameters `array` and `count`
// create two variables with empty arrays
// use a for loop that initizales at 0 and has a condition and updates plus one
// us and if statement
// return one of the arrays

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function named `drop` with two parameters `array` and `count`
// create a variables with empty an array
// use a for loop that initizales at 0 and has a condition and updates plus one
// return one of the arrays
