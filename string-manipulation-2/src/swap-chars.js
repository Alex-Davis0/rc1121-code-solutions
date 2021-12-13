/* exported swapChars */

// define a function named `swapChars` with three parameters `firstIndex` `secondIndex` `string`
// use a for loop that initializes at 0 with a condtion of i < sting.length that updates at plus one
// use an if statment to check if `firstIndex` replace with `secondIndex`
// else replace `secondIndex` with `firstIndex`
// return something

function swapChars(firstIndex, secondIndex, string) {
  var something = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      something += string[secondIndex];
    } else if (i === secondIndex) {
      something += string[firstIndex];
    } else {
      something += string[i];
    }
  }
  return something;
}

// define a function named `swapChars` with three parameters `firstIndex` `secondIndex` `string`
// create a empty string assigned to a variable named `something`
// use a for loop that initializes at 0 with a condition of i < string.length that upadates at plus one
// use an if statement to check if `firstIndex` reolace with secondIndex`
// else if replace `secondIndex` with `firstIndex`
// else add rest of string back
// return something
