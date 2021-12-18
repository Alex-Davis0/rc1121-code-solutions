/* exported takeRight */

// define a function named `take` with two parameters `array` `count`
// create a variable named `new-array` with an empty array
// use a for loop that initializes at 0 with a condition of i < count and updates plus one to i
// return `new-array`

function takeRight(array, count) {
  var newArray = [];
  var x = 1;
  var y = 2;
  for (var i = 0; i < count; i++) {
    if (count % 2 === 0) {
      newArray.push(array[array.length - y]);
      y--;
    } else if (count > 6) {
      return newArray;
    } else {
      newArray.push(array[array.length - x]);
      x++;
    }
  }
  return newArray;
}

// define a function named `takeRight` with two parameters `array` `count`
// create a variable named `new-array` with an empty array
// create a variable named x with the value of 1
// create a variable named y with a value of 2
// use a for loop that initializes at 0 with a condition of i < count and updates plus one to i
// use an if statement with the expression of count % 2 === 0 if tue use newArray.push(array[array.length - y]) then decrement y
// use an else if statment with the expression of count > 6 and return newArray
// use an else statement that does newArray.push(array[array.length - x]) and increment x
// return newArray
