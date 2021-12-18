/* exported take */

// define a function named `take` with two parameters `array` `count`
// create a variable named `new-array` with an empty array
// use a for loop that initializes at 0 with a condition of i < count and updates plus one to i
// return `new-array`

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count < 7) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function named `take` with two parameters `array` `count`
// create a variable named `new-array` with an empty array
// use a for loop that initializes at 0 with a condition of i < count and updates plus one to i
// use an if statement with the expression of count < 7 if tue use newArry.push(array[i])
// return newArray
